<template>
    <div>
        <Titlebg title="Board of Trustees" breadcrumb="Board of Trustees" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div class="flex flex-col mb-10">
            <div class="grid grid-cols-2">
                <div>
                    <span class="font-bold text-2xl">Dr. Mean Sothy</span>
                    <p class="text-2xl">President</p>
                </div>
                <div class="overflow-hidden rounded-lg border border-gray-300 shadow-xl">
                    <img :src="MeanSothy" alt="president-image" class="h-full object-cover transform transition-transform duration-300 hover:scale-105">
                </div>
            </div>
            <div class="flex gap-3 mt-10 py-3 px-12 rounded-lg relative overflow-x-auto no-scrollbar" ref="carousel">
                <div v-for="(board, index) in boards" :key="index" class="flex flex-col overflow-hidden rounded-xl cursor-pointer board-img ">
                    <img :src="board.img" alt="board-image" class="object-cover transform transition-transform duration-300 hover:scale-105 rounded-2xl">
                    <span class="font-bold">{{ board.name }}</span>
                    <p>{{ board.position }}</p>
                </div>
                <!-- <div class="flex flex-col overflow-hidden rounded-2xl cursor-pointer">
                    <img :src="YoeungSothan" alt="board-image" class="object-cover transform transition-transform duration-300 hover:scale-105 rounded-2xl">
                    <span class="font-bold">Dr. Yoeung Sothan</span>
                    <p>Vice President</p>
                </div>
                <div class="flex flex-col overflow-hidden rounded-2xl cursor-pointer">
                    <img :src="JivReakSmey" alt="board-image" class="object-cover transform transition-transform duration-300 hover:scale-105 rounded-2xl">
                    <span class="font-bold">Mr. Jiv Reaksmey</span>
                    <p>Vice President</p>
                </div>
                <div class="flex flex-col overflow-hidden rounded-2xl cursor-pointer">
                    <img :src="YimChanVisal" alt="board-image" class="object-cover transform transition-transform duration-300 hover:scale-105 rounded-2xl">
                    <span class="font-bold">Mr. Yim Chanvisal</span>
                    <p>Vice President</p>
                </div>
                <div class="flex flex-col overflow-hidden rounded-2xl cursor-pointer">
                    <img :src="TatBunSeang" alt="board-image" class="object-cover transform transition-transform duration-300 hover:scale-105 rounded-2xl">
                    <span class="font-bold">Mr. Tat Bunseang</span>
                    <p>Director of IT Center</p>
                </div> -->
                <!-- Left and Right Arrows -->
                <button
                    class="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-600 text-white p-3 rounded-full hover:bg-red-700"
                    @click="scrollLeft"
                >
                    ‹
                </button>
                <button
                    class="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-600 text-white p-3 rounded-full hover:bg-red-700"
                    @click="scrollRight"
                >
                    ›
                </button>
            </div>
        </div>
        <div>
            <RightNav />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Titlebg from '@/components/Slide/TitleBg.vue';
import RightNav from '@/components/SideBar/Right-Nav.vue';
import MeanSothy from '@/assets/images/dr_mean_sothy.png';
import YoeungSothan from '@/assets/images/dr_sothan.png';
import JivReakSmey from '@/assets/images/j_reaksmey.png';
import YimChanVisal from '@/assets/images/mr_yim_chanvisal.png';
import TatBunSeang from '@/assets/images/tat_bunseang.png';
import TealYuLong from '@/assets/images/teal_youlong.png';
import SaSokNgim from '@/assets/images/sa_sokngim.png';

// lists all board 
const boards = 
[
    {
        img: MeanSothy,
        name: "Dr. Mean Sothy",
        position: "President"
    }, 
    {
        img: YoeungSothan,
        name: "Dr. Yoeung Sothan",
        position: "Vice President",
    }, 
    {
        img: JivReakSmey,
        name: "Mr. Jiv Reaksmey",
        position: "Vice President"
    }
    , 
    {
        img: YimChanVisal,
        name: "Mr. Yim Chanvisal",
        position: "Vice President"
    }
    , 
    {
        img: TatBunSeang,
        name: "Mr. Tat Bunseang",
        position: "Director of IT Center"
    }
    , 
    {
        img: TealYuLong,
        name: "Mr. Teal Yulong",
        position: "Dean of Faculty Economic Business and Tourism"
    }
    , 
    {
        img: SaSokNgim,
        name: "Mrs. Sa Sokngim",
        position: "Dean of Faculty Sciences and Technology"
    }
];

// Carousel scroll function
const carousel = ref(null);

const scrollLeft = () => {
    if (carousel.value) {
        carousel.value.scrollBy({ left: -200, behavior: 'smooth' });
    }
};

const scrollRight = () => {
    if (carousel.value) {
        carousel.value.scrollBy({ left: 200, behavior: 'smooth' });
    }
};
</script>

<style scoped>
    .board-img.active{
        background: rgb(226, 224, 224);
        padding: 10px;
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