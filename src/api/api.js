import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "https://url-shortener-psx0.onrender.com",
});
api.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("JWT_TOKEN"));

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
