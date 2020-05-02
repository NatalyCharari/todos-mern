import { getTodos } from '../api/todo';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
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

const handleResponse = (request) => (dispatch) =>
  request
    .then((response) => {
      console.log(response);
      dispatch(fetchDataSuccess(response.data));
    })
    .catch(handleErrors);

const fetchData = (request, data) => (dispatch) => {
  if (data) {
    return dispatch(handleResponse(request(data)));
  } else {
    return dispatch(handleResponse(request()));
  }
};

export const fetchsTodos = (token) => {
  return fetchData(getTodos, token);
};
