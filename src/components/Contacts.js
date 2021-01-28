import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showContact } from '../redux/phonebook-selectors';
import actions from '../redux/actions';

export default function Contacts() {
  const contacts = useSelector(showContact);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
