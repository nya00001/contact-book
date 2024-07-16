<template>
    <div>
      <input v-model="searchQuery" class="form-control" placeholder="Search Contacts" />
      <ul class="list-group">
        <ContactItem v-for="contact in filteredContacts" :key="contact.id" :contact="contact" />
      </ul>
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  import ContactItem from './ContactItem.vue';
  import store from '../store';
  
  export default {
    components: {
      ContactItem,
    },
    setup() {
      const searchQuery = ref('');
      const filteredContacts = computed(() => {
        return store.contacts.value
          .filter(contact => contact.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(searchQuery.value.toLowerCase()))
          .sort((a, b) => a.lastName.localeCompare(b.lastName));
      });
  
      return { searchQuery, filteredContacts };
    },
  };
  </script>
  
  <style scoped>
  .form-control {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ced4da;
    border-radius: 4px;
  }
  
  .list-group-item {
    padding: 10px;
    margin-bottom: 5px;
    background-color: #000000;
    border: 1px solid #ced4da;
    border-radius: 4px;
  }
  
  a {
    text-decoration: none;
    color: #ffffff;
  }
  </style>
  