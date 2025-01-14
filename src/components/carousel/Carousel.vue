<template>
    <div class="relative overflow-hidden w-full h-auto">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div v-for="(image, index) in images" :key="index" class="flex-none w-full h-full">
          <img :src="image" class="w-full h-full object-cover" />
        </div>
      </div>
      
      <!-- Navigation Buttons -->
      <button
        class="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        @click="prevSlide"
      >
        ❮
      </button>
      <button
        class="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        @click="nextSlide"
      >
        ❯
      </button>
  
      <!-- Indicators -->
      <div class="absolute 2xl:bottom-0 bottom-0 left-0 right-0 flex justify-center space-x-2 p-2">
        <button
          v-for="(image, index) in images"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'w-3 h-3 rounded-full',
            activeIndex === index ? 'bg-white' : 'bg-gray-400'
          ]"
        ></button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const images = [
    'https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg',
    'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
    'https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg',
  ];
  
  const activeIndex = ref(0);
  
  const nextSlide = () => {
    if (activeIndex.value < images.length - 1) {
      activeIndex.value += 1;
    } else {
      activeIndex.value = 0;
    }
  };
  
  const prevSlide = () => {
    if (activeIndex.value > 0) {
      activeIndex.value -= 1;
    } else {
      activeIndex.value = images.length - 1;
    }
  };
  
  const goToSlide = (index) => {
    activeIndex.value = index;
  };
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  