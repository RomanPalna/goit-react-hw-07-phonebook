import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";

function Phonebook({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.currentTarget.value);
  };

  const onAddContact = (e) => {
    e.preventDefault();

    onSubmit(name, number);

    setNumber("");
    setName("");
  };

  return (
    <div>
      <form onSubmit={onAddContact}>
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
          placeholder="Add name"
        ></input>
        <input
          type="tel"
          value={number}
          onChange={handleChangeNumber}
          placeholder="Add number"
        ></input>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Phonebook);