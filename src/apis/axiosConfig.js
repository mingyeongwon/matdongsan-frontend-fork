import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

function addAuthHeader(accessToken) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    
    const decodedToken = JSON.parse(atob(accessToken.split('.')[1]));
    localStorage.setItem('token', accessToken);
    localStorage.setItem('token_expiry', decodedToken.exp * 1000);
}

function removeAuthHeader() {
    delete axios.defaults.headers.common["Authorization"];

    localStorage.removeItem('token');
    localStorage.removeItem('token_expiry');
}

function checkTokenExpiry() {
    const tokenExpiry = localStorage.getItem('token_expiry');
    if (tokenExpiry && Date.now() > tokenExpiry) {
        removeAuthHeader();
    }
}

axios.interceptors.request.use(
    config => {
        checkTokenExpiry();
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default {
    addAuthHeader,
    removeAuthHeader,
    checkTokenExpiry,
}
