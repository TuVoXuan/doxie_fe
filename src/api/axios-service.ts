import axios from 'axios';

const axiosService = axios.create({
    baseURL: 'https://api.example.com',
});
axiosService.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosService.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error.response.data);
    }
);
export default axiosService;
