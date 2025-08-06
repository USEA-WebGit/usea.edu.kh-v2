<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 text-lg rounded-md">
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Contact +</span>
            <router-link
                :to="{name: 'post-graduate'}"
                class="link"
                :class="{ active: isActive('post-graduate') }"
            >
                <span>About Graduate School</span>
            </router-link>
            <router-link
                :to="{ name: 'faculty-staff', params: {facultyStaff: 'economics-business-tourism'} }"
                class="link"
                :class="{ active: isActive('faculty-staff') }"
            >
                <span>Staff</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Master's Degree +</span>
            <router-link
                :to="{ name: 'department-name', params: {departmentName: 'department-business'} }"
                class="link"
                :class="{ active: isActive('department-name') }"
            >
                <span>Accounting</span>
            </router-link>
            <router-link
                :to="{ name: 'department-name', params: {departmentName: 'department-tourism'} }"
                class="link"
                :class="{ active: isActive('department-name') }"
            >
                <span>Finance & Banking</span>
            </router-link>
            <router-link
                :to="{ name: 'department-name', params: {departmentName: 'department-economic'} }"
                class="link"
                :class="{ active: isActive('department-name') }"
            >
                <span>Information Technology</span>
            </router-link>
            
            
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Doctoral's Degree +</span>
            <router-link
                :to="{ name: 'department-name', params: {departmentName: 'department-business'} }"
                class="link"
                :class="{ active: isActive('department-name') }"
            >
                <span>Accounting</span>
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
