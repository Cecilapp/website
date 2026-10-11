---
title: Add a table of contents and notes
description: Enrich Cecil Markdown pages with a table of contents, note blocks and custom attributes.
date: 2026-10-14
schedule:
  publish: 2026-10-14
---
Cecil extends Markdown with a few handy features for long pages: an automatic table of contents, note blocks and attributes on elements.

## Insert a table of contents

Add the `[toc]` tag where the table of contents should appear in the body of the page:

```markdown
[toc]

## Installation
### Requirements
## Usage
```

By default, the table of contents is built from H2 and H3 headings. Change it in `cecil.yml`:

```yaml
pages:
  body:
    toc: [h2, h3, h4]
```

## Display the table of contents in a template

To place the table of contents outside the content (e.g. in a sidebar), use the `toc` filter on the page body:

```twig
<aside>
  {{ page.body|toc }}
</aside>
<article>
  {{ page.content }}
</article>
```

The filter also accepts the headings to extract, e.g. `{{ page.body|toc(selectors=['h2']) }}`.

## Add notes

Highlight information with a note block:

```markdown
:::tip
**Tip:** This is advice.
:::
```

Is converted to:

```html
<aside class="note note-tip">
  <p>
    <strong>Tip:</strong> This is advice.
  </p>
</aside>
```

Available types are `info`, `tip`, `important`, `warning` and `caution` (or no type). Style them with the `note` and `note-<type>` CSS classes.

## Add attributes

Set an id, a class or any attribute on a heading, a fenced code block, a link or an image, inside curly brackets at the end of the line:

```markdown
## Installation {#install .highlighted}
```

The `#install` id gives a stable anchor to link to: `[See installation](#install)`.

:::warning
For an inline element, like a link, add a line break after the closing brace.
:::

:::info
See the documentation of the [table of contents](/documentation/content/#table-of-contents), [notes](/documentation/content/#notes), [attributes](/documentation/content/#attributes) and the [`toc` filter](/documentation/templates/#toc).
:::
