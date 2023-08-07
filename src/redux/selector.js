import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsState.contacts;
export const selectFilter = state => state.filterState.filter;

export const contactSelect = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
