<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 2xl:text-xl xl:text-xl lg:text-sm rounded-md">
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Contact +</span>
            <router-link
                :to="{ name: 'department-name', params: {departmentName: 'department-chinese'} }"
                class="link"
                :class="{ active: isActive('department-name') }"
            >
                <span>About Department</span>
            </router-link> 
            <router-link
                :to="{ name: 'faculty-staff-language', params: {departmentStaff: 'department-chinese'} }"
                class="link"
                :class="{ active: isActive('faculty-staff-language') }"
            >
                <span>Department's Staff</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">General Programs +</span>
            <router-link
                :to="{ name: 'major-name', params: { majorName: 'general-gcp',  majorDegree: 'general', majorDepartment: 'department-chinese' }  }"
                class="link"
                :class="{ active: isActive('major-name', 'general-gcp') }"
            >
                <span>General Chinese Program (GCP)</span>
                
            </router-link>
            
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Associate's Degree +</span>
            <router-link
                :to="{ name: 'major-name', params: { majorName: 'associate-gcpus',  majorDegree: 'associate', majorDepartment: 'department-chinese' }  }"
                class="link"
                :class="{ active: isActive('major-name', 'associate-gcpus') }"
            >
                <span>General Chinese Program for Undergraduate Students (GCPUS)</span>
                
            </router-link>
            
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Bachelor's Degree +</span>
            <router-link
                :to="{ name: 'major-name', params: { majorName: 'bachelor-tcfl',  majorDegree: 'bachelor', majorDepartment: 'department-chinese' }  }"
                class="link"
                :class="{ active: isActive('major-name', 'bachelor-tcfl') }"
            >
                <span>Teaching Chinese as a Foreign Language (TCFL)</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

// Get the current route
const route = useRoute();

// Check if the current route matches the provided route name
const isActive = (name, majorName) => {
  return route.name === name && route.params.majorName === majorName;
};

</script>

<style scoped>
.link {
    padding: 0.25rem 0;
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid transparent; /* Default state */
    transition: border-color 0.3s;
}
.link:hover {
    border-bottom-color: #888; /* Hover state */
}
.link.active {
    color: red;
    font-weight: bold;
}
</style>
