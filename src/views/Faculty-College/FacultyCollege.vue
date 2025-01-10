<template>
    <div class="h-[43.75rem] p-12">
        <div class="flex flex-col mb-24 text-center items-center">
            <h1 class="text-red-600 text-[2.5rem] font-bold">FACULTY & COLLEGE</h1>
            <div class="h-1 w-[5%] bg-red-600"></div>
        </div>
        
        <div class="grid grid-rows-2 grid-flow-col justify-between items-center gap-12 m-12 text-2xl">
            <div>
                <a href="#" class="flex items-center gap-3">
                    <img :src="FacultyBusiness" alt="business">
                    <span class="w-[65%] font-bold">Faculty of Economics, Business & Tourism</span>
                </a>
            </div>
            <div>
                <a href="#" class="flex items-center gap-3">
                    <img :src="FacultyIT" alt="business">
                    <span class="w-[65%] font-bold">Faculty of Sciences & Technology</span>
                </a>
            </div>
            <div>
                <a href="#" class="flex items-center gap-3">
                    <img :src="FacultyLaw" alt="business">
                    <span class="w-[65%] font-bold">Faculty of Social Science & Law</span>
                </a>
            </div>
            <div>
                <a href="#" class="flex items-center gap-3">
                    <img :src="FacultyKhmer" alt="business">
                    <span class="w-[65%] font-bold">Faculty of Arts, Humanities and Languages</span>
                </a>
            </div>
            <div>
                <a href="#" class="flex items-center gap-3">
                    <img :src="FacultyInternationalCollege" alt="business">
                    <span class="w-[65%] font-bold">International College</span>
                </a>
            </div>
            <div>
                <a href="#" class="flex items-center gap-3">
                    <img :src="FacultyPostGraduate" alt="business">
                    <span class="w-[65%] font-bold">Post Graduate</span>
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