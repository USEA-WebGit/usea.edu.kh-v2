<template>
    <div>
        <Titlebg title="Faculty Staff" breadcrumb="Faculty Staff" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div class="flex flex-col gap-10 mb-10">
            <div v-for="(member, index) in facultyMembers.members" :key="index" class="flex gap-10 overflow-hidden">
                <img :src="member.image" alt="img" class="2xl:w-1/4 motion-preset-slide-right object-cover transform transition-transform duration-300 hover:scale-105 rounded-md">
                <div class="flex flex-col motion-preset-slide-left ">
                    <span class="text-2xl font-bold">{{ member.name }}</span>
                    <div class="h-[1px] w-[50%] bg-gray-500 my-3"></div>
                    <span class="font-bold">{{ member.position }}</span>
                    <span>{{ member.number }}</span>
                    <span>{{ member.email }}</span>
                </div>
            </div>
        </div>
        
        
        <div>
            <component :is="facultyMembers.sidebarComponent" />
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Titlebg from '@/components/Slide/TitleBg.vue';
import { faculties } from '@/data/faculty.js';
import { computed } from 'vue';
const route = useRoute();
 
const facultyStaffParam = computed(() => decodeURIComponent(route.params.facultyStaff));
const facultyMembers = computed(() => faculties[facultyStaffParam.value]);


</script>