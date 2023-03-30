import { Dimensions } from 'react-native';

export {splitDay, hasDayPassed} from './Date'
export const formatToSec = (date: Date) => {
  return Math.floor(+new Date(date) / 1000);
};

//Dimensions
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
export function formatTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
export const formattedTime = (date: number) => {
  // Create a new Date object
  const newDate = new Date(date);

  // Get the hours and minutes from the date object
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  // Format the hours and minutes to add leading zeros if necessary
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes}`;
};

export enum Colors {
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  CLEAN_GREY = '#F7F9F9',
  MEDIUM_GREY = '#AFBFC0',
  DEEP_GREY = '#23353F',
  PURPLE = '#3F39C8',
}

export const defaultUrl = 'https://openweathermap.org/img/wn/';

export const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
