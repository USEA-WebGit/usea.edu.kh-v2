import demoCard from '@/assets/images/demoCard.png';
import roemRipeng from '@/assets/images/roem_ripeng.png';
import ngamkimsorn from '@/assets/images/ngam_kimsorn.png';
import thousrynich from '@/assets/images/thou_sreynich.png';
import chhemsaman from '@/assets/images/chhem_saman.png';
import chhetchantho from '@/assets/images/chhet_chantho.png';
import phaivanna from '@/assets/images/phai_vanna.png';
import sokngim from '@/assets/images/sa_sokngim.png';
import bunhors from '@/assets/images/son_bunhours.png';
import tealyoulong from '@/assets/images/teal_youlong.png';
import taingkeangse from '@/assets/images/taing_keangse.png';
import leangtaingsoth from '@/assets/images/leang_taingsoth.png';
import eomrathanak from '@/assets/images/eom_rathanak.png';
import majorimg from '@/assets/building/major.jpg';
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
        },
        { 
            name: "Mr. Ngam Kimsorn", 
            position: "Director of Foreign Language Institute and Deputy Head of Department of Quality Assurance", 
            image: ngamkimsorn 
        },
        { 
            name: "Mr. Phai Vanna", 
            position: "Deputy Head of Student and Lecturer Affairs of Department of English", 
            image: phaivanna 
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
        associate: [
            { name: "Associate in English", image: majorimg, params: {majorDepartment: 'department-english',majorDegree: 'associate', majorName: 'associate-english'}},
        ],
        bachelor: [
            { name: "Teaching English as a Foreign Language (TEFL)", image: majorimg, params: {majorDepartment: 'department-english',majorDegree: 'bachelor', majorName: 'bachelor-tefl'}},
        ]
      },
      sidebarComponent: "DepartEnglish",
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
            name: "Mrs. Thou Sreynich", 
            position: "Head of Department of Chinese", 
            image: thousrynich 
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
        general: [
            { name: "General Chinese Program (GCP)", image: majorimg, params: {majorDepartment: 'department-chinese',majorDegree: 'general', majorName: 'general-gcp'}},
        ],
        associate: [
            { name: "General Chinese Program for Undergraduate Students (GCPUS)", image: majorimg, params: {majorDepartment: 'department-chinese',majorDegree: 'associate', majorName: 'associate-gcpus'}},
        ],
        bachelor: [
            { name: "Bachelors of Arts in Teaching Chinese as a Foreign Language (TCFL)", image: majorimg, params: {majorDepartment: 'department-chinese',majorDegree: 'bachelor', majorName: 'bachelor-tcfl'}},
            
        ]
      },
      sidebarComponent: "DepartChinese",
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
        },
        { 
            name: "Mrs. Chhem Sam An", 
            position: "Head of Deparment of Khmer Literature", 
            image: chhemsaman 
        },
        { 
            name: "Mrs. Chhet Chantho", 
            position: "Head of Student and Lecturer Affairs of Department of Khmer", 
            image: chhetchantho 
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
        associate: [
            { name: "Associate in khmer", image: majorimg, params: {majorDepartment: 'department-khmer',majorDegree: 'associate', majorName: 'associate-khmer'}},
        ],
        bachelor: [
            { name: "Bachelors Khmer Literature", image: majorimg, params: {majorDepartment: 'department-khmer',majorDegree: 'bachelor', majorName: 'bachelor-khmer'}},
        ]
      },
      sidebarComponent: "DepartKhmer",
    },

    'department-architecture': {
      title: 'Department of Architecture',
      description: 'Department of Khmer will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mrs. Sa Sokngim", 
            position: "Dean of Faculty of Science and Technology", 
            image: sokngim 
        },
        { 
            name: "Mr. Son Bunhors", 
            position: "Head of Deparment of Khmer Literature", 
            image: bunhors 
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

        bachelor: [
            { name: "Architecture", image: majorimg, params: {majorDepartment: 'department-architecture',majorDegree: 'bachelor', majorName: 'bachelor-architecture'}},
            { name: "Civil Engineering", image: majorimg, params: {majorDepartment: 'department-architecture',majorDegree: 'bachelor', majorName: 'bachelor-civil-engineering'}},
        ]
      },
      sidebarComponent: "DepartArchitecture",
    },
    'department-technology': {
      title: 'Department of Information and Communication Technology',
      description: 'Department of Information and Communication Technology will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mrs. Sa Sokngim", 
            position: "Dean of Faculty of Science and Technology", 
            image: sokngim 
        },
        { 
            name: "Mr. Son Bunhors", 
            position: "Head of Deparment of Khmer Literature", 
            image: bunhors 
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
        associate: [
            { name: "Develop Information Technology", image: majorimg, params: {majorDepartment: 'department-technology',majorDegree: 'associate', majorName: 'associate-develop-information-technology'}},
        ],
        bachelor: [
            { name: "Develop Information Technology", image: majorimg, params: {majorDepartment: 'department-technology',majorDegree: 'bachelor', majorName: 'bachelor-develop-information-technology'}},
            { name: "E-Business System", image: majorimg, params: {majorDepartment: 'department-technology',majorDegree: 'bachelor', majorName: 'bachelor-e-business-system'}},
            { name: "Information Technology", image: majorimg, params: {majorDepartment: 'department-technology',majorDegree: 'bachelor', majorName: 'bachelor-information-technology'}},
        ]
      },
      sidebarComponent: "DepartIT",
    },
    'department-mathematic': {
      title: 'Department of Mathematics and Science',
      description: 'Department of Mathematics and Science will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mrs. Sa Sokngim", 
            position: "Dean of Faculty of Science and Technology", 
            image: sokngim 
        },
        { 
            name: "Mr. Son Bunhors", 
            position: "Head of Deparment of Khmer Literature", 
            image: bunhors 
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
        associate: [
            { name: "Chemistry", image: majorimg, params: {majorDepartment: 'department-mathematic',majorDegree: 'associate', majorName: 'associate-mathematic'}},
        ],
        bachelor: [
            { name: "Chemistry", image: majorimg, params: {majorDepartment: 'department-mathematic',majorDegree: 'bachelor', majorName: 'bachelor-chemistry'}},
            { name: "Physics", image: majorimg, params: {majorDepartment: 'department-mathematic',majorDegree: 'bachelor', majorName: 'bachelor-physics'}},
            { name: "Mathematic", image: majorimg, params: {majorDepartment: 'department-mathematic',majorDegree: 'bachelor', majorName: 'bachelor-mathematic'}},
        ]
      },
      sidebarComponent: "DepartMath",
    },
    'department-business': {
      title: 'Department of Business',
      description: 'Department of Business will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mr. Teal Youlong", 
            position: "Dean of Faculty of Economics Business & Tourism", 
            image: tealyoulong 
        },
        { 
            name: "Mr. Taing Keangse", 
            position: "Head of Department of Business", 
            image: taingkeangse 
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
        associate: [
            { name: "Accounting", image: majorimg, params: {majorDepartment: 'department-business',majorDegree: 'associate', majorName: 'associate-accounting'}},
            { name: "Management", image: majorimg, params: {majorDepartment: 'department-business',majorDegree: 'associate', majorName: 'associate-management'}},
            { name: "Marketing", image: majorimg, params: {majorDepartment: 'department-business',majorDegree: 'associate', majorName: 'associate-marketing'}},
        ],
        bachelor: [
            { name: "Accounting and Auditing", image: majorimg, params: {majorDepartment: 'department-business',majorDegree: 'bachelor', majorName: 'bachelor-accounting-auditing'}},
            { name: "Finance and Banking", image: majorimg, params: {majorDepartment: 'department-business',majorDegree: 'bachelor', majorName: 'bachelor-finance-banking'}},
            { name: "Marketing", image: majorimg, params: {majorDepartment: 'department-business',majorDegree: 'bachelor', majorName: 'bachelor-marketing'}},
            { name: "Management", image: majorimg, params: {majorDepartment: 'department-business',majorDegree: 'bachelor', majorName: 'bachelor-management'}},
            { name: "International Economics", image: majorimg, params: {majorDepartment: 'department-business',majorDegree: 'bachelor', majorName: 'bachelor-international-economic'}},
        ]
      },
      sidebarComponent: "DepartBusiness",
    },
    'department-tourism': {
      title: 'Department of Tourism',
      description: 'Department of Tourism will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mr. Teal Youlong", 
            position: "Dean of Faculty of Economics Business & Tourism", 
            image: tealyoulong 
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
        associate: [
            { name: "International Tourism Management", image: majorimg, params: {majorDepartment: 'department-tourism',majorDegree: 'associate', majorName: 'associate-international-tourism-management'}},
            { name: "Tourism and Hospitality Management", image: majorimg, params: {majorDepartment: 'department-tourism',majorDegree: 'associate', majorName: 'associate-tourism-hospitality-management'}},
            
        ],
        bachelor: [
            { name: "International Tourism Management", image: majorimg, params: {majorDepartment: 'department-tourism',majorDegree: 'bachelor', majorName: 'bachelor-international-tourism-management'}},
            { name: "Tourism and Hospitality Management", image: majorimg, params: {majorDepartment: 'department-tourism',majorDegree: 'bachelor', majorName: 'bachelor-tourism-hospitality-management'}},
        ]
      },
      sidebarComponent: "DepartTourism",
    },
    'department-economic': {
      title: 'Department of Economic',
      description: 'Department of Tourism will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mr. Teal Youlong", 
            position: "Dean of Faculty of Economics Business & Tourism", 
            image: tealyoulong 
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
        associate: [
            { name: "Marketing", image: majorimg, params: {majorDepartment: 'department-economic',majorDegree: 'associate', majorName: 'associate-marketing'}},
        ],
        bachelor: [
            { name: "International Economic", image: majorimg, params: {majorDepartment: 'department-economic',majorDegree: 'bachelor', majorName: 'bachelor-international-economic'}},
            { name: "International Marketing", image: majorimg, params: {majorDepartment: 'department-economic',majorDegree: 'bachelor', majorName: 'bachelor-international-marketing'}},
            { name: "Marketing", image: majorimg, params: {majorDepartment: 'department-economic',majorDegree: 'bachelor', majorName: 'bachelor-marketing'}},
        ]
      },
      sidebarComponent: "DepartEconomic",
    },
    'department-laws': {
      title: 'Department of Laws',
      description: 'Department of Laws will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mr. Leang Taingsoth", 
            position: "Dean of Faculty of Social Science and Laws", 
            image: leangtaingsoth 
        },
        { 
            name: "Mr. Eom Rathanak", 
            position: "Chief of Faculty of Laws", 
            image: eomrathanak 
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
        associate: [
            { name: "Laws", image: majorimg, params: {majorDepartment: 'department-laws',majorDegree: 'associate', majorName: 'associate-laws'}},
        ],
        bachelor: [
            { name: "Laws", image: majorimg, params: {majorDepartment: 'department-laws',majorDegree: 'bachelor', majorName: 'bachelor-laws'}},
            { name: "Private Laws", image: majorimg, params: {majorDepartment: 'department-laws',majorDegree: 'bachelor', majorName: 'bachelor-private-laws'}},
            { name: "International Laws", image: majorimg, params: {majorDepartment: 'department-laws',majorDegree: 'bachelor', majorName: 'bachelor-international-laws'}},
        ]
      },
      sidebarComponent: "DepartLaws",
    },
    'department-social-science': {
      title: 'Department of Social Science',
      description: 'Department of Social Science will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
      image: demoCard,
      members: [
        { 
            name: "Mr. Leang Taingsoth", 
            position: "Dean of Faculty of Social Science and Laws", 
            image: leangtaingsoth 
        },
        { 
            name: "Mr. Eom Rathanak", 
            position: "Chief of Faculty Social Science and Laws", 
            image: eomrathanak 
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
        associate: [
            { name: "Public Administration", image: majorimg, params: {majorDepartment: 'department-social-science',majorDegree: 'associate', majorName: 'associate-public-administration'}},
        ],
        bachelor: [
            { name: "Public Adminstration", image: majorimg, params: {majorDepartment: 'department-social-science',majorDegree: 'bachelor', majorName: 'bachelor-public-administration'}},
            { name: "Political Science and International Relations", image: majorimg, params: {majorDepartment: 'department-social-science',majorDegree: 'bachelor', majorName: 'bachelor-international-relation'}},
            
        ]
      },
      sidebarComponent: "DepartSocialScience",
    },
  }