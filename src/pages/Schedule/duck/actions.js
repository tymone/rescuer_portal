import types from './types';

const add = item => ({
  type: types.ADD_SCHEDULE,
  item
});

const edit = item => ({
  type: types.EDIT_SCHEDULE,
  item
})

export default {
  add,
  edit
}