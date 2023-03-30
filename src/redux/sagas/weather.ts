// Imports: Dependencies
import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import {
  IWeatherData,
  IWeatherDaySaga,
  WeatherState,
} from '../../../types/weather';
import { getWeather } from '../../api/getWeather';

function* Weather5Days() {
  try {
    const { data } = yield call(getWeather);

    yield put({
      type: WeatherState.SET_5_DAYS,
      payload: data.list,
    });
  } catch (error) {
    console.log('[Fetch weather by 5 days error]', error);
  }
}

function* weatherDay({ payload: selectedDay }: IWeatherDaySaga): Generator {
  try {

  } catch (error) {
    console.log('[Fetch weather by day error]', error);
  }
}
export function* watchDecreaseCounter() {
  yield takeLatest(WeatherState.FETCH_WEATHER_5_DAYS, Weather5Days);
}

export function* watchIncreaseCounter() {
  // yield takeEvery(WeatherState.TAKE_BY_DAY, weatherDay);
}
