import types from './types';

const INITIAL_STATE = {
  counter: 13,
  list: [
    {
      id: 0,
      title: 'tytuł zadania do wykonania nr1',
      content: 'treść zadania do wykonania nr 1',
      status: 'to do',
      addDate: '2020-07-16',
      finishDate: '',
      createdBy: 'Kowalski',
      workingBy: '',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 12,
      title: 'tytuł zadania do wykonania nr2',
      content: 'treść zadania do wykonania nr 2',
      status: 'to do',
      addDate: '2020-07-10',
      finishDate: '',
      createdBy: 'Kowalski',
      workingBy: '',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 2,
      title: 'tytuł zadania do wykonania nr3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque, ducimus obcaecati et illum, eum non repudiandae laudantium nobis error quaerat, veniam dolores qui necessitatibus architecto reiciendis modi iste dicta.',
      status: 'to do',
      addDate: '2020-07-01',
      finishDate: '',
      createdBy: 'Kowalski',
      workingBy: '',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 3,
      title: 'tytuł zadania do wykonania nr4',
      content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ',
      status: 'to do',
      addDate: '2020-06-23',
      finishDate: '',
      createdBy: 'Kowalski',
      workingBy: '',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 4,
      title: 'tytuł zadania w trakcie wykonywania1',
      content: 'treść zadania w trakcie wykonywania1',
      status: 'in progress',
      addDate: '2020-06-20',
      finishDate: '',
      createdBy: 'Kowalski',
      workingBy: 'Nowak',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 5,
      title: 'tytuł zadania w trakcie wykonywania2',
      content: 'treść zadania w trakcie wykonywania2',
      status: 'in progress',
      addDate: '2020-06-15',
      finishDate: '',
      createdBy: 'Kowalski',
      workingBy: 'Nowak',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 6,
      title: 'tytuł zadania w trakcie wykonywania 3',
      content: 'treść zadania w trakcie wykonywania 3',
      status: 'in progress',
      addDate: '2020-06-10',
      finishDate: '',
      createdBy: 'Kowalski',
      workingBy: 'Nowak',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 7,
      title: 'tytuł zadania w trakcie wykonywania 4',
      content: 'treść zadania w trakcie wykonywania 4',
      status: 'in progress',
      addDate: '2020-06-05',
      finishDate: '',
      createdBy: 'Kowalski',
      workingBy: 'Nowak',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 8,
      title: 'tytuł wykonanego zadania nr 1',
      content: 'treść wykonanego zadania nr 1',
      status: 'done',
      addDate: '2020-06-01',
      finishDate: '2020-06-09',
      createdBy: 'Kowalski',
      workingBy: 'Nowak',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 9,
      title: 'tytuł wykonanego zadania nr 2',
      content: 'treść wykonanego zadania nr 2',
      status: 'done',
      addDate: '2020-05-25',
      finishDate: '2020-06-08',
      createdBy: 'Kowalski',
      workingBy: 'Nowak',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 10,
      title: 'tytuł wykonanego zadania nr 3',
      content: 'treść wykonanego zadania nr 3',
      status: 'done',
      addDate: '2020-05-20',
      finishDate: '2020-06-01',
      createdBy: 'Kowalski',
      workingBy: 'Nowak',
      updatedBy: '',
      finishedBy: '',
    },
    {
      id: 11,
      title: 'tytuł wykonanego zadania nr 4',
      content: 'treść wykonanego zadania nr 4',
      status: 'done',
      addDate: '2020-05-15',
      finishDate: '2020-05-23',
      createdBy: 'Kowalski',
      workingBy: 'Nowak',
      updatedBy: '',
      finishedBy: '',
    },
  ],
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        counter: action.id,
        list: [action.item, ...state.list],
      };
    case types.EDIT_TASK:
      const newList = state.list.filter((item) => item.id !== Number(action.id));
      return {
        ...state,
        list: [...newList, action.item],
      };
    case types.REMOVE_TASK:
      const getTasks = state.list.filter((item) => item.id !== Number(action.id));
      return {
        list: [...getTasks],
      };
    default:
      return state;
  }
};

export default tasksReducer;
