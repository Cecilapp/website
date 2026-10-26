/**
 * Minimal PO -> MO compiler, so translations can be recompiled without gettext tools.
 * Usage: node scripts/po2mo.js translations/messages.fr.po
 */
const fs = require('fs');

const ESCAPES = { n: '\n', t: '\t', r: '\r', '"': '"', '\\': '\\' };

function unquote(line) {
  const match = line.match(/^"([\s\S]*)"$/);
  if (!match) return '';
  let out = '';
  const raw = match[1];
  for (let i = 0; i < raw.length; i++) {
    if (raw[i] === '\\' && i + 1 < raw.length && ESCAPES[raw[i + 1]] !== undefined) {
      out += ESCAPES[raw[++i]];
    } else {
      out += raw[i];
    }
  }
  return out;
}

function parse(po) {
  const messages = new Map();
  let id = null;
  let str = null;
  let target = null;
  const flush = () => {
    if (id !== null && str !== null) messages.set(id, str);
    id = str = target = null;
  };
  for (const raw of po.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    if (line.startsWith('#')) continue; // comments, references and obsolete entries
    if (line.startsWith('msgid_plural') || line.startsWith('msgstr[')) { target = null; continue; }
    if (line.startsWith('msgid ')) { flush(); id = unquote(line.slice(6).trim()); target = 'id'; continue; }
    if (line.startsWith('msgstr ')) { str = unquote(line.slice(7).trim()); target = 'str'; continue; }
    if (line.startsWith('"')) {
      if (target === 'id') id += unquote(line);
      else if (target === 'str') str += unquote(line);
    }
  }
  flush();
  return messages;
}

function compile(messages) {
  // gettext requires the original strings table to be sorted
  const entries = [...messages.entries()]
    .filter(([id, str]) => id === '' || str !== '')
    .sort((a, b) => Buffer.from(a[0], 'utf8').compare(Buffer.from(b[0], 'utf8')));
  const count = entries.length;
  const ids = entries.map((entry) => Buffer.from(entry[0], 'utf8'));
  const strs = entries.map((entry) => Buffer.from(entry[1], 'utf8'));
  const idTable = 28;
  const strTable = idTable + count * 8;
  let offset = strTable + count * 8;
  const idOffsets = [];
  const strOffsets = [];
  for (const buffer of ids) { idOffsets.push(offset); offset += buffer.length + 1; }
  for (const buffer of strs) { strOffsets.push(offset); offset += buffer.length + 1; }

  const out = Buffer.alloc(offset);
  out.writeUInt32LE(0x950412de, 0); // magic number
  out.writeUInt32LE(0, 4); // file format revision
  out.writeUInt32LE(count, 8);
  out.writeUInt32LE(idTable, 12);
  out.writeUInt32LE(strTable, 16);
  out.writeUInt32LE(0, 20); // hash table size (unused)
  out.writeUInt32LE(offset, 24); // hash table offset
  for (let i = 0; i < count; i++) {
    out.writeUInt32LE(ids[i].length, idTable + i * 8);
    out.writeUInt32LE(idOffsets[i], idTable + i * 8 + 4);
    out.writeUInt32LE(strs[i].length, strTable + i * 8);
    out.writeUInt32LE(strOffsets[i], strTable + i * 8 + 4);
    ids[i].copy(out, idOffsets[i]);
    strs[i].copy(out, strOffsets[i]);
  }
  return out;
}

const input = process.argv[2];
if (!input) {
  console.error('Usage: node scripts/po2mo.js <file.po>');
  process.exit(1);
}
const messages = parse(fs.readFileSync(input, 'utf8'));
const output = input.replace(/\.po$/, '.mo');
fs.writeFileSync(output, compile(messages));
console.log(output + ': ' + messages.size + ' messages');
