<template>
    <div>
        <Titlebg title="News-Events" breadcrumb="News-Events" />
    </div>
    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div>
            <div class="mt-10 mb-10">
                <div class="flex 2xl:text-2xl xl:text-xl justify-center mb-8">
                    <button
                        v-for="(tab, index) in tabs"
                        :key="index"
                        @click="activeTab = tab"
                        :class="[
                        'px-4 py-2 text-gray-600 border-b-4 border-transparent hover:text-red-600 transition-all duration-300 ease-in-out font-bold',
                        activeTab === tab ? 'border-b-red-600 text-red-600' : ''
                        ]"
                    >
                        {{ tab }}
                    </button>
                </div>
                <div v-if="activeTab === 'All'" class="grid 2xl:2xl:grid-cols-3 gap-5">
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">News</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                            <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">News</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                           <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Events</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                           <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">News</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                           <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Events</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                           <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">News</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                           <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === 'News'" class="grid 2xl:grid-cols-3 gap-5">
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">News</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                            <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">News</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                           <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">News</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                           <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">News</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                           <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === 'Current'" class="grid 2xl:grid-cols-3 gap-5">
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Current</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                           <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === 'Upcoming'" class="grid 2xl:grid-cols-3 gap-5">
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Upcoming</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                            <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Upcoming</span>
                                <span>AI and Simulation Lab Inauguration: A New Hub for Cutting-Edge Research and Innovation</span>
                                <div class="flex gap-5">
                                    <span><i class="fa-regular fa-calendar"></i> 24-Oct-2024</span>
                                    <span><i class="fa-regular fa-clock"></i> 1:30pm-4:00pm</span>
                                </div>
                            </div>
                           <button class="bg-red-600 p-2 rounded-md text-white mt-10 ">Read More</button>
                        </div>
                    </div>
                </div>
                
           </div>
           
        </div>
        <div>
            <RightNav />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightNav from '@/components/SideBar/Right-Nav.vue';
import demo from '@/assets/images/demoCard.png';
import { ref } from 'vue';

const tabs = ['All', 'News', 'Current', 'Upcoming'];
const activeTab = ref(tabs[0]);
</script>