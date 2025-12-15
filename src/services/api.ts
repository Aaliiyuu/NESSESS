import axios from "axios";

const instance = axios.create({
baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
headers: {
    "Content-Type": "application/json",
},
});

instance.interceptors.response.use(
(response) => response,
(error) => {
    if (error.response?.status === 401) {
    if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
    }
    }
    return Promise.reject(error);
}
);

export default instance;