#!/bin/bash

#TOKEN="BAhJIiU1OTRjOGFmMzc5NDIxZDMxYzJlNGI5YjgyNmUxNjI5MQY6BkVG--dbd17304ca8203c85f648b52486edc9034144f66" sh scripts/create-game.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \

echo
