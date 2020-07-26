import { ADD_SCHEDULE, UPDATE_SCHEDULE } from 'data/types';

const add = (item) => ({
  type: ADD_SCHEDULE,
  item,
});

const update = (item) => ({
  type: UPDATE_SCHEDULE,
  item,
});

export default {
  add,
  update,
};
