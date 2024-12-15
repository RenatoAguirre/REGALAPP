// src/services/axiosInstance.ts
import axios from 'axios';

console.log(import.meta.env.VITE_BACKEND_URL)

// Create an Axios instance with the base URL from the environment variable
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default axiosInstance;