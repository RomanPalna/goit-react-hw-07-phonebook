import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./actions";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const items = createReducer(initialState, {
  [actions.addContact]: (state, { payload }) =>
    nonDuplicateNames(state, payload),
  [actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [actions.filter]: (_, action) => action.payload,
});

function nonDuplicateNames(state, payload) {
  const names = new Set(state.map(({ name }) => name.toLowerCase()));
  if (names.has(payload.name.toLowerCase())) {
    alert(`${payload.name} is already in contact list!`);
    return state;
  }
  return [payload, ...state];
}

export default combineReducers({
  items,
  filter,
});
