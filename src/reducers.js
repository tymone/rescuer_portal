import { combineReducers } from 'redux';
import scheduleReducer from './components/Schedule/duck/index';
import tasksReducer from './components/Tasks/duck';
import teamReducer from './components/Team/duck/index';
import groupReducer from './components/Train/duck/index';

const rootReducer = combineReducers({
  schedules: scheduleReducer,
  team: teamReducer,
  group: groupReducer,
  tasks: tasksReducer
});

export default rootReducer;
