<template>
    <div class="h-auto p-12">
        <div class="flex flex-col mb-24 text-center items-center">
            <h1 class="text-red-600 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem] font-bold text-nowrap">FACULTY & COLLEGE</h1>
            <div class="h-1 w-[5%] bg-red-600"></div>
        </div>
        
        <div class="grid 2xl:grid-rows-2 2xl:grid-flow-col xl:grid-rows-2 xl:grid-flow-col lg:grid-rows-3 lg:grid-flow-col md:grid-rows-3 md:grid-flow-col 2xl:justify-between xl:justify-between items-center gap-12 my-28 text-2xl mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px]">
            <div>
                <a href="#" class="flex items-center 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-5 gap-5">
                    <img :src="FacultyBusiness" alt="business">
                    <span class="w-[65%] font-bold 2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">Faculty of Economics, Business & Tourism</span>
                </a>
            </div>
            <div>
                <a href="#" class="flex items-center 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-5 gap-5">
                    <img :src="FacultyIT" alt="business">
                    <span class="w-[65%] font-bold 2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">Faculty of Sciences & Technology</span>
                </a>
            </div>
            <div>
                <a href="#" class="flex items-center 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-5 gap-5">
                    <img :src="FacultyLaw" alt="business">
                    <span class="w-[65%] font-bold 2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">Faculty of Social Science & Law</span>
                </a>
            </div>
            <div>
                <a href="#" class="flex items-center 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-5 gap-5">
                    <img :src="FacultyKhmer" alt="business">
                    <span class="w-[65%] font-bold 2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">Faculty of Arts, Humanities and Languages</span>
                </a>
            </div>
            <div>
                <a href="#" class="flex items-center 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-5 gap-5">
                    <img :src="FacultyInternationalCollege" alt="business">
                    <span class="w-[65%] font-bold 2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">International College</span>
                </a>
            </div>
            <div>
                <a href="#" class="flex items-center 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-5 gap-5">
                    <img :src="FacultyPostGraduate" alt="business">
                    <span class="w-[65%] font-bold 2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">Post Graduate</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import FacultyBusiness from "@/assets/nav-icon/moba-f-economic.png";
    import FacultyLaw from "@/assets/nav-icon/moba-f-law.png";
    import FacultyIT from "@/assets/nav-icon/moba-f-it.png";
    import FacultyKhmer from "@/assets/nav-icon/moba-fli.png";
    import FacultyPostGraduate from "@/assets/nav-icon/moba-post-graduate.png";
    import FacultyInternationalCollege from "@/assets/nav-icon/moba-fli1.png";
    
</script>

<style scoped>

</style>