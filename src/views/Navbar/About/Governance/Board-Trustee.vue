<template>
    <div>
        <Titlebg title="Board of Trustees" breadcrumb="Board of Trustees" />
    </div>
    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div class="flex flex-col mb-10">
            <!-- Selected Board Member Details -->
            <div class="grid grid-cols-2">
                <div>
                    <span class="font-bold text-2xl">{{ selectedBoard.name }}</span>
                    <p class="text-2xl">{{ selectedBoard.position }}</p>
                </div>
                <div class="overflow-hidden rounded-lg border border-gray-300 shadow-xl">
                    <img :src="selectedBoard.img" alt="selected-board-image" class="h-full object-cover transform transition-transform duration-300 hover:scale-105">
                </div>
            </div>
            <!-- Carousel -->
            <div class="flex items-center gap-3 mt-10 py-3 px-12 rounded-lg relative overflow-hidden">
                <button
                    class="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-600 text-white p-3 rounded-full hover:bg-red-700 z-10"
                    @click="scrollLeft"
                >
                    ‹
                </button>
                <div class="flex gap-3 overflow-hidden w-full">
                    <div
                        v-for="(board, index) in visibleBoards"
                        :key="index"
                        class="flex flex-col items-center overflow-hidden rounded-xl cursor-pointer board-img"
                        :class="{ active: selectedIndex === startIndex + index }"
                        @click="selectBoard(startIndex + index)"
                    >
                        <img :src="board.img" alt="board-image" class="object-cover transform transition-transform duration-300 hover:scale-105" style="border-radius: 50%;">
                        <span class="font-bold">{{ board.name }}</span>
                        <p>{{ board.position }}</p>
                    </div>
                </div>
                <button
                    class="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-600 text-white p-3 rounded-full hover:bg-red-700 z-10"
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
import { ref, computed } from 'vue';

import Titlebg from '@/components/Slide/TitleBg.vue';
import RightNav from '@/components/SideBar/Right-Nav.vue';
import MeanSothy from '@/assets/images/dr_mean_sothy.png';
import YoeungSothan from '@/assets/images/dr_sothan.png';
import JivReakSmey from '@/assets/images/j_reaksmey.png';
import YimChanVisal from '@/assets/images/mr_yim_chanvisal.png';
import TatBunSeang from '@/assets/images/tat_bunseang.png';
import TealYuLong from '@/assets/images/teal_youlong.png';
import SaSokNgim from '@/assets/images/sa_sokngim.png';
import leangTaingSoth from '@/assets/images/leang_taingsoth.png';

// List of board members
const boards = [
    { img: MeanSothy, name: "Dr. Mean Sothy", position: "President" },
    { img: YoeungSothan, name: "Dr. Yoeung Sothan", position: "Vice President" },
    { img: JivReakSmey, name: "Mr. Jiv Reaksmey", position: "Vice President" },
    { img: YimChanVisal, name: "Mr. Yim Chanvisal", position: "Vice President" },
    { img: TealYuLong, name: "Mr. Teal Yulong", position: "Dean of Faculty Economic Business and Tourism" },
    { img: SaSokNgim, name: "Mrs. Sa Sokngim", position: "Dean of Faculty Sciences and Technology" },
    { img: leangTaingSoth, name: "Mr.Leang Taingsoth", position: "Dean of Faculty Social Science and Law" },
    { img: TatBunSeang, name: "Mr. Tat Bunseang", position: "Director of IT Center" },
];

// State for carousel and selected item
const startIndex = ref(0);
const selectedIndex = ref(0);
const selectedBoard = ref(boards[selectedIndex.value]);
const itemsToShow = 5;

// Compute visible boards based on startIndex
const visibleBoards = computed(() => boards.slice(startIndex.value, startIndex.value + itemsToShow));

const scrollLeft = () => {
    if (startIndex.value > 0) {
        startIndex.value--;
    }
};

const scrollRight = () => {
    if (startIndex.value + itemsToShow < boards.length) {
        startIndex.value++;
    }
};

// Function to select a board member
const selectBoard = (index) => {
    selectedIndex.value = index;
    selectedBoard.value = boards[index];
};
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
