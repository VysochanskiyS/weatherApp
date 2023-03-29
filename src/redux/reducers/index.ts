// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import weatherReducer from './weatherReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  weather: weatherReducer,
});
// Exports
export default rootReducer;
