import { combineReducers } from 'redux';
import scheduleReducer from './pages/Schedule/duck/index';
// import { taskReducer } from './pages/Tasks/duck';
// import { teamReducer } from './pages/Team/duck';
// import { trainReducer } from './pages/Train/duck';

const rootReducer = combineReducers({
  schedule: scheduleReducer
})

export default rootReducer;