import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredcontacts } from '..//../redux/selector';
import { fetchContacts, deleteContacts } from '..//../redux/operations';
import css from './contacts.module.css';
import Notification from '../Notification/Notification';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredcontacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  if (contacts.length > 0) {
    return (
      <div className={css.main}>
        <ul className={css.list}>
          {contacts.map(contact => (
            <li className={css.list_item} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                type="button"
                className={css.delete_btn}
                onClick={() => dispatch(deleteContacts(contact.id))}
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
