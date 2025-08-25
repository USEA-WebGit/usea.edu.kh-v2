import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { title: "Home - USEA", breadcrumb: "Home" },
  },

  // start about
  {
    path: "/about",
    name: "About",
    meta: { title: "About - USEA", breadcrumb: "About" },
    children: [
      {
        path: "history",
        name: "history",
        component: () =>
          import("@/views/Navbar/About/Organization/History.vue"),
        meta: {
          title: "History-Logo Meaning",
          breadcrumb: "History and Logo Meaning",
        },
      },
      {
        path: "vision-mission",
        name: "vision",
        component: () =>
          import("@/views/Navbar/About/Organization/Vision-Mission.vue"),
        meta: { title: "Vision-Mission", breadcrumb: "Vision Mission" },
      },
      {
        path: "location",
        name: "location",
        component: () =>
          import("@/views/Navbar/About/Organization/Location.vue"),
        meta: { title: "Location - USEA", breadcrumb: "Location" },
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("@/views/Navbar/About/Information/Contact.vue"),
        meta: { title: "Contact - USEA", breadcrumb: "Contact" },
      },
      {
        path: "news-events",
        name: "news-events",
        component: () =>
          import("@/views/Navbar/About/Information/News-Events.vue"),
        meta: { title: "News-Events", breadcrumb: "News and Events" },
      },
      {
        path: "/news/:slug", // e.g. /about/news-events/news-2025-08-16
        name: "news-detail",
        component: () => import("@/components/Events/News-Detail.vue"),
        props: true,
        meta: { title: "News Detail", breadcrumb: "News Detail" },
      },
      {
        path: "events-detail",
        name: "events-detail",
        component: () => import("@/components/Events/Events-Detail.vue"),
        meta: { title: "Event Detail", breadcrumb: "Event Detail" },
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("@/views/Navbar/About/Information/Faq.vue"),
        meta: { title: "FAQ", breadcrumb: "FAQ" },
      },
      {
        path: "board-trustee",
        name: "board-trustee",
        component: () =>
          import("@/views/Navbar/About/Governance/Board-Trustee.vue"),
        meta: { title: "Board Trustees", breadcrumb: "Board Trustees" },
      },
      {
        path: "message",
        name: "message",
        component: () => import("@/views/Navbar/About/Governance/Message.vue"),
        meta: {
          title: "President's Message",
          breadcrumb: "President's Message",
        },
      },
      {
        path: "recognition",
        name: "recognition",
        component: () =>
          import("@/views/Navbar/About/Governance/Recognition.vue"),
        meta: {
          title: "Recognition & Accreditation",
          breadcrumb: "Recognition & Accreditation",
        },
      },
      {
        path: "/about/recognition/:slug",
        name: "recognition-detail",
        component: () =>
          import("@/views/Navbar/About/Governance/RecognitionDetail.vue"),
        meta: { title: "Recognition Detail", breadcrumb: "Recognition Detail" },
      },
    ],
  },
  // end about

  // start academic
  {
    path: "/academic",
    children: [
      {
        path: "faculty/:facultyName",
        name: "faculty-page",
        component: () =>
          import("@/views/Navbar/Academics/Faculty/FacultyPage.vue"),
      },
      {
        path: "international-college",
        name: "international-college",
        component: () =>
          import("@/views/Navbar/Academics/Program/International-College.vue"),
        meta: {
          title: "International-College",
          breadcrumb: "International College",
        },
      },
      {
        path: "international-college-staff",
        name: "international-college-staff",
        component: () =>
          import(
            "@/views/Navbar/Academics/Program/International-College-Staff.vue"
          ),
        meta: {
          title: "International College Staff",
          breadcrumb: "International College Staff",
        },
      },
      {
        path: "acca-program",
        name: "acca-program",
        component: () => import("@/views/Navbar/Academics/Program/Acca.vue"),
        meta: { title: "ACCA", breadcrumb: "ACCA" },
      },
      {
        path: "language-center",
        name: "language-center",
        component: () =>
          import("@/views/Navbar/Academics/Program/Language-Center.vue"),
        meta: { title: "Language Center", breadcrumb: "Language Center" },
      },
      {
        path: "post-graduate",
        name: "post-graduate",
        component: () =>
          import("@/views/Navbar/Academics/Program/Post-Graduate.vue"),
        meta: { title: "Post Graduate", breadcrumb: "Post Greaduate" },
      },
      {
        path: "post-graduate-staff",
        name: "post-graduate-staff",
        component: () =>
          import("@/views/Navbar/Academics/Program/Post-Graduate-Staff.vue"),
        meta: {
          title: "Post Graduate Staff",
          breadcrumb: "Post Greaduate Staff",
        },
      },
      {
        path: "short-course",
        name: "short-course",
        component: () =>
          import("@/views/Navbar/Academics/Program/Short-Course.vue"),
        meta: { title: "Short-Course", breadcrumb: "Short Course" },
      },
      {
        path: "short-course-detail",
        name: "short-course-detail",
        component: () =>
          import("@/views/Navbar/Academics/Program/ShourtCourseDetail.vue"),
        meta: {
          title: "Short-Course-Detail",
          breadcrumb: "Short Course Detail",
        },
      },
      {
        path: "faculty/:facultyStaff/faculty-staff",
        name: "faculty-staff",
        component: () =>
          import("@/views/Navbar/Academics/Faculty/FacultyStaff.vue"),
        meta: { title: "Faculty Staff", breadcrumb: "Faculty Staff" },
      },
      {
        path: ":majorDepartment/:majorDegree/:majorName",
        name: "major-name",
        component: () =>
          import("@/views/Navbar/Academics/Faculty/MajorPage.vue"),
        meta: { title: "Major Page", breadcrumb: "Major Page" },
      },
      {
        path: "civil-engineering",
        name: "civil-engineering",
        component: () =>
          import(
            "@/views/Navbar/Academics/Faculty/FacultyIT/Association/CivilEngineering.vue"
          ),
        meta: { title: "Civil Engineering", breadcrumb: "Civil Engineering" },
      },
      {
        path: "association-information-technology",
        name: "association-information-technology",
        component: () =>
          import(
            "@/views/Navbar/Academics/Faculty/FacultyIT/Association/InformationTechnology.vue"
          ),
        meta: {
          title: "Information Technology",
          breadcrumb: "Information Technology",
        },
      },
      {
        path: "department/:departmentStaff/department-staff",
        name: "faculty-staff-language",
        component: () =>
          import("@/views/Navbar/Academics/Faculty/DepartmentStaff.vue"),
        meta: { title: "Department Staff", breadcrumb: "Department Staff" },
      },
      {
        path: "department/:departmentName",
        name: "department-name",
        component: () =>
          import("@/views/Navbar/Academics/Faculty/DepartmentPage.vue"),
      },
    ],
  },
  {
    path: "/partnership",
    name: "Partnership",
    children: [
      {
        path: "international-partnership",
        name: "partnership",
        component: () => import("@/views/Navbar/Partnership/Partnership.vue"),
        meta: {
          title: "International Partnership",
          breadcrumb: "International Partnership",
        },
      },
    ],
  },
  {
    path: "/research",
    name: "research",
    component: () => import("@/views/Navbar/Research/Research.vue"),
    meta: { title: "Research", breadcrumb: "Research" },
  },
  {
    path: "/services",
    name: "services",
    children: [
      {
        path: "health-services",
        name: "health-services",
        component: () => import("@/views/Navbar/Services/Health-Services.vue"),
        meta: { title: "Health Services", breadcrumb: "Health Services" },
      },
      {
        path: "it-services",
        name: "it-services",
        component: () => import("@/views/Navbar/Services/IT-Services.vue"),
        meta: { title: "IT Services", breadcrumb: "IT Services" },
      },
      {
        path: "library-services",
        name: "library-services",
        component: () => import("@/views/Navbar/Services/Library.vue"),
        meta: { title: "Library Services", breadcrumb: "Library Services" },
      },
      {
        path: "career-center",
        name: "career-center",
        component: () => import("@/views/Navbar/Services/Career-Center.vue"),
        meta: { title: "Career Center", breadcrumb: "Career" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
