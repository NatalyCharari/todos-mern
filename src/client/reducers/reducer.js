import {
  FETCH_TODOS_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REMOVE_TOKEN,
} from './actions';

const initialState = {
  title: 'Todo List',
  token: null,
  todos: [],
  currentTodo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
