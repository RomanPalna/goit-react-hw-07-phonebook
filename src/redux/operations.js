import axios from 'axios';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './actions';

axios.defaults.baseURL = 'http://localhost:3004';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

export const addContact = dispatch => (name, number) => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(response => dispatch(addContactSuccess(response.data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = dispatch => id => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
