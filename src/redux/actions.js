import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction("phonebook/addContact", (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});
const filter = createAction("phonebook/Filter");
const deleteContact = createAction("phonebook/deleteContact");

export default { addContact, deleteContact, filter };
