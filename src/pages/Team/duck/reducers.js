import types from './types';

const INITIAL_STATE = {
  list: [
    {
      id: 0,
      name: 'Imie1',
      surname: 'Nazwisko1',
      doctor: 1546297200000,
      train: 'grupa1'
    },
    {
      id: 1,
      name: 'Imie2',
      surname: 'Nazwisko2',
      doctor: 1546383600000,
      train: 'grupa 2'
    },
    {
      id: 2,
      name: 'Imie3',
      surname: 'Nazwisko3',
      doctor: 1546470000000,
      train: 'grupa 3'
    },
    {
      id: 3,
      name: 'Imie4',
      surname: 'Nazwisko4',
      doctor: 1546556400000,
      train: 'grupa 4'
    },
    {
      id: 4,
      name: 'Imie5',
      surname: 'Nazwisko5',
      doctor: 1549321200000,
      train: 'grupa 5'
    },
    {
      id: 5,
      name: 'Imie6',
      surname: 'Nazwisko6',
      doctor: 1549407600000,
      train: 'grupa 6'
    },
    {
      id: 6,
      name: 'Imie7',
      surname: 'Nazwisko7',
      doctor: 1549494000000,
      train: 'grupa 7'
    },
    {
      id: 7,
      name: 'Imie8',
      surname: 'Nazwisko8',
      doctor: 1549580400000,
      train: 'grupa 8'
    },
    {
      id: 8,
      name: 'Imie9',
      surname: 'Nazwisko9',
      doctor: 1549666800000,
      train: 'grupa 6'
    },
    {
      id: 9,
      name: 'Imie10',
      surname: 'Nazwisko10',
      doctor: 1549753200000,
      train: 'grupa 3'
    },
    {
      id: 10,
      name: 'Imie11',
      surname: 'Nazwisko11',
      doctor: 1562796000000,
      train: 'grupa 2'
    },
    {
      id: 11,
      name: 'Imie12',
      surname: 'Nazwisko12',
      doctor: 1568152800000,
      train: 'grupa 4'
    }
  ]
};

const teamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_RESCUER:
      return {
        ...state,
        list: [...state.list, action.item]
      };
    case types.REMOVE_RESCUER:
      return {
        list: action.item
      };
    default:
      return state;
  }
};

export default teamReducer;
