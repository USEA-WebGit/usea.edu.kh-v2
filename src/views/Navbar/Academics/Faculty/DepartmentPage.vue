<template>
    <div>
        <Titlebg :title="department.title" :breadcrumb="department.title" />
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
                    <p class="text-justify text-xl">{{ department.description }}</p>
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
                    <div
                        class="group relative max-w-xl text-center mx-auto cursor-pointer overflow-hidden rounded-md"
                       @click="goToMajor(major.params.majorDepartment, major.params.majorDegree, major.params.majorName)"
                        v-for="major in department.majors.general" :key="major.name"
                    >
                        <img
                        :src="major.image"
                        alt="Random image"
                        class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                        />

                        <!-- Let hover/click pass through or animate this too -->
                        <div class="absolute inset-0 bg-gray-700 opacity-60 pointer-events-none group-hover:opacity-40 transition-opacity duration-300"></div>

                        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <h2 class="text-white text-2xl p-3 font-bold">{{ major.name }}</h2>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === `Associate's Degree`" class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 mb-5">
                    <div
                        class="group relative max-w-xl text-center mx-auto cursor-pointer overflow-hidden rounded-md"
                       @click="goToMajor(major.params.majorDepartment, major.params.majorDegree, major.params.majorName)"
                        v-for="major in department.majors.associate" :key="major.name"
                    >
                        <img
                        :src="major.image"
                        alt="Random image"
                        class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                        />

                        <!-- Let hover/click pass through or animate this too -->
                        <div class="absolute inset-0 bg-gray-700 opacity-60 pointer-events-none group-hover:opacity-40 transition-opacity duration-300"></div>

                        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <h2 class="text-white text-2xl p-3 font-bold">{{ major.name }}</h2>
                        </div>
                    </div>
                </div>

                <div v-if="activeTab === `Bachelor's Degree`" class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 mb-5">
                    

                    <div
                        class="group relative max-w-xl text-center mx-auto cursor-pointer overflow-hidden rounded-md"
                       @click="goToMajor(major.params.majorDepartment, major.params.majorDegree, major.params.majorName)"
                        v-for="major in department.majors.bachelor" :key="major.name"
                    >
                        <img
                        :src="major.image"
                        alt="Random image"
                        class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                        />

                        <!-- Let hover/click pass through or animate this too -->
                        <div class="absolute inset-0 bg-gray-700 opacity-60 pointer-events-none group-hover:opacity-40 transition-opacity duration-300"></div>

                        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <h2 class="text-white text-2xl p-3 font-bold">{{ major.name }}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-12">
                <div class="bg-usea_secondary flex flex-col justify-center items-center mb-5">
                    <span class="text-white text-[2rem] font-bold">DEPARTMENT'S MEMBERS</span>
                    <div class="h-1 w-[5%] bg-usea_secondary"></div>
                </div>
                <div
            class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 mb-5"
          >
            <div v-for="member in department.members" :key="member.name">
              <div class="overflow-hidden rounded-md relative">
                <img
                  :src="member.image"
                  alt="member"
                  class="w-full h-[350px] object-cover transform transition-transform duration-300 hover:scale-105 rounded-md"
                />
                <div class="absolute h-[60px] w-full top-[85%] bg-usea_secondary opacity-50 pointer-events-none group-hover:opacity-40 transition-opacity duration-300"></div>
                <div class="absolute w-full top-[88%] text-center">
                    <span class="text-white font-bold text-xl">{{
                        member.name
                    }}</span>
                </div>
              </div>
              
              <div class="mt-3">
                <span class="font-bold">{{ member.position }}</span>
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
                
        <!-- Sidebar -->
        <div>
            <DepartmentSidebar
            :departmentKey="departmentNameParam"
            :routes="{ aboutDept: 'department-name', deptStaff: 'faculty-staff-language', major: 'major-name' }"
            :paramKeys="{ departmentName: 'departmentName', departmentStaff: 'departmentStaff', majorDepartment: 'majorDepartment', majorDegree: 'majorDegree', majorName: 'majorName' }"
            :collapseOnMobile="true"
            />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import { ref, computed, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { departments } from '@/data/department.js';
import DepartmentSidebar from '@/components/SideBar/Department/DepartmentSidebar.vue'; // ✅ NEW

const route = useRoute();
const router = useRouter();

const departmentNameParam = computed(() => route.params.departmentName);
const department = computed(() => departments[departmentNameParam.value]);

const availableTabs = computed(() => {
  const tabs = [];
  const majors = department.value?.majors;
  if (majors?.general?.length > 0) tabs.push('General Chinese Programs');
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

const goToMajor = (majorDepartment, majorDegree, majorName) => {
  router.push({ name: 'major-name', params: { majorDepartment, majorDegree, majorName } });
};
</script>

