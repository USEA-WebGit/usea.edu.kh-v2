// service.js
import demoCard from "@/assets/images/demoCard.png";
import nesokna from "@/assets/images/ne_sokna.JPG";
import tealyoulong from "@/assets/images/teal_youlong.png";
import departmentbg from "@/assets/building/department.png";

export const services = {
  // =========================
  // CAREER CENTER (your sample kept)
  // =========================
  "career-center": {
    title: "Career Center",
    image: departmentbg,
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    links: [
      {
        key: "career-about",
        label: "About Career Center",
        name: "career-about",
        description:
          "The USEA Career Center supports students and alumni with career counseling, job opportunities, internships, and events that connect learners with the labor market.",
        content: [
          {
            title: "VISION & MISSION",
            description:
              "និស្សិតត្រូវបានផ្ដល់សិទ្ធិសម្រាប់បង្កើតជម្រើសអាជីពដោយខ្លួនឯង និងគ្រប់គ្រងជីវិតអាជីព តាមរយៈព័ត៌មាន បណ្តាញវិជ្ជាជីវៈ និងឱកាសការងារ ដើម្បីអភិវឌ្ឍ និងពង្រឹងជំនាញត្រឹមត្រូវ ។",
            li: [
              "ភ្ជាប់និស្សិតជាមួយជំនាញច្បាស់លាស់ និងផ្នត់គំនិតសម្រាប់សេដ្ឋកិច្ចឌីជីថល",
              "ផ្តល់ឱកាសការងារហាត់ការ និងអាហារូបករណ៍ ដើម្បីទទួលបទពិសោធន៍ពាក់ព័ន្ធ",
              "ភ្ជាប់និស្សិតទៅនិយោជក (ឯកជន អង្គការសង្គមស៊ីវិល និងរដ្ឋ)",
              "បង្កើតសហគមន៍រឹងមាំជាមួយអតីតនិស្សិត ដើម្បីជំរុញការផ្លាស់ប្តូរដោយវិជ្ជមាន",
            ],
          },
          {
            title: "THE CAREER CENTER SERVICES",
            content: [
              {
                title: "Job Seeking Application & Interview",
                li: [
                  "ការសរសេរ CV/Resume",
                  "ការសរសេរ Cover Letter",
                  "ការសម្ភាសន៍សាកល្បង",
                  "ការផ្ញើពាក្យអរគុណ (Thank you) និងតាមដាន (Follow Up) តាមសារអេឡិចត្រូនិច",
                  "កសាងកេរ្ដិ៍ឈ្មោះរបស់ខ្លួនឯងជានិស្សិត",
                ],
              },
              {
                title: "Employability Skill Building",
                li: [
                  "ការប្រាស្រ័យទាក់ទង និងជំនាញក្នុងការទំនាក់ទំនង",
                  "ការងារជាក្រុម",
                  "ការដោះស្រាយបញ្ហា",
                  "ការកសាងទំនាក់ទំនង បច្ចេកវិទ្យា (ICT)",
                  "ជំនាញបច្ចេកទេស",
                  "ជំនាញរៀបចំផែនការ",
                  "ការរៀបចំជំនាញគ្រប់គ្រងខ្លួនឯង",
                ],
              },
              {
                title: "Event (workshops/networking)",
                li: [
                  "សិក្សាអំពីអង្គភាព-ក្រុមហ៊ុន (ជាពិសេសនិស្សិតដែលសិក្សាឆ្នាំទី១ ទី២)",
                  "សិក្ខាសាលាតម្រង់ទិសអាជីពការងារ",
                  "វេទិកា ឬពិព័រការងារ",
                  "កម្មវិធីបណ្ដាញព្រឹត្តិការណ៍ពីវិស័យ ធនាគារ និងទីផ្សាឌីជីថល",
                ],
              },
              {
                title: "Internship & Scholarship Opportunities",
                li: [
                  "ផ្ទាំងព័ត៌មានអំពីកម្មសិក្សា អាហារូបករណ៍ និងឱកាសការងារ",
                  "វេទិការព័ត៌មានអនឡាញ (Facebook page & Telegram Channel",
                  "ពាក្យសុំអាហារូបករណ៍ និងការគាំទ្រការសម្ភាសន៍",
                ],
              },
              {
                title: "Career & Major",
                li: [
                  "សេវាប្រឹក្សាការងារមួយទល់មួយ",
                  "សេវាប្រឹក្សាមុខជំនាញមួយទល់មួយ (កម្មវិធីណែនាំដោយអតីតនិស្សិត)",
                  "សិក្សាសាលាតម្រង់ទិសសាកលវិទ្យាល័យ ឬវេទិការសម្រាប់សិស្សមធ្យមសិក្សាទុតិយភូមិ",
                ],
              },
            ],
          },
          {
            title: "Career Center Staff Responsible",
            content: [
              "សេវាប្រឹក្សាការងារមួយទល់មួយ",
              "សេវាប្រឹក្សាមុខជំនាញមួយទល់មួយ (កម្មវិធីណែនាំដោយអតីតនិស្សិត)",
              "សិក្សាសាលាតម្រង់ទិសសាកលវិទ្យាល័យ ឬវេទិការសម្រាប់សិស្សមធ្យមសិក្សាទុតិយភូមិ",
              "សេវាប្រឹក្សាការងារមួយទល់មួយ",
              "សេវាប្រឹក្សាមុខជំនាញមួយទល់មួយ (កម្មវិធីណែនាំដោយអតីតនិស្សិត)",
              "សិក្សាសាលាតម្រង់ទិសសាកលវិទ្យាល័យ ឬវេទិការសម្រាប់សិស្សមធ្យមសិក្សាទុតិយភូមិ",
            ],
          },
        ],
      },
      {
        key: "career-staff",
        label: "Career Center Staff",
        name: "career-staff",
        members: [
          {
            name: "Mr. Ne Sokna",
            position: "Head of USEA Career Center",
            image: nesokna,
            phone: "011 234 678",
            email: "nesokna@usea.edu.kh",
          },
          {
            name: "Mr. Teal Youlong",
            position: "Career Center Coordinator",
            image: tealyoulong,
          },
        ],
      },
      {
        key: "career-jobs",
        label: "Job Opportunity",
        name: "career-jobs",
        joblist: [
          {
            id: 1,
            title: "Hiring Job From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            logo: demoCard,
            address: "Watbo, Sala Kamreuk",
            location: "Siemreap",
            hiredate: "10-08-2025",
            duedate: "25-08-2025",
          },
          {
            id: 2,
            title: "Hiring Job From CED",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            logo: demoCard,
            address: "Svay Dangkum",
            location: "Svay Rieng",
            hiredate: "26-08-2025",
            duedate: "01-09-2025",
          },
          {
            id: 3,
            title: "Hiring Job From EFD",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            logo: demoCard,
            address: "Wat Phnom",
            location: "Phnom Penh",
            hiredate: "26-08-2025",
            duedate: "30-08-2025",
          },
          {
            id: 4,
            title: "Hiring Job From EFD",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            logo: demoCard,
            address: "Svay Dangkum",
            location: "Siemreap",
            hiredate: "26-09-2025",
            duedate: "30-09-2025",
          },
          {
            id: 5,
            title: "Hiring Job From EFD",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            logo: demoCard,
            address: "Svay Dangkum",
            location: "Siemreap",
            hiredate: "26-09-2025",
            duedate: "30-09-2025",
          },
          {
            id: 6,
            title: "Hiring Job From EFD",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            logo: demoCard,
            address: "Svay Dangkum",
            location: "Siemreap",
            hiredate: "26-09-2025",
            duedate: "30-09-2025",
          },
          {
            id: 7,
            title: "Hiring Job From EFD",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            logo: demoCard,
            address: "Svay Dangkum",
            location: "Siemreap",
            hiredate: "26-09-2025",
            duedate: "30-09-2025",
          },
          {
            id: 8,
            title: "Hiring Job From EFD",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            logo: demoCard,
            address: "Svay Dangkum",
            location: "Siemreap",
            hiredate: "26-09-2025",
            duedate: "30-09-2025",
          },
          {
            id: 9,
            title: "Hiring Job From EFD",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            logo: demoCard,
            address: "Svay Dangkum",
            location: "Siemreap",
            hiredate: "26-09-2025",
            duedate: "30-09-2025",
          },
        ],
      },
      {
        key: "career-events",
        label: "Career Center Event",
        name: "career-events",
        eventnewlist: [
          {
            id: 1,
            title: "Workshop From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "30-08-2025",
            time: "08:00",
            category: "cc-news",
            activity: [],
          },
          {
            id: 2,
            title: "Workshop From DEF",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "1-08-2025",
            time: "08:00",
            category: "cc-events",
            activity: [demoCard, demoCard, demoCard],
          },
          {
            id: 3,
            title: "Workshop From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "25-08-2025",
            time: "08:00",
            category: "cc-events",
            activity: [],
          },
          {
            id: 4,
            title: "Workshop From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "1-08-2025",
            time: "08:00",
            category: "cc-events",
            activity: [],
          },
          {
            id: 5,
            title: "Workshop From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "30-09-2025",
            time: "08:00",
            category: "cc-news",
            activity: [],
          },
          {
            id: 6,
            title: "Workshop From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "30-09-2025",
            time: "08:00",
            category: "cc-news",
            activity: [],
          },
          {
            id: 7,
            title: "Workshop From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "30-09-2025",
            time: "08:00",
            category: "cc-news",
            activity: [],
          },
          {
            id: 8,
            title: "Workshop From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "30-09-2025",
            time: "08:00",
            category: "cc-news",
            activity: [],
          },
          {
            id: 9,
            title: "Workshop From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "30-09-2025",
            time: "08:00",
            category: "cc-news",
            activity: [],
          },
          {
            id: 10,
            title: "Workshop From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "30-09-2025",
            time: "08:00",
            category: "cc-news",
            activity: [],
          },
          {
            id: 10,
            title: "Workshop From ABC",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            thumbnail: demoCard,
            location: "Meeting Hall, USEA",
            date: "30-09-2025",
            time: "08:00",
            category: "cc-events",
            activity: [],
          },
        ],
      },
    ],
    sidebarKey: "RightServices",
  },

  // =========================
  // LIBRARY (now same structure)
  // =========================
  library: {
    title: "Library",
    description:
      "The USEA Library provides learning resources, study spaces, and specialized corners to support research and lifelong learning.",
    image: departmentbg,

    // General about/history
    about: {
      history:
        "Founded in 2007, the USEA Library has grown into a modern learning hub. It provides quiet and collaborative study spaces, access to print and e-resources, and two specialized corners: JPIC and American Corner.",
      highlights: [
        "2 specialized corners: JPIC & American Corner",
        "Print & digital collections with on-campus access",
        "Workshops on research, information literacy, and academic skills",
      ],
    },

    // Sub-libraries
    libraries: [
      {
        name: "Joint Public Information Center (JPIC)",
        sourceKey: "jpic",
        image: departmentbg,
        params: { libraryName: "library-joint-public-info-center" },
        about: {
          description:
            "JPIC provides access to public information resources and supports communication, outreach, and media literacy.",
          sections: [
            {
              title: "What You’ll Find",
              li: [
                "News & publications",
                "Civic engagement resources",
                "Training events",
              ],
            },
            {
              title: "Services",
              li: [
                "Public information access and advisory",
                "Media literacy workshops",
                "Outreach & community engagement",
              ],
            },
          ],
        },
        activities: [
          { image: demoCard },
          { image: demoCard },
          { image: demoCard },
        ],

        eventnewlist: [
          {
            id: 1,
            title: "Open Data & Civic Tech Workshop",
            description:
              "Intro to open government data, datasets, and building civic tools.",
            thumbnail: demoCard,
            location: "JPIC Room",
            date: "20-08-2025",
            time: "09:00",
            category: "jpic-event",
            source: "JPIC", // <— tag for overall feed
          },
          {
            id: 2,
            title: "Media Literacy for Students",
            description:
              "How to evaluate sources, detect misinformation, and cite responsibly.",
            thumbnail: demoCard,
            location: "JPIC Room",
            date: "27-09-2025",
            time: "14:00",
            category: "jpic-event",
            source: "JPIC",
          },
          {
            id: 3,
            title: "Media Literacy for Students",
            description:
              "How to evaluate sources, detect misinformation, and cite responsibly.",
            thumbnail: demoCard,
            location: "JPIC Room",
            date: "18-07-2025",
            time: "14:00",
            category: "jpic-event",
            source: "JPIC",
          },
          {
            id: 4,
            title: "Media Literacy for Students",
            description:
              "How to evaluate sources, detect misinformation, and cite responsibly.",
            thumbnail: demoCard,
            location: "JPIC Room",
            date: "27-09-2025",
            time: "14:00",
            category: "jpic-event",
            source: "JPIC",
          },
          {
            id: 5,
            title: "Media Literacy for Students",
            description:
              "How to evaluate sources, detect misinformation, and cite responsibly.",
            thumbnail: demoCard,
            location: "JPIC Room",
            date: "27-09-2025",
            time: "14:00",
            category: "jpic-event",
            source: "JPIC",
          },
          {
            id: 6,
            title: "Media Literacy for Students",
            description:
              "How to evaluate sources, detect misinformation, and cite responsibly.",
            thumbnail: demoCard,
            location: "JPIC Room",
            date: "27-09-2025",
            time: "14:00",
            category: "jpic-event",
            source: "JPIC",
          },
          {
            id: 7,
            title: "Media Literacy for Students",
            description:
              "How to evaluate sources, detect misinformation, and cite responsibly.",
            thumbnail: demoCard,
            location: "JPIC Room",
            date: "27-09-2025",
            time: "14:00",
            category: "jpic-event",
            source: "JPIC",
          },
          {
            id: 8,
            title: "Media Literacy for Students",
            description:
              "How to evaluate sources, detect misinformation, and cite responsibly.",
            thumbnail: demoCard,
            location: "JPIC Room",
            date: "27-09-2025",
            time: "14:00",
            category: "jpic-event",
            source: "JPIC",
          },
          {
            id: 9,
            title: "Media Literacy for Students",
            description:
              "How to evaluate sources, detect misinformation, and cite responsibly.",
            thumbnail: demoCard,
            location: "JPIC Room",
            date: "27-09-2025",
            time: "14:00",
            category: "jpic-event",
            source: "JPIC",
          },
          {
            id: 10,
            title: "Media Literacy for Students",
            description:
              "How to evaluate sources, detect misinformation, and cite responsibly.",
            thumbnail: demoCard,
            location: "JPIC Room",
            date: "27-09-2025",
            time: "14:00",
            category: "jpic-event",
            source: "JPIC",
          },
        ],

        newslist: [
          {
            id: 1,
            title: "JPIC Launches Community Info Wall",
            description:
              "New corner for civic announcements, public notices, and local resources.",
            thumbnail: demoCard,
            date: "08-09-2025",
            category: "jpic-news",
            source: "JPIC",
          },
          {
            id: 2,
            title: "Partnership with Local NGOs",
            description:
              "JPIC collaborates to share citizen services and volunteer opportunities.",
            thumbnail: demoCard,
            date: "16-09-2025",
            category: "jpic-news",
            source: "JPIC",
          },
        ],
      },

      {
        name: "American Corner",
        sourceKey: "ac",
        image: departmentbg,
        params: { libraryName: "library-american-corner" },
        about: {
          description:
            "A collaborative space offering US-focused resources, English learning support, and cultural exchange activities.",
          sections: [
            {
              title: "Programs",
              li: [
                "Conversation clubs",
                "Scholarship info sessions",
                "Cultural events",
              ],
            },
            {
              title: "Resources",
              li: [
                "English learning materials",
                "US culture & education info",
                "Exam prep references",
              ],
            },
          ],
        },
        activities: [{ image: demoCard }, { image: demoCard }],

        eventnewlist: [
          {
            id: 1,
            title: "Conversation Club: Travel & Culture",
            description:
              "Practice English through discussions about travel, culture, and daily life.",
            thumbnail: demoCard,
            location: "American Corner",
            date: "24-09-2025",
            time: "16:00",
            category: "american-event",
            source: "American Corner",
          },
          {
            id: 2,
            title: "Study in the USA: Application Tips",
            description:
              "Guidance on admissions, essays, recommendation letters, and timelines.",
            thumbnail: demoCard,
            location: "American Corner",
            date: "01-10-2025",
            time: "10:30",
            category: "american-event",
            source: "American Corner",
          },
        ],

        newslist: [
          {
            id: 1,
            title: "New TOEFL Prep Materials Arrived",
            description:
              "Fresh practice books and sample tests now available at the corner.",
            thumbnail: demoCard,
            date: "10-09-2025",
            category: "american-news",
            source: "American Corner",
          },
          {
            id: 2,
            title: "Alumni Panel: Studying in the US",
            description:
              "Hear from USEA alumni about their experiences at US universities.",
            thumbnail: demoCard,
            date: "19-09-2025",
            category: "american-news",
            source: "American Corner",
          },
        ],
      },
    ],

    // Staff (members)
    members: [
      { name: "Ms. Srey Leak", position: "Library Director", image: demoCard },
      { name: "Mr. Dara", position: "Reference Librarian", image: demoCard },
      { name: "Ms. Lina", position: "Circulation Staff", image: demoCard },
    ],

    // General library activities (gallery)
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],

    // Optional library-wide events (still tag them with "Library")
    eventnewlist: [
      {
        id: 1,
        title: "Research Skills Workshop",
        description:
          "Learn how to search databases and manage citations effectively.",
        thumbnail: demoCard,
        location: "Library Seminar Room",
        date: "15-09-2025",
        time: "10:00",
        category: "library-event",
        source: "Library",
      },
    ],

    newslist: [
      {
        id: 1,
        title: "New E-Resources Available for Fall",
        description:
          "Access newly subscribed academic databases and e-journals.",
        thumbnail: demoCard,
        date: "05-09-2025",
        category: "library-news",
        source: "Library",
      },
      {
        id: 2,
        title: "Extended Study Hours During Exams",
        description: "The library will open until 9:00 PM during exam weeks.",
        thumbnail: demoCard,
        date: "18-09-2025",
        category: "library-news",
        source: "Library",
      },
    ],

    sidebarKey: "RightServices",
  },

  // =========================
  // IT SERVICES (now same structure)
  // =========================
  "it-services": {
    title: "IT Services",
    image: departmentbg,
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    links: [
      {
        key: "it-about",
        label: "About IT Services",
        name: "it-about",
        description:
          "USEA IT Services delivers campus IT infrastructure, user support, and digital services to students and staff.",
        content: [
          {
            title: "Infrastructure & Operations",
            li: [
              "Network & Wi-Fi management",
              "Server & storage administration",
              "Identity & access control",
            ],
          },
          {
            title: "User Support",
            li: [
              "Helpdesk & ticketing",
              "Email & account setup",
              "Classroom technology support",
            ],
          },
          {
            title: "Digital Services",
            li: [
              "Website & LMS support",
              "Computer labs & printing",
              "Software licensing & updates",
            ],
          },
        ],
      },
      {
        key: "it-staff",
        label: "IT Staff",
        name: "it-staff",
        members: [
          {
            name: "Mr. Chanrith",
            position: "Head of IT Services",
            image: demoCard,
          },
          {
            name: "Ms. Sokly",
            position: "Systems Administrator",
            image: demoCard,
          },
          {
            name: "Mr. Vutha",
            position: "IT Support Specialist",
            image: demoCard,
          },
        ],
      },
    ],
    sidebarKey: "RightServices",
  },

  // =========================
  // HEALTH SERVICES (now same structure)
  // =========================
  "health-services": {
    title: "Health Services",
    image: departmentbg,
    activities: [{ image: demoCard }, { image: demoCard }, { image: demoCard }],
    links: [
      {
        key: "health-about",
        label: "About Health Services",
        name: "health-about",
        description:
          "USEA Health Services provides basic medical support, health education, and wellness activities for the campus community.",
        content: [
          {
            title: "Clinic Support",
            li: [
              "First aid & basic care",
              "On-site health consultations",
              "Health referrals when necessary",
            ],
          },
          {
            title: "Health Education",
            li: [
              "Awareness workshops",
              "Mental health and stress management tips",
              "Nutrition & hygiene guidance",
            ],
          },
          {
            title: "Wellness Activities",
            li: [
              "Campus exercise & wellness campaigns",
              "Health screening days",
              "Peer health ambassadors",
            ],
          },
        ],
      },
      {
        key: "health-staff",
        label: "Staff",
        name: "health-staff",
        members: [
          {
            name: "Ms. Bopha",
            position: "Head of Health Services",
            image: demoCard,
          },
          { name: "Mr. Piseth", position: "Nurse", image: demoCard },
          { name: "Ms. Sreyna", position: "Health Assistant", image: demoCard },
        ],
      },
    ],
    sidebarKey: "RightServices",
  },
};
