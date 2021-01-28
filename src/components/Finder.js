import { useSelector, useDispatch } from 'react-redux';
import { getValueFilter } from '../redux/phonebook-selectors';
import { filterContacts } from '../redux/actions';

export default function Filter() {
  const value = useSelector(getValueFilter);

  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(filterContacts(e.target.value))}
      ></input>
    </label>
  );
}
