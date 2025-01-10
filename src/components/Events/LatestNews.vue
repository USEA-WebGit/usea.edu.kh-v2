<template>
    <div class="text-center mt-10 mb-10">
        <div class="flex flex-col mb-10 text-center items-center">
            <h1 class="text-red-600 text-[2.5rem] font-bold">LATEST NEWS</h1>
            <div class="h-1 w-[5%] bg-red-600"></div>
        </div>
        <div class="grid grid-cols-2 gap-10 text-center mb-10">
            <!-- Card 1 -->
            <div class="overflow-hidden">
                <img 
                    :src="Cat" 
                    alt="News Image" 
                    class="w-full h-60 object-cover transform transition-transform duration-300 hover:scale-105"
                >
                <a href="#">
                    <div class="mt-4 p-2">
                        <p class="text-gray-700 text-justify hover:text-red-600">
                        The South East Asia University Career Center, in partnership with USAID DWD Digital Workforce Development, was established to engage higher education institutions (HEIs).
                        </p>
                        <div class="flex mt-2 text-sm text-gray-500 gap-3 border-t-2 pt-2">
                        <span class="text-red-600"><i class="fa-solid fa-calendar-days"></i> October 20, 2024</span> 
                        <span><i class="fa-solid fa-clock"></i> 8:00 am</span> 
                        <span><i class="fa-solid fa-location-dot"></i> Meeting Hall, USEA</span>
                        </div>
                    </div>
                </a>
            </div>


            <!-- Card 2 -->
            <div class="overflow-hidden">
                <img 
                    :src="Cat" 
                    alt="News Image" 
                    class="w-full h-60 object-cover transform transition-transform duration-300 hover:scale-105"
                >
                <a href="#">
                    <div class="mt-4 p-2">
                        <p class="text-gray-700 text-justify hover:text-red-600">
                        The South East Asia University Career Center, in partnership with USAID DWD Digital Workforce Development, was established to engage higher education institutions (HEIs).
                        </p>
                        <div class="flex mt-2 text-sm text-gray-500 gap-3 border-t-2 pt-2">
                        <span class="text-red-600"><i class="fa-solid fa-calendar-days"></i> October 20, 2024</span> 
                        <span><i class="fa-solid fa-clock"></i> 8:00 am</span> 
                        <span><i class="fa-solid fa-location-dot"></i> Meeting Hall, USEA</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Card 3 -->
            <div class="overflow-hidden">
                <img 
                    :src="Cat" 
                    alt="News Image" 
                    class="w-full h-60 object-cover transform transition-transform duration-300 hover:scale-105"
                >
                <a href="#">
                    <div class="mt-4 p-2">
                        <p class="text-gray-700 text-justify hover:text-red-600">
                        The South East Asia University Career Center, in partnership with USAID DWD Digital Workforce Development, was established to engage higher education institutions (HEIs).
                        </p>
                        <div class="flex mt-2 text-sm text-gray-500 gap-3 border-t-2 pt-2">
                        <span class="text-red-600"><i class="fa-solid fa-calendar-days"></i> October 20, 2024</span> 
                        <span><i class="fa-solid fa-clock"></i> 8:00 am</span> 
                        <span><i class="fa-solid fa-location-dot"></i> Meeting Hall, USEA</span>
                        </div>
                    </div>
                </a>
            </div>


            <!-- Card 4 -->
            <div class="overflow-hidden">
                <img 
                    :src="Cat" 
                    alt="News Image" 
                    class="w-full h-60 object-cover transform transition-transform duration-300 hover:scale-105"
                >
                <a href="#">
                    <div class="mt-4 p-2">
                        <p class="text-gray-700 text-justify hover:text-red-600">
                        The South East Asia University Career Center, in partnership with USAID DWD Digital Workforce Development, was established to engage higher education institutions (HEIs).
                        </p>
                        <div class="flex mt-2 text-sm text-gray-500 gap-3 border-t-2 pt-2">
                        <span class="text-red-600"><i class="fa-solid fa-calendar-days"></i> October 20, 2024</span> 
                        <span><i class="fa-solid fa-clock"></i> 8:00 am</span> 
                        <span><i class="fa-solid fa-location-dot"></i> Meeting Hall, USEA</span>
                        </div>
                    </div>
                </a>
            </div>

        </div>
        <button class="text-center bg-red-600 p-2 rounded-md text-white hover:bg-red-500">More News</button>
        

    </div>
</template>

<script setup>
import Cat from '../../assets/images/cat.jpg';
</script>

<style>

</style>