<template>
    <div class="bg-[#002060]">
        <div class="grid grid-cols-4 gap-8 justify-items-center p-10">
            <!-- Quick Links -->
            <div class="flex flex-col gap-5 w-[75%]">
                <span class="font-bold text-2xl text-white">Quick Links</span>
                <div class="text-white flex flex-col gap-3 links">
                    <a href="#" class="block">History & Logo Meaning</a>
                    <a href="#" class="block">Vision & Mission</a>
                    <a href="#" class="block">Facilities</a>
                    <a href="#" class="block">Location</a>
                    <a href="#" class="block">Message from President</a>
                    <a href="#" class="block">Board of Trustees</a>
                    <a href="#" class="block">Recognition & Accreditation</a>
                </div>
            </div>
            <!-- Faculty & Information -->
            <div class="flex flex-col gap-5 w-[75%]">
                <span class="font-bold text-2xl text-white">Faculty & Information</span>
                <div class="text-white flex flex-col gap-3 links">
                    <a href="#" class="block">Faculty of Economics, Business & Tourism</a>
                    <a href="#" class="block">Faculty of Sciences & Technology</a>
                    <a href="#" class="block">Faculty of Social Science & Law</a>
                    <a href="#" class="block">Faculty of Arts Humanities Language</a>
                    <a href="#" class="block">Events & News</a>
                    <a href="#" class="block">FAQ</a>
                </div>
            </div>
            <!-- Contact Us -->
            <div class="flex flex-col gap-5 w-[75%]">
                <span class="font-bold text-2xl text-white">Contact Us</span>
                <div class="text-white flex flex-col gap-3 text-sm leading-relaxed">
                    <p><span class="font-bold">Address:</span> Wat Bo Village, SangKat Salakamroek Siemreap Municipality, Cambodia (Opposite Angkor High School)</p>
                    <p>(+855) 63 900 090</p>
                    <p>(+855) 92 429 966</p>
                    <p>(+855) 77 667 873</p>
                </div>
            </div>
            <!-- Logo -->
            <div class="flex justify-center items-center w-[75%]">
                <img :src="UseaLogo" alt="logo" class="w-3/4">
            </div>
        </div>
        <div class="bg-[#002060] text-center border-t-[1px] border-white p-5">
            <p class="text-white text-lg">Copyright © 2006 University of South-East Asia, All rights reserved.</p>
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
