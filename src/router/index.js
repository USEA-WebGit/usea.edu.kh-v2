import { createRouter, createWebHistory } from "vue-router";
// import { useLoading } from "@/composables/useLoading.js";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { title: "Home - USEA", breadcrumb: "Home" },
  },

  // ===== About =====
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
      // NOTE: leading slash makes it root-level; keep if intentional
      {
        path: "/news/:slug",
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
      // NOTE: leading slash = root-level; keep if intentional
      {
        path: "/about/recognition/:slug",
        name: "recognition-detail",
        component: () =>
          import("@/views/Navbar/About/Governance/RecognitionDetail.vue"),
        meta: { title: "Recognition Detail", breadcrumb: "Recognition Detail" },
      },
    ],
  },

  // ===== Academics =====
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

  // ===== Partnership =====
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

  // ===== Research =====
  {
    path: "/research",
    name: "research",
    component: () => import("@/views/Navbar/Research/Research.vue"),
    meta: { title: "Research", breadcrumb: "Research" },
  },

  // ===== Services =====
  // router/index.js (only the staff children changed)

  {
    path: "/services",
    name: "services",
    children: [
      // Career
      {
        path: "career-center",
        name: "career-center",
        meta: { title: "Career Center", breadcrumb: "Career" },
        children: [
          {
            path: "about",
            name: "career-about",
            component: () => import("@/views/Navbar/Services/Career/About.vue"),
          },
          {
            path: "career-staff",
            name: "career-staff",
            component: () => import("@/components/Services/StaffList.vue"),
            props: { serviceKey: "career-center" },
          },
          {
            path: "jobs",
            name: "career-jobs",
            component: () => import("@/views/Navbar/Services/Career/Jobs.vue"),
          },
          {
            path: "jobs/:id",
            name: "career-job-detail",
            component: () =>
              import("@/views/Navbar/Services/Career/JobDetail.vue"),
            props: true,
            meta: { title: "Job Detail", breadcrumb: "Job Detail" },
          },
          {
            path: "events",
            name: "career-events",
            component: () =>
              import("@/views/Navbar/Services/Career/Events.vue"),
          },
          {
            path: "events/:id",
            name: "career-event-detail",
            component: () =>
              import("@/views/Navbar/Services/Career/EventDetail.vue"),
            props: true,
            meta: { title: "Event Detail", breadcrumb: "Event Detail" },
          },
          {
            path: "news",
            name: "career-news",
            component: () => import("@/views/Navbar/Services/Career/News.vue"),
          },
          {
            path: "news/:id",
            name: "career-news-detail",
            component: () =>
              import("@/views/Navbar/Services/Career/NewsDetail.vue"),
            props: true,
            meta: { title: "News Detail", breadcrumb: "News Detail" },
          },
        ],
      },

      // Library
      {
        path: "library-services",
        name: "library-services",
        // component: () => import("@/views/Navbar/Services/Library.vue"),
        meta: { title: "Library Services", breadcrumb: "Library Services" },
        children: [
          {
            path: "about",
            name: "library-about",
            component: () =>
              import("@/views/Navbar/Services/Library/About.vue"),
          },
          {
            path: "staff",
            name: "library-staff",
            component: () => import("@/components/Services/StaffList.vue"),
            props: { serviceKey: "library" },
          },
          {
            path: "library/:libraryName",
            name: "library-unit",
            component: () =>
              import("@/views/Navbar/Services/Library/LibraryUnit.vue"),
            props: true,
          },
          // router snippet (add under children of "library-services")
          {
            path: "library/:libraryName/events/:id",
            name: "library-unit-event-detail",
            component: () =>
              import(
                "@/views/Navbar/Services/Library/LibraryUnitEventDetail.vue"
              ),
            props: true,
          },
          {
            path: "library/:libraryName/news/:id",
            name: "library-unit-news-detail",
            component: () =>
              import(
                "@/views/Navbar/Services/Library/LibraryUnitNewsDetail.vue"
              ),
            props: true,
          },
        ],
      },

      // IT
      {
        path: "it-services",
        name: "it-services",
        // component: () => import("@/views/Navbar/Services/IT-Services.vue"),
        meta: { title: "IT Services", breadcrumb: "IT Services" },
        children: [
          {
            path: "about",
            name: "it-about",
            component: () => import("@/views/Navbar/Services/IT/About.vue"),
          },
          {
            path: "staff",
            name: "it-staff",
            component: () => import("@/components/Services/StaffList.vue"),
            props: { serviceKey: "it-services" },
          },
        ],
      },

      // Health
      {
        path: "health-services",
        name: "health-services",
        // component: () => import("@/views/Navbar/Services/Health-Services.vue"),
        meta: { title: "Health Services", breadcrumb: "Health Services" },
        children: [
          {
            path: "about",
            name: "health-about",
            component: () => import("@/views/Navbar/Services/Health/About.vue"),
          },
          {
            path: "staff",
            name: "health-staff",
            component: () => import("@/components/Services/StaffList.vue"),
            props: { serviceKey: "health-services" },
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// const { start, stop } = useLoading();
// router.beforeEach((to, from, next) => {
//   start("Loading…");
//   next();
// });
// router.afterEach(() => {
//   stop();
// });
// router.onError(() => {
//   stop();
// });
export default router;
