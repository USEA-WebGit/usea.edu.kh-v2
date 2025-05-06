import demoCard from '@/assets/images/demoCard.png';
import roemRipeng from '@/assets/images/roem_ripeng.png';
import sokngim from '@/assets/images/sa_sokngim.png';
import bunhors from '@/assets/images/son_bunhours.png';
import tealyoulong from '@/assets/images/teal_youlong.png';
import nesokna from '@/assets/images/ne_sokna.JPG';
import taingkeangse from '@/assets/images/taing_keangse.png';
import luchreaksmey from '@/assets/images/luch_reaksmey.png';
import kangchhorvy from '@/assets/images/kang_chhorvy.png';
import hoeurmsopha from '@/assets/images/hoeurm_sopha.png';
import hormmakara from '@/assets/images/horm_makara.png';
import phunsreypov from '@/assets/images/phun_sreypov.png';
import sengchanleap from '@/assets/images/seng_chanleap.png';
import RightNavScience from '@/components/SideBar/RightNavIT.vue';
import RightLanguage from '@/components/SideBar/RightLanguage.vue';
import RightBusiness from '@/components/SideBar/RightBusiness.vue';
import RightLaw from '@/components/SideBar/Right-Law.vue';
export const faculties = {
    'arts-humanities-languages': {
      title: 'Faculty of Arts, Humanities & Languages',
      description: 'The Faculty of Arts, Humanities and Languages at the University of South-East Asia offers comprehensive language education programs spanning from beginner to advanced levels. The faculty is dedicated to providing students with the necessary knowledge, skills, and practical expertise in language education. The courses offered by the Faculty of Arts, Humanities and Languages encompass a range of programs, including General English and General Chinese programs, designed to enhance language proficiency. Additionally, specialized courses such as English for Specific Purposes and English for Academic Purposes cater to specific language needs. The faculty also offers Professional Development Courses for individuals seeking to further enhance their language skills. For those interested in pursuing a more structured program, the faculty provides diploma and associate degree programs in English and Chinese. Furthermore, students can opt for a Bachelor of Arts in Khmer Literature, a Bachelor of Arts in Teaching English as a Foreign Language (TEFL) or a Bachelor of Arts in Teaching Chinese as a Foreign Language (TCFL), which focus on equipping individuals with the necessary skills to become language educators.',
      image: demoCard,
      departments: [
        {name: "Department of Chinese", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-chinese'},
        {name: "Department of English", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-english'},
        {name: "Department of Khmer Literature", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-khmer'},
    ],
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
      sidebarComponent: RightLanguage,
    },
    'science-technology': {
      title: 'Faculty of Science and Technology',
      description: 'Faculty of Science and Technology will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      departments: [
        {name: "Department of Technology", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-chinese'},
        {name: "Department of Engineer", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-english'},
    ],
      members: [
        { 
            name: "Ms. Sa Sokngim", 
            position: "Dean of Faculty of Science and Technology", 
            image: sokngim ,
            
        },
        { 
          name: "Mr. Son Bunhors", 
          position: "Dean of Faculty of Science and Technology", 
          image: bunhors 
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
      sidebarComponent: RightNavScience,
    },

    'economics-business-tourism': {
      title: 'Faculty of Economics Business & Tourism',
      description: 'Faculty of Economics Business & Tourism aims to provide specialized education...',
      image: demoCard,
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
      sidebarComponent: RightBusiness,
    },
    'social-science-law': {
      title: 'Faculty of Social Science & Law',
      description: 'Faculty of Social Science & Law aims to provide specialized education...',
      image: demoCard,
      departments: [
        {name: "Department of Business", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-chinese'},
        {name: "Department of Tourism", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-english'},
        {name: "Department of Economic", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", route: 'department-khmer'},
    ],
      members: [
         
        { name: "Mr. Teal Youlong", position: "Dean of Faculty of Economics Business & Tourism", image: tealyoulong },
        { name: "Mr. Taing Keangse", position: "Head of Department of Business", image: nesokna },
       
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
      sidebarComponent: RightLaw,
    },
  }