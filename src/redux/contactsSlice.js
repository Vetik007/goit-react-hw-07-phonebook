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

// =============================================
// import { createSlice } from '@reduxjs/toolkit';
// import initialContacts from '../components/data/initialContacts';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//   list: initialContacts,
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,

//   reducers: {
//     addContact: {
//       reducer: (state, action) => {
//         state.list.push(action.payload);
//       },

//       prepare: ({ id, name, number }) => {
//         return {
//           payload: {
//             id,
//             name,
//             number,
//           },
//         };
//       },
//     },

//     deleteContact: (state, action) => {
//       state.list = state.list.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const contactReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactReducer
// );
