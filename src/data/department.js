import demoCard from '@/assets/images/demoCard.png';
import roemRipeng from '@/assets/images/roem_ripeng.png';
export const departments = {
    'department-english': {
      title: 'Department of English',
      description: 'Department of English will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mr. Reom Ripeng", 
            position: "Director of Foreign Language Institute and Deputy Head of Department of Quality Assurance", 
            image: roemRipeng 
        }
      ],
      activities: [
        {
            image: demoCard
        },
        {
            image: demoCard
        },
        {
            image: demoCard
        },
      ],
      majors: {
        associate: [
            { name: "Associate in English", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'associate-english' },
        ],
        bachelor: [
            { name: "Teaching English as a Foreign Language (TEFL)", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'bachelor-tefl' },
        ]
      },
      sidebarComponent: "DepartmentEnglishSidebar",
    },
    'department-chinese': {
      title: 'Department of Chinese',
      description: 'Department of Chinese will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mr. Reom Ripeng", 
            position: "Director of Foreign Language Institute and Deputy Head of Department of Quality Assurance", 
            image: roemRipeng 
        },
        { 
            name: "Mr. Ngam Kimsorn", 
            position: "Director of Foreign Language Institute and Deputy Head of Department of Quality Assurance", 
            image: roemRipeng 
        },
        { 
            name: "Mrs. Chhem Saman", 
            position: "Director of Foreign Language Institute and Deputy Head of Department of Quality Assurance", 
            image: roemRipeng 
        },
      ],
      activities: [
        {
            image: demoCard
        },
        {
            image: demoCard
        },
        {
            image: demoCard
        },
      ],
      majors: {
        courses: [
            { name: "General Chinese Program (GCP)", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'associate-english' },
        ],
        associate: [
            { name: "General Chinese Program for Undergraduate Students (GCPUS)", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'associate-english' },
        ],
        bachelor: [
            { name: "Bachelors of Arts in Teaching Chinese as a Foreign Language (TCFL)", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'bachelor-tefl' },
            { name: "General Chinese Program for Undergraduate Students (GCPUS)", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'bachelor-tefl' },
        ]
      },
      sidebarComponent: "DepartmentEnglishSidebar",
    },

    'department-khmer': {
      title: 'Department of Khmer',
      description: 'Department of Khmer will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mr. Reom Ripeng", 
            position: "Director of Foreign Language Institute and Deputy Head of Department of Quality Assurance", 
            image: roemRipeng 
        }
      ],
      activities: [
        {
            image: demoCard
        },
        {
            image: demoCard
        },
        {
            image: demoCard
        },
      ],
      majors: {
        associate: [
            { name: "General Khmer Program for Undergraduate Students", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'associate-english' },
        ],
        bachelor: [
            { name: "Bachelors of Arts in Khmer Lecturecture", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'bachelor-tefl' },
        ]
      },
      sidebarComponent: "DepartmentEnglishSidebar",
    },
  }