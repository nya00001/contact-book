<template>
    <div class="container">
      <h1>Contact Book</h1>
      <router-link to="/add-contact" class="btn btn-primary mb-4">Add Contact</router-link>
      <ContactList />
    </div>
  </template>
  
  <script>
  import ContactList from '../components/ContactList.vue';
  
  export default {
    components: {
      ContactList,
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
    color: #fff;
  }
  
  .btn {
    padding: 10px 20px;
    border: 1px solid #ffffff;
    background-color: #000000;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 15px;
  }
  
  .btn:hover {
    background-color: #2a8506;
  }
  </style>
  