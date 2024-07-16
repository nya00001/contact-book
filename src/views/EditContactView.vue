<template>
    <div v-if="contact" class="container">
      <h1>Edit Contact</h1>
      <ContactForm :contact="contact" :onSubmit="handleSubmit" />
    </div>
    <div v-else class="container">
      <p>Contact not found.</p>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import ContactForm from '../components/ContactForm.vue';
  import store from '../store';
  
  export default {
    components: {
      ContactForm,
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      const contact = computed(() => store.contacts.value.find(c => c.id === route.params.id));
  
      const handleSubmit = (updatedContact) => {
        store.actions.updateContact(updatedContact);
        router.push(`/contact/${updatedContact.id}`);
      };
  
      return { contact, handleSubmit };
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
  </style>
  