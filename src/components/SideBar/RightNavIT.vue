<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 text-lg rounded-md">
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Contact +</span>
            <router-link
                :to="{name: 'faculty-page', params: {facultyName: 'science-technology'}}"
                class="link"
                :class="{ active: isActive('faculty-page') }"
            >
                <span>About Faculty</span>
            </router-link>
            <router-link
                :to="{ name: 'faculty-staff', params: {facultyStaff: 'science-technology'} }"
                class="link"
                :class="{ active: isActive('faculty-staff') }"
            >
                <span>Faculty's Staff</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Association's Degree +</span>
            <router-link
                :to="{ name: 'civil-engineering' }"
                class="link"
                :class="{ active: isActive('civil-engineering') }"
            >
                <span>Civil Engineering</span>
            </router-link>
            <router-link
                :to="{ name: 'association-information-technology' }"
                class="link"
                :class="{ active: isActive('association-information-technology') }"
            >
                <span>Information Technology</span>
            </router-link>
            <router-link
                :to="{ name: 'recognition' }"
                class="link"
                :class="{ active: isActive('recognition') }"
            >
                <span>Mathematics</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Bachelor's Degree +</span>
            <router-link
                :to="{ name: 'news-events' }"
                class="link"
                :class="{ active: isActive('news-events') }"
            >
                <span>Architecture</span>
            </router-link>
            <router-link
                :to="{ name: 'faq' }"
                class="link"
                :class="{ active: isActive('faq') }"
            >
                <span>Civil Engineering</span>
            </router-link>
            <router-link
                :to="{ name: 'contact' }"
                class="link"
                :class="{ active: isActive('contact') }"
            >
                <span>Information Technology</span>
            </router-link>
            <router-link
                :to="{ name: 'contact' }"
                class="link"
                :class="{ active: isActive('contact') }"
            >
                <span>Mathematics</span>
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