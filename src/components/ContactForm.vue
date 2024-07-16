<template>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-group">
        <label for="firstName" class="form-label">First Name</label>
        <input id="firstName" v-model="contact.firstName" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="lastName" class="form-label">Last Name</label>
        <input id="lastName" v-model="contact.lastName" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input id="email" v-model="contact.email" type="email" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      contact: {
        type: Object,
        required: true
      },
      onSubmit: {
        type: Function,
        required: true
      }
    },
    methods: {
      handleSubmit() {
        this.onSubmit({ ...this.contact });
      }
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 15px;
    margin-right: 15px;
    color: #fff;
  }
  
  .btn-primary {
    background-color: #000000;
    color: #fff;
    border: 1px solid #ffffff;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #00940c;
  }
  </style>
  