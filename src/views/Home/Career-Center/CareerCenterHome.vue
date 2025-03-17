<template>
    <div class="h-auto bg-gray-300 relative">
        <img :src="CareerCenterBg" alt="career center bg" class="absolute bottom-0 opacity-5">
        <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 justify-items-center items-center 2xl:gap-0 xl:gap-10 lg:gap-10 md:gap-10 sm:gap-10 gap-10 2xl:py-28 py-6 mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px]">
            <!-- Text Content -->
            <div class="z-[1] motion-preset-slide-right ">
                <div>
                    <span class="text-usea_secondary 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem] font-bold block">Career Center</span>
                
                    <p class="text-base md:text-xl mt-4 md:mt-5 text-justify">
                        <span class="font-bold block">About University of South East Asia Career Center</span> 
                        <br>
                        The South East Asia University Career Center, in partnership with USAID DWD Digital Workforce Development, was established to engage higher education institutions (HEIs) and the local private sector for the development of internship programs and / or job opportunities for students. And young professionals. The center will help address the mismatch between youth skills and the needs of employers through soft skills training and workshops. Through the University of South East Asia Student Job Center, students will have access to the right career information, career networks and career development opportunities that will empower them to make their own decisions about their future careers.  
                        USEA Career Centers are designed with the central purpose of providing the University with an independent and sustainable center for students across all disciplines to seek employment advice, soft skills development, and to access internships and job opportunities. The Career Center will directly support students by connecting them to resources, events, seminars, mentoring and acting as a link to them to potential employers.
                    </p>
                </div>

                <!-- Social Media Links -->
                <div class="flex gap-3 text-xl mt-4 md:text-2xl md:mt-5 items-center">
                    <span class="font-bold">Social Media</span>
                    <span>
                        <a href="https://www.facebook.com/useacareercenter">
                            <img :src="facebook" alt="facebook" class="w-8 md:w-[50px]">
                        </a>
                    </span>
                    <span>
                        <a href="https://t.me/useacareercenter">
                            <img :src="telegram" alt="telegram" class="w-8 md:w-[50px]">
                        </a>
                    </span>
                </div>
            </div>

            <!-- Image Section -->
            <div class="motion-preset-slide-left">
                <img :src="CareerCenter" alt="logo" class="max-w-full">
            </div>
        </div>
    </div>
</template>

<script setup>
    import CareerCenter from "../../../assets/images/career-center.png";
    import CareerCenterBg from "../../../assets/images/career-center-bg.png";
    import facebook from "../../../assets/nav-icon/facebook.png";
    import telegram from "../../../assets/nav-icon/telegram.png";
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