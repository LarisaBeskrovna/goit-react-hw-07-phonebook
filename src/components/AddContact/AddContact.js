import css from './addContact.module.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts } from 'redux/operations';
import { selectContacts } from 'redux/selector';

const AddContact = () => {
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleFormChange = e => {
    e.target.name === 'name' && setName(e.target.value);
    e.target.name === 'phone' && setPhone(e.target.value);
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
          id: nanoid(),
          name: name,
          phone: phone,
          createdAt: new Date(),
        })
      );
    }
    setName('');
    setPhone('');
  };

  const idName = nanoid();
  const idNumber = nanoid();

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
            name="phone"
            value={phone}
            onChange={handleFormChange}
            id={idNumber}
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
