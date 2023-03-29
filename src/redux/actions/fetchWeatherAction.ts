import { WeatherState } from '../../../types/weather';

export function fetchWeather() {
  return {
    type: WeatherState.TAKE_5_Days,
    payload: '',
  };
}
export function fetchWeatherByDay(day: string) {
  return {
    type: WeatherState.TAKE_BY_DAY,
    payload: day,
  };
}
