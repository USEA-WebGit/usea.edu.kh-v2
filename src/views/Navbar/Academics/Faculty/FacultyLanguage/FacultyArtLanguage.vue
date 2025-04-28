<template>
    <FacultyPage :faculty="facultyData" />
</template>

<script setup>
import FacultyPage from '../FacultyPage.vue';
import RightLanguage from '@/components/SideBar/RightLanguage.vue';
import demo from '@/assets/images/demoCard.png';
import ripeng from '@/assets/images/roem_ripeng.png';

const facultyData = {
    title: "Faculty of Arts, Humanities & Languages",
    description: "The Faculty of Arts, Humanities and Languages at the University of South-East Asia offers comprehensive language education programs spanning from beginner to advanced levels. The faculty is dedicated to providing students with the necessary knowledge, skills, and practical expertise in language education. The courses offered by the Faculty of Arts, Humanities and Languages encompass a range of programs, including General English and General Chinese programs, designed to enhance language proficiency. Additionally, specialized courses such as English for Specific Purposes and English for Academic Purposes cater to specific language needs. The faculty also offers Professional Development Courses for individuals seeking to further enhance their language skills. For those interested in pursuing a more structured program, the faculty provides diploma and associate degree programs in English and Chinese. Furthermore, students can opt for a Bachelor of Arts in Khmer Literature, a Bachelor of Arts in Teaching English as a Foreign Language (TEFL) or a Bachelor of Arts in Teaching Chinese as a Foreign Language (TCFL), which focus on equipping individuals with the necessary skills to become language educators.",
    image: demo,
    departments: [
        {name: "Department of Chinese", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-chinese'},
        {name: "Department of English", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-english'},
        {name: "Department of Khmer Literature", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-khmer'},
    ],
    members: [
        { name: "Mr. Reom Ripeng", position: "Director of Foreign Language Institute and Deputy Head of Department of Quality Assurance", image: ripeng }
    ],
    activities: [
        { image: demo },
        { image: demo },
        { image: demo },
        { image: demo }
    ],
    sidebarComponent: RightLanguage
};
</script>
