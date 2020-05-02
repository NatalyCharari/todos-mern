const baseDomain = '/api/todos';

const logError = (error) => {
  console.log('API Request error: ', error);
  return error;
};

export const getTodos = (token) =>
  fetch(baseDomain, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'bearer ' + token,
    },
  }).catch(logError);

export const removeTodo = (id, token) =>
  fetch(`${baseDomain}/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: 'bearer ' + token,
    },
  }).catch(logError);

export const editTodo = (todo, token) =>
  fetch(`${baseDomain}/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: todo.title,
      description: todo.description,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'bearer ' + token,
    },
  }).catch(logError);

export const addTodo = (todo, token) =>
  fetch(baseDomain, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'bearer ' + token,
    },
  }).catch(logError);
