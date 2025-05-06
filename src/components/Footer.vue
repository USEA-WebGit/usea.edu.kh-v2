<template>
    <div class="bg-[#002060]">
    <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-8 justify-items-center items-stretch p-10">
        <!-- Quick Links -->
        <div class="flex flex-col gap-5 w-[75%] h-full">
            <span class="font-bold 2xl:text-2xl text-white">Quick Links</span>
            <div class="text-white flex flex-col gap-3 links 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-sm">
                <router-link :to="{name: 'history'}"><li class="block">History & Logo Meaning</li></router-link>
                <router-link :to="{name: 'vision'}"><li class="block">Vision & Mission</li></router-link>
                <router-link :to="{name: 'location'}"><li class="block">Location</li></router-link>
                <router-link :to="{name: 'message'}"><li class="block">Message from President</li></router-link>
                <router-link :to="{name: 'board-trustee'}"><li class="block">Board of Trustees</li></router-link>
                <router-link :to="{name: 'recognition'}"><li class="block">Recognition & Accreditation</li></router-link>
            </div>
        </div>
        <!-- Faculty & Information -->
        <div class="flex flex-col gap-5 w-[75%] h-full">
            <span class="font-bold 2xl:text-2xl text-white">Faculty & Information</span>
            <div class="text-white flex flex-col gap-3 links 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-sm">
                <router-link :to="{name: 'faculty-page', params: {facultyName: 'economics-business-tourism'}}"><li class="block">Faculty of Economics, Business & Tourism</li></router-link>
                <router-link :to="{name: 'faculty-page', params: {facultyName: 'science-technology'}}"><li class="block">Faculty of Sciences & Technology</li></router-link>
                <router-link :to="{name: 'faculty-page', params: {facultyName: 'social-science-law'}}"><li class="block">Faculty of Social Science & Law</li></router-link>
                <router-link :to="{name: 'faculty-page', params: {facultyName: 'arts-humanities-languages'}}"><li class="block">Faculty of Arts Humanities Language</li></router-link>
                <router-link :to="{name: 'news-events'}"><li class="block">Events & News</li></router-link>
                <router-link :to="{name: 'faq'}"><li class="block">FAQ</li></router-link>
            </div>
        </div>
        <!-- Contact Us -->
        <div class="flex flex-col gap-5 w-[75%]">
            <span class="font-bold 2xl:text-2xl text-white">Contact Us</span>
            <div class="text-white flex flex-col gap-3 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-sm leading-relaxed">
                <p><span class="font-bold">Address:</span> Wat Bo Village, SangKat Salakamroek Siemreap Municipality, Cambodia (Opposite Angkor High School)</p>
                <p>(+855) 63 900 090</p>
                <p>(+855) 92 429 966</p>
                <p>(+855) 77 667 873</p>
            </div>
        </div>
        <!-- Logo -->
        <div class="flex justify-center items-center w-[75%]">
            <router-link :to="{name: 'Home'}"><img :src="UseaLogo" alt="logo" class="w-3/4"></router-link>
        </div>
    </div>
    <div class="bg-[#002060] text-center border-t-[1px] border-white p-5 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-sm">
        <p class="text-white 2xl:text-sm">Copyright © 2006 University of South-East Asia, All rights reserved.</p>
    </div>
</div>

</template>

<script setup>
    import UseaLogo from '@/assets/title/logo_update.png';
</script>

<style scoped>
/* Links hover effect and alignment */
.links a {
    display: block;
    transform: translateX(0); /* Remove the initial offset for better alignment */
    transition: transform 0.3s ease, color 0.3s ease; /* Smooth animation for hover effects */
    color: #ffffff; /* Ensure text is white for contrast */
    white-space: nowrap; /* Prevent wrapping of long text */
}

/* Hover effect to slide the link slightly */
.links a:hover {
    transform: translateX(3px); /* Slide to the right on hover */
    color: #ffcc00; /* Change color to a highlight color on hover */
}

/* Bold text for hover effect */
.links a:focus,
.links a:hover {
    font-weight: bold; /* Make the text bold when hovered or focused */
}

/* Fine-tune logo appearance */
img {
    border-radius: 8px; /* Slightly round the corners of the logo */
    transition: transform 0.3s ease; /* Add a hover animation */
}

/* Scale the logo on hover */
img:hover {
    transform: scale(1.05); /* Slightly enlarge the logo */
}

/* Text styling for address section */
.text-sm {
    color: #f0f0f0; /* Softer white color for readability */
}
</style>
