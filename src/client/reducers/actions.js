import { getTodos } from '../api/todo';
import { login } from '../api/user';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: { todos },
});

const loginSuccess = ({ token }) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

const handleErrors = (error) => {
  if (isObject(error.response)) {
    if (error.response.status === 400) {
      console.log('Bad Request');
    } else if (error.response.status === 404) {
      console.log('Resource not found');
    } else if (error.response.status === 408) {
      console.log('Request Timeout');
    } else if (error.response.status === 500) {
      console.log('Internal Server Error');
    }
  }
};

const handleResponse = (request, action) => (dispatch) =>
  request
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(action(data));
    })
    .catch(handleErrors);

const fetchData = (request, action, data = null) => (dispatch) => {
  if (data) {
    return dispatch(handleResponse(request(data), action));
  } else {
    return dispatch(handleResponse(request(), action));
  }
};

export const fetchTodos = (token) =>
  fetchData(getTodos, fetchTodosSuccess, token);

export const loginUser = (user) => fetchData(login, loginSuccess, user);
