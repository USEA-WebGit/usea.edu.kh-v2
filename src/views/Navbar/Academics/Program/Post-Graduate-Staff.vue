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
                    <div v-if="member.number || member.email" class="flex-col 2xl:flex xl:flex lg:flex md:flex sm:flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row 2xl:gap-5 2xl:mt-5 xl:gap-5 xl:mt-5 lg:gap-5 lg:mt-5 md:gap-5 md:mt-5 sm:gap-5 sm:mt-5">
                        <span v-if="member.number">
                            <i class="fa-solid fa-phone text-blue-500"></i> {{ member.number }}
                        </span>
                        <span v-if="member.email">
                            <i class="fa-solid fa-envelope text-red-500"></i> {{ member.email }}
                        </span>
                    </div>
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
        position: 'Head of Post Graduate ',
        number: '012 234 567',
        email: 'sothan_yoeung@usea.edu.kh'
    },
    {
        image: sorBunthoeun,
        name: 'Mr. Sor Bunthoeun',
        position: 'Deputy Chief of Post Graduate',
        number: '012 345 678',
        email: 'sor_bunthoeun@usea.edu.kh'
    },

]


</script>