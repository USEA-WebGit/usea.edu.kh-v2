<template>
    <DepartmentPage :department="departmentChinese" />
</template>

<script setup>
import DepartmentPage from '../../DepartmentPage.vue';
import RightNavScience from '@/components/SideBar/RightNavIT.vue';
import ripeng from '@/assets/images/roem_ripeng.png';
import demo from '@/assets/images/demoCard.png';
const departmentChinese = {
    title: "Department of Chinese",
    description: "Department of Chinese will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.",
    image: demo,
    majors: {
        courses: [
            
            { name: "General Chinese Program (GCP)", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-chinese' },
        ],
        associate: [
            { name: "General Chinese Program for Undergraduate Students (GCPUS)", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-chinese' },
        ],

        bachelor: [
            { name: "Teaching Chinese as a Foreign Language (TCFL)", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-chinese' },
        ]
    },
    members: [{ name: "Mr. Reom Ripeng", position: "Director of Foreign Language Institute and Deputy Head of Department of Quality Assurance", image: ripeng }],
    activities: [
        { image: demo },
        { image: demo },
        { image: demo },
        { image: demo }
    ],
    sidebarComponent: RightNavScience
};
</script>