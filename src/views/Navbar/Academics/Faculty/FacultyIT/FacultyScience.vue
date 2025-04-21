<template>
    <FacultyPage :faculty="facultyScience" />
</template>

<script setup>
import FacultyPage from '../FacultyPage.vue';
import RightNavScience from '@/components/SideBar/RightNavIT.vue';
import sokngim from '@/assets/images/sa_sokngim.png';
import demo from '@/assets/images/demoCard.png';
const facultyScience = {
    title: "Faculty of Science and Technology",
    description: "Faculty of Science and Technology will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.",
    image: demo,
    majors: {
        associate: [
            { name: "Civil Engineering", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png" },
            { name: "Information Technology", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png" },
        ],
        bachelor: [
            { name: "Architecture", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png" },
            { name: "Civil Engineering", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png" },
            { name: "Information Technology", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png" },
            { name: "Mathematics", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png" },
        ]
    },
    members: [{ name: "Ms. Sa Sokngim", position: "Dean of Faculty of Science and Technology", image: sokngim }],
    activities: [
        { image: demo },
        { image: demo },
        { image: demo },
        { image: demo }
    ],
    sidebarComponent: RightNavScience
};
</script>