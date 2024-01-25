<template>
  <div id="app">
    <div class="container">
      <div class="main-content">
        <div class="content-left">
          <h1>E2 Visa Video Guide</h1>
          <p>Unlock the secrets to a successful E2 Visa application!</p>

          <!-- Email Capture Form -->
          <form @submit.prevent="submitForm" class="email-form">
            <label for="firstName">First Name:</label>
            <input type="text" v-model="firstName" placeholder="John" required />

            <label for="email">Email:</label>
            <input type="email" v-model="email" placeholder="john@example.com" required />

            <button type="submit">Get Access Now</button>
          </form>

          <!-- Detailed Benefits Section -->
            <div class="benefits">
    <h2>Unlock Exclusive Benefits:</h2>
    <div class="benefit-item">
      <i class="fas fa-check"></i>
      <p>A comprehensive step-by-step guide to navigate through the E2 Visa application process.</p>
    </div>
    <div class="benefit-item">
      <i class="fas fa-check"></i>
      <p>Insider tips on how to save thousands of dollars during the application process.</p>
    </div>
    <div class="benefit-item">
      <i class="fas fa-check"></i>
      <p>Discover the exact amount you should strategically invest to increase your chances of E2 Visa approval.</p>
    </div>
  </div>
          
          <!-- Facebook Ads Disclaimer -->
          <div class="disclaimer">
            <p>* This promotion is not endorsed or affiliated with Facebook Inc. Disclaimer: Results may vary based on individual circumstances.</p>
          </div>
        </div>

        <!-- Image Section on the Right -->
        <div class="content-right">
          <img src="../assets/e2visa.jpg" alt="E2 Visa Guide" />
        </div>
      </div>

      <!-- Footer Section -->
      <div class="footer">
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios';


export default {
  created() {
  console.log('App.vue created');
},
  data() {
    return {
      firstName: '',
      email: '',
    };
  },
  methods: {
     async submitForm() {
      try {
        // Send form data to the Node.js server
        const response = await axios.post('http://e2b.tanamtech.online/submitForm', {
          firstName: this.firstName,
          email: this.email,
        });

        // If the server responds with a success message, navigate to the video page
        if (response.data.success) {

          this.$router.push('/video-page');
        } else {
          console.log('Server responded with an error:', response.data.error);
          // Handle error (e.g., show an error message to the user)
        }
      } catch (error) {
        console.error('An error occurred during form submission:', error);
        // Handle error (e.g., show an error message to the user)
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.main-content {
  display: flex;
  justify-content: space-between;
}

.content-left {
  flex: 1;
  padding: 30px;
  box-sizing: border-box;
}

.content-right {
  flex: 1;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.email-form {
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

.benefits {
  margin-top: 20px;
  text-align: left;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

.benefit-item {
  display: flex;
  align-items: center; /* Center items vertically */
  margin-bottom: 15px;
}

i {
  font-size: 18px;
  color: #4caf50;
  margin-right: 10px;
}

.benefit-item p {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  line-height: 1.6;
}

</style>
