import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Phonebook from './components/Phonebook';
import Contacts from './components/Contacts';
import Finder from './components/Finder';
import { fetchContacts } from './redux/operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook />

      <h2>Contacts</h2>
      <Finder />
      <Contacts />
    </div>
  );
}
