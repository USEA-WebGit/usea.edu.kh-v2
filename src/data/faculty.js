// faculty.js
import demoCard from '@/assets/images/demoCard.png';
import roemRipeng from '@/assets/images/roem_ripeng.png';
import chhemsaman from '@/assets/images/chhem_saman.png';
import thousrynich from '@/assets/images/thou_sreynich.png';
import phaivanna from '@/assets/images/phai_vanna.png';
import prosvichika from '@/assets/images/pros_vichika.png';
import chhetchantho from '@/assets/images/chhet_chantho.png';
import sethdavid from '@/assets/images/seth_david.png';
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
import leangtaingsoth from '@/assets/images/leang_taingsoth.png';
import eomrathanak from '@/assets/images/eom_rathanak.png';
import departmentbg from '@/assets/building/department.png';

// ✅ Use only the reusable sidebar
import FacultySidebar from '@/components/SideBar/FacultySidebar.vue';

export const faculties = {
  'arts-humanities-languages': {
    title: 'Faculty of Arts, Humanities & Languages',
    description: 'The Faculty of Arts, Humanities and Languages at the University of South-East Asia offers comprehensive language education programs spanning from beginner to advanced levels. The faculty is dedicated to providing students with the necessary knowledge, skills, and practical expertise in language education. The courses offered by the Faculty of Arts, Humanities and Languages encompass a range of programs, including General English and General Chinese programs, designed to enhance language proficiency. Additionally, specialized courses such as English for Specific Purposes and English for Academic Purposes cater to specific language needs. The faculty also offers Professional Development Courses for individuals seeking to further enhance their language skills. For those interested in pursuing a more structured program, the faculty provides diploma and associate degree programs in English and Chinese. Furthermore, students can opt for a Bachelor of Arts in Khmer Literature, a Bachelor of Arts in Teaching English as a Foreign Language (TEFL) or a Bachelor of Arts in Teaching Chinese as a Foreign Language (TCFL), which focus on equipping individuals with the necessary skills to become language educators.',
    image: demoCard,
    departments: [
      { name: 'Department of Chinese', image: departmentbg, params: { departmentName: 'department-chinese' } },
      { name: 'Department of English', image: departmentbg, params: { departmentName: 'department-english' } },
      { name: 'Department of Khmer Literature', image: departmentbg, params: { departmentName: 'department-khmer' } },
    ],
    members: [
      { name: 'Mr. Reom Ripeng', position: 'Director of Foreign Language Institute', image: roemRipeng, number: '012 345 678', email: 'reom.ripeng@usea.edu.kh' },
      { name: 'Mrs. Chhem Sam An', position: 'Head of Deparment of Khmer Literature', image: chhemsaman, number: '012 345 678', email: 'chhemsaman@usea.edu.kh' },
      { name: 'Mrs. Thou Sreynich', position: 'Head of Department of Chinese', image: thousrynich, number: '012 234 567' },
      { name: 'Mr. Phai Vanna', position: "Deputy Head of Student and Lecturer Affairs", image: phaivanna, email: 'phaivanna@usea.edu.kh', number: '012 345 678' },
      { name: 'Mrs. Pros Vichika', position: 'Deputy Head of Academic Office', image: prosvichika },
      { name: 'Mrs. Chhet Chantho', position: 'Head of Student and Lecturer Affairs of Department of Khmer', image: chhetchantho },
      { name: 'Mr. Seth David', position: "Staff of Student's Affair", image: sethdavid },
    ],
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    sidebarComponent: FacultySidebar, // ✅ unified
  },

  'science-technology': {
    title: 'Faculty of Science and Technology',
    description: 'Faculty of Science and Technology will become a leading university to provide innovative science and technology education with high quality in the purpose of building good capacity and attitude for responding to ASEAN labor market and in a region as well as being recognized nationally and internationally. Faculty of Science and Technology aims to offer a specialized education in information technology, architecture, civil engineering and mathematics with quality in order to provide knowledge, know-how, hard skills, soft skills, good attitude including loving national culture to all level of learners with full capacity in line with the ASEAN and region labor market needs.',
    image: demoCard,
    departments: [
      { name: 'Department of Architecture', image: departmentbg, params: { departmentName: 'department-architecture' } },
      { name: 'Department of Information and Communication Technology', image: departmentbg, params: { departmentName: 'department-technology' } },
      { name: 'Department of Mathematics and Science', image: departmentbg, params: { departmentName: 'department-mathematic' } },
    ],
    members: [
      { name: 'Ms. Sa Sokngim', position: 'Dean of Faculty of Science and Technology', image: sokngim },
      { name: 'Mr. Son Bunhors', position: 'Dean of Faculty of Science and Technology', image: bunhors },
    ],
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    sidebarComponent: FacultySidebar, // ✅ unified
  },

  'economics-business-tourism': {
    title: 'Faculty of Economics Business & Tourism',
    description: 'Faculty of Economics Business & Tourism aims to provide specialized education...',
    image: demoCard,
    departments: [
      { name: 'Department of Business', image: departmentbg, params: { departmentName: 'department-business' } },
      { name: 'Department of Tourism', image: departmentbg, params: { departmentName: 'department-tourism' } },
      { name: 'Department of Economic', image: departmentbg, params: { departmentName: 'department-economic' } },
    ],
    members: [
      { name: 'Mr. Teal Youlong', position: 'Dean of Faculty of Economics Business & Tourism', image: tealyoulong },
      { name: 'Mr. Taing Keangse', position: 'Head of Department of Business', image: taingkeangse },
      { name: 'Mr. Ne Sokna', position: 'Head of Department of Economics and Head of USEA Career Center', image: nesokna },
      { name: 'Mr. Luch Reaksmey', position: 'Head of Academic Office', image: luchreaksmey },
      { name: 'Mr. Hoeurm Sopha', position: 'Deputy Head of Academic Office in Charge of Examination Affairs', image: hoeurmsopha },
      { name: 'Mrs. Kang Chhorvy', position: 'Deputy Head of Academic Office in Charge of Lecturer Affairs', image: kangchhorvy },
      { name: 'Mrs. Horm Makara', position: 'Dean of Faculty of Economics Business & Tourism', image: hormmakara },
      { name: 'Mrs. Phun Sreypov', position: "Staff of Lecturers' Affairs", image: phunsreypov },
      { name: 'Mrs. Seng Chanleap', position: "Staff of Student's Affair", image: sengchanleap },
    ],
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    sidebarComponent: FacultySidebar, // ✅ unified
  },

  'social-science-law': {
    title: 'Faculty of Social Science & Law',
    description: 'Faculty of Social Science & Law aims to provide specialized education...',
    image: demoCard,
    departments: [
      { name: 'Department of Laws', image: departmentbg, params: { departmentName: 'department-laws' } },
      { name: 'Department of Social and Science', image: departmentbg, params: { departmentName: 'department-social-science' } },
    ],
    members: [
      { name: 'Mr. Leang Taingsoth', position: 'Dean of Faculty of Social Science and Law', image: leangtaingsoth },
      { name: 'Mr. Eom Rathanak', position: 'Head of Department of Laws', image: eomrathanak },
    ],
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    sidebarComponent: FacultySidebar, // ✅ unified
  },
};
