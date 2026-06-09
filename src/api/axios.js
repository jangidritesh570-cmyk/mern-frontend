import axios from "axios";

const API = axios.create({
  baseURL: "https://student-management-system-9ypu.onrender.com/api/v1/auth/login",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;