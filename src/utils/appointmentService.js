const BASE_URL = '/api/appointments/';

function create(aptdata) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(aptdata)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export default {
  create
};