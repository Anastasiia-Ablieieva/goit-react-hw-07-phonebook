import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true
  }
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading:false,
    error: action.payload
  }
};

const handleFetchContacts = (state, action) => {
  return { 
    ...state, 
    isLoading: false, 
    error: null, 
    items: action.payload 
  };
};

const handleAddContact = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  }
};

const handleDeleteContact = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};

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
    }
});

export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState,
//     reducers: {
//         addContact: (state, action) => {
//             state.items.push(action.payload);
//         },
//         deleteContact: (state, action) => {
//           state.items = state.items.filter(item => item.id !== action.payload)
//         }
//     }
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;