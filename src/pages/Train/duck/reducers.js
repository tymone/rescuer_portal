import types from './types';

const INITIAL_STATE = {
  list: [
    {
      year: 2020,
      groups: {
        group1: [1577833200000, 1583017200000, 1588284000000, 1593554400000, 1598911200000, 1578697200000],
        group2: [1578438000000, 1583622000000, 1588888800000, 1594159200000, 1599516000000, 1604790000000],
        group3: [1579042800000, 1584226800000, 1589493600000, 1594764000000, 1600120800000, 1605394800000],
        group4: [1579647600000, 1584831600000, 1590098400000, 1595368800000, 1600725600000, 1605999600000],
        group5: [1580252400000, 1585436400000, 1590703200000, 1595973600000, 1601330400000, 1606604400000]
      }
    }
  ]
};

const groupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_GROUP:
      return {
        ...state,
        list: [action.item, ...state.list]
      };
    default:
      return state;
  }
};

export default groupReducer;
