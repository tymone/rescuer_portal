import { combineReducers } from 'redux';
import scheduleReducer from './components/Schedule/duck/index';
import tasksReducer from './components/Tasks/duck';
import teamReducer from './components/Team/duck/index';
import trainingGroupsReducer from './components/Train/duck/index';

const rootReducer = combineReducers({
  schedules: scheduleReducer,
  team: teamReducer,
  trainingGroups: trainingGroupsReducer,
  tasks: tasksReducer
});

export default rootReducer;
