import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

// визначаємо начальний стан сховища
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// робимо 2 функції, щоб не дублювати код
const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

// розбиваємо на 3 функції, щоб не дублювати код
const handleFetchContacts = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleAddContact = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};

const handleDeleteContact = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};

// для кожного з цих екшенів буде створено actionCreator
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled]: handleFetchContacts,
    [addContact.fulfilled]: handleAddContact,
    [deleteContact.fulfilled]: handleDeleteContact,
  },
});

export const contactsReducer = contactsSlice.reducer;
