<template>
    <FacultyPage :faculty="facultyData" />
</template>

<script setup>
import FacultyPage from '../FacultyPage.vue';
import RightBusiness from '@/components/SideBar/RightBusiness.vue';
import demo from '@/assets/images/demoCard.png';
import tealyoulong from '@/assets/images/teal_youlong.png';
import nesokna from '@/assets/images/ne_sokna.JPG';
import taingkeangse from '@/assets/images/taing_keangse.png';
import luchreaksmey from '@/assets/images/luch_reaksmey.png';
import kangchhorvy from '@/assets/images/kang_chhorvy.png';
import hoeurmsopha from '@/assets/images/hoeurm_sopha.png';
import hormmakara from '@/assets/images/horm_makara.png';
import phunsreypov from '@/assets/images/phun_sreypov.png';
import sengchanleap from '@/assets/images/seng_chanleap.png';

const facultyData = {
    title: "Faculty of Economics Business & Tourism",
    description: "Faculty of Economics Business & Tourism aims to provide specialized education...",
    image: demo,
    departments: [
        {name: "Department of Business", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-chinese'},
        {name: "Department of Tourism", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-english'},
        {name: "Department of Economic", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-khmer'},
    ],
    members: [
        { name: "Mr. Teal Youlong", position: "Dean of Faculty of Economics Business & Tourism", image: tealyoulong },
        { name: "Mr. Taing Keangse", position: "Head of Department of Business", image: nesokna },
        { name: "Mr. Ne Sokna", position: "Head of Department of Economics and Head of USEA Career Center", image: taingkeangse },
        { name: "Mr. Luch Reaksmey", position: "Head of Academic Office", image: luchreaksmey },
        { name: "Mr. Hoeurm Sopha", position: "Deputy Head of Academic Office in Charge of Examination Affairs", image: hoeurmsopha },
        { name: "Mrs. Kang Chhorvy", position: "Deputy Head of Academic Office in Charge of Lecturer Affairs", image: kangchhorvy },
        { name: "Mrs. Horm Makara", position: "Dean of Faculty of Economics Business & Tourism", image: hormmakara },
        { name: "Mrs. Phun Sreypov", position: "Staff of Lecturers' Affairs", image: phunsreypov },
        { name: "Mrs. Seng Chanleap", position: "Staff of Student's Affair", image: sengchanleap },
    ],
    activities: [
        { image: demo },
        { image: demo },
        { image: demo },
        { image: demo }
    ],
    sidebarComponent: RightBusiness
};
</script>
