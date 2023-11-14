import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000", // Use http instead of https, and include the correct port number
});

export default instance;
