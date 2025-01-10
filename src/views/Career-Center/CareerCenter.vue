<template>
    <div class="h-[46.875rem] bg-gray-300">
        <div class="flex px-12 py-16 gap-10 mx-32">
            <div >
                <span class="text-red-600 text-[2.5rem] font-bold">Career Center</span>
                
                <p class="text-xl mt-5 text-justify"><span class="font-bold">About University of South East Asia Career Center</span> <br>
                The South East Asia University Career Center, in partnership with USAID DWD Digital Workforce Development, was established to engage higher education institutions (HEIs) and the local private sector for the development of internship programs and / or job opportunities for students. And young professionals. The center will help address the mismatch between youth skills and the needs of employers through soft skills training and workshops. Through the University of South East Asia Student Job Center, students will have access to the right career information, career networks and career development opportunities that will empower them to make their own decisions about their future careers.  USEA Career Centers are designed with the central purpose of providing the University with an independent and sustainable center for students across all disciplines to seek employment advice, soft skills development, and to access internships and job opportunities. The Career Center will directly support students by connecting them to resources, events, seminars, mentoring and acting as a link to them to potential employers.</p>
                <div class="flex gap-3 text-2xl mt-5 items-center">
                    <span class="font-bold">Social Media</span>
                    <span><a href="https://www.facebook.com/useacareercenter"><img :src="facebook" alt="facebook" class="w-[50px]"></a></span>
                    <span><a href="https://t.me/useacareercenter"><img :src="telegram" alt="telegram" class="w-[50px]"></a></span>
                </div>
            </div>
            <img :src="CareerCenter" alt="logo" class="w-full logo">
        </div>
    </div>
</template>

<script setup>
    import CareerCenter from "../../assets/images/career-center.png";
    import facebook from "../../assets/nav-icon/facebook.png";
    import telegram from "../../assets/nav-icon/telegram.png";
</script>

<style scoped>
.logo {
    border-radius: 8px; /* Slightly round the corners of the logo */
    transition: transform 0.3s ease; /* Add a hover animation */
}

/* Scale the logo on hover */
.logo:hover {
    transform: scale(1.01); /* Slightly enlarge the logo */
}
</style>