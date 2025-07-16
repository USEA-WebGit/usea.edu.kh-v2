<template>
    <div>
            <div class="">
                    <div class="2xl:flex xl:flex lg:flex md:flex sm:flex flex 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 gap-3 2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:justify-center justify-end 2xl:items-center xl:item-center lg:items-center md:items-center sm:items-center items-center py-3 px-3 bg-color font-Ubuntu font-bold 2xl:text-md xl:text-md">
                        <div class="2xl:flex xl:flex lg:flex md:flex sm:flex hidden text-white justify-center">
                            <span><i class="fa-regular fa-envelope"></i> info@usea.edu.kh</span>
                        </div>
                        <div class="2xl:flex xl:flex lg:flex md:flex sm:flex hidden gap-3 text-white justify-center">
                            <span>|</span>
                            <button class="btn-topbar">Admission</button>
                            <span>|</span>
                            <button class="btn-topbar"><a href="https://rj.usea.edu.kh/" target="_blank">Journal</a></button>
                            <span>|</span>
                            <button class="btn-topbar"><a href="https://lms.usea.edu.kh/login/index.php" target="_blank" class="rounded-md ">LMS</a></button>
                            <span>|</span>
                            <button class="btn-topbar">Download</button>
                        </div>
                        <div class="2xl:items-center xl:items-center lg:items-center md:items-center sm:items-center flex gap-3 text-white ">
                            <span class="2xl:flex xl:flex lg:flex md:flex sm:flex hidden">|</span>
                            <img :src="Khmer" alt="Khmer Flag" class="w-8">
                        </div>
                    </div>
            </div>
        
    </div>
</template>
<script setup>
    import Khmer from '@/assets/nav-icon/khmer.png';
    import Facebook from '@/assets/nav-icon/facebook.png';
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    .bg-color{
        background: rgb(0,2,42);
background: linear-gradient(180deg, rgba(0,2,42,1) 0%, rgba(0,32,96,1) 63%);
    }
    .btn-topbar{
        color: #E7E7E7;
    }
    .btn-topbar:hover{
        opacity: .75;
    }
</style>