import types from './types';

const add = item => ({
  type: types.ADD_TASK,
  item
});

const edit = item => ({
  type: types.EDIT_TASK,
  item
})

export default {
  add,
  edit
}