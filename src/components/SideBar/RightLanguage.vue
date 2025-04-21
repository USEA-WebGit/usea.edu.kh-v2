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
                :to="{ name: 'faculty-staff' }"
                class="link"
                :class="{ active: isActive('faculty-staff') }"
            >
                <span>Faculty's Staff</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <span class="text-[#002060] text-xl font-bold">Department +</span>
            <router-link
                :to="{ name: 'board-trustee' }"
                class="link"
                :class="{ active: isActive('board-trustee') }"
            >
                <span>Department of Chinese</span>
            </router-link>
            <router-link
                :to="{ name: 'board-trustee' }"
                class="link"
                :class="{ active: isActive('board-trustee') }"
            >
                <span>Department of English</span>
            </router-link>
            <router-link
                :to="{ name: 'civil-engineering' }"
                class="link"
                :class="{ active: isActive('civil-engineering') }"
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
