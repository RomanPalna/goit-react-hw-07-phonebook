import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction(
  'phonebook/fetchContactRequest',
);
export const fetchContactSuccess = createAction(
  'phonebook/fetchContactSuccess',
);
export const fetchContactError = createAction('phonebook/fetchContactError');

export const addContactRequest = createAction('phonebook/addContacrRequest');
export const addContactSuccess = createAction('phonebook/addContacrSuccess');
export const addContactError = createAction('phonebook/addContacrError');

export const deleteContactRequest = createAction(
  'phonebook/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'phonebook/deleteContactSuccess',
);
export const deleteContactError = createAction('phonebook/deleteContactError ');

export const filterContacts = createAction('phonebook/Filter');
