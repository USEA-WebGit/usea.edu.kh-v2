<template>
    <div>
        <Titlebg title="Vision and Mission" breadcrumb="Vision and Mission" />
    </div>
    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 mb-10">
        <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-5">
                <span class="text-2xl font-bold text-usea_secondary">VISION</span>
                <p>University of South-East Asia will develop human resources with high competency, virtue, and professional attitude in response to national and international labor market, where they can find employment and live in the era of globalization to contribute to the building of society.</p>
            </div>

            <div class="flex flex-col gap-5">
                <span class="text-2xl font-bold text-usea_secondary">MISSION</span>
                <p>University of South-East Asia builds higher education and technical and vocational education systems at all levels in compliance with national and international standards to provide knowledge, know-how, technical skills, soft skills, and professional attitude to learners to meet the needs of national and international labor market.</p>
            </div>

            <div class="flex flex-col gap-5">
                <span class="text-2xl font-bold text-usea_secondary">EDUCATION PHILOSOPHY</span>
                <p>Your life will be more successful with University of South-East Asia.</p>
            </div>
        
             <div class="flex flex-col gap-5">
                <span class="text-2xl font-bold text-usea_secondary">CORE VALUE</span>
                <p>Knowledge, Skills, Excellence, Society</p>
            </div>
            
            <div class="grid grid-cols-[20%_80%] items-center">
                <span class="text-lg font-bold text-red-600">Knowledge</span>
                <div>
                    <ul>
                        <li>Enjoy lifelong learning and research</li>
                        <li>Extensive knowledge</li>
                        <li>Knowledge of foreign languages that can be used officially</li>
                        <li>Self-confidence</li>
                    </ul>
                </div>
            </div>
            <div class="grid grid-cols-[20%_80%] items-center">
                <span class="text-lg font-bold text-red-600">Skills</span>
                <div>
                    <ul>
                        <li>Able to use information technology proficiently</li>
                        <li>Technical Skills</li>
                        <li>Soft skills</li>
                        <li>Innovation and Creativity.</li>
                    </ul>
                </div>
            </div>
            <div class="grid grid-cols-[20%_80%] items-center">
                <span class="text-lg font-bold text-red-600">Excellence</span>
                <div>
                    <ul>
                        <li>High commitment and responsibility to perform the work</li>
                        <li>High commitment and responsibility in teaching</li>
                        <li>High commitment and responsibility in study and research</li>
                        <li>Honesty, virtue, accountability, open communication and teamwork</li>
                    </ul>
                </div>
            </div>
            <div class="grid grid-cols-[20%_80%] items-center">
                <span class="text-lg font-bold text-red-600">Social</span>
                <div>
                    <ul>
                        <li>National Consciousness</li>
                        <li>Participate in social activities</li>
                        <li>Preservation and protection of national culture and traditions</li>
                        <li>Maintain and protect the environment</li>   
                    </ul>
                </div>
            </div>
            <div class="flex flex-col gap-5">
                <span class="text-2xl font-bold text-usea_secondary">GOAL & OBJECTIVES</span>
                <ul class="ml-20 text-lg">
                    <li>Good management and governance</li>
                    <li>Improving the quality of education to national and international standards</li>
                    <li>Promoting research and development</li>
                    <li>International Communication and Cooperation</li>
                    <li>Recognition of quality of education nationally and internationally</li>
                </ul>
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
</script>

<style scoped>
    li{
        list-style-type: disc;
    }
</style>