<template>
    <FacultyPage :faculty="facultyData" />
</template>

<script setup>
import FacultyPage from '../FacultyPage.vue';
import RightNavLaw from '@/components/SideBar/Right-Law.vue';
import demo from '@/assets/images/demoCard.png';
import taingsoth from '@/assets/images/leang_taingsoth.png';

const facultyData = {
    title: "Faculty of Social Science & Law",
    description: "Faculty of Social Science and Law aims to provide specialized education...",
    image: demo,
    departments: [
        {name: "Department of Public Ralation", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-chinese'},
        {name: "Department of Laws", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-english'},
        
    ],
    members: [
        { name: "Mr. Leang Taingsoth", position: "Dean of ", image: taingsoth }
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
