<template>
    <div class="flex justify-between items-center font-Source_Sans_Pro font-bold">
        <router-link to="/" class="flex-1 flex justify-center">
            <img :src="TitleLogo" alt="Title Logo" class="w-1/2">
        </router-link>
        <nav class="flex-1 pt-10">
            <ul class="flex align-top gap-8 text-xl font-bold text-[#002060] relative">
                <li class="nav-item pb-10 group relative">
                    About
                    <ul class="mega-menu hidden absolute -left-[780px] top-full w-max bg-white shadow-lg px-20 py-12 grid grid-cols-3 gap-x-5 z-50 rounded-md">
                        <div class="mega-menu-item">  
                            <h3 class="font-bold text-xl pb-7 text-[#002060]">Organization</h3>
                            <ul class="text-lg text-gray-500">
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">History & Logo Meaning</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Vision & Mission</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Location</li>
                            </ul>
                        </div>
                        <div class="mega-menu-item px-12 w-full">
                            <h3 class="font-bold text-lg pb-7 text-[#002060]">Governance & Accreditation</h3>
                            <ul class="text-lg text-gray-500">
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Message from President</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Board of Trustees</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Recognition & Accreditation</li>
                            </ul>
                        </div>
                        <div class="mega-menu-item px-12 w-full">
                            <h3 class="font-bold text-lg pb-7 text-[#002060]">Information</h3>
                            <ul class="text-lg text-gray-500">
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">News & Events</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">FAQ</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Contact</li>
                            </ul>
                        </div>
                    </ul>
                </li>
                <li class="nav-item pb-10 group relative">
                    Academics
                    <ul class="mega-menu hidden absolute -left-[780px] top-full w-max bg-white shadow-lg px-20 py-12 grid grid-cols-3 gap-x-5 z-50 rounded-md">
                        <div class="mega-menu-item">  
                            <h3 class="font-bold text-xl pb-7 text-[#002060]">Faculty</h3>
                            <ul class="text-lg text-gray-500">
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Faculty of Economics, Business & Tourism</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Faculty of Sciences & Technology</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Faculty of Social Science & Law</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Faculty of Art, Humanities & Language</li>
                            </ul>
                        </div>
                        <div class="mega-menu-item px-12 w-full">
                            <h3 class="font-bold text-lg pb-7 text-[#002060]">Programs & Courses</h3>
                            <ul class="text-lg text-gray-500">
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">International College</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Post Graduate</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Post Foreign Language Center</li>
                                <li class="flex gap-2"><img :src="Structure" alt="" class="w-[20px] h-auto">Short Course</li>
                            </ul>
                        </div>
                        <div class="mega-menu-item px-12 w-full">
                            <img src="" alt="">
                        </div>
                    </ul>
                </li>
                
                <li class="nav-item group relative pb-10">
                    Partnership 
                    <ul class="mega-menu hidden absolute top-full left-0 w-max bg-white shadow-lg p-7 grid grid-cols-1 z-50 rounded-md">
                        <li class="text-gray-500 flex gap-2">
                            <img :src="History" alt="" class="w-[20px] h-auto">
                            Local Partner
                        </li>
                        <li class="text-gray-500 flex gap-2">
                            <img :src="President" alt="" class="w-[20px] h-auto">
                            International Partner
                        </li>
                        
                    </ul>
                </li>
                <li class="nav-item pb-10">Research Project</li>
                <li class="nav-item group relative pb-10">
                    Services 
                    <ul class="mega-menu hidden absolute top-full left-0 w-max bg-white shadow-lg p-7 grid grid-cols-1 z-50 rounded-md">
                        <li class="text-gray-500 flex gap-2">
                            <img :src="History" alt="" class="w-[20px] h-auto">
                            Health Services
                        </li>
                        <li class="text-gray-500 flex gap-2">
                            <img :src="President" alt="" class="w-[20px] h-auto">
                            IT Services
                        </li>
                        <li class="text-gray-500 flex gap-2">
                            <img :src="CoreValue" alt="" class="w-[20px] h-auto">
                            Library
                        </li>    
                        <li class="text-gray-500 flex gap-2">
                            <img :src="Structure" alt="" class="w-[20px] h-auto">
                            Career Center
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import TitleLogo from '@/assets/title/usea-title-1.png';
import History from '@/assets/nav-icon/history.png';
import President from '@/assets/nav-icon/president.png';
import CoreValue from '@/assets/nav-icon/core-value.png';
import Location from '@/assets/nav-icon/location.png';
import Structure from '@/assets/nav-icon/structure.png';
import Recognition from '@/assets/nav-icon/recognition.png';
import Event from '@/assets/nav-icon/event.png';
import Faq from '@/assets/nav-icon/comment-regular.svg';

</script>

<style scoped>
.nav-item {
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease;
}

.nav-item::after {
    content: '';
    position: absolute;
    width: 0;
    height: 5px;
    background-color: red;
    bottom: -5px;
    left: 0;
    transition: width 0.3s ease;
    z-index: 60;
}

.nav-item:hover {
    color: red;
}

.nav-item:hover::after {
    width: 100%;
}

/* Mega Menu */
.group:hover .mega-menu {
    display: grid;
}
.mega-menu li {
    padding: 8px 0;
}

.mega-menu li:hover {
    color: #002060;
}

.mega-menu li::after {
    content: none;
}
</style>
