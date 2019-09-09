import { combineReducers } from 'redux';
import scheduleReducer from './pages/Schedule/duck/index';
// import { taskReducer } from './pages/Tasks/duck';
import teamReducer from './pages/Team/duck/index';
import groupReducer from './pages/Train/duck/index';

const rootReducer = combineReducers({
  schedule: scheduleReducer,
  team: teamReducer,
  group: groupReducer
});

export default rootReducer;
