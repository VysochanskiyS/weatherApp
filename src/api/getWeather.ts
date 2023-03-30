import {
  IHistoricalWeather,
  IHistoricalWeatherContent,
  IWeatherData
} from './../../types/weather/index';
import { API_KEY } from '@env';
import { apiAxios , apiAxiosV3} from '.';
import { locationQuery } from '../utils/location';
import {splitDay} from "../utils";

const api_key_v3 = '4b08000ee21ce71618d5359da18f3a07'
export const getWeather = () => {
  let url = `forecast?q=Lviv&appid=${API_KEY}&units=metric`;
  return apiAxios<IWeatherData>(url);
};
export const getHistoricalWeather = async (timestamp: number) => {
  const url = `timemachine?${locationQuery}&dt=${timestamp}&appId=${api_key_v3}&units=metric`;
  return apiAxiosV3<IHistoricalWeather>(url);
}

export const getHistoricalWeatherByDay = async (providedDay: Date): Promise<IHistoricalWeatherContent[]> => {
  const timestamps = splitDay(providedDay, 3)
  const res = await Promise.all(timestamps.map(timestamp => getHistoricalWeather(timestamp)))
  return res.map(weather => weather.data.data[0])
}
export const getWeather_5_Days = () => {
  return apiAxios(`forecast?${locationQuery}&appid=${API_KEY}`);
};
