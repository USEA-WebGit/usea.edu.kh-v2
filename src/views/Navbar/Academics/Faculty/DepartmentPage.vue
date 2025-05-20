<template>
    <div>
        <Titlebg :title="department.title" :breadcrumb="department.title" />
         <!-- <pre>{{ department }}</pre> -->
         <!-- <pre>{{ sidebarComponent }}</pre> -->
    </div>
    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div>
            <section class="mb-12">
                <div class="bg-usea_secondary flex flex-col justify-center items-center mb-5">
                    <span class="text-white text-[2rem] font-bold">ABOUT DEPARTMENT</span>
                    <div class="h-1 w-[3%] bg-usea_secondary"></div>
                </div>
                <div class="flex flex-col gap-5">
                    <img :src="department.image" alt="" class="h-[200px] object-cover" />
                    <p class="text-justify">{{ department.description }}</p>
                </div>
            </section>

            <section class="mb-12">
                <div class="bg-usea_secondary flex flex-col justify-center items-center mb-5">
                    <span class="text-white text-[2rem] font-bold">MAJORS</span>
                    <div class="h-1 w-[5%] bg-usea_secondary"></div>
                </div>
                
                <div class="flex 2xl:text-2xl xl:text-xl justify-center mb-8">
                    <button
                        v-for="(tab, index) in availableTabs"
                        :key="index"
                        @click="activeTab = tab"
                        :class="['px-4 py-2 text-gray-600 border-b-4 border-transparent hover:text-red-600 transition-all duration-300 ease-in-out font-bold',
                        activeTab === tab ? 'border-b-red-600 text-red-600' : '']"
                    >
                        {{ tab }}
                    </button>
                </div>
                <div v-if="activeTab === `General Chinese Programs`" class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 mb-5">
                    <div v-for="major in department.majors.courses" :key="major" class="card image-full sm:max-w-sm">
                        <figure><img :src="major.image" alt="overlay image" /></figure>
                        <div class="card-body">
                            <h2 class="card-title mb-2.5 text-white">{{ major.name }}</h2>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === `Associate's Degree`" class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 mb-5">
                    <div v-for="major in department.majors.associate" :key="major" class="card image-full cursor-pointer sm:max-w-sm" @click="goToMajor(major.route)">
                        <figure><img :src="major.image" alt="overlay image" /></figure>
                        <div class="card-body">
                            <h2 class="card-title mb-2.5 text-white">{{ major.name }}</h2>
                        </div>
                    </div>
                </div>

                <div v-if="activeTab === `Bachelor's Degree`" class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 mb-5">
                    <div v-for="major in department.majors.bachelor" :key="major" class="card image-full cursor-pointer sm:max-w-sm" @click="goToMajor(major.route)">
                        <figure><img :src="major.image" alt="overlay image" /></figure>
                        <div class="card-body">
                            <h2 class="card-title mb-2.5 text-white">{{ major.name }}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-12">
                <div class="bg-usea_secondary flex flex-col justify-center items-center mb-5">
                    <span class="text-white text-[2rem] font-bold">DEPARTMENT'S MEMBERS</span>
                    <div class="h-1 w-[5%] bg-usea_secondary"></div>
                </div>
                <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 mb-5">
                    <div v-for="member in department.members" :key="member.name">
                        <div class="overflow-hidden">
                            <img :src="member.image" alt="member" class="w-full h-[250px] object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                        <div>
                            <div class="flex flex-col gap-5 p-3">
                                <span class="text-usea_secondary font-bold text-xl">{{ member.name }}</span>
                                <span class="font-bold">{{ member.position }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="bg-usea_secondary flex flex-col justify-center items-center mb-5">
                    <span class="text-white text-[2rem] font-bold">ACTIVITIES</span>
                    <div class="h-1 w-[5%] bg-usea_secondary"></div>
                </div>
                <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-5">
                    <div v-for="(activity, index) in department.activities" :key="index">
                        <div class="overflow-hidden">
                            <img :src="activity.image" alt="activity" class="w-full object-cover transform transition-transform duration-300 hover:scale-105">
                        </div>
                    </div>
                </div>
            </section>
        </div>
                
        <div>
            <component :is="sidebarComponent"/>
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import { ref, computed, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { departments } from '@/data/department.js';
import DepartmentEnglishSidebar from '@/components/SideBar/Department/DepartEnglish.vue';
import DepartmentChineseSidebar from '@/components/SideBar/Department/DepartChinese.vue';
import DepartmentKhmerSidebar from '@/components/SideBar/Department/DepartKhmer.vue';
const route = useRoute();
const router = useRouter();

// Component mapping for easy scaling
const sidebarComponents = {
  DepartEnglish: DepartmentEnglishSidebar,
  DepartChinese: DepartmentChineseSidebar,
  DepartKhmer: DepartmentKhmerSidebar
};


const departmentNameParam = computed(() => route.params.departmentName);
const department = computed(() => departments[departmentNameParam.value]);

// Get the correct sidebar component
const sidebarComponent = computed(() => {
  return sidebarComponents[department.value?.sidebarComponent] || null;
});


const availableTabs = computed(() => {
    const tabs = [];
    const majors = department.value?.majors;
    if (majors?.courses?.length > 0) tabs.push("General Chinese Programs");
    if (majors?.associate?.length > 0) tabs.push("Associate's Degree");
    if (majors?.bachelor?.length > 0) tabs.push("Bachelor's Degree");
    return tabs;
});

const activeTab = ref();

watchEffect(() => {
    if (!activeTab.value && availableTabs.value.length > 0) {
        activeTab.value = availableTabs.value[0];
    }
});

const goToMajor = (routeName) => {
    router.push({ name: routeName });
};

</script>

