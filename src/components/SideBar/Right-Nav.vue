<template>
    <div class="bg-gray-200 p-5 flex flex-col gap-5 text-lg rounded-md">
        <div class="flex flex-col">
            <h1 class="text-[#002060] font-bold">Organization Info +</h1>
            <router-link
                :to="{ name: 'history' }"
                class="link"
                :class="{ active: isActive('history') }"
            >
                <span>History & Logo Meaning</span>
            </router-link>
            <router-link
                :to="{ name: 'vision' }"
                class="link"
                :class="{ active: isActive('vision') }"
            >
                <span>Vision & Mission</span>
            </router-link>
            <router-link
                :to="{ name: 'location' }"
                class="link"
                :class="{ active: isActive('location') }"
            >
                <span>Location</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <h1 class="text-[#002060] font-bold">Governance & Accreditation +</h1>
            <router-link
                :to="{ name: 'message' }"
                class="link"
                :class="{ active: isActive('message') }"
            >
                <span>Message from President</span>
            </router-link>
            <router-link
                :to="{ name: 'board-trustee' }"
                class="link"
                :class="{ active: isActive('board-trustee') }"
            >
                <span>Board of Trustees</span>
            </router-link>
            <router-link
                :to="{ name: 'recognition' }"
                class="link"
                :class="{ active: isActive('recognition') }"
            >
                <span>Recognition & Accreditation</span>
            </router-link>
        </div>
        <div class="flex flex-col">
            <h1 class="text-[#002060] font-bold">Information</h1>
            <router-link
                :to="{ name: 'news-events' }"
                class="link"
                :class="{ active: isActive('news-events') }"
            >
                <span>Event & News</span>
            </router-link>
            <router-link
                :to="{ name: 'faq' }"
                class="link"
                :class="{ active: isActive('faq') }"
            >
                <span>FAQ</span>
            </router-link>
            <router-link
                :to="{ name: 'contact' }"
                class="link"
                :class="{ active: isActive('contact') }"
            >
                <span>Contact</span>
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
