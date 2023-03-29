import { API_KEY } from '@env';
import axios from 'axios';
console.log('API_KEY', API_KEY);

export const apiAxios = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  headers: {
    'content-type': 'application/json',
  },
});
