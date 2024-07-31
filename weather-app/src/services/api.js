import axios from 'axios';

const API_KEY = 'afc2bc603e5c0db72da0ed930c459c1a';
const BASE_URL = 'http://api.weatherstack.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    access_key: API_KEY,
  },
});

export default apiClient;
