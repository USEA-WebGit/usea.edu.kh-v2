<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 text-lg rounded-md">
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Contact +</span>
            <router-link
                :to="{ name: 'faculty-language' }"
                class="link"
                :class="{ active: isActive('faculty-language') }"
            >
                <span>About Faculty</span>
            </router-link>
            <router-link
                :to="{ name: 'faculty-staff-language' }"
                class="link"
                :class="{ active: isActive('faculty-staff-language') }"
            >
                <span>Faculty's Staff</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Department +</span>
            <router-link
                :to="{ name: 'department-chinese' }"
                class="link"
                :class="{ active: isActive('department-chinese') }"
            >
                <span>Department of Chinese</span>
            </router-link>
            <router-link
                :to="{ name: 'department-english' }"
                class="link"
                :class="{ active: isActive('department-english') }"
            >
                <span>Department of English</span>
            </router-link>
            <router-link
                :to="{ name: 'department-khmer' }"
                class="link"
                :class="{ active: isActive('department-khmer') }"
            >
                <span>Department of Khmer Literature</span>
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
