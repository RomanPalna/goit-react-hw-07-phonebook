import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { showContact } from '../redux/phonebook-selectors';
import { deleteContact, fetchContacts } from '../redux/operations';

export default function Contacts() {
  const contacts = useSelector(showContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// const mapDispatchToProps = dispatch => ({
//   fetchContact: () => dispatch(fetchContacts()),
// });

// export default connect(null, mapDispatchToProps)(Contacts);
