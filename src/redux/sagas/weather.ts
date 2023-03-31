// Imports: Dependencies
import { get5DayWeatherForecast, getHistoricalWeatherByDay } from '@api';
import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import { hasDayPassed } from '@utils';
import {
  IBaseWeatherInfo,
  IHistoricalWeatherData,
  IWeatherDaySaga,
  WeatherState,
} from '@types';
import { startLoading, stopLoading } from '../actions';

function* Weather5Days() {
  try {
    const { data } = yield call(get5DayWeatherForecast);

    yield put({
      type: WeatherState.SET_5_DAYS,
      payload: data.list,
    });
  } catch (error) {
    console.error('[Fetch weather by 5 days error]', error);
  }
}

function* weatherDay({ payload: selectedDay }: IWeatherDaySaga) {
  try {
    yield put(startLoading());
    const providedDate = new Date(selectedDay);
    const isYesterday = hasDayPassed(providedDate);
    if (isYesterday) {
      const weatherData: IHistoricalWeatherData[] = yield call(() =>
        getHistoricalWeatherByDay(providedDate),
      );
      const formattedWeatherData: IBaseWeatherInfo[] = weatherData.map(
        weatherTimeframe => {
          const { weather, temp, dt, feels_like, wind_speed, wind_deg } =
            weatherTimeframe;

          let wind = { speed: wind_speed, deg: wind_deg };

          return { weather, wind, temp, dt, feels_like };
        },
      );

      yield put({
        type: WeatherState.SET_HISTORICAL_WEATHER_BY_SELECTED_DAY,
        payload: formattedWeatherData,
      });
    } else {
      yield put({
        type: WeatherState.SET_WEATHER_BY_SELECTED_DAY,
        payload: selectedDay,
      });
    }
  } catch (error) {
    console.error('[Fetch weather by day error]', error);
  } finally {
    yield put(stopLoading());
  }
}

export function* watchWeather5Days() {
  yield takeLatest(WeatherState.FETCH_WEATHER_5_DAYS, Weather5Days);
}

export function* watchWeatherDay() {
  yield takeEvery(WeatherState.FETCH_WEATHER_BY_SELECTED_DAY, weatherDay);
}
