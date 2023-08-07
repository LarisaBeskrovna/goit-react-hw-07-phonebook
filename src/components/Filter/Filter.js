import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selector';
import { fromfilter } from '..//../redux/filtr';
import css from './filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(fromfilter(event.target.value));
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
        onChange={changeFilter}
      />
    </div>
  );
};

export default Filter;
