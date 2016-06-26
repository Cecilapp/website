#!/bin/bash
#set -e

HOST="sftp.dc0.gpaas.net"
SRC_DIR="_site"
DEST_DIR="/lamp0/web/vhosts/phpoole.org/htdocs"

echo "Starting to update gh-pages"

lftp -e "mirror -R $SRC_DIR $DEST_DIR" -u $USER,$PASSWORD $HOST

exit 0
