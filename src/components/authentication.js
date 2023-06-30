import Cookies from "js-cookie";

function getAccessToken() {
  return Cookies.get("token");
}
function setAccessToken(access_token) {
  Cookies.set("token", access_token);
}

export {
    getAccessToken,
    setAccessToken,
}