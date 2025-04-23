<template>
    <div>
        <Titlebg title="Faculty Staff" breadcrumb="Faculty Staff" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div class="flex flex-col gap-10 mb-10">
            <div v-for="(staff, index) in staffs" :key="index" class="flex gap-10 overflow-hidden">
                <img :src="staff.img" alt="img" class="2xl:w-1/4 motion-preset-slide-right object-cover transform transition-transform duration-300 hover:scale-105 rounded-md">
                <div class="flex flex-col motion-preset-slide-left ">
                    <span class="text-2xl font-bold">{{ staff.name }}</span>
                    <div class="h-[1px] w-[50%] bg-gray-500 my-3"></div>
                    <span class="font-bold">{{ staff.position }}</span>
                    <span>{{ staff.number }}</span>
                    <span>{{ staff.email }}</span>
                </div>
            </div>
        </div>
        
        
        <div>
            <RightLanguage />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightLanguage from '@/components/SideBar/RightLanguage.vue';
import ripeng from '@/assets/images/roem_ripeng.png';


const staffs = [
    {
        id: '1',
        img: ripeng,
        name: 'Mr. Reom Ripeng',
        position: 'Director of Foreign Language Institute and Deputy Head of Department of Quality Assurance',
        number: '012 345 678',
        email: 'reomripeng@usea.edu.kh'
    },
    
    

]

</script>