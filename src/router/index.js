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
import FacultyEconomic from '../views/Navbar/Academics/Faculty/FacultyEconomic/Faculty-Economic.vue';
import FacultyIT from '../views/Navbar/Academics/Faculty/FacultyIT/Faculty-IT.vue';
import FacultyStaff from '../views/Navbar/Academics/Faculty/FacultyIT/FacultyStaff.vue';
import FacultyLanguage from '../views/Navbar/Academics/Faculty/FacultyLanguage/Faculty-Language.vue';
import FacultyLaw from '../views/Navbar/Academics/Faculty/FacultyLaw/Faculty-Law.vue';
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
    component: Home,
    meta: { title: 'Home - USEA' },
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
        meta: { title: 'History-Logo Meaning' },
      },
      {
        path: 'vision-mission',
        name: 'vision',
        component: Vision,
        meta: {title: 'Vision-Mission'},
      },
      {
        path: 'location',
        name: 'location',
        component: Location,
        meta: {title: 'Location - USEA'},
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact,
        meta: {title: 'Contact - USEA'},
      },
      {
        path: 'news-events',
        name: 'news-events',
        component: NewsEvents,
        meta: {title: 'News-Events'},
      },
      {
        path: 'faq',
        name: 'faq',
        component: Faq,
        meta: {title: 'FAQ'},
      },
      {
        path: 'board-trustee',
        name: 'board-trustee',
        component: BoardTrustee,
        meta: {title: 'Board Trustees'},
      },
      {
        path: 'message',
        name: 'message',
        component: Message,
        meta: {title: "President's Message"},
      },
      {
        path: 'recognition',
        name: 'recognition',
        component: Recognition,
        meta: {title: 'Recognition & Accreditation'},
      },
    ],
  },
  {
    path: '/academic',
    name: 'Academic',
    children: [
      {
        path: 'international-college',
        name: 'internationa-college',
        component: InternationalCollege,
        meta: {title: 'International-College'},
      },
      {
        path: 'language-center',
        name: 'language-center',
        component: LanguageCenter,
        meta: {title: 'Language Center'},
      },
      {
        path: 'post-graduate',
        name: 'post-graduate',
        component: PostGraduate,
        meta: {title: 'Post Graduate'},
      },
      {
        path: 'short-course',
        name: 'short-course',
        component: ShortCourse,
        meta: {title: 'Short-Course'},
      },
      {
        path: 'faculty-economic',
        name: 'faculty-economic',
        component: FacultyEconomic,
        meta: {title: 'Faculty Economics, Business and Tourism'},
      },
      {
        path: 'faculty-technology',
        name: 'faculty-technology',
        component: FacultyIT,
        meta: {title: 'Faculty Sciences and Technology'},
        children:[
          {
            path: 'faculty-staff',
            name: 'faculty-staff',
            component: FacultyStaff,
            meta: {title: 'Faculty Staff'},
          }
        ]
      },
      {
        path: 'faculty-language',
        name: 'faculty-language',
        component: FacultyLanguage,
        meta: {title: 'Faculty Art, Humanities and Language'},
      },
      {
        path: 'faculty-law',
        name: 'faculty-law',
        component: FacultyLaw,
        meta: {title: 'Faculty Social Science and Law'},
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
        component: LocalPartnership,
        meta: {title: 'Local Partnership'},
      },
      {
        path: 'international-partnership',
        name: 'international-partnership',
        component: InternationalPartnership,
        meta: {title: 'International Partnership'},
      },
    ]
  },
  {
    path: '/research',
    name: 'research',
    component: Research,
    meta: {title: 'Research'},
  },
  {
    path: '/services',
    name: 'services',
    children:[
      {
        path: 'health-services',
        name: 'health-services',
        component: HealthServices,
        meta: {title: 'Health Services'},
      },
      {
        path: 'it-services',
        name: 'it-services',
        component: ITServices,
        meta: {title: 'IT Services'},
      },
      {
        path: 'library-services',
        name: 'library-services',
        component: LibraryServices,
        meta: {title: 'Library Services'},
      },
      {
        path: 'career-center',
        name: 'career-center',
        component: CareerCenter,
        meta: {title: 'Career Center'},
      },
    ]
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
