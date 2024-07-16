<template>
    <div v-if="contact" class="container">
      <h1>{{ contact.firstName }} {{ contact.lastName }}</h1>
      <p>Email: {{ contact.email }}</p>
      <button @click="editContact" class="btn btn-secondary me-2">Edit</button>
      <button @click="deleteContact" class="btn btn-danger me-2">Delete</button>
      <button @click="goHome" class="btn btn-primary">Back to Home</button>
    </div>
    <div v-else class="container">
      <p>Contact not found.</p>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import store from '../store';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const contact = computed(() => store.contacts.value.find(c => c.id === route.params.id));
  
      const editContact = () => {
        router.push(`/edit-contact/${route.params.id}`);
      };
  
      const deleteContact = () => {
        store.actions.deleteContact(route.params.id);
        router.push('/');
      };
  
      const goHome = () => {
        router.push('/');
      };
  
      return { contact, editContact, deleteContact, goHome };
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
    background-color: #000000;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #ffffff;
  }
  
  p {
    font-size: 18px;
    margin-bottom: 20px;
    color: #ffffff;
  }
  
  .btn {
    padding: 10px 20px;
    border: 1px solid #ffffff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-secondary {
    background-color: #6c757d;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
  }
  
  .btn-danger {
    background-color: #dc3545;
    margin-left: 5px;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
  }
  
  .btn-primary {
    background-color: #000000;
    margin-left: 5px;
  }
  
  .btn-primary:hover {
    background-color: #00940c;
  }
  </style>
  