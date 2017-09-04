#ID="508" TOKEN="BAhJIiU5YzQwOTczYjIwYzQ0Yjg2ZTFmY2I4NTg1ZDVhZGQ1NgY6BkVG--bfc6c87f5627275371adb427b278536f685a0dbf" sh scripts/get-games.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games?over=true"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \

echo
