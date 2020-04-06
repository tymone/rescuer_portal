import types from './types';

const add = (item) => ({
  type: types.ADD_TRAIN_SCHEDULE,
  item
});

const remove = (id) => ({
  type: types.REMOVE_TRAIN_SCHEDULE,
  id
});

const update = (item) => ({
  type: types.UPDATE_TRAIN_SCHEDULE,
  item
});

export default {
  add,
  remove,
  update
};
