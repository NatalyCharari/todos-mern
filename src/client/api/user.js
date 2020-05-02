const baseDomain = '/api/users';

const logError = (error) => {
  console.log('API Request error: ', error);
  return error;
};

export const login = (user) =>
  fetch(`${baseDomain}/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).catch(logError);
