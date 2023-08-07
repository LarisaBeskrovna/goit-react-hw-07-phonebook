import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selector';
import { deleteContacts } from 'redux/contact';
import css from './contacts.module.css';
import Notification from '../Notification/Notification';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const getFilteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  const deleteContactsById = id => {
    const contactId = id;
    dispatch(
      deleteContacts(contacts.filter(contact => contact.id !== contactId))
    );
  };
  if (contacts.length > 0) {
    return (
      <div className={css.main}>
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <li className={css.list_item} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                type="button"
                className={css.delete_btn}
                onClick={() => deleteContactsById(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <Notification />;
  }
};

export default Contacts;
