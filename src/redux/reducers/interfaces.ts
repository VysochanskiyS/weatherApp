import {
  IBaseWeatherInfo,
  IListweather,
  LOADER_STATE,
  WeatherState,
} from '../../types';

export interface IState {
  weatherList: IListweather[];
  weatherDay: IBaseWeatherInfo[];
  loading: boolean;
}
interface ActionSetWeatherBySelectedDay {
  type: WeatherState.SET_WEATHER_BY_SELECTED_DAY;
  payload: string;
}

interface ActionSet5Days {
  type: WeatherState.SET_5_DAYS;
  payload: IListweather[];
}
interface ActionLoaderStart {
  type: LOADER_STATE.START;
}
interface ActionLoaderStop {
  type: LOADER_STATE.STOP;
}

interface ActionSetHistoricalWeatherBySelectedDay {
  type: WeatherState.SET_HISTORICAL_WEATHER_BY_SELECTED_DAY;
  payload: IBaseWeatherInfo[];
}
export type IWeatherReducerActions =
  | ActionSetWeatherBySelectedDay
  | ActionSet5Days
  | ActionSetHistoricalWeatherBySelectedDay
  | ActionLoaderStart
  | ActionLoaderStop;
