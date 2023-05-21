import axios from "axios";

export const configureAxios = () => {
  // axios.defaults.baseURL = "https://art-u66p.onrender.com/api"; // your base URL
  axios.defaults.baseURL = "http://localhost:5000/api"; // your base URL

  // Add an interceptor that adds the auth token to every request
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      
    }
    return config;
  });
};
