const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contactsState',
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
