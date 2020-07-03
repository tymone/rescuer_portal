import types from './types';

const INITIAL_STATE = {
  list: [
    {
      year: 2020,
      groups: {
        1: {
          id: 1,
          osrg1: '2020-01-01',
          under1: '2020-03-01',
          ground1: '2020-05-01',
          osrg2: '2020-07-01',
          under2: '2020-09-01',
          ground2: '2020-11-01',
        },
        2: {
          id: 2,
          osrg1: '2020-01-08',
          under1: '2020-03-08',
          ground1: '2020-05-08',
          osrg2: '2020-07-08',
          under2: '2020-09-08',
          ground2: '2020-11-08',
        },
        3: {
          id: 3,
          osrg1: '2020-01-15',
          under1: '2020-03-15',
          ground1: '2020-05-15',
          osrg2: '2020-07-15',
          under2: '2020-09-15',
          ground2: '2020-11-15',
        },
        4: {
          id: 4,
          osrg1: '2020-01-22',
          under1: '2020-03-22',
          ground1: '2020-05-22',
          osrg2: '2020-07-22',
          under2: '2020-09-22',
          ground2: '2020-11-22',
        },
        5: {
          id: 5,
          osrg1: '2020-01-29',
          under1: '2020-03-29',
          ground1: '2020-05-29',
          osrg2: '2020-07-29',
          under2: '2020-09-29',
          ground2: '2020-11-29',
        },
      },
    },
    {
      year: 2021,
      groups: {
        1: {
          id: 1,
          osrg1: '2021-01-01',
          under1: '2021-03-01',
          ground1: '2021-05-01',
          osrg2: '2021-07-01',
          under2: '2021-09-01',
          ground2: '2021-11-01',
        },
        2: {
          id: 2,
          osrg1: '2021-01-08',
          under1: '2021-03-08',
          ground1: '2021-05-08',
          osrg2: '2021-07-08',
          under2: '2021-09-08',
          ground2: '2021-11-08',
        },
        3: {
          id: 3,
          osrg1: '2021-01-15',
          under1: '2021-03-15',
          ground1: '2021-05-15',
          osrg2: '2021-07-15',
          under2: '2021-09-15',
          ground2: '2021-11-15',
        },
        4: {
          id: 4,
          osrg1: '2021-01-22',
          under1: '2021-03-22',
          ground1: '2021-05-22',
          osrg2: '2021-07-22',
          under2: '2021-09-22',
          ground2: '2021-11-22',
        },
        5: {
          id: 5,
          osrg1: '2021-01-29',
          under1: '2021-03-29',
          ground1: '2021-05-29',
          osrg2: '2021-07-29',
          under2: '2021-09-29',
          ground2: '2021-11-29',
        },
      },
    },
  ],
};

const trainingGroupsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TRAIN_SCHEDULE:
      return {
        ...state,
        list: [...state.list, action.item],
      };
    case types.REMOVE_TRAIN_SCHEDULE:
      const newList = state.list.filter((group) => group.year !== action.id);
      return {
        ...state,
        list: newList,
      };
    case types.UPDATE_TRAIN_SCHEDULE:
      const getList = state.list;
      const index = state.list.findIndex((item) => item.year === action.item.year);
      getList.splice(index, 1, action.item);
      return {
        ...state,
        list: [...getList],
      };
    default:
      return state;
  }
};

export default trainingGroupsReducer;
