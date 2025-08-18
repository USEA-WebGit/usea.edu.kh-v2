<template>
    <div>
        <Titlebg title="President's Message" breadcrumb="President's Message" />
    </div>
    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div class="flex flex-col">
            <span class="font-bold 2xl:text-2xl xl:text-2xl lg:text-2xl  text-usea_secondmary mb-10">MESSAGE FROM PRESIDENT</span>
            <div class="flex justify-center overflow-hidden relative rounded-md mb-3">
                <img :src="President" alt="president-image" class="h-[500px] object-cover transform transition-transform duration-300 hover:scale-105 rounded-md">
                <span class="font-bold absolute 2xl:top-[90%] 2xl:left-[40%] lg:top-[90%] md:top-[90%] sm:top-[90%] top-[90%] bg-white py-2 px-12 rounded-md shadow-md">Dr. Mean Sothy</span>
            </div>
            <div class="flex flex-col gap-5">  
                <p class="text-justify 2xl:text-xl xl:text-xl lg:text-lg">On behalf of the University of South-East Asia, would like to express my profound gratitude and warm welcome to Your Excellencies, Ladies, and Gentlemen for sending your children to our university.The world is growing so fast in terms of science, technology, and economy that the labour market is becoming increasingly competitive and thus requires practical knowledge, experience, and skills. The university plays a vital role in developing human resources with high competency, morality, virtue, conscience, discipline, and courage to meet the national and international labour market needs and demands and to fully participate in social development in line with globalization and free market economy.To achieve the aforementioned goals, the university keeps strengthening seven fundamental factors: management, curricula, teaching staff, studentaffairs, discipline, academic resources, and local and international partnerships. I would like to inform you that your children have not yet finished their education; they need to pursue tertiary education in order to acquire knowledge, experience, and skills to respond to the labour market needs now and in the future. Please check a university thoroughly before choosing it for your children, for it is associated with your children's future. I suggest you all, the students who have already chosen the university, study hard to become outstanding students so as to bring good reputation to your parents and become good successors for your family as well as your country.</p>
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
import President from '@/assets/images/president.jpg';
</script>