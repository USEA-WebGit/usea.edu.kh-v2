<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 text-lg rounded-md">
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Contact +</span>
            <router-link
                :to="{ name: 'department-english' }"
                class="link"
                :class="{ active: isActive('department-english') }"
            >
                <span>About Department</span>
            </router-link>
            <router-link
                :to="{ name: 'faculty-staff-language' }"
                class="link"
                :class="{ active: isActive('faculty-staff-language') }"
            >
                <span>Department's Staff</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Associate's Degree +</span>
            <router-link
                :to="{ name: 'associate-english' }"
                class="link"
                :class="{ active: isActive('associate-english') }"
            >
                <span>Associate in English</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Bachelor's Degree +</span>
            <router-link
                :to="{ name: 'bachelor-tefl' }"
                class="link"
                :class="{ active: isActive('bachelor-tefl') }"
            >
                <span>Teaching English as a Foreign Language (TEFL)</span>
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
