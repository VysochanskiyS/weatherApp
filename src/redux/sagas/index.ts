// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';
// Imports: Redux Sagas
import { watchWeather5Days, watchWeatherDay } from './weather';
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(watchWeather5Days), fork(watchWeatherDay)]);
}
