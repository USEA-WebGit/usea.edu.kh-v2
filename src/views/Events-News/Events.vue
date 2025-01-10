<template>
    <div class="grid grid-cols-[70%_30%] gap-3 mx-32">
      <!-- Latest News Section -->
      <LatestNews />
      <!-- Events Section -->
      <Events />
    </div>

  </template>
  
  <script setup>
  import LatestNews from '../../components/Events/LatestNews.vue';
  import Events from '../../components/Events/Events.vue';
  </script>
  