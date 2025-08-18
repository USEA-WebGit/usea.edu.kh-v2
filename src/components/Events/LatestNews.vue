<template>
    <div class="text-center mt-10 mb-10 motion-preset-slide-right ">
        <div class="flex flex-col mb-10 text-center items-center">
            <h1 class="text-usea_secondary 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem] font-bold">LATEST NEWS</h1>
            <div class="h-1 w-[5%] bg-usea_secondary"></div>
        </div>
        <div class="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 text-center mb-10 cursor-pointer">
            <!-- Card 1 -->
            <div v-for="(newdata, index) in news" :key="index" class="overflow-hidden">
                <img 
                    :src="newdata.img" 
                    alt="News Image" 
                    class="w-full h-[300px] object-cover transform transition-transform duration-300 hover:scale-105"
                >
                <router-link :to="{name: 'events-detail'}">
                    <div class="mt-4 p-2">
                        <p class="text-gray-700 text-justify hover:text-red-600">
                        {{ newdata.title }}
                        </p>
                        <div class="flex mt-2 text-sm text-gray-500 gap-3 border-t-2 pt-2">
                        <span class="text-red-600"><i class="fa-solid fa-calendar-days"></i> {{newdata.date}}</span> 
                        <span><i class="fa-solid fa-clock"></i> {{ newdata.time }}</span> 
                        <span><i class="fa-solid fa-location-dot"></i> {{newdata.venue}}</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <router-link :to="{name: 'news-events'}"><button class="text-center bg-usea_secondary p-2 rounded-md text-white hover:bg-white hover:text-usea_secondary hover:border-usea_secondary hover:border">More News</button></router-link>
        

    </div>
</template>

<script setup>
import Cat from '@/assets/images/cat.jpg';
import news1 from '@/assets/images/news1.jpg';
import news2 from '@/assets/images/news2.jpg';
import news3 from '@/assets/images/news3.jpg';
import news4 from '@/assets/images/news4.jpg';

const news =[
    {
        img: news1,
        title: '🎉✨Congratulations to the 3 winners of the 2025 Public English Speaking Competition for High School Students.',
        date: 'August 16, 2025',
        time: '8:00',
        venue: 'Meeting Hall, USEA'
    },
    {
        img: news2,
        title: 'The University of Southeast Asia hosted the finals of the University Entrepreneur Program (USEA-Unipreneur BMC 2025) supported by Khmer Entrepreneurs (KE).',
        date: 'August 11, 2025',
        time: '8:00',
        venue: 'Meeting Hall, USEA'
    },
    {
        img: news3,
        title: '🎉 Congratulations!!! The top 3 startup teams won a total of approximately 8,400,000 riels, divided into categories, in the Final Pitching of the University Entrepreneur Program (USEA-Unipreneur BMC 2025), organized by the University of Southeast Asia, supported by Khmer Entrepreneurs (KE).',
        date: 'August 09, 2025',
        time: '5:00',
        venue: 'Meeting Hall, USEA'
    },
    {
        img: news4,
        title: 'Seminar on "Sustainable & Eco-Tourism" organized by the University of Southeast Asia and the Boule Du Bruel School of Hotel and Tourism',
        date: 'August 04, 2025',
        time: '8:00',
        venue: 'Meeting Hall, USEA'
    },
]

</script>

<style>

</style>