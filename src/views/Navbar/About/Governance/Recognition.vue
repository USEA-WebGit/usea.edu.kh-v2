<template>
    <div>
        <Titlebg title="Recognition and Accreditatiton" breadcrumb="Recognition and Accreditatiton" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div class="flex flex-col mb-10">
            <!-- Selected Board Member Details -->
            <div class="grid grid-cols-[60%_40%] gap-5">
                <div class="overflow-hidden rounded-lg border border-gray-300 shadow-xl">
                    <img :src="boards.img" alt="selected-board-image" class="h-full w-full transform transition-transform duration-300 hover:scale-105">
                </div>
                <div>
                    <span class="font-bold text-2xl flex justify-center mb-5">ACC Recognition</span>
                    <p class="text-xl text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae distinctio voluptatibus amet hic iure, eligendi sit repudiandae illo iusto deleniti. Tempore voluptatum quo excepturi, expedita repellat id natus nemo magnam repudiandae cumque recusandae saepe impedit commodi asperiores cupiditate facilis placeat minus voluptate blanditiis vel? Aut quod odit veritatis aperiam quibusdam.</p>
                </div>
            </div>
            <!-- Carousel -->
            <div class="flex items-center gap-3 mt-10 py-3 px-12 rounded-lg relative overflow-hidden">
                <div>
                    <img src="" alt="">
                </div>
            </div>
        </div>
        <div>
            <RightNav />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import Titlebg from '@/components/Slide/TitleBg.vue';
import RightNav from '@/components/SideBar/Right-Nav.vue';
import ACCRecognit from '@/assets/recognition/ACC-1.png';


// List of board members
const boards = [
    { img: ACCRecognit, title: "Dr. Mean Sothy", desc: "President" },
];

</script>

<style scoped>
/* Highlight selected board member */
.board-img.active {
    background: rgb(226, 224, 224);
    padding: 10px;
    border: 2px solid #d1d5db;
    transition: all .3 ease-in-out;
}

/* Hide default scrollbar */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>
