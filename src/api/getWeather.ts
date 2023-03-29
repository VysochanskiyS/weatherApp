import { API_KEY } from '@env';
import { apiAxios } from '.';
import { formatToSec } from '../utils';
import { locationQuery } from '../utils/location';

export const getWeather = (selectedDay: string) => {
  const startDate = new Date(selectedDay);
  const endDate = new Date(selectedDay);
  console.log('startDate22', new Date().getTime());

  // Add one day to the date
  endDate.setDate(startDate.getDate() + 1);

  const startInSec = formatToSec(startDate);
  const endInSec = formatToSec(endDate);

  // Log the new formatted date string
  console.log('start', startInSec);
  console.log('end', locationQuery);

  let url = `weather?q=Lviv&appid=${API_KEY}&units=metric&dt=${startInSec}`;
  return apiAxios(url);
};

export const getWeather_5_Days = () => {
  return apiAxios(`forecast${locationQuery}&appid=${API_KEY}`);
};
