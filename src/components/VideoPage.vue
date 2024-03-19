<template>
  <div class="center-container">
    <h1>Step-by-Step Guide to E2 Visa Application</h1>
    
    <!-- Video Player (Replace with your video player implementation) -->
    <div id="youtube-player"></div>

    <!-- Register Button -->
    <button class="register-button" @click="redirectToOrderPage">Book Your Free Consultation Now</button>
  </div>
</template>

<script>
  /* eslint-disable no-undef */

export default {
  created() {
    console.log('Created - Route:', this.$route); // Log the route object
    this.loadYouTubePlayer();

    document.title = 'E2 Visa Guide';
    // Track Facebook Pixel PageView
    if (typeof fbq !== 'undefined') {
      fbq('track', 'PageView');
    }


  },
 
  data() {
    return {
      videoId: 'oVnms1Dun-A', // Replace with any other ID for testing
    };
  },

  methods: {
    redirectToOrderPage() {
      // Redirect to the specified URL when the button is clicked
      window.location.href = 'https://calendly.com/tanamteche2/30min';
    },

    loadYouTubePlayer() {
      // Load the YouTube IFrame Player API code asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Create a global YT variable
      window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
    },

    onYouTubeIframeAPIReady() {
      // Create an instance of the YouTube player
      new window.YT.Player('youtube-player', {
        videoId: this.videoId,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          // Add any necessary event handlers here
        },
      });
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.register-button {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.register-button:hover {
  background-color: #45a049;
}

#youtube-player {
  width: 560px; /* Adjust width as needed */
  height: 315px; /* Adjust height as needed */
}
</style>
