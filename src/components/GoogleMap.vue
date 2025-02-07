<template>
    <div class="map-container">
      <iframe
        :src="mapSrc"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="map-frame"
      ></iframe>
    </div>
  </template>
  
  <script setup>
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4645.253498637207!2d103.86180777575952!3d13.350500106456678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311017793e991fc3%3A0x106790c63625b714!2sUniversity%20of%20South-East%20Asia!5e1!3m2!1sen!2skh!4v1738124710082!5m2!1sen!2skh"; // Replace this with your generated embed URL
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .map-frame {
    border: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  