import { LOADER_STATE } from '@types';

export { fetchWeatherDay, fetchWeather5Days } from './fetchWeatherAction';

export const startLoading = () => ({
  type: LOADER_STATE.START,
});

export const stopLoading = () => ({
  type: LOADER_STATE.STOP,
});
