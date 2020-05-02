import { FETCH_DATA_SUCCESS } from './actions';

const initialState = {
  todos: [],
  currentTodo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
