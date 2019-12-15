import types from "./types";

const add = item => ({
  type: types.ADD_TASK,
  item
});

const edit = (item, id) => ({
  type: types.EDIT_TASK,
  item,
  id
});

const remove = id => ({
  type: types.REMOVE_TASK,
  id
});

export default {
  add,
  edit,
  remove
};
