import { Reducer } from 'redux';
import { IListweather, WeatherState } from '../../../types/weather';

interface IState {
  weatherList: IListweather[];
  weatherDay: IListweather[];
}
// Initial State
const initialState: IState = {
  weatherList: [],
  weatherDay: [],
};
// Redux: Counter Reducer
const weatherReducer: Reducer<IState> = (state = initialState, action: any) => {
  switch (action.type) {
    case WeatherState.SET_5_DAYS: {
      return {
        ...state,
        weatherList: action.payload,
      };
    }
    case WeatherState.SET_5_DAYS: {
      return { ...state, weatherList: action.payload };
    }
    case WeatherState.SET_WEATHER_BY_SELECTED_DAY: {
      return {
        ...state,
        weatherDay: state.weatherList.filter(day =>
          day.dt_txt.includes(action.payload),
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default weatherReducer;
