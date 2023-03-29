// Imports: Dependencies
import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import {
  IWeatherData,
  IWeatherDaySaga,
  WeatherState,
} from '../../../types/weather';
import { getWeather } from '../../api/getWeather';

function* Weather5Days(): Generator {
  try {
    let weatherList = yield call(getWeather);

    yield put({
      type: WeatherState.SET_5_Days,
      payload: weatherList?.data,
    });
  } catch (error) {
    console.log(error);
  }
}

function* weatherDay({ payload: selectedDay }: IWeatherDaySaga): Generator {
  try {
    let { data }: { data: IWeatherData } = yield call(getWeather, selectedDay);
console.log('data', data);
    yield put({
      type: WeatherState.SET_BY_DAY,
      payload: data,
    });
  } catch (error) {
    console.log('error', error);
  }
}
export function* watchDecreaseCounter() {
  yield takeLatest(WeatherState.TAKE_5_Days, Weather5Days);
}

export function* watchIncreaseCounter() {
  yield takeEvery(WeatherState.TAKE_BY_DAY, weatherDay);
}
