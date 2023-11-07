import axios from "axios";

// const devEnv = process.env.NODE_ENV !== "production";

// const { REACT_APP_DEV_API } = process.env;
// console.log("6 ",REACT_APP_DEV_API );
// console.log("7 ",process.env );

const API = axios.create({
  baseURL: "http://13.200.102.128:8001/api/",
});
// console.log("8 ",API );

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile"))?.response?.token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/login", formData);
// export const signUp = (formData) => API.post("/users/signup", formData);
export const createDepart = (formData) => API.post("/storedepartment", formData);
export const getUsers = (data) => API.post("/getuserlist", data);
export const getProjects = (data) => API.post("/getrolelist", data);