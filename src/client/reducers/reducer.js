import { FETCH_DATA_SUCCESS } from './actions';

const initialState = {
  todos: [],
  currentTodo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      console.log(action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
