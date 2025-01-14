import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import History from '../views/Navbar/About/Organization/History.vue';
import Vision from '../views/Navbar/About/Organization/Vision-Mission.vue';
import Location from '../views/Navbar/About/Organization/Location.vue';
import Contact from '../views/Navbar/About/Information/Contact.vue';
import Faq from '../views/Navbar/About/Information/Faq.vue';
import NewsEvents from '../views/Navbar/About/Information/News-Events.vue';
import BoardTrustee from '../views/Navbar/About/Governance/Board-Trustee.vue';
import Message from '../views/Navbar/About/Governance/Message.vue';
import Recognition from '../views/Navbar/About/Governance/Recognition.vue';
import InternationalCollege from '../views/Navbar/Academics/Program/International-College.vue';
import LanguageCenter from '../views/Navbar/Academics/Program/Language-Center.vue';
import PostGraduate from '../views/Navbar/Academics/Program/Post-Graduate.vue';
import ShortCourse from '../views/Navbar/Academics/Program/Short-Course.vue';
import FacultyEconomic from '../views/Navbar/Academics/Faculty/Faculty-Economic.vue';
import FacultyIT from '../views/Navbar/Academics/Faculty/Faculty-IT.vue';
import FacultyLanguage from '../views/Navbar/Academics/Faculty/Faculty-Language.vue';
import FacultyLaw from '../views/Navbar/Academics/Faculty/Faculty-Law.vue';
import LocalPartnership from '../views/Navbar/Partnership/Local.vue';
import InternationalPartnership from '../views/Navbar/Partnership/International-Partner.vue';
import Research from '../views/Navbar/Research/Research.vue';
import HealthServices from '../views/Navbar/Services/Health-Services.vue';
import ITServices from '../views/Navbar/Services/IT-Services.vue';
import LibraryServices from '../views/Navbar/Services/Library.vue';
import CareerCenter from '../views/Navbar/Services/Career-Center.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // about navbar 
  {
    path: '/about',
    name: 'About',
    children: [
      {
        path: 'history',
        name: 'history',
        component: History,
      },
      {
        path: 'vision-mission',
        name: 'vision',
        component: Vision,
      },
      {
        path: 'location',
        name: 'location',
        component: Location,
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact,
      },
      {
        path: 'news-events',
        name: 'news-events',
        component: NewsEvents,
      },
      {
        path: 'faq',
        name: 'faq',
        component: Faq,
      },
      {
        path: 'board-trustee',
        name: 'board-trustee',
        component: BoardTrustee,
      },
      {
        path: 'message',
        name: 'message',
        component: Message,
      },
      {
        path: 'recognition',
        name: 'recognition',
        component: Recognition,
      },
    ],
  },
  {
    path: '/academic',
    name: 'Academic',
    children: [
      {
        path: 'internationa-college',
        name: 'internationa-college',
        component: InternationalCollege
      },
      {
        path: 'language-center',
        name: 'language-center',
        component: LanguageCenter
      },
      {
        path: 'post-graduate',
        name: 'post-graduate',
        component: PostGraduate
      },
      {
        path: 'short-course',
        name: 'short-course',
        component: ShortCourse
      },
      {
        path: 'faculty-economic',
        name: 'faculty-economic',
        component: FacultyEconomic
      },
      {
        path: 'faculty-technology',
        name: 'faculty-technology',
        component: FacultyIT
      },
      {
        path: 'faculty-language',
        name: 'faculty-language',
        component: FacultyLanguage
      },
      {
        path: 'faculty-law',
        name: 'faculty-law',
        component: FacultyLaw
      },
    
    ]
  },
  {
    path: '/partnership',
    name: 'Partnership',
    children: [
      {
        path: 'local-partnership',
        name: 'local-partnership',
        component: LocalPartnership
      },
      {
        path: 'international-partnership',
        name: 'international-partnership',
        component: InternationalPartnership
      },
    ]
  },
  {
    path: '/research',
    name: 'research',
    component: Research,
  },
  {
    path: '/services',
    name: 'services',
    children:[
      {
        path: 'health-services',
        name: 'health-services',
        component: HealthServices
      },
      {
        path: 'it-services',
        name: 'it-services',
        component: ITServices
      },
      {
        path: 'library-services',
        name: 'library-services',
        component: LibraryServices
      },
      {
        path: 'career-center',
        name: 'career-center',
        component: CareerCenter
      },
    ]
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
