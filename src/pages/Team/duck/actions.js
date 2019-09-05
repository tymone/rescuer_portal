import types from './types';

const add = item => ({
  type: types.ADD_RESCUER,
  item
});

const remove = item => ({
  type: types.REMOVE_RESCUER,
  item
});

export default {
  add,
  remove
};
