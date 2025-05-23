import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

import css from './SearchBox.module.css';

export function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={css.input}
        />
      </label>
    </div>
  );
}
