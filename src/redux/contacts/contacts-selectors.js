import { createSelector } from '@reduxjs/toolkit';

const contactsAll = state => state.contacts.items;

const isLoadingContacts = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getVisibleContact = createSelector(
  [contactsAll, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  contactsAll,
  isLoadingContacts,
  getFilter,
  getVisibleContact,
};

export default contactsSelectors;
