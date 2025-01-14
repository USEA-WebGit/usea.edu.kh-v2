<template>
    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-12 mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px]">
      <!-- Latest News Section -->
      <LatestNews />
      <!-- Events Section -->
      <Events />
    </div>

  </template>
  
<script setup>
  import LatestNews from '../../../components/Events/LatestNews.vue';
  import Events from '../../../components/Events/Events.vue';
</script>