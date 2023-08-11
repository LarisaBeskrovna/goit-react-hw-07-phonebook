import css from './addContact.module.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { selectContacts } from 'redux/selector';
import { useId } from 'react';

const AddContact = () => {
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleFormChange = e => {
    e.target.name === 'name' && setName(e.target.value);
    e.target.name === 'number' && setNumber(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const exist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (exist) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(
        addContacts({
          name: name,
          number: number,
        })
      );
    }
    setName('');
    setNumber('');
  };

  const idName = useId();
  const idNumber = useId();

  return (
    <div className={css.main}>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label htmlFor={idName}>
          <h1 className={css.main_title}>Name</h1>
          <input
            className={css.name_input}
            type="text"
            name="name"
            value={name}
            id={idName}
            onChange={handleFormChange}
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
                          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={idNumber}>
          <h1 className={css.main_title}>Number</h1>
          <input
            className={css.name_input}
            type="text"
            name="number"
            value={number}
            onChange={handleFormChange}
            id={idNumber}
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.add_btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
