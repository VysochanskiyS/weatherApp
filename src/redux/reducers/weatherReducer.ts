import { IBaseWeatherInfo, LOADER_STATE, WeatherState } from '../../types';
import { IState, IWeatherReducerActions } from './interfaces';

// Initial State
const initialState: IState = {
  weatherList: [],
  weatherDay: [],
  loading: false,
};
// Redux: Counter Reducer
const weatherReducer = (
  state: IState = initialState,
  action: IWeatherReducerActions,
) => {
  switch (action.type) {
    case WeatherState.SET_5_DAYS: {
      return {
        ...state,
        weatherList: action.payload,
      };
    }
    case WeatherState.SET_WEATHER_BY_SELECTED_DAY: {
      const searchedDay = state.weatherList.filter(day =>
        day.dt_txt.includes(action.payload),
      );
      // format weatherList to weatherDay format
      const formattedDay: IBaseWeatherInfo[] = searchedDay.map(
        weatherTimeframe => {
          return {
            weather: weatherTimeframe.weather,
            temp: weatherTimeframe.main.temp,
            feels_like: weatherTimeframe.main.feels_like,
            dt: weatherTimeframe.dt,
            wind: weatherTimeframe.wind,
          };
        },
      );
      return {
        ...state,
        weatherDay: formattedDay,
      };
    }
    case WeatherState.SET_HISTORICAL_WEATHER_BY_SELECTED_DAY: {
      return {
        ...state,
        weatherDay: action.payload,
      };
    }
    case WeatherState.SET_HISTORICAL_WEATHER_BY_SELECTED_DAY: {
      return {
        ...state,
        weatherDay: action.payload,
      };
    }
    case LOADER_STATE.START:
      return { ...state, loading: true };
    case LOADER_STATE.STOP:
      return { ...state, loading: false };
    default: {
      return state;
    }
  }
};

export default weatherReducer;
