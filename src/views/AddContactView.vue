<template>
    <div class="container">
      <h1>Add New Contact</h1>
      <ContactForm :contact="contact" :onSubmit="handleSubmit" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import ContactForm from '../components/ContactForm.vue';
  import store from '../store';
  
  export default {
    setup() {
      const router = useRouter();
      const contact = ref({ firstName: '', lastName: '', email: '', id: Date.now().toString() });
  
      const handleSubmit = (newContact) => {
        store.actions.addContact(newContact);
        router.push('/');
      };
  
      return { contact, handleSubmit };
    },
    components: {
      ContactForm,
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
    color: rgb(255, 255, 255);
  }
  </style>
  