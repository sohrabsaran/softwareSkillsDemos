#!/bin/bash
find $1 -path $1/.git -prune -o -type f -exec sh -c '
  wc -l "$0"
' {} \;