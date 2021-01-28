import { useSelector, useDispatch } from 'react-redux';
import { getValueFilter } from '../redux/phonebook-selectors';
import action from '../redux/actions';

export default function Filter() {
  const value = useSelector(getValueFilter);

  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(action.filterContacts(e.target.value))}
      ></input>
    </label>
  );
}
