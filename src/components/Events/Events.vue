<template>
    <div class=" mt-10 mb-10">
        <div class="flex flex-col text-center items-center">
            <div class="text-usea_secondary 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem] font-bold">EVENTS</div>
            <div class="h-1 w-[5%] bg-usea_secondary"></div>
        </div>
        <div class="flex flex-col items-center w-full max-w-md mx-auto mt-5">
            <div class="flex 2xl:text-2xl xl:text-xl justify-center">
                <button
                    v-for="(tab, index) in tabs"
                    :key="index"
                    @click="activeTab = tab"
                    :class="[
                    'px-4 py-2 text-gray-600 border-b-4 border-transparent hover:text-red-600 transition-all duration-300 ease-in-out',
                    activeTab === tab ? 'border-b-red-600 text-red-600' : ''
                    ]"
                >
                    {{ tab }}
                </button>
            </div>
            <div class="mt-4">
                <div v-if="activeTab === 'Upcoming'">
                    <div class="flex gap-5 mb-5">
                        <div class="border-r-2 border-gray-600 pr-5 text-2xl flex items-center font-bold w-[6.25rem]">Oct 16</div>
                        <div>
                            <a href="#">
                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dignissimos qui necessitatibus velit eum est.</div>
                                    <div class="h-1 w-[15%] bg-red-600"></div>
                                    <div class="flex flex-col mt-3">
                                        <span><i class="fa-solid fa-clock"></i> 8:00 am</span>
                                        <span><i class="fa-solid fa-location-dot"></i> Meeting Hall, USEA</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex gap-5 mb-5">
                        <div class="border-r-2 border-gray-600 pr-5 text-2xl flex items-center font-bold w-[6.25rem]">Oct 10</div>
                        <div>
                            <a href="#">
                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dignissimos qui necessitatibus velit eum est.</div>
                                    <div class="h-1 w-[15%] bg-red-600"></div>
                                    <div class="flex flex-col mt-3">
                                        <span><i class="fa-solid fa-clock"></i> 8:00 am</span>
                                        <span><i class="fa-solid fa-location-dot"></i> Meeting Hall, USEA</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex gap-5 mb-5">
                        <div class="border-r-2 border-gray-600 pr-5 text-2xl flex items-center font-bold w-[6.25rem]">Oct 25</div>
                        <div>
                            <a href="#">
                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dignissimos qui necessitatibus velit eum est.</div>
                                    <div class="h-1 w-[15%] bg-red-600"></div>
                                    <div class="flex flex-col mt-3">
                                        <span><i class="fa-solid fa-clock"></i> 8:00 am</span>
                                        <span><i class="fa-solid fa-location-dot"></i> Meeting Hall, USEA</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex gap-5 mb-5">
                        <div class="border-r-2 border-gray-600 pr-5 text-2xl flex items-center font-bold w-[6.25rem]">Oct 21</div>
                        <div>
                            <a href="#">
                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dignissimos qui necessitatibus velit eum est.</div>
                                    <div class="h-1 w-[15%] bg-red-600"></div>
                                    <div class="flex flex-col mt-3">
                                        <span><i class="fa-solid fa-clock"></i> 8:00 am</span>
                                        <span><i class="fa-solid fa-location-dot"></i> Meeting Hall, USEA</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </div>

                <div v-else-if="activeTab === 'Current'">
                    <div class="flex gap-5 mb-5">
                        <div class="border-r-2 border-gray-600 pr-5 text-2xl flex items-center font-bold w-[6.25rem]">Oct 13</div>
                        <div>
                            <a href="#">
                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dignissimos qui necessitatibus velit eum est.</div>
                                    <div class="h-1 w-[15%] bg-red-600"></div>
                                    <div class="flex flex-col mt-3">
                                        <span><i class="fa-solid fa-clock"></i> 8:00 am</span>
                                        <span><i class="fa-solid fa-location-dot"></i> Meeting Hall, USEA</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex gap-5 mb-5">
                        <div class="border-r-2 border-gray-600 pr-5 text-2xl flex items-center font-bold w-[6.25rem]">Oct 10</div>
                        <div>
                            <a href="#">
                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dignissimos qui necessitatibus velit eum est.</div>
                                    <div class="h-1 w-[15%] bg-red-600"></div>
                                    <div class="flex flex-col mt-3">
                                        <span><i class="fa-solid fa-clock"></i> 8:00 am</span>
                                        <span><i class="fa-solid fa-location-dot"></i> Meeting Hall, USEA</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="bg-usea_secondary p-2 rounded-md text-white  hover:bg-white hover:text-usea_secondary hover:border-usea_secondary hover:border">More Events</button>
        </div>
        
</div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ['Upcoming', 'Current'];
const activeTab = ref(tabs[0]); // Default to the first tab
</script>

<style>

</style>