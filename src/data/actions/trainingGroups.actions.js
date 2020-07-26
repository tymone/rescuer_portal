import { ADD_TRAIN_SCHEDULE, REMOVE_TRAIN_SCHEDULE, UPDATE_TRAIN_SCHEDULE } from 'data/types';

const add = (item) => ({
  type: ADD_TRAIN_SCHEDULE,
  item,
});

const remove = (id) => ({
  type: REMOVE_TRAIN_SCHEDULE,
  id,
});

const update = (item) => ({
  type: UPDATE_TRAIN_SCHEDULE,
  item,
});

export default {
  add,
  remove,
  update,
};
