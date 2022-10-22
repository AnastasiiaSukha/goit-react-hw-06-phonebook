import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
    reducers: {
        addContact: {
            reducer: (state, { payload: item }) => {
                state.items = [...state.items, item];
            },
        },
        removeContact: (state, { payload: itemId }) => {
      state.items = state.items.filter(item => item.id !== itemId);
        },
         setFilter: (state, action) => {
      state.filter = action.payload;
    },
    }
});

export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;

export const { addContact, removeContact, setFilter } = contactsSlice.actions;