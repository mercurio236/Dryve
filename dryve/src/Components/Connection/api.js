import axios from 'axios';

const api = axios.create({
    baseURL:'http://www.mocky.io/v2/5eb553df31000060006994a8'
})

export default api;