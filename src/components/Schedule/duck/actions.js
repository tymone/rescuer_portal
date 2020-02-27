import types from './types';

const add = (item) => ({
  type: types.ADD_SCHEDULE,
  item
});

const update = (item) => ({
  type: types.UPDATE_SCHEDULE,
  item
});

export default {
  add,
  update
};
