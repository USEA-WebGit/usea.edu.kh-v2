<template>
    <div>
        <Titlebg title="Library" breadcrumb="Library" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div>
            <div class="flex justify-center items-center gap-5 flex-col">
                
                <div class=" flex flex-col justify-center items-center mb-5">
                    <span class="text-2xl text-usea_secondary font-bold">ABOUT LIBRARY</span>
                    <div class="h-1 w-[5%] bg-usea_secondary"></div>
                </div>
                <div class="flex gap-3">
                    <span>The curriculum is designed to provide training to students who are proficient in software and good at public administration, public administration, private administration and local NGOs.The curriculum is designed to provide training to students who are proficient in software and good at public administration, public administration, private administration and local NGOs.</span>
                    <img :src="demo" alt="image" class="w-[50%]">
                </div>
            </div>
            <div class="mt-10">
                <div class=" flex flex-col justify-center items-start">
                    <span class="text-2xl text-usea_secondary font-bold">LIBRARY SERVICES</span>
                    <!-- <div class="h-1 w-[5%] bg-usea_secondary"></div> -->
                </div>
                <div class="grid grid-cols-[20%_80%] items-center mt-10">
                    <span class="text-lg font-bold text-red-600">Knowledge</span>
                    <div>
                        <ul>
                            <li>It is a long established fact that a reader will be distracted by the</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </li>
                            <li>It is a long established fact that a reader will be distracted by the</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </li>
                        </ul>
                    </div>
                </div>
                <div class="grid grid-cols-[20%_80%] items-center mt-10">
                    <span class="text-lg font-bold text-red-600">Skills</span>
                    <div>
                        <ul>
                            <li>It is a long established fact that a reader will be distracted by the</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </li>
                            <li>It is a long established fact that a reader will be distracted by the</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </li>
                        </ul>
                    </div>
                </div>
                <div class="grid grid-cols-[20%_80%] items-center mt-10">
                    <span class="text-lg font-bold text-red-600">Excellence</span>
                    <div>
                        <ul>
                            <li>It is a long established fact that a reader will be distracted by the</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </li>
                            <li>It is a long established fact that a reader will be distracted by the</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </li>
                        </ul>
                    </div>
                </div>
                <div class="grid grid-cols-[20%_80%] items-center mt-10">
                    <span class="text-lg font-bold text-red-600">Social</span>
                    <ul>
                        <li>It is a long established fact that a reader will be distracted by the</li>
                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </li>
                        <li>It is a long established fact that a reader will be distracted by the</li>
                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some </li>
                    </ul>
                </div>
            </div>

            <div class="mt-10">
                <div class=" flex flex-col justify-center items-start">
                    <span class="text-2xl text-usea_secondary font-bold">ACTIVITIES</span>
                    <!-- <div class="h-1 w-[5%] bg-usea_secondary"></div> -->
                </div>
                <div class="grid grid-cols-3 gap-3 mt-5 mb-5">
                    <img :src="demo" alt="">
                    <img :src="demo" alt="">
                    <img :src="demo" alt="">
                    <img :src="demo" alt="">
                    <img :src="demo" alt="">
                    <img :src="demo" alt="">
                </div>
            </div>
        </div>
        <div>
            <RightServices />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightServices from '@/components/SideBar/RightServices.vue';
import demo from '@/assets/images/demoCard.png';
</script>