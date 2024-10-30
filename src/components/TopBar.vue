<template>
    <div>
            <!-- top-bar  -->
            <div class="flex justify-center items-center p-5 bg-color font-Poppins font-bold text-lg">
            
                <div class="flex justify-between items-center w-[75%]">
                    <div class="text-white">
                        <span><i class="fa-regular fa-envelope"></i> info@usea.edu.kh</span>
                    </div>
                    
                    <div class="flex gap-3 text-white relative">
                        <span class="text-white">|</span>
                        <button class="btn-topbar">Admission</button>
                        <span>|</span>
                        <button class="btn-topbar">Journal</button>
                        <span>|</span>
                        <button class="btn-topbar"><a href="https://bit.ly/usea_lms" target="_blank" class="rounded-md ">USEA LMS</a></button>
                        <span>|</span>
                        <button class="btn-topbar">Download</button>
                        <span>|</span>
                        <!-- <span>|</span>
                        <button>Portal</button> -->
                        <div class="flex gap-2 items-center text-white">
                        <img :src="Khmer" alt="Khmer Flag" class="w-8">
                        </div>
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