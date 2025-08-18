<template>
    <div>
        <div>
            <Titlebg title="International College" breadcrumb="International College" />
            <!-- <pre>{{ college }}</pre> -->
        </div>
        <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
            <div>
                <section class="mb-12">
                    <div class=" flex flex-col justify-center items-start mb-5">
                        <span class="text-usea_secondary text-[2rem] font-bold">ABOUT INTERNATIONAL COLLEGE</span>
                        <div class="h-1 w-[5%] bg-usea_secondary"></div>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="grid grid-cols-[50%_50%] gap-5">
                            
                            <p class="text-justify text-xl">University of South-East Asia (USEA), based in Siem Reap Province, has formally been awarded ACCA Computer Based Examination Centre License on 23 August 2021 and become ACCA become a place for every ACCA student from around the world to take ACCA courses and CBE exams in Siem Reap city. ACCA (The Association of Chartered Certified Accountant) is a global body for profesional accountants, which operates its offices in more than 183 countries around the World.</p>
                            <img :src="demoCard" alt="" class="h-[200px] w-full object-cover">
                        </div>

                        
                        <!-- MISSION, VISION, VALUES Section -->
                        <div class="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
                            <div class="grid grid-cols-2 items-center gap-5 text-white">
                                
                                <div class="bg-blue-500 flex flex-col items-center p-5 rounded-md" data-aos="fade-right">
                                    <div class="text-4xl mb-3">
                                        <i class="fas fa-eye"></i>
                                    </div>
                                    <h3 class="text-xl font-bold mb-5">VISION</h3>
                                </div>
                                <p class="text-justify text-xl text-black" data-aos="fade-left">
                                    The Faculty of Arts, Humanities and Languages aims to become the leading faculty in Cambodia for training students in the arts, humanities, and languages, equipping them with knowledge, skills, and professional attitudes that meet national and international standards.
                                </p>
                            </div>
                            <div class="grid grid-cols-2 items-center gap-5 text-white">
                                <p class="text-justify text-xl text-black" data-aos="fade-right">
                                    Faculty of Arts, Humanities and Languages is committed to educating technical skills, soft skills, and professionalism, which allow graduates to well function in the global economy.
                                </p>
                                <div class="bg-red-500 flex flex-col items-center p-5 rounded-md" data-aos="fade-left">
                                    <div class="text-4xl mb-3">
                                        <i class="fas fa-bullseye"></i>
                                    </div>
                                    <h3 class="text-xl font-bold mb-5">MISSION</h3>
                                </div>
                                
                            </div>
                            <div class="grid grid-cols-2 items-center gap-5 text-white">
                                
                                <div class="bg-usea_secondary flex flex-col items-center p-5 rounded-md" data-aos="fade-right">
                                    <div class="text-4xl mb-3">
                                        <i class="fas fa-gem"></i>
                                    </div>
                                    <h3 class="text-xl font-bold mb-5">Educational Philosophy</h3>
                                </div>
                                <p class="text-justify text-xl text-black" data-aos="fade-left">
                                    We believe that students learn best through questioning, analyzing, and interpreting the world around them.
                                </p>
                            </div>
                            
                        </div>


                    </div>
                </section>

                <!-- Department  -->
                <section class="mb-12 bg-gray-200 p-12 rounded-md">
                    <div class=" flex flex-col justify-center items-start mb-5">
                        <span class="text-usea_secondary text-[2rem] font-bold">PROGRAM</span>
                        <div class="h-1 w-[5%] bg-usea_secondary"></div>
                    </div>
                    <div class="grid grid-cols-3">
                            <div
                            class="group relative max-w-xl text-center mx-auto cursor-pointer overflow-hidden rounded-md"
                            >
                               <router-link :to="{name : 'acca-program'}" class="link">
                                    <img
                                    :src="departmentbg"
                                    alt="Random image"
                                    class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                                    />

                                    <!-- Let hover/click pass through or animate this too -->
                                    <div class="absolute inset-0 bg-gray-700 opacity-60 pointer-events-none group-hover:opacity-40 transition-opacity duration-300"></div>

                                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <h2 class="text-white text-2xl p-3 font-bold">ACCA</h2>
                                    </div>
                               </router-link>
                            </div>
                        
                        
                    </div>
                    
                </section>

                <!-- Faculty's Memeber  -->
                <section class="mb-12">
                    <div class="flex flex-col justify-center items-start mb-5">
                        <span class="text-usea_secondary text-[2rem] font-bold">FACULTY'S MEMBERS</span>
                        <div class="h-1 w-[5%] bg-usea_secondary"></div>
                    </div>
                    <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 mb-5">
                        <div>
                            <div class="overflow-hidden">
                                <img :src="sivvuthy" alt="member" class="w-full h-[250px] object-cover transform transition-transform duration-300 hover:scale-105">
                            </div>
                            <div>
                                <div class="flex flex-col gap-5 p-3">
                                    <span class="text-usea_secondary font-bold text-xl">Dr. Siv Vuthy</span>
                                    <span class="font-bold">Head of International College</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="overflow-hidden">
                                <img :src="toursreyleak" alt="member" class="w-full h-[250px] object-cover transform transition-transform duration-300 hover:scale-105">
                            </div>
                            <div>
                                <div class="flex flex-col gap-5 p-3">
                                    <span class="text-usea_secondary font-bold text-xl">Ms. Tour Sreyleak</span>
                                    <span class="font-bold">Deputy Chief of International College</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <div>
                <RightIC />
            </div>
        </div>
    </div>
    
</template>

<script setup>
import demoCard from '@/assets/images/demoCard.png';
import departmentbg from '@/assets/building/department.png';
import sivvuthy from '@/assets/images/dr_siv_vuthy.png';
import toursreyleak from '@/assets/images/tour_sreyleak.png';
import RightIC from '@/components/SideBar/RightIC.vue';
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';
import Titlebg from '@/components/Slide/TitleBg.vue';
import { colleges } from '@/data/international-college.js';

const route = useRoute();
const router = useRouter();

const programNameParam = computed(() => route.params.programName);
const college = computed(() => colleges[programNameParam.value]);

const goToProgram = (programNameParam) => {
  router.push({ name: 'department-name', params: { programNameParam } });
};

</script>
