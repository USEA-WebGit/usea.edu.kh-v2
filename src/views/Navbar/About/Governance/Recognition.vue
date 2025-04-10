<template>
    <div>
        <Titlebg title="Recognition and Accreditatiton" breadcrumb="Recognition and Accreditatiton" />
    </div>
    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 mb-10">
        <div class="flex flex-col gap-10">
            <!-- Selected Board Member Details -->
            <div v-for="(board, index) in boards" :key="index" class="grid 2xl:grid-cols-2 xl:grid-cols-2 gap-5">
                <div class="overflow-hidden rounded-lg border border-gray-300 shadow-xl">
                    <img :src="board.img" alt="recognition-image" class="h-full w-full transform transition-transform duration-300 hover:scale-105">
                </div>
                <div>
                    <span class="font-bold text-2xl flex justify-center mb-5">{{ board.title }}</span>
                    <p class="text-xl text-justify">{{ board.description }}</p>
                </div>
            </div>
        </div>
        <div>
            <RightNav />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightNav from '@/components/SideBar/Right-Nav.vue';
import ACCRecognit from '@/assets/recognition/ACC-1.png';
import AUN from '@/assets/recognition/AUN-1.png';
import Government from '@/assets/recognition/g1-1.png';
import Moeys from '@/assets/recognition/m1-1.png';

// List of recognition items with image bindings
const boards = [
  {
    img: ACCRecognit,
    title: "ACC Recognition",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic quidem debitis aut aliquid repudiandae pariatur, sapiente recusandae. Laboriosam, veniam?"
  },
  {
    img: AUN,
    title: "AUN-QA",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic quidem debitis aut aliquid repudiandae pariatur, sapiente recusandae. Laboriosam, veniam?"
  },
  {
    img: Government,
    title: "Government Recognition",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic quidem debitis aut aliquid repudiandae pariatur, sapiente recusandae. Laboriosam, veniam?"
  },
  {
    img: Moeys,
    title: "MOEYS Recognition",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem hic quidem debitis aut aliquid repudiandae pariatur, sapiente recusandae. Laboriosam, veniam?"
  },
];
</script>


