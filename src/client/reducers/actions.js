import { isObject } from 'lodash';

import * as TodoActions from '../api/todo';
import { login, register } from '../api/user';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const UPDATE_CURRENT_TODO = 'UPDATE_CURRENT_TODO';

const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: { todos },
});

const loginSuccess = ({ token }) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

const registerSuccess = ({ token }) => ({
  type: REGISTER_SUCCESS,
  payload: { token },
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

export const updateCurrentTodo = (todoIdentifier) => ({
  type: UPDATE_CURRENT_TODO,
  payload: { todoIdentifier },
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

const handleResponse = (request, action = null, receiver = null) => (
  dispatch
) =>
  request
    .then((response) => response.json())
    .then((data) => {
      if (action) dispatch(action(data));
      if (receiver) receiver();
    })
    .catch(handleErrors);

const fetchData = (request, action, data = null) => (dispatch) => {
  if (data) {
    return dispatch(handleResponse(request(data), action));
  } else {
    return dispatch(handleResponse(request(), action));
  }
};

export const getTodos = (token) =>
  fetchData(TodoActions.getTodos, fetchTodosSuccess, token);

export const deleteTodo = (todoIdentifier, token, receiver) => (dispatch) =>
  dispatch(
    handleResponse(
      TodoActions.deleteTodo(todoIdentifier, token),
      null,
      receiver
    )
  );

export const updateTodo = (todo, token, receiver) => (dispatch) =>
  dispatch(handleResponse(TodoActions.updateTodo(todo, token), null, receiver));

export const loginUser = (user) => fetchData(login, loginSuccess, user);

export const registerUser = (user) =>
  fetchData(register, registerSuccess, user);

export const onResetForm = (token) => (dispatch) => {
  dispatch(updateCurrentTodo(null));
  return dispatch(getTodos(token));
};
