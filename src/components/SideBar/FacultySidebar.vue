<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 text-lg rounded-md">
        <!-- Contact Section -->
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Contact +</span>
            <router-link 
                :to="{ name: 'faculty-about', params: { faculty: faculty.slug } }" 
                class="link"
                :class="{ active: isActive('faculty-about') }"
            >
                <span>About Faculty</span>
            </router-link>
            <router-link 
                :to="{ name: 'faculty-staff', params: { faculty: faculty.slug } }" 
                class="link"
                :class="{ active: isActive('faculty-staff') }"
            >
                <span>Faculty's Staff</span>
            </router-link>
        </div>

        <!-- Degree Programs -->
        <div v-for="(category, index) in faculty.programs" :key="index" class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">{{ category.title }} +</span>
            <router-link 
                v-for="program in category.courses" 
                :key="program.name" 
                :to="{ name: 'program-details', params: { faculty: faculty.slug, program: program.slug } }"
                class="link"
                :class="{ active: isActive('program-details') }"
            >
                <span>{{ program.name }}</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

// Props to receive faculty data
const props = defineProps({
    sidebar: Object
});

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
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
}
.link:hover {
    border-bottom-color: #888;
}
.link.active {
    color: red;
    font-weight: bold;
}
</style>
