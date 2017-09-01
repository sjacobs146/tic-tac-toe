#!/bin/bash

# sh scripts/sign-in.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/post"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode '{
    "credentials": [
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
    ]
  }'


echo
