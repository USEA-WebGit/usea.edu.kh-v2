<template>
    <div>
        <Titlebg :title="major.title" :breadcrumb="major.title" />
        <!-- <pre>{{ major }}</pre> -->
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div class="flex flex-col gap-5 mb-10">
            <img :src="major.image" alt="" class="h-[200px] object-cover">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-5">
                    <span class="font-bold text-2xl text-usea_secondary">PROGRAM DESCRIPTION</span>
                    <span class="text-xl text-justify">The Associate in English aims to develop students' competency in reading, writing, listening, and speaking the English language. It also aims to build a foundation of general and theoretical knowledge and skills in language education that are necessary for employment and further university studies. The program also focuses on improving students' communication skills, critical thinking skills, and problem-solving skills, which are required in today's classrooms and the global economy. The English language is used as the medium of instruction for this program.</span>
                </div>
                <div class="flex flex-col gap-5">
                    <span class="font-bold text-2xl text-usea_secondary">PROGRAM LEARNING OUTCOMES</span>
                    <span class="text-xl">After successful completion of the Associate in English program, students will be able to:</span>
                    <div class="text-xl">
                        <span class="font-bold text-usea_secondary ml-5">Knowledge</span>
                        <ul class="ml-9 mt-5">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Acquire general knowledge about Cambodian microeconomics, culture and civilization;</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Demonstrate understanding of important theories, concepts, principles, and procedures in language education;</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Acquire English language competency in areas of reading, writing, listening, speaking, grammar, and vocabulary;</li>
                        </ul>
                    </div>
                    <div class="text-xl">
                        <span class="text-xl font-bold text-usea_secondary ml-5">Cognitive Skills</span>
                        <ul class="ml-9 mt-2">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Demonstrate ability to apply important theories, concepts, principles, and procedures in language education in actual contexts;</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Analyze information, concepts and evidences from a range of sources in order to make conclusions to issues and problems;</li>
                        </ul>
                    </div>
                    <div class="text-xl">
                        <span class="text-xl font-bold text-usea_secondary ml-5">Psychomotor Skills</span>
                        <ul class="ml-9 mt-2">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Demonstrate confidence in teaching English to students in authentic classroom environment;</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Appropriately adjust teaching and assessment methods and techniques for students of various backgrounds;</li>
                        </ul>
                    </div>
                    <div class="text-xl">
                        <span class="text-xl font-bold text-usea_secondary ml-5">Interpersonal Skills and Responsibility</span>
                        <ul class="ml-9 mt-2">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Demonstrate confidence, critical thinking, and problem-solving skills;</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Exercise leadership in a small group in an area of language education;</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Demonstrate ability to reflect on their own practices and experiences;</li>
                        </ul>
                    </div>
                    <div class="text-xl">
                        <span class="text-xl font-bold text-usea_secondary ml-5">Communication, Information Technology and Numerical Skills</span>
                        <ul class="ml-9 mt-2">
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Effectively communicate in English and Khmer both in oral and written form;</li>
                            <li class="flex items-start gap-2"><i class="fa-solid fa-caret-right text-red-400 mt-1"></i> Use information and communications technology in analyzing issues and in making presentations.</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <span class="font-bold text-2xl text-usea_secondary">CREDIT ACCUMULATION</span>
                    <span class="text-xl">Students are required to undertake two academic years of full-time study, which is equivalent to four semesters. Each academic year consists of two semesters, with each semester lasting fifteen weeks, excluding the examination period. In order to be awarded the Associate in English degree, a student must successfully acquire 60 credit points and maintain a minimum grade point average (GPA) of 2.00. Additionally, the student must pass the comprehensive examination.</span>
                </div>
                <div class="flex flex-col gap-5">
                    <span class="font-bold text-2xl text-usea_secondary">JOB OPPORTUNITY</span>
                    <span class="text-xl">The curriculum is designed to provide training to students who are proficient in software and good at public administration, public administration, private administration and local NGOs.</span>
                </div>
            </div>
            
            <nav class="tabs tabs-bordered mt-10 gap-1 flex text-xl" role="tablist" aria-orientation="horizontal">
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
            </div>

        </div>
        <div>
            <component :is="sidebarComponent"/>
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
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

