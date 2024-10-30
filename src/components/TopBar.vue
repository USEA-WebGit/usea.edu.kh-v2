<template>
    <div>
            <!-- top-bar  -->
            <div class="flex gap-3 justify-between items-center p-5 bg-color font-Source_Sans_Pro font-bold text-lg">
                <!-- <span class="text-white">Follow us:</span>
                <div class=" flex gap-3 items-center">
                    <a href="https://bit.ly/usea_fb" target="_blank"><i class="fa-brands fa-facebook text-xl bg-white p-1 rounded-xl"></i></a>
                    <a href="https://bit.ly/usea_telegram" target="_blank"><i class="fa-brands fa-telegram text-xl bg-white p-1 rounded-xl"></i></a>
                    <a href="https://bit.ly/usea_ig" target="_blank"><i class="fa-brands fa-square-instagram text-xl bg-white p-1 rounded-xl"></i></a>
                    <a href="https://bit.ly/usea_yt" target="_blank"><i class="fa-brands fa-youtube text-xl bg-white p-1 rounded-xl"></i></a>
                    <a href="https://bit.ly/usea_tiktok" target="_blank"><i class="fa-brands fa-tiktok text-xl bg-white p-1 rounded-xl"></i></a>
                </div> -->
                <div class="text-white">
                    <span>info@usea.edu.kh</span>
                </div>
                
                <div class="flex gap-3 text-white relative">
                    <span class="text-white">|</span>
                    <button>Admission</button>
                    <span>|</span>
                    <button>Journal</button>
                    <span>|</span>
                    <button><a href="https://bit.ly/usea_lms" target="_blank" class="rounded-md ">USEA LMS</a></button>
                    <span>|</span>
                    <button>Download</button>
                    <span>|</span>
                    <!-- <span>|</span>
                    <button>Portal</button> -->
                    <div class="flex gap-2 items-center text-white">
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
    .bg-color{
        background: rgb(0,2,42);
background: linear-gradient(180deg, rgba(0,2,42,1) 0%, rgba(0,32,96,1) 63%);
    }
</style>