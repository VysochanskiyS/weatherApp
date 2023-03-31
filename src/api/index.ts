import { API_KEY } from '@env';
import axios from 'axios';
console.log('API_KEY', API_KEY);

export const apiAxios = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  headers: {
    'content-type': 'application/json',
  },
});

export const apiAxiosV3 = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0/onecall/',
  headers: {
    'content-type': 'application/json',
  },
});

export {
  getHistoricalWeatherByDay,
  get5DayWeatherForecast,
} from './get5DayWeatherForecast';
