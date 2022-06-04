import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.7:1337/'
})

export default api;