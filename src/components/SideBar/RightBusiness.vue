<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 text-sm 2xl:text-xl xl:text-xl lg:text-sm  rounded-md">
        <div class="flex flex-col">
            <span class="text-[#002060] font-bold mb-5">Contact +</span>
            <router-link
                :to="{name: 'faculty-page', params: {facultyName: 'economics-business-tourism'}}"
                class="link"
                :class="{ active: isActive('faculty-page') }"
            >
                <span>About Faculty</span>
            </router-link>
            <router-link
                :to="{ name: 'faculty-staff', params: {facultyStaff: 'economics-business-tourism'} }"
                class="link"
                :class="{ active: isActive('faculty-staff') }"
            >
                <span>Faculty's Staff</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] font-bold mb-5">Department +</span>
            <router-link
                :to="{ name: 'department-name', params: {departmentName: 'department-business'} }"
                class="link"
                :class="{ active: isActive('department-name') }"
            >
                <span>Department of Business</span>
            </router-link>
            <router-link
                :to="{ name: 'department-name', params: {departmentName: 'department-tourism'} }"
                class="link"
                :class="{ active: isActive('department-name') }"
            >
                <span>Department of Tourism</span>
            </router-link>
            <router-link
                :to="{ name: 'department-name', params: {departmentName: 'department-economic'} }"
                class="link"
                :class="{ active: isActive('department-name') }"
            >
                <span>Department of Economic</span>
            </router-link>
            
            
        </div>
        
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

// Get the current route
const route = useRoute();

// Check if the current route matches the provided route name
const isActive = (name) => route.name === name;
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
