#!/bin/bash

#ID="508" OLD_PASSWORD="123456" NEW_PASSWORD="Roving123" TOKEN="BAhJIiU0YjZiYzhkOTQyMmY5N2E5M2M3NjY2YmJjYmI1MDUxNwY6BkVG--50fb5bec6bb72b1d17c4dd1906f5a0360b6d03c3" sh scripts/change-password-json.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
    "old": "'"${OLD_PASSWORD}"'",
    "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
