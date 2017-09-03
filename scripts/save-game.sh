#!/bin/bash

#ID="5182" INDEX="0" VALUE="X" TOKEN="TOKEN="BAhJIiVmZjQwNzcwYThhZDFlYmZiYTQ2Yzg0OTk2ZmQzYjU1ZQY6BkVG--79e5a4d2dcda82c44b72d24e60890e05442abb88" sh scripts/create-game.sh" sh scripts/save-game.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": false
    }
  }'

echo
