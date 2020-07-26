import { combineReducers } from 'redux';

import scheduleReducer from './schedule.reducer';
import tasksReducer from './tasks.reducer';
import teamReducer from './team.reducer';
import trainingGroupsReducer from './trainingGroups.reducer';

const rootReducer = combineReducers({
  schedules: scheduleReducer,
  team: teamReducer,
  trainingGroups: trainingGroupsReducer,
  tasks: tasksReducer,
});

export default rootReducer;
