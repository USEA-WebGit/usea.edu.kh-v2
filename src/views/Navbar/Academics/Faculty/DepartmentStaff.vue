<template>
    <div>
        <Titlebg title="Department Staff" breadcrumb="Department Staff" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div class="flex flex-col gap-10 mb-10">
            <div v-for="(member, index) in department.members" :key="index" class="flex gap-10 overflow-hidden">
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
            <component :is="sidebarComponent" />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import { departments } from '@/data/department.js';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DepartmentEnglishSidebar from '@/components/SideBar/Department/DepartEnglish.vue';
import DepartmentChineseSidebar from '@/components/SideBar/Department/DepartChinese.vue';
import DepartmentKhmerSidebar from '@/components/SideBar/Department/DepartKhmer.vue';
import DepartmentITSidebar from '@/components/SideBar/Department/DepartIT.vue';
import DepartmentArchitectureSidebar from '@/components/SideBar/Department/DepartArchitecture.vue';
import DepartmentBusinessSidebar from '@/components/SideBar/Department/DepartBusiness.vue';
import DepartmentTourismSidebar from '@/components/SideBar/Department/DepartTourism.vue';
import DepartmentEconomicSidebar from '@/components/SideBar/Department/DepartEconomic.vue';
import DepartmentLawsSidebar from '@/components/SideBar/Department/DepartLaws.vue';
import DepartmentSocialScienceSidebar from '@/components/SideBar/Department/DepartSocialScience.vue';
const route = useRoute();
const router = useRouter();

// Component mapping for easy scaling
const sidebarComponents = {
  DepartEnglish: DepartmentEnglishSidebar,
  DepartChinese: DepartmentChineseSidebar,
  DepartKhmer: DepartmentKhmerSidebar,
  DepartIT:DepartmentITSidebar,
  DepartArchitecture: DepartmentArchitectureSidebar,
  DepartBusiness: DepartmentBusinessSidebar,
  DepartTourism: DepartmentTourismSidebar,
  DepartEconomic: DepartmentEconomicSidebar,
  DepartLaws: DepartmentLawsSidebar,
  DepartSocialScience: DepartmentSocialScienceSidebar,
};


const departmentNameParam = computed(() => route.params.departmentStaff);
const department = computed(() => departments[departmentNameParam.value]);

// Get the correct sidebar component
const sidebarComponent = computed(() => {
  return sidebarComponents[department.value?.sidebarComponent] || null;
});

</script>