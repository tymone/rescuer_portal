import types from './types';

const add = item => ({
  type: types.ADD_GROUP,
  item
});

export default {
  add
}