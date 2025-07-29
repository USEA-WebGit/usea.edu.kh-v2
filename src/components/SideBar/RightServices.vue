<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 2xl:text-lg xl:text-lg lg:text-sm rounded-md">
        <div class="flex flex-col">
            <h1 class="text-[#002060] font-bold">Services +</h1>
            <router-link
                :to="{ name: 'health-services' }"
                class="link"
                :class="{ active: isActive('health-services') }"
            >
                <span>Health Services</span>
            </router-link>
            <router-link
                :to="{ name: 'it-services' }"
                class="link"
                :class="{ active: isActive('it-services') }"
            >
                <span>IT Services</span>
            </router-link>
            <router-link
                :to="{ name: 'library-services' }"
                class="link"
                :class="{ active: isActive('library-services') }"
            >
                <span>Library</span>
            </router-link>
            <router-link
                :to="{ name: 'career-center' }"
                class="link"
                :class="{ active: isActive('career-center') }"
            >
                <span>Career Center</span>
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
