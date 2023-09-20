<template>
    <div>
        <header class="bg-white shadow">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold tracking-tight text-gray-900">All Conctacts</h1>
                <router-link :to="{name: 'Index'}"  class="relative inline-flex items-center justify-start overflow-hidden font-semibold leading-none text-white py-3 px-5 bg-gray-800 rounded hover:bg-gray-700 hover:text-white  font-semibold focus:outline-none">Back to Home</router-link>
              </div>              
            </div>
          </header>

          <main class="bg-white">
            <!-- <div v-if="allusers.loading"  class="flex justify-center">
                <svg  class="animate-spin text-center  h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div> -->
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                   <div class="flex justify-end space-x-4  px-4 py-6">
				<router-link :to="{name: 'NewBackup'}" 
		          class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-800 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
		          <span
		            class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-800 group-hover:h-full"></span>
		          <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
		            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
		              class="w-5 h-5">
		              <path stroke-linecap="round" stroke-linejoin="round"
		                d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
		            </svg>
		          </span>
		          <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
		            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
		              class="w-5 h-5 text-white">
		              <path stroke-linecap="round" stroke-linejoin="round"
		                d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
		            </svg>
		          </span>
		          <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">New Backup</span>
		        </router-link>
                   </div>
                    <table class="w-full text-sm text-left">
                        <thead class="font-semibold  text-gray-900">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                       S/N
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                   Contact Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                   Contact Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date Created
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(contact, ind) in contacts" :key="contact.id" class="bg-white border-b hover:bg-gray-100 animate-fade-in-down" :style="{animationDelay: `${ind * 0.1}s`}">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        {{ ind + 1 }}
                                    </div>
                                </td>
                                <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap font-semibold">
                                    {{ contact.name }}
                                </th>
                                <td class="px-6 py-4 text-gray-900 whitespace-nowrap font-semibold">
                                     {{ contact.email }}
                                </td>
                                <td class="px-6 py-4 text-gray-900 whitespace-nowrap font-semibold">
                                     {{ contact.phone }}
                                </td>
                                <td class="px-6 py-4 text-gray-900 whitespace-nowrap font-semibold">
                                  {{formatDateTime(contact.created_at)}}
                                </td>
                               <td class="pl-4">
                                <button @click="editContact(contact.id)"
                                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-sm leading-none text-white py-3 px-5 bg-gray-800 rounded hover:bg-gray-700 hover:text-white  font-semibold focus:outline-none">Edit</button>    
                              </td>
                               <td>
                                <button  @click="confirmDelete(contact.id)"
                                  class="focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-sm leading-none text-white py-3 px-5 bg-red-800 rounded hover:bg-red-700 hover:text-white  font-semibold focus:outline-none">Delete</button>                              
                              </td>
                            </tr>
    
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</template>


<script>
import moment from 'moment';
import {useToast} from 'vue-toast-notification';

const toast = useToast();

export default {
  data() {
    return {
      contacts: [],
    };
  },
  created() {
    // Fetch the list of contacts from your backend API
    fetch('https://fcontact-api.onrender.com/api/contacts')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch contacts');
        }
      })
      .then((data) => {
        this.contacts = data.contacts; // Assuming the API response contains a 'contacts' array
      })
      .catch((error) => {
        console.error('Error fetching contacts:', error);
        // Handle the error as needed
      });
  },
  methods: {
    formatDateTime(date) {
     return moment(date).fromNow();
    },

    editContact(id) {
      // Redirect to the edit page with the contact ID in the route parameters
      this.$router.push(`/editbackup/${id}`);
    },

    confirmDelete(id) {
      if (confirm('Are you sure you want to delete this contact?')) {
        // Send a DELETE request to your backend API to delete the contact by ID
        fetch(`http://localhost:3000/api/contacts/${id}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.status === 204) {
              // Contact deleted successfully
                toast.danger('deleted successfully', { duration: 3000 });
               this.$router.push('/contactlist'); 
            } else {
              // Handle other status codes or errors
            }
          })
          .catch((error) => {
            console.error('Error deleting contact:', error);
            // Handle unexpected errors here
          });
      }
    },


  },
};
</script>


