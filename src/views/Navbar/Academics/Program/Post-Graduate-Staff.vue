<template>
    <div>
        <Titlebg title="International College Staff" breadcrumb="International College Staff" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div class="flex flex-col gap-10 mb-10 rounded-md">
            <div v-for="(member, index) in collegeStaffs" :key="index" class="flex gap-10 overflow-hidden rounded-md">
                <img :src="member.image" alt="img" class="motion-preset-slide-right 2xl:w-1/3 xl:[50%] h-[350px] object-cover transform transition-transform duration-300 hover:scale-105 rounded-md">
                <div class="flex flex-col motion-preset-slide-left ">
                    <span class="text-2xl font-bold">{{ member.name }}</span>
                    <div class="h-[1px] w-[50%] bg-gray-500 my-3"></div>
                    <span class="font-bold">{{ member.position }}</span>
                </div>
            </div>
        </div>
        
        
        <div>
            <RightPostGraduate />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightPostGraduate from '@/components/SideBar/RightPostGraduate.vue';
import drSothan from '@/assets/images/dr_sothan.png';
import sorBunthoeun from '@/assets/images/sor_bunthoeun.png';

const collegeStaffs = [
    {
        image: drSothan,
        name: 'Dr. Yoeung Sothan',
        position: 'Head of Post Graduate '
    },
    {
        image: sorBunthoeun,
        name: 'Mr. Sor Bunthoeun',
        position: 'Deputy Chief of Post Graduate'
    },

]


</script>