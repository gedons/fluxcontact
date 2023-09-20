<template>
    <div>
        <header class="bg-white shadow">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold tracking-tight text-gray-900">Create New Backup</h1>
                <router-link :to="{name: 'ContactList'}"  class="relative inline-flex items-center justify-start overflow-hidden font-semibold leading-none text-white py-3 px-5 bg-gray-800 rounded hover:bg-gray-700 hover:text-white  font-semibold focus:outline-none">Go Back</router-link>
              </div>              
            </div>
          </header>

          <main class="bg-white">
         
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">                           
                   <form @submit.prevent="updateContact" class="animate-fade-in-down">
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                          <!-- Package fields -->
                          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">                             
      
                              <!-- name -->
                              <div>
                                <label for="name" class="block text-sm font-medium text-gray-700"
                                  >Contact Name</label
                                >
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  v-model="editedContact.name"	
                                  required =""
                                  autocomplete="name"
                                  class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  placeholder="Name"
                                />
                              </div>
                              <!-- /name -->        


                              <!-- email -->
                              <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"
                                  >Contact Email</label
                                >
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  required =""
                               	  v-model="editedContact.email"
                                  autocomplete="email"
                                  class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  placeholder="Email"
                                />
                              </div>
                              <!-- /email -->      

                               <!-- phone -->
                              <div>
                                <label for="phone" class="block text-sm font-medium text-gray-700"
                                  >Phone Number</label
                                >
                                <input
                                  type="number"
                                  name="phone"
                                  id="phone"
                                  required =""
                                  v-model="editedContact.phone"
                                  autocomplete="phone"
                                  class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  placeholder="Phone"
                                />
                              </div>
                              <!-- /email -->                              
                                  
                              
                              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                               <button :disabled="loading" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow text-sm font-medium rounded-md text-gray-200 hover:text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Update</span>
                              </button>
                              </div>
                          </div>
                  </div>
              </form>
                </div>
            </div>
        </main>
    </div>
</template>


<script>
import {useToast} from 'vue-toast-notification';

const toast = useToast();
export default {
  data() {
    return {
      editedContact: {
        name: '',
        email: '',
        phone: '',
      },
       loading: false,
    };
  },
  created() {
    // Fetch the contact details for editing
    const id = this.$route.params.id; // Get the contact ID from the route parameters
    
    fetch(`http://localhost:3000/api/contacts/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch contact details for editing');
        }
      })
      .then((data) => {
        // Populate the form fields with the fetched contact details
        this.editedContact = data.contact;
      })
      .catch((error) => {
        console.error('Error fetching contact details for editing:', error);
        // Handle errors as needed
      });
  },
  methods: {
    updateContact() {
       this.loading = true;
      const id = this.$route.params.id; // Get the contact ID from the route parameters
      
      // Send a PUT request to update the contact details
      fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.editedContact),
      })
        .then((response) => {
          if (response.status === 200) {
            // Contact updated successfully
            toast.success('updated successfully', { duration: 3000 });
          } else {
            // Handle errors here, e.g., display an error message to the user
          }
        })
        .catch((error) => {
          console.error('Error updating contact:', error);
          // Handle unexpected errors here
        })
        .finally(() => {
          this.loading = false; 
        });
    },
  },
};
</script>

