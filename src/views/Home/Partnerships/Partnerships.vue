<template>
  <div class="h-[30rem] overflow-hidden">
    <div class="py-16 mx-8">
      <!-- Title Section -->
      <div class="flex flex-col mb-16 text-center items-center">
        <h1 class="text-usea_secondary 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem] font-bold text-nowrap">OUR PARTNERS</h1>
        <div class="h-1 w-[5%] bg-usea_secondary"></div>
      </div>

      <!-- Infinite Logo Carousel -->
      <div class="relative w-full overflow-hidden">
        <div class="flex animate-infinite-scroll whitespace-nowrap">
          <img v-for="(logo, index) in duplicatedLogos" :key="index" :src="logo" alt="Partner Logo" class="2xl:w-48 xl:w-48 lg:w-30 md:w-28 w-24 h-24 object-contain flex-shrink-0 mx-5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Importing logo images
import knu from '@/assets/partnerships/knu.png';
import ku from '@/assets/partnerships/ku.png';
import acca from '@/assets/partnerships/acca.png';
import ke from '@/assets/partnerships/ke.png';
import aiac from '@/assets/partnerships/aiac-logo.svg';
import shinhanBank from '@/assets/partnerships/shinhan-logo.png';

// Just 6–8 logos
const logos = [knu, ku, acca, aiac, ke, shinhanBank];

// Duplicate the array manually for seamless loop
const duplicatedLogos = computed(() => [...logos, ...logos]);
</script>

<style scoped>
@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 25s linear infinite;
}
</style>
