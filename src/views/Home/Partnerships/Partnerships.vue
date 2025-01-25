<template>
    <div class="h-[31.25rem] bg-gray-300">
        <div class="py-16 mx-8">
            <!-- Title Section -->
            <div class="flex flex-col mb-16 text-center items-center">
                <h1 class="text-usea_secondary 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem] font-bold text-nowrap">OUR PARTNERS</h1>
                <div class="h-1 w-[5%] bg-usea_secondary"></div>
            </div>
            
            <!-- Carousel Section -->
            <div class="relative">
                <div
                    class="flex gap-8 items-center overflow-x-auto no-scrollbar"
                    ref="carousel"
                >
                    <img
                        v-for="(logo, index) in logos"
                        :key="index"
                        :src="logo"
                        alt="Partner Logo"
                        class="2xl:w-36 2xl:h-36 xl:w-36 xl:h-36 lg:w-30 lg:h-30 md:w-28 md:h-28 w-25 h-25 object-contain flex-shrink-0"
                    />
                </div>
                
                <!-- Left and Right Arrows -->
                <button
                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700"
                    @click="scrollLeft"
                >
                    ‹
                </button>
                <button
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700"
                    @click="scrollRight"
                >
                    ›
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Importing logo images
import knu from '@/assets/partnerships/knu.png';
import kasetsart from '@/assets/partnerships/ku.png';
import acca from '@/assets/partnerships/acca.png';
import srru from '@/assets/partnerships/ku.png';
import fwd from '@/assets/partnerships/acca.png';
import peppy from '@/assets/partnerships/knu.png';
import rwi from '@/assets/partnerships/acca.png';
import worldBank from '@/assets/partnerships/knu.png';
import dfc from '@/assets/partnerships/acca.png';
import ke from '@/assets/partnerships/ku.png';
import dwd from '@/assets/partnerships/acca.png';
import cte from '@/assets/partnerships/ku.png';

// List of partner logos
const logos = [knu, kasetsart, acca, srru, fwd, peppy, rwi, worldBank, dfc, ke, dwd, cte];

// Carousel scroll function
const carousel = ref(null);

const scrollLeft = () => {
    if (carousel.value) {
        carousel.value.scrollBy({ left: -200, behavior: 'smooth' });
    }
};

const scrollRight = () => {
    if (carousel.value) {
        carousel.value.scrollBy({ left: 200, behavior: 'smooth' });
    }
};
</script>

<style scoped>
/* Hide default scrollbar */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>
