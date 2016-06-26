#!/bin/bash
#set -e

FTP_SITE="sftp.dc0.gpaas.net"
SRC_DIR="_site"
DEST_DIR="/lamp0/web/vhosts/phpoole.org/htdocs"

echo "Starting to mirroring to SFTP"

lftp -u $FTP_USER,$FTP_PASS $FTP_SITE -e "mirror -c -e -R $SRC_DIR $DEST_DIR ; exit"

exit 0
