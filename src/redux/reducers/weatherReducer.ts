import { IListweather, WeatherState } from '../../../types/weather';

interface IState {
  weatherList: WeatherState | [];
  weatherDay: IListweather | {};
}
// Initial State
const initialState: IState = {
  weatherList: [],
  weatherDay: {},
};
// Redux: Counter Reducer
const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WeatherState.SET_5_Days: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    case WeatherState.SET_BY_DAY: {
      return { ...state, weatherDay: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default weatherReducer;
