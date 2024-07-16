<template>
    <li class="list-group-item">
      <router-link :to="`/contact/${contact.id}`">{{ contact.lastName }}, {{ contact.firstName }}</router-link>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      contact: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
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

  .list-group-item:hover {
    background-color: #00940c;
  }



  </style>
  