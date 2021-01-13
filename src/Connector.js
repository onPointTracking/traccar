import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://167.86.71.215:8082/api'
  });

export default instance;