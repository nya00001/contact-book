<template>
    <div v-if="contact" class="card">
      <div class="card-body">
        <h2 class="card-title">{{ contact.firstName }} {{ contact.lastName }}</h2>
        <p class="card-text">Email: {{ contact.email }}</p>
        <button @click="editContact" class="btn secondary me-2">Edit</button>
        <button @click="deleteContact" class="btn danger">Delete</button>
      </div>
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
      const contact = computed(() => store.state.contacts.find(c => c.id === route.params.id));
  
      const editContact = () => {
        router.push(`/edit-contact/${route.params.id}`);
      };
  
      const deleteContact = () => {
        store.actions.deleteContact(route.params.id);
        router.push('/');
      };
  
      return { contact, editContact, deleteContact };
    },
  };
  </script>
  
  <style scoped>
  .card {
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .card-text {
    margin-bottom: 20px;
  }
  
  .btn {
    padding: 10px 20px;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn.secondary {
    background-color: #6c757d;
  }
  
  .btn.secondary:hover {
    background-color: #5a6268;
  }
  
  .btn.danger {
    background-color: #dc3545;
  }
  
  .btn.danger:hover {
    background-color: #c82333;
  }
  </style>
  