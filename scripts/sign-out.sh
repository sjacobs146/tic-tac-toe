#!/bin/bash

# ID="508" TOKEN="BAhJIiViMTIxZWJhNmY3NmExZGFmYzdlNzdlZmMwMjI1Njk4ZgY6BkVG--518108f0bdb03b03e9a9638cdc551ea6d6bc0d79" sh scripts/sign-out.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/delete?id=$ID"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN" \

echo
