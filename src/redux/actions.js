import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('phonebook/addContacrRequest');
const addContactSuccess = createAction('phonebook/addContacrSuccess');
const addContactError = createAction('phonebook/addContacrError');

const deleteContactRequest = createAction('phonebook/deleteContactRequest');
const deleteContactSuccess = createAction('phonebook/deleteContactSuccess');
const deleteContactError = createAction('phonebook/deleteContactError ');

const filterContacts = createAction('phonebook/Filter');

export default {
  filterContacts,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
