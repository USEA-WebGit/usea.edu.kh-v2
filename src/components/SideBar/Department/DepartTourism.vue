<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 text-lg rounded-md">
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Contact +</span>
           <router-link
                :to="{ name: 'department-name',  params: {departmentName: 'department-tourism'} }"
                class="link"
                :class="{ active: isActive('department-name') }"
            >
                <span>About Department</span>
            </router-link>
            <router-link
                :to="{ name: 'faculty-staff-language', params: { departmentStaff: 'department-tourism'} }"
                class="link"
                :class="{ active: isActive('faculty-staff-language') }"
            >
                <span>Department's Staff</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Associate's Degree +</span>
            <router-link
                :to="{ name: 'major-name', params: { majorName: 'associate-international-tourism-management',  majorDegree: 'associate', majorDepartment: 'department-tourism' }  }"
                class="link"
                :class="{ active: isActive('major-name', 'associate-international-tourism-management') }"
            >
                <span>International Tourism Management</span>
            </router-link>
            <router-link
                :to="{ name: 'major-name', params: { majorName: 'associate-tourism-hospitality-management',  majorDegree: 'associate', majorDepartment: 'department-tourism' }  }"
                class="link"
                :class="{ active: isActive('major-name', 'associate-tourism-hospitality-management') }"
            >
                <span>Tourism and Hospitality Management</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Bachelor's Degree +</span>
            <router-link
                :to="{ name: 'major-name', params: { majorName: 'bachelor-international-tourism-management',  majorDegree: 'bachelor', majorDepartment: 'department-tourism' }  }"
                class="link"
                :class="{ active: isActive('major-name', 'bachelor-international-tourism-management') }"
            >
                <span>International Tourism Management</span>
            </router-link>
            <router-link
                :to="{ name: 'major-name', params: { majorName: 'bachelor-tourism-hospitality-management',  majorDegree: 'bachelor', majorDepartment: 'department-tourism' }  }"
                class="link"
                :class="{ active: isActive('major-name', 'bachelor-tourism-hospitality-management') }"
            >
                <span>Tourism and Hospitality Management</span>
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
