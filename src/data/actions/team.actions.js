import { ADD_RESCUER, REMOVE_RESCUER, UPDATE_RESCUER } from 'data/types';

const add = (item) => ({
  type: ADD_RESCUER,
  item,
});

const remove = (id) => ({
  type: REMOVE_RESCUER,
  id,
});

const update = (item) => ({
  type: UPDATE_RESCUER,
  item,
});

export default {
  add,
  remove,
  update,
};
