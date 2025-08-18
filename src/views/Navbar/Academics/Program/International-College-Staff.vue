<template>
    <div>
        <Titlebg title="International College Staff" breadcrumb="International College Staff" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 round-md">
        <div class="flex flex-col gap-10 mb-10">
            <div v-for="(member, index) in collegeStaffs" :key="index" class="flex gap-10 overflow-hidden">
                <img :src="member.image" alt="img" class="motion-preset-slide-right 2xl:w-1/3 xl:[50%] h-[350px] object-cover transform transition-transform duration-300 hover:scale-105 rounded-md">
                <div class="flex flex-col motion-preset-slide-left ">
                    <span class="text-2xl font-bold">{{ member.name }}</span>
                    <div class="h-[1px] w-[50%] bg-gray-500 my-3"></div>
                    <span class="font-bold">{{ member.position }}</span>
                </div>
            </div>
        </div>
        
        
        <div>
            <RightIC />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightIC from '@/components/SideBar/RightIC.vue';
import sivvuthy from '@/assets/images/dr_siv_vuthy.png';
import tourSreyLeak from '@/assets/images/tour_sreyleak.png';

const collegeStaffs = [
    {
        image: sivvuthy,
        name: 'Dr. Siv Vuthy',
        position: 'Head of International College'
    },
    {
        image: tourSreyLeak,
        name: 'Ms. Tour Sreyleak',
        position: 'Deputy Chief of International College'
    },

]


</script>