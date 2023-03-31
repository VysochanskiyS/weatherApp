import {IBaseWeatherInfo, IListweather, WeatherState} from "../../types";

export interface IState {
    weatherList: IListweather[];
    weatherDay: IBaseWeatherInfo[];
}
interface ActionSetWeatherBySelectedDay {
    type:  WeatherState.SET_WEATHER_BY_SELECTED_DAY;
    payload: string;
}

interface ActionSet5Days {
    type:  WeatherState.SET_5_DAYS;
    payload: IListweather[];

}

interface ActionSetHistoricalWeatherBySelectedDay {
    type:  WeatherState.SET_HISTORICAL_WEATHER_BY_SELECTED_DAY;
    payload: IBaseWeatherInfo[];
}
export type IWeatherReducerActions = ActionSetWeatherBySelectedDay | ActionSet5Days | ActionSetHistoricalWeatherBySelectedDay
