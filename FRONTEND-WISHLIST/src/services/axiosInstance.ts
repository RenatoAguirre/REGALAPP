// src/services/axiosInstance.ts
import axios from 'axios';

// Create an Axios instance with the base URL from the environment variable
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL, headers: {
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5173/',
    },
});

export default axiosInstance;