<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 2xl:text-xl xl:text-xl lg:text-sm rounded-md">
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold mb-5">Contact +</span>
            <router-link
                :to="{ name: 'international-college' }"
                class="link"
                :class="{ active: isActive('international-college') }"
            >
                <span>About International College</span>
            </router-link>
            <router-link
                :to="{ name: 'international-college-staff' }"
                class="link"
                :class="{ active: isActive('international-college-staff') }"
            >
                <span>Program's Staff</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold mb-5">Programs +</span>
            <router-link
                :to="{ name: 'acca-program' }"
                class="link"
                :class="{ active: isActive('acca-program') }"
            >
                <span>ACCA</span>
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