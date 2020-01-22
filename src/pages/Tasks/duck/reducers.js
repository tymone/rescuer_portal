import types from './types';

const INITIAL_STATE = {
  counter: 8,
  list: [
    {
      id: 0,
      title: 'tytuł zadania do wykonania nr1',
      content: 'treść zadania do wykonania nr 1',
      status: 'to do',
      addDate: 1564048205997,
      finishDate: ''
    },
    {
      id: 12,
      title: 'tytuł zadania do wykonania nr2',
      content: 'treść zadania do wykonania nr 2',
      status: 'to do',
      addDate: 1564048305997,
      finishDate: ''
    },
    {
      id: 2,
      title: 'tytuł zadania do wykonania nr3',
      content: 'treść zadania do wykonania nr 3',
      status: 'to do',
      addDate: 1564048405997,
      finishDate: ''
    },
    {
      id: 3,
      title: 'tytuł zadania do wykonania nr4',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, fugit perspiciatis animi atque eius, porro sunt doloribus reiciendis error deserunt, alias dicta nisi tempore accusamus deleniti tenetur eos non incidunt.',
      status: 'to do',
      addDate: 1564047505997,
      finishDate: ''
    },
    {
      id: 4,
      title: 'tytuł zadania w trakcie wykonywania1',
      content: 'treść zadania w trakcie wykonywania1',
      status: 'in progress',
      addDate: 1564047705997,
      finishDate: ''
    },
    {
      id: 5,
      title: 'tytuł zadania w trakcie wykonywania2',
      content: 'treść zadania w trakcie wykonywania2',
      status: 'in progress',
      addDate: 1564047805997,
      finishDate: ''
    },
    {
      id: 6,
      title: 'tytuł zadania w trakcie wykonywania 3',
      content: 'treść zadania w trakcie wykonywania 3',
      status: 'in progress',
      addDate: 1564047905997,
      finishDate: ''
    },
    {
      id: 7,
      title: 'tytuł zadania w trakcie wykonywania 4',
      content: 'treść zadania w trakcie wykonywania 4',
      status: 'in progress',
      addDate: 1564048005997,
      finishDate: ''
    },
    {
      id: 8,
      title: 'tytuł wykonanego zadania nr 1',
      content: 'treść wykonanego zadania nr 1',
      status: 'done',
      addDate: 1546815600000,
      finishDate: 1563048505997
    },
    {
      id: 9,
      title: 'tytuł wykonanego zadania nr 2',
      content: 'treść wykonanego zadania nr 2',
      status: 'done',
      addDate: 1546729200000,
      finishDate: 1562048505997
    },
    {
      id: 10,
      title: 'tytuł wykonanego zadania nr 3',
      content: 'treść wykonanego zadania nr 3',
      status: 'done',
      addDate: 1575586800000,
      finishDate: 1561048505997
    },
    {
      id: 11,
      title: 'tytuł wykonanego zadania nr 4',
      content: 'treść wykonanego zadania nr 4',
      status: 'done',
      addDate: 1562364000000,
      finishDate: 1264048505997
    }
  ]
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        counter: action.id,
        list: [action.item, ...state.list]
      };
    case types.EDIT_TASK:
      const newList = state.list.filter(item => item.id !== Number(action.id));
      return {
        ...state,
        list: [...newList, action.item]
      };
    case types.REMOVE_TASK:
      const getTask = state.list.filter(item => item.id !== Number(action.id));
      return {
        list: [...getTask]
      };
    default:
      return state;
  }
};

export default tasksReducer;
