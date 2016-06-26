#!/bin/bash
#set -e

HOST="sftp.dc0.gpaas.net"
SRC_DIR="_site"
DEST_DIR="/lamp0/web/vhosts/phpoole.org/htdocs"

echo "Starting to update gh-pages"

scp -r $SRC_DIR $USER@$PASSWORD:$DEST_DIR

exit 0
