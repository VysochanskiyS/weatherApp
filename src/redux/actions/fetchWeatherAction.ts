import { WeatherState } from '../../../types/weather';

export function fetchWeatherDay(selected: string) {
  return {
    type: WeatherState.FETCH_WEATHER_BY_SELECTED_DAY,
    payload: selected,
  };
}
export function fetchWeather5Days() {
  return {
    type: WeatherState.FETCH_WEATHER_5_DAYS,
  };
}
