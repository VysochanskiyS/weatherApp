export interface IWeatherData {
  message: string;
  cod: string;
  city_id: number;
  calctime: number;
  cnt: number;
  list: IListweather[];
}

export interface IListweather {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  weather: IWeather[];
  rain?: {
    '1h': number;
  };
}
interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherDaySaga {
  type: string;
  payload: string;
}

export enum WeatherState {
  TAKE_BY_DAY = 'TAKE_WEATHER_BY_DAY',
  TAKE_5_Days = 'TAKE_WEAHER_5_Days',
  SET_BY_DAY = 'SET_WEATHER_BY_DAY',
  SET_5_Days = 'SET_WEATHER_5_DAYS',
}
