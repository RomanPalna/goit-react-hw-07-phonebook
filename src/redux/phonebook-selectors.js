export const getValueFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export const showContact = state => {
  const allContacts = getContacts(state);
  const filter = getValueFilter(state);
  const normalizeName = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeName),
  );
};

//For item-reducer
export function nonDuplicateNames(state, payload) {
  const names = new Set(state.map(({ name }) => name.toLowerCase()));
  if (names.has(payload.name.toLowerCase())) {
    alert(`${payload.name} is already in contact list!`);
    return state;
  }
  return [payload, ...state];
}
