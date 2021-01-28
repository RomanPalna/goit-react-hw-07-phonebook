import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  filterContacts,
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
import { nonDuplicateNames } from './phonebook-selectors';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) =>
    nonDuplicateNames(state, payload),
  [deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
