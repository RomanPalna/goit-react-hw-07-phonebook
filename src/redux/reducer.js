import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './actions';
import { nonDuplicateNames } from './phonebook-selectors';

const items = createReducer([], {
  [actions.addContactSuccess]: (state, { payload }) =>
    nonDuplicateNames(state, payload),
  [actions.deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const loading = createReducer(false, {
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,

  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const filter = createReducer('', {
  [actions.filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
