import { combineReducers } from 'redux';
import scheduleReducer from './pages/Schedule/duck/index';
import tasksReducer from './pages/Tasks/duck';
import teamReducer from './pages/Team/duck/index';
import groupReducer from './pages/Train/duck/index';

const rootReducer = combineReducers({
  schedules: scheduleReducer,
  team: teamReducer,
  group: groupReducer,
  tasks: tasksReducer,
});

export default rootReducer;
