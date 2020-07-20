#!/bin/bash
find $1 -type d \( -name node_modules -o -name .git -o -path name \) -prune -false -o -type f -exec sh -c '
  wc -l "$0"
' {} \;
