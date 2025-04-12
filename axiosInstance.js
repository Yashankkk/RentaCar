import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
});

instance.interceptors.request.use(async (config) => {
    try{
        const token =localStorage.getItem('token')
        console.log(token)
        if (!token) {
            throw new Error("Token not found");
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
        } catch (error) {
            console.error(error);
    }
});

instance.interceptors.request.use(
    (response) => {
        console.log("Response data:", response.data);
        return response;
    },
    (error) => {
        console.error("Response error:", error);
        if (error.response.status === 401) {
            console.log("Unauthorized error. Redirecting to login...")
        } 
        // return Promise.reject(error);
        });

export default instance;

 