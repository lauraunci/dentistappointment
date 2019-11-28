const BASE_URL = '/api/appointments/';

function create(aptdata) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(aptdata)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Something is wrong!');
  });
}

function getAll() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {'content-type': 'application/json'},
  })
  .then(res => res.json());
}

function update(aptdata) {
  return fetch(`${BASE_URL}/${aptdata._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(aptdata)
  }).then(res => res.json());
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

export default {
  create, 
  getAll,
  update,
  deleteOne
};