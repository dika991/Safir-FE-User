import axios from "axios";

const $axios = axios.create({
  baseURL: "http://127.0.0.1:8000/api/user",
  headers: {
    Authorization:
      localStorage.getItem("token") !== "null"
        ? "Bearer " + localStorage.getItem("token")
        : "",
    "Content-Type": "application/json",
  },
});

export default $axios;
