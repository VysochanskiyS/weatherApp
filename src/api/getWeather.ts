import { IWeatherData } from './../../types/weather/index';
import { API_KEY } from '@env';
import { apiAxios } from '.';
import { locationQuery } from '../utils/location';

export const getWeather = () => {
  let url = `forecast?q=Lviv&appid=${API_KEY}&units=metric`;
  return apiAxios<IWeatherData>(url);
};

export const getWeather_5_Days = () => {
  return apiAxios(`forecast${locationQuery}&appid=${API_KEY}`);
};
