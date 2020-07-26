import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from 'data/types';

const add = (item) => ({
  type: ADD_TASK,
  item,
});

const edit = (item, id) => ({
  type: EDIT_TASK,
  item,
  id,
});

const remove = (id) => ({
  type: REMOVE_TASK,
  id,
});

export default {
  add,
  edit,
  remove,
};
