<template>
    <FacultyPage :faculty="facultyData" />
</template>

<script setup>
import FacultyPage from '../FacultyPage.vue';
import RightNavLaw from '@/components/SideBar/Right-Law.vue';
import demo from '@/assets/images/demoCard.png';
import ripeng from '@/assets/images/roem_ripeng.png';

const facultyData = {
    title: "Faculty of Arts, Humanities & Languages",
    description: "Faculty of Arts, Humanities & Languages aims to provide specialized education...",
    image: demo,
    majors: {
        associate: [
            { name: "Khmer Literature", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png" },
        ],
        bachelor: [
            { name: "Khmer Literature", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png" },
            { name: "General English Programs", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png" },
            { name: "Chinese Literature", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png" }
        ]
    },
    members: [
        { name: "Mr. Reom Ripeng", position: "Dean of Faculty of Science and Technology", image: ripeng }
    ],
    activities: [
        { image: demo },
        { image: demo },
        { image: demo },
        { image: demo }
    ],
    sidebarComponent: RightNavLaw
};
</script>
