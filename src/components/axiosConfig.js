import axios from "axios";
const post = "http://localhost:3000";
const login = (username, password) => {
  return axios.post(post + "/user/login", {
    username,
    password,
  });
};
export { login };
