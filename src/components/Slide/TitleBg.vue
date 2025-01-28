<template>
    <div>
      <div class="carousel slide">
        <div class="carousel-inner relative">
          <div>
            <img :src="BG" class="w-full h-[250px] object-cover">
            <div class="carousel-caption d-md-block text-center absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
              <h1 class="font-bold text-lg sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-white">{{ title }}</h1>
              <div class="w-14 lg:w-20 border-b-2 lg:border-b-4 border-b-white mx-auto my-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center py-4 overflow-x-auto whitespace-nowrap mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px]">
            <router-link :to="{name: 'Home'}" class="text-gray-600 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </router-link>
            <span class="mx-5 text-gray-600 dark:text-gray-300">
                /
            </span>

            <a href="#" class="text-gray-600 hover:underline font-bold">
                {{ breadcrumb }}
            </a>
        </div>
    </div>
  </template>
  
  <script setup>
  import BG from '@/assets/images/title-bg.png';

  const props = defineProps({
    title: String,
    breadcrumb: String
  })
  </script>
  
  <style scoped>
  .carousel-inner {
    position: relative;
  }
  
  .carousel-inner img {
    opacity: 1;
    z-index: 1;
  }
  
  .carousel-caption {
    z-index: 10;
  }
  </style>
  