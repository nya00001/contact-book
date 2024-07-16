import { reactive, toRefs } from 'vue';

const state = reactive({
  contacts: JSON.parse(localStorage.getItem('contacts')) || [],
});

const saveContacts = () => {
  localStorage.setItem('contacts', JSON.stringify(state.contacts));
};

const actions = {
  addContact(contact) {
    state.contacts.push(contact);
    saveContacts();
  },
  updateContact(updatedContact) {
    const index = state.contacts.findIndex(contact => contact.id === updatedContact.id);
    if (index !== -1) {
      state.contacts.splice(index, 1, updatedContact);
      saveContacts();
    }
  },
  deleteContact(contactId) {
    state.contacts = state.contacts.filter(contact => contact.id !== contactId);
    saveContacts();
  },
};

export default {
  ...toRefs(state),
  actions,
};
