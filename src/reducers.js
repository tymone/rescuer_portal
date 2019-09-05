import { combineReducers } from 'redux';
import scheduleReducer from './pages/Schedule/duck/index';
// import { taskReducer } from './pages/Tasks/duck';
import teamReducer from './pages/Team/duck/index';
// import { trainReducer } from './pages/Train/duck';

const rootReducer = combineReducers({
  schedule: scheduleReducer,
  team: teamReducer
});

export default rootReducer;
