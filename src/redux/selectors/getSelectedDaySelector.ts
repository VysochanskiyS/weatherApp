import { AppState } from './../store';
const getSelectedDaySelector = (state: AppState) => {
  return state.weather;
};

export default getSelectedDaySelector;
