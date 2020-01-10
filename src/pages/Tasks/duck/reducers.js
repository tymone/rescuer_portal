/* eslint-disable eqeqeq */
import types from "./types";

const INITIAL_STATE = {
  counter: 8,
  list: [
    {
      id: 0,
      title: "tytuł zadania do wykonania nr1",
      content: "treść zadania do wykonania nr 1",
      active: true,
      addDate: 1564048205997,
      finishDate: ""
    },
    {
      id: 12,
      title: "tytuł zadania do wykonania nr2",
      content: "treść zadania do wykonania nr 2",
      active: true,
      addDate: 1564048305997,
      finishDate: ""
    },
    {
      id: 2,
      title: "tytuł zadania do wykonania nr3",
      content: "treść zadania do wykonania nr 3",
      active: true,
      addDate: 1564048405997,
      finishDate: ""
    },
    {
      id: 3,
      title: "tytuł zadania do wykonania nr4",
      content: "treść zadania do wykonania nr 4",
      active: true,
      addDate: 1564047505997,
      finishDate: ""
    },
    {
      id: 4,
      title: "tytuł wykonanego zadania nr 1",
      content: "treść wykonanego zadania nr 1",
      active: false,
      addDate: 1546815600000,
      finishDate: 1563048505997
    },
    {
      id: 5,
      title: "tytuł wykonanego zadania nr 2",
      content: "treść wykonanego zadania nr 2",
      active: false,
      addDate: 1546729200000,
      finishDate: 1562048505997
    },
    {
      id: 6,
      title: "tytuł wykonanego zadania nr 3",
      content: "treść wykonanego zadania nr 3",
      active: false,
      addDate: 1575586800000,
      finishDate: 1561048505997
    },
    {
      id: 7,
      title: "tytuł wykonanego zadania nr 4",
      content: "treść wykonanego zadania nr 4",
      active: false,
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
      const newList = state.list.filter(item => item.id != action.id);
      return {
        ...state,
        list: [...newList, action.item]
      };
    case types.REMOVE_TASK:
      const getTask = state.list.filter(item => item.id != action.id);
      return {
        list: [...getTask]
      };
    default:
      return state;
  }
};

export default tasksReducer;
