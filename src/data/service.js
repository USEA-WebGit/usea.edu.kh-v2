// service.js
import demoCard from "@/assets/images/demoCard.png";
import nesokna from "@/assets/images/ne_sokna.JPG";
import tealyoulong from "@/assets/images/teal_youlong.png";
import departmentbg from "@/assets/building/department.png";

import RightServices from "@/components/SideBar/RightServices.vue";

export const services = {
  "career-center": {
    title: "Career Center",
    description:
      "The USEA Career Center supports students and alumni with career counseling, job opportunities, internships, and events that connect learners with the labor market.",
    image: departmentbg,
    members: [
      {
        name: "Mr. Ne Sokna",
        position: "Head of USEA Career Center",
        image: nesokna,
      },
      {
        name: "Mr. Teal Youlong",
        position: "Career Center Coordinator",
        image: tealyoulong,
      },
    ],
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    links: [
      {
        key: "career-about",
        label: "About Career Center",
        name: "career-about",
      },
      {
        key: "career-staff",
        label: "Career Center Staff",
        name: "career-staff",
      },
      { key: "career-jobs", label: "Job Opportunity", name: "career-jobs" },
      {
        key: "career-events",
        label: "Career Center Event",
        name: "career-events",
      },
    ],
    sidebarComponent: RightServices,
  },

  library: {
    title: "Library",
    description:
      "The USEA Library provides learning resources, study spaces, and specialized corners to support research and lifelong learning.",
    image: departmentbg,
    members: [
      { name: "Library Director", position: "Director", image: demoCard },
      { name: "Library Staff", position: "Librarian", image: demoCard },
    ],
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    links: [
      { key: "library-about", label: "About Library", name: "library-about" },
      { key: "library-staff", label: "Library Staff", name: "library-staff" },
      { key: "library-divider", label: "Library", isDivider: true },
      {
        key: "library-jpic",
        label: "Joint Public Information Center",
        name: "library-joint-public-info-center",
      },
      {
        key: "library-american",
        label: "American Corner",
        name: "library-american-corner",
      },
    ],
    sidebarComponent: RightServices,
  },

  "it-services": {
    title: "IT Services",
    description:
      "USEA IT Services delivers campus IT infrastructure, user support, and digital services to students and staff.",
    image: departmentbg,
    members: [
      { name: "IT Manager", position: "Head of IT Services", image: demoCard },
      { name: "IT Support", position: "Support Staff", image: demoCard },
    ],
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    links: [
      { key: "it-about", label: "About IT Service", name: "it-about" },
      { key: "it-activities", label: "Activities", name: "it-activities" },
    ],
    sidebarComponent: RightServices,
  },

  "health-services": {
    title: "Health Services",
    description:
      "USEA Health Services provides basic medical support, health education, and wellness activities for the campus community.",
    image: departmentbg,
    members: [
      {
        name: "Health Services Lead",
        position: "Head of Health Services",
        image: demoCard,
      },
      { name: "Nurse", position: "Medical Staff", image: demoCard },
    ],
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    links: [
      {
        key: "health-about",
        label: "About Health Services",
        name: "health-about",
      },
      { key: "health-staff", label: "Staff", name: "health-staff" },
      {
        key: "health-activities",
        label: "Activities",
        name: "health-activities",
      },
    ],
    sidebarComponent: RightServices,
  },
};
