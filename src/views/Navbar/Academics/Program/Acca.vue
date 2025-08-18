<template>
    <div>
        <Titlebg title="ACCA" breadcrumb="ACCA" />
        <!-- <pre>{{ major }}</pre> -->
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div class="flex flex-col gap-5 mb-10">
            
            <div class="flex flex-col gap-5">
                <div class="grid grid-cols-2 items-center justify-items-center">
                    <div class="flex flex-col gap-5">
                      <span class="font-bold text-2xl text-usea_secondary">PROGRAM DESCRIPTION</span>
                      <span class="text-xl text-justify">University of South-East Asia (USEA), based in Siem Reap Province,  was formally  awarded the ACCA Computer-Based Examination Centre License on 23 August 2021 and  has become a place for every ACCA student from around the world to take ACCA courses and CBE  examinations in Siem Reap city. ACCA (The Association of Chartered Certified Accountant) is a global body for professional accountants, which operates its offices in more than 183 countries around the World.</span>
                    </div>
                    <img :src="acca" alt="acca logo" class="w-[50%]">
                </div>
                <div class="flex flex-col gap-5">
                    <span class="font-bold text-2xl text-usea_secondary">FOUNDATIONS IN ACCOUNTANCY</span>
                    <span class="text-xl">Why study Certified Accounting Technician - CAT program with USEA?</span>
                    <span> Upon successful completion of this program, candidates will receive a  globally-recognized ACCA Diploma of  Certified  Accounting  Technician- CAT and should be able to:</span>
                    <div class="text-xl">
                        <ul class="ml-9 mt-5">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Describe the main types of business transactions and documentation and how these are recorded in an accounting system up to the trial balance stage</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Explain  how to provide basic management information in an organization to support management in planning and decision -making</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Understand and apply the underlying principles and concepts relating to maintaining financial records and technical proficiency in the use of double-entry accounting techniques including the preparation of basic financial statements</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Describe  how to prepare, process and present basic cost information to support management in planning and decision-making in a variety of business contexts</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Explain the business and its environment and the influence this has on how organizations are structured and on the role of the accounting and other key business functions contributing to the efficient, effective and ethical management and development of an organization and its people and their interaction with technology, data and information systems</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Apply management accounting techniques to support management in planning, controlling and monitoring performance in a variety of business contexts</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Explain and apply the underlying principles and concepts relating to financial accounting and technical proficiency in the use of double-entry accounting techniques including the preparation of basic financial statements</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Explain and apply the principles of external audit and the audit process and technical proficiency in the skills used for auditing financial statements</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Explain ways organizations finance their operations, plan and cash flows, optimize their use of working capital and allocate resources to long term investment projects.</li>

                        </ul>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <span class="font-bold text-2xl text-usea_secondary">ADMISSION</span>
                    <span class="text-xl">To register into the program, student must fulfill the following requirements:</span>
                    <div class="text-xl">
                        <ul class="ml-9 mt-5">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> hold at least a high school  diploma or an equivalent</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> have knowledge of English at intermediate level</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> pay ACCA registration and annual subscription fees</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> pay tuition fees to International College at University of South-East Asia.</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
            <!-- <nav class="tabs tabs-bordered mt-10 gap-1 flex text-xl" role="tablist" aria-orientation="horizontal">
                <button
                v-for="(tab, index) in tabs"
                :key="index"
                type="button"
                class="tab w-full text-xl font-bold"
                :class="{ 'tab-active': activeTab === index }"
                @click="activeTab = index"
                :aria-selected="activeTab === index"
                >
                {{ tab.label }}
                </button>
            </nav>
            <div class="mt-3 text-xl">
              <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
                <table class="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-200">
                      <th class="border border-gray-300 px-4 py-2">No</th>
                      <th class="border border-gray-300 px-4 py-2">Subject Description</th>
                      <th class="border border-gray-300 px-4 py-2">Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(subject, i) in tab.subjects" :key="i">
                      <td class="border border-gray-300 px-4 py-2">{{ i + 1 }}</td>
                      <td class="border border-gray-300 px-4 py-2">{{ subject.name }}</td>
                      <td class="border border-gray-300 px-4 py-2">{{ subject.credit }}</td>
                    </tr>
                    <tr class="font-bold">
                      <td class="border border-gray-300 px-4 py-2" colspan="2">Total</td>
                      <td class="border border-gray-300 px-4 py-2">
                        {{ tab.subjects.reduce((sum, s) => sum + s.credit, 0) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> -->

        </div>
        <div>
            <RightIC />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import acca from '@/assets/partnerships/acca.png';
import RightIC from '@/components/SideBar/RightIC.vue';
import { ref } from 'vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { majors } from '@/data/major.js';
import DepartmentEnglishSidebar from '@/components/SideBar/Department/DepartEnglish.vue';
import DepartmentChineseSidebar from '@/components/SideBar/Department/DepartChinese.vue';
import DepartmentKhmerSidebar from '@/components/SideBar/Department/DepartKhmer.vue';
import DepartmentITSidebar from '@/components/SideBar/Department/DepartIT.vue';
import DepartmentArchitectureSidebar from '@/components/SideBar/Department/DepartArchitecture.vue';
import DepartmentMathSidebar from '@/components/SideBar/Department/DepartMath.vue';
import DepartmentBusinessSidebar from '@/components/SideBar/Department/DepartBusiness.vue';
import DepartmentTourismSidebar from '@/components/SideBar/Department/DepartTourism.vue';
import DepartmentEconomicSidebar from '@/components/SideBar/Department/DepartEconomic.vue';
import DepartmentLawsSidebar from '@/components/SideBar/Department/DepartLaws.vue';
import DepartmentSocialScienceSidebar from '@/components/SideBar/Department/DepartSocialScience.vue';
const route = useRoute();

// Component mapping for easy scaling
const sidebarComponents = {
  DepartEnglish: DepartmentEnglishSidebar,
  DepartChinese: DepartmentChineseSidebar,
  DepartKhmer: DepartmentKhmerSidebar,
  DepartIT : DepartmentITSidebar,
  DepartArchitecture: DepartmentArchitectureSidebar,
  DepartMath: DepartmentMathSidebar,
  DepartBusiness: DepartmentBusinessSidebar,
  DepartTourism: DepartmentTourismSidebar,
  DepartEconomic: DepartmentEconomicSidebar,
  DepartLaws: DepartmentLawsSidebar,
  DepartSocialScience: DepartmentSocialScienceSidebar,
};

const majorDepartment = computed(() => route.params.majorDepartment); // department-english
const majorDegree = computed(() => route.params.majorDegree); // associate
const majorName = computed(() => route.params.majorName);
const major = computed(() => {
  const department = majors[majorDepartment.value];
  if (!department) return null;

  const degreeList = department[majorDegree.value];
  if (!degreeList) return null;

  return degreeList.find(m => m.id === majorName.value);
});

// Get the correct sidebar component
const sidebarComponent = computed(() => {
  return sidebarComponents[major.value?.sidebarComponent] || null;
});

const activeTab = ref(0);
const tabs = [
  {
    label: 'General Education',
    subjects: [
      { name: 'Microeconomics', credit: 3 },
      { name: 'Public Administration', credit: 3 },
      { name: 'History and Culture of South-East Asia', credit: 3 },
      { name: 'Critical Thinking and Personal Development', credit: 3 },
      { name: 'Computer for Administration', credit: 3 },
      { name: 'Mathematics for Business and Economics', credit: 3 },
      { name: 'English Language I', credit: 3 },
      { name: 'English Language II', credit: 3 },
      { name: 'Chinese Language I', credit: 0 },
      { name: 'Chinese Language II', credit: 0 },
      { name: 'FA2: Maintaining Financial Records I', credit: 3 },
      { name: 'Introduction to Business', credit: 3 },
    ],
  },
  {
    label: 'Core Major',
    subjects: [
      { name: 'Physics II', credit: 3 },
      { name: 'Calculus I', credit: 3 },
      { name: 'Calculus II', credit: 3 },
      { name: 'Engineering Mechanics', credit: 3 },
      { name: 'Engineering Geology', credit: 3 },
      { name: 'Computer Aided Geometric Design', credit: 3 },
      { name: 'Linear Algebra and Its Applications', credit: 3 },
      { name: 'Electricity and Magnetism', credit: 3 },
      { name: 'Strength of Materials', credit: 3 },
      { name: 'Construction Materials', credit: 3 },
      { name: 'Differential Equations', credit: 3 },
      { name: 'Probability and Statistics', credit: 3 },
      { name: 'Structural Analysis I', credit: 3 },
      { name: 'Fluid Mechanics', credit: 3 },
      { name: 'Surveying', credit: 3 },
      { name: 'Soil Mechanics & Lab', credit: 3 },
      { name: 'Strength of Materials II', credit: 3 },
      { name: 'Structural Analysis II', credit: 3 },
      { name: 'Foundation Engineering', credit: 3 },
      { name: 'Reinforced Concrete Structures', credit: 3 },
      { name: 'Construction Engineering Management', credit: 3 },
      { name: 'Highway Design', credit: 3 },
    ],
  },
  {
    label: 'Basic Major',
    subjects: [

    ], // Add relevant data
  },
  {
    label: 'Minor',
    subjects: [
      { name: 'English', credit: 3 },
      { name: 'Chinese', credit: 3 },
    ], // Add relevant data
  },
]
</script>

