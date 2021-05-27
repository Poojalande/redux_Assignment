import {combineReducers} from 'redux';
import {mainReducer} from './project/Reducer';

const rootReducer = combineReducers({
  data: mainReducer,
});

export default rootReducer;
