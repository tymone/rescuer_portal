import types from './types';

const INITIAL_STATE = {
  id: 12,
  list: [
    {
      id: 0,
      name: 'Imie1',
      surname: 'Nazwisko1',
      branch: 'KSRG-J',
      minePosition: 'górnik',
      KSRGPosition: 'ratownik',
      doctor: 1546297200000,
      trainingGroup: '1',
      included: {
        osrg1: true,
        under1: false,
        ground1: true,
        osrg2: false,
        under2: true,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 1,
      name: 'Imie2',
      surname: 'Nazwisko2',
      branch: 'WPP-J',
      minePosition: 'górnik',
      KSRGPosition: 'ratownik',
      doctor: 1546383600000,
      trainingGroup: '2',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 2,
      name: 'Imie3',
      surname: 'Nazwisko3',
      branch: 'MMUD-J',
      minePosition: 'ślusarz',
      KSRGPosition: 'ratownik',
      doctor: 1546470000000,
      trainingGroup: '3',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 3,
      name: 'Imie4',
      surname: 'Nazwisko4',
      branch: 'WPM-J',
      minePosition: 'górnik',
      KSRGPosition: 'ratownik',
      doctor: 1546556400000,
      trainingGroup: '4',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 4,
      name: 'Imie5',
      surname: 'Nazwisko5',
      branch: 'GZL1-J',
      minePosition: 'górnik',
      KSRGPosition: 'ratownik',
      doctor: 1549321200000,
      trainingGroup: '2',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 5,
      name: 'Imie6',
      surname: 'Nazwisko6',
      branch: 'KSRG-J',
      minePosition: 'górnik',
      KSRGPosition: 'zastępowy',
      doctor: 1549407600000,
      trainingGroup: '5',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 6,
      name: 'Imie7',
      surname: 'Nazwisko7',
      branch: 'KSRG-J',
      minePosition: 'górnik',
      KSRGPosition: 'ratownik',
      doctor: 1549494000000,
      trainingGroup: '5',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 7,
      name: 'Imie8',
      surname: 'Nazwisko8',
      branch: 'KSRG-J',
      minePosition: 'górnik',
      KSRGPosition: 'ratownik',
      doctor: 1549580400000,
      trainingGroup: '4',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 8,
      name: 'Imie9',
      surname: 'Nazwisko9',
      branch: 'WOM-J',
      minePosition: 'sztygar zmianowy',
      KSRGPosition: 'ratownik',
      doctor: 1549666800000,
      trainingGroup: '5',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 9,
      name: 'Imie10',
      surname: 'Nazwisko10',
      branch: 'WPP-J',
      minePosition: 'górnik',
      KSRGPosition: 'ratownik',
      doctor: 1549753200000,
      trainingGroup: '1',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 10,
      name: 'Imie11',
      surname: 'Nazwisko11',
      branch: 'GZL2-J',
      minePosition: 'górnik',
      KSRGPosition: 'ratownik',
      doctor: 1562796000000,
      trainingGroup: '2',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 11,
      name: 'Imie12',
      surname: 'Nazwisko12',
      branch: 'G2-J',
      minePosition: 'górnik',
      KSRGPosition: 'ratownik',
      doctor: 1568152800000,
      trainingGroup: '3',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: false
    },
    {
      id: 12,
      name: 'Imie13',
      surname: 'Nazwisko13',
      branch: 'KSRG-J',
      minePosition: 'górnik',
      KSRGPosition: 'mechanik',
      doctor: 1568162800000,
      trainingGroup: '3',
      included: {
        osrg1: false,
        under1: false,
        ground1: false,
        osrg2: false,
        under2: false,
        ground2: false
      },
      duty: '',
      inaccessible: {
        from: '',
        to: ''
      },
      suspend: true
    }
  ]
};

const teamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_RESCUER:
      return {
        ...state,
        id: action.item.id,
        list: [...state.list, action.item]
      };
    case types.REMOVE_RESCUER:
      const newList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: newList
      };
    case types.UPDATE_RESCUER:
      let id = state.list.findIndex((rescuer) => rescuer.id === Number(action.item.id));
      state.list.splice(id, 1, action.item);
      return {
        ...state,
        list: [...state.list]
      };
    default:
      return state;
  }
};

export default teamReducer;
