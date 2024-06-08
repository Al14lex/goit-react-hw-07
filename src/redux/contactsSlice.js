
import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
      { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
    ],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, phone) {
        return {
          payload: {
            id: nanoid(),
            name,
            phone,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex((contact) => contact.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;