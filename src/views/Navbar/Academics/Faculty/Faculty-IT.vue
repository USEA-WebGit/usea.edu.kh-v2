<template>
    <div>
        <Titlebg title="Faculty of Sciences and Technology" breadcrumb="Faculty of Sciences and Technology" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div>
            <section class="mb-12">
                <div class="bg-usea_secondary flex flex-col justify-center items-center mb-5">
                    <span class="text-white 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem] font-bold">ABOUT FACULTY</span>
                    <div class="h-1 w-[5%] bg-usea_secondary"></div>
                </div>
                <!-- <span class="flex justify-center items-center mb-5 text-2xl font-bold">About Faculty</span> -->
                <div class="flex gap-5">
                    <img :src="demo" alt="">
                    <p class="text-justify">Faculty of Science and Technology will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.</p>
                </div>
            </section>
            <section class="mb-12">
                <div class="bg-usea_secondary flex flex-col justify-center items-center mb-5">
                    <span class="text-white 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem] font-bold">MAJORS</span>
                    <div class="h-1 w-[5%] bg-usea_secondary"></div>
                </div>
                <!-- <span class="flex justify-center items-center mb-5 text-2xl font-bold mt-5">Majors</span> -->
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
                <div v-if="activeTab === `Associate's Degree`" class="grid grid-cols-3 gap-5 mb-5">
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Civil Engineering</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Information Technology</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Mathematics</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === `Bachelor's Degree`" class="grid grid-cols-3 gap-5 mb-5">
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Architecture</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Civil Engineering</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Information Technology</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Mathematics</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === `Master's Degree`" class="grid grid-cols-3 gap-5 mb-5">
                    <div>
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-red-600 font-bold text-xl">Information Technology</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mb-12">
                <div class="bg-usea_secondary flex flex-col justify-center items-center mb-5">
                    <span class="text-white 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem] font-bold">FACULTY'S MEMBERS</span>
                    <div class="h-1 w-[5%] bg-usea_secondary"></div>
                </div>
                <!-- <span class="flex justify-center items-center mb-5 text-2xl font-bold mt-5">Faculty's Staff</span> -->
                <div class="grid grid-cols-4 gap-10 mb-5">
                    <div>
                        <div class="overflow-hidden">
                            <img :src="sokngim" alt="test" class="w-full h-[250px] object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-usea_secondary font-bold text-xl">Ms. Sa Sokngim</span>
                                <span class="font-bold">Dean of Faculty of Science and Technology</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="bunhours" alt="test" class="w-full h-[250px] object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-usea_secondary font-bold text-xl">Mr. Son Bunhours</span>
                                <span class="font-bold">Head of Academic Office</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="sovattana" alt="test" class="w-full h-[250px] object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-usea_secondary font-bold text-xl">Ms. Koy Sovattana</span>
                                <span class="font-bold">Deputy Head of Student​ and Examination Affairs</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="overflow-hidden">
                            <img :src="meas" alt="test" class="w-full h-[250px] object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-usea_secondary font-bold text-xl">Mr. Mi Meas</span>
                                <span class="font-bold">Staff of Student's Affair</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="bg-usea_secondary flex flex-col justify-center items-center mb-5">
                    <span class="text-white 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem] font-bold">ACTIVITIES</span>
                    <div class="h-1 w-[5%] bg-usea_secondary"></div>
                </div>
                <!-- <span class="flex justify-center items-center mb-5 text-2xl font-bold mt-5">Activities</span> -->
                <div class="grid grid-cols-4 gap-4 mb-5">
                    <div v-for="n in 8" :key="n">
                        <div class="overflow-hidden">
                            <img :src="demo" alt="test" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div>
            <RightNavIT />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightNavIT from '@/components/SideBar/RightNavIT.vue';
import demo from '@/assets/images/demoCard.png';
import sokngim from '@/assets/images/sa_sokngim.png';
import bunhours from '@/assets/images/son_bunhours.png';
import sovattana from '@/assets/images/koy_sovattana.png';
import meas from '@/assets/images/mi_meas.png';
import { ref } from 'vue';

const tabs = ["Associate's Degree", "Bachelor's Degree", "Master's Degree"];
const activeTab = ref(tabs[0]);
</script>