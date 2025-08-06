import demoCard from '@/assets/images/demoCard.png';
import RightIC from '@/components/SideBar/RightIC.vue';
import roemRipeng from '@/assets/images/demoCard.png';
import chhemsaman from '@/assets/images/demoCard.png';
export const colleges = {
    'international-college': 
    {
      title: 'Accountancy Certified Accounting Technician - CAT',
      description: 'University of South-East Asia (USEA), based in Siem Reap Province, has formally been awarded ACCA Computer Based Examination Centre License on 23 August 2021 and become ACCA become a place for every ACCA student from around the world to take ACCA courses and CBE exams in Siem Reap city. ACCA (The Association of Chartered Certified Accountant) is a global body for profesional accountants, which operates its offices in more than 183 countries around the World.',
      image: demoCard,
      programs: [
        {name: "ACCA Certified Accounting Technician", image: "https://cdn.flyonui.com/fy-assets/components/card/image-5.png", params: {programName: 'acca-certified'}},
    ],
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
      sidebarComponent: RightIC,
    },
    
  } 