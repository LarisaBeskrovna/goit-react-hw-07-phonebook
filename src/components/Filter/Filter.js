import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fromfilter } from '..//../redux/filtr';
import { selectFilter } from '..//../redux/selector';
import css from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filterData = e => {
    dispatch(fromfilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <h2 className={css.find_title}>Find contacts by name</h2>
      <input
        type="text"
        className={css.find_input}
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={filterData}
      />
    </div>
  );
};

export default Filter;
