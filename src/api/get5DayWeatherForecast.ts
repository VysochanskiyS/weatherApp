import {
  IHistoricalWeather,
  IHistoricalWeatherContent,
  IWeatherData,
} from '../../types/index';
import { API_KEY, API_KEY_V3 } from '@env';
import { apiAxios, apiAxiosV3 } from '.';
import { locationQuery } from '../utils/location';
import { splitDay } from '../utils';

// receives a weather forecast for the next 5 days with an interval of 3 hours
export const get5DayWeatherForecast = () => {
  let url = `forecast?q=Lviv&appid=${API_KEY}&units=metric`;
  return apiAxios<IWeatherData>(url);
};

// receive a weather forecast for a specific time in the past
export const getHistoricalWeather = async (timestamp: number) => {
  const url = `timemachine?${locationQuery}&dt=${timestamp}&appId=${API_KEY_V3}&units=metric`;
  return apiAxiosV3<IHistoricalWeather>(url);
};

// receive a weather forecast for a specific day in the past
export const getHistoricalWeatherByDay = async (
  providedDay: Date,
): Promise<IHistoricalWeatherContent[]> => {
  const timestamps = splitDay(providedDay, 3);
  const res = await Promise.all(
    timestamps.map(timestamp => getHistoricalWeather(timestamp)),
  );
  return res.map(weather => weather.data.data[0]);
};
