<template>
    <DepartmentPage :department="departmentEnglish" />
    <FacultySideBar :sidebar="departmentEnglishSideBar"/>
</template>

<script setup>
import DepartmentPage from '../../DepartmentPage.vue';
import FacultySideBar from '@/components/SideBar/FacultySidebar.vue'
import DepartEnglish from '@/components/SideBar/Department/DepartEnglish.vue';
import ripeng from '@/assets/images/roem_ripeng.png';
import demo from '@/assets/images/demoCard.png';
const departmentEnglish = {
    title: "Department of English",
    description: "Department of English will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.",
    image: demo,
    majors: {
        associate: [
            { name: "Associate in English", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'associate-english' },
            
        ],
        bachelor: [
            { name: "Teaching English as a Foreign Language (TEFL)", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'bachelor-tefl' },
        ]
    },
    members: [
        { name: "Mr. Reom Ripeng", position: "Director of Foreign Language Institute and Deputy Head of Department of Quality Assurance", image: ripeng }
    ],
    activities: [
        { image: demo },
        { image: demo },
        { image: demo },
        { image: demo }
    ],
    sidebarComponent: DepartEnglish
};

const departmentEnglishSideBar ={
    contact:[
        {name: "About Department", route: 'about-department-english'},
        {name: "Department's Members", route: 'members-department-english'}
    ],
    associate:[
        {name: "Associate in English", route: 'associate-english'},
    ],
    bachelor: [
        {name: "Teaching English as a Foreign Language (TEFL)", route: 'bachelor-tefl'}
    ]
}
</script>