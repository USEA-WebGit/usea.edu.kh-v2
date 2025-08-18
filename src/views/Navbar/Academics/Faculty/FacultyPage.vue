<template>
  <div>
    <div>
      <Titlebg :title="faculty.title" :breadcrumb="faculty.title" />
      <!-- <pre>{{ faculty }}</pre> -->
    </div>
    <div
      class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10"
    >
      <div>
        <section class="mb-12">
          <div class="flex flex-col justify-center items-start mb-5">
            <span class="text-usea_secondary text-[2rem] font-bold"
              >ABOUT FACULTY</span
            >
            <div class="h-1 w-[5%] bg-usea_secondary"></div>
          </div>
          <div class="flex flex-col gap-5">
            <!-- <div class="grid grid-cols-[50%_50%] gap-5">
              <p class="text-justify text-xl">{{ faculty.description }}</p>
              <img
                :src="faculty.image"
                alt=""
                class="h-[200px] w-full object-cover"
              />
            </div> -->
            <p class="text-justify text-xl 2xl:text-xl xl:text-xl ">{{ faculty.description }}</p>

            <!-- MISSION, VISION, VALUES Section -->
            <div
              class="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-10 mt-10"
            >
              <div class="grid grid-cols-2 items-center gap-5 text-white">
                <div
                  class="bg-blue-500 flex flex-col items-center p-5 rounded-md"
                  data-aos="fade-right"
                >
                  <div class="text-4xl mb-3">
                    <i class="fas fa-eye"></i>
                  </div>
                  <h3 class="text-xl font-bold mb-5">VISION</h3>
                </div>
                <p class="text-justify text-xl text-black" data-aos="fade-left">
                  The Faculty of Arts, Humanities and Languages aims to become
                  the leading faculty in Cambodia for training students in the
                  arts, humanities, and languages, equipping them with
                  knowledge, skills, and professional attitudes that meet
                  national and international standards.
                </p>
              </div>
              <div class="grid grid-cols-2 items-center gap-5 text-white">
                <p
                  class="text-justify text-xl text-black"
                  data-aos="fade-right"
                >
                  Faculty of Arts, Humanities and Languages is committed to
                  educating technical skills, soft skills, and professionalism,
                  which allow graduates to well function in the global economy.
                </p>
                <div
                  class="bg-red-500 flex flex-col items-center p-5 rounded-md"
                  data-aos="fade-left"
                >
                  <div class="text-4xl mb-3">
                    <i class="fas fa-bullseye"></i>
                  </div>
                  <h3 class="text-xl font-bold mb-5">MISSION</h3>
                </div>
              </div>
              <div class="grid grid-cols-2 items-center gap-5 text-white">
                <div
                  class="bg-usea_secondary flex flex-col items-center p-5 rounded-md"
                  data-aos="fade-right"
                >
                  <div class="text-4xl mb-3">
                    <i class="fas fa-gem"></i>
                  </div>
                  <h3 class="text-xl font-bold mb-5">Educational Philosophy</h3>
                </div>
                <p class="text-justify text-xl text-black" data-aos="fade-left">
                  We believe that students learn best through questioning,
                  analyzing, and interpreting the world around them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Department  -->
        <section class="mb-12 bg-gray-100 shadow-inner p-12 rounded-md">
          <div class="flex flex-col justify-center items-start mb-5">
            <span class="text-usea_secondary text-[2rem] font-bold"
              >DEPARTMENT</span
            >
            <div class="h-1 w-[5%] bg-usea_secondary"></div>
          </div>
          <div
            class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 mb-5 overflow-hidden"
          >
             <div
                class="group relative max-w-xl text-center mx-auto cursor-pointer overflow-hidden rounded-md"
                @click="goToDepartment(department.params.departmentName)"
                v-for="department in faculty.departments"
                :key="department.name"
              >
                <img
                  :src="department.image"
                  alt="Random image"
                  class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                />

                <!-- Let hover/click pass through or animate this too -->
                <div class="absolute inset-0 bg-gray-700 opacity-60 pointer-events-none group-hover:opacity-40 transition-opacity duration-300"></div>

                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <h2 class="text-white text-2xl p-3 font-bold">{{ department.name }}</h2>
                </div>
              </div>

          </div>
          
        </section>

        <!-- Faculty's Memeber  -->
        <section class="mb-12">
          <div class="flex flex-col justify-center items-start mb-5">
            <span class="text-usea_secondary text-[2rem] font-bold"
              >FACULTY'S MEMBERS</span
            >
            <div class="h-1 w-[5%] bg-usea_secondary"></div>
          </div>
          <div
            class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 mb-5"
          >
            <div v-for="member in faculty.members" :key="member.name">
              <div class="overflow-hidden rounded-md relative">
                <img
                  :src="member.image"
                  alt="member"
                  class="w-full h-[350px] object-cover transform transition-transform duration-300 hover:scale-105 rounded-md"
                />
                <div class="absolute h-[60px] top-[85%] w-full bg-usea_secondary opacity-50 pointer-events-none group-hover:opacity-40 transition-opacity duration-300"></div>
                <div class="absolute top-[88%] w-full text-center">
                  <span class="text-white font-bold text-xl">
                    {{ member.name }}
                  </span>
                </div>
              </div>
              
              <div class="mt-3">
                <span class="font-bold text-lg">{{ member.position }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <component :is="faculty.sidebarComponent" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
import Titlebg from "@/components/Slide/TitleBg.vue";
import { faculties } from "@/data/faculty.js";

const route = useRoute();
const router = useRouter();

const facultyNameParam = computed(() => route.params.facultyName);
const faculty = computed(() => faculties[facultyNameParam.value]);

const goToDepartment = (departmentName) => {
  router.push({ name: "department-name", params: { departmentName } });
};
</script>
