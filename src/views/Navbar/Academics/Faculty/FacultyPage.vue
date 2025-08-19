<template>
  <div>
    <!-- Title -->
    <Titlebg :title="faculty.title" :breadcrumb="faculty.title" />

    <!-- Main Layout -->
    <div
      class="grid lg:grid-cols-[70%_30%] gap-6 lg:gap-10 mx-auto 
             2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%]"
    >
      <!-- Left Content -->
      <div>
        <!-- About Faculty -->
        <section class="mb-12">
          <div class="flex flex-col items-start mb-5">
            <span class="text-usea_secondary text-2xl md:text-3xl font-bold">
              ABOUT FACULTY
            </span>
            <div class="h-1 w-[15%] md:w-[5%] bg-usea_secondary"></div>
          </div>

          <p class="text-justify text-base md:text-lg lg:text-xl">
            {{ faculty.description }}
          </p>

          <!-- Vision, Mission, Educational Philosophy -->
          <div class="grid gap-8 mt-10">
            <!-- Vision -->
            <div class="grid md:grid-cols-2 items-center gap-5">
              <div
                class="bg-blue-500 flex flex-col items-center p-5 rounded-md text-white"
                data-aos="fade-right"
              >
                <div class="text-3xl md:text-4xl mb-3">
                  <i class="fas fa-eye"></i>
                </div>
                <h3 class="text-lg md:text-xl font-bold mb-2">VISION</h3>
              </div>
              <p class="text-justify text-base md:text-lg lg:text-xl" data-aos="fade-left">
                The Faculty of Arts, Humanities and Languages aims to become the
                leading faculty in Cambodia...
              </p>
            </div>

            <!-- Mission -->
            <div class="grid md:grid-cols-2 items-center gap-5">
              <p class="text-justify text-base md:text-lg lg:text-xl" data-aos="fade-right">
                Faculty of Arts, Humanities and Languages is committed to educating
                technical skills, soft skills, and professionalism...
              </p>
              <div
                class="bg-red-500 flex flex-col items-center p-5 rounded-md text-white"
                data-aos="fade-left"
              >
                <div class="text-3xl md:text-4xl mb-3">
                  <i class="fas fa-bullseye"></i>
                </div>
                <h3 class="text-lg md:text-xl font-bold mb-2">MISSION</h3>
              </div>
            </div>

            <!-- Educational Philosophy -->
            <div class="grid md:grid-cols-2 items-center gap-5">
              <div
                class="bg-usea_secondary flex flex-col items-center p-5 rounded-md text-white"
                data-aos="fade-right"
              >
                <div class="text-3xl md:text-4xl mb-3">
                  <i class="fas fa-gem"></i>
                </div>
                <h3 class="text-lg md:text-xl font-bold mb-2">
                  Educational Philosophy
                </h3>
              </div>
              <p class="text-justify text-base md:text-lg lg:text-xl" data-aos="fade-left">
                We believe that students learn best through questioning,
                analyzing, and interpreting the world around them.
              </p>
            </div>
          </div>
        </section>

        <!-- Departments -->
        <section class="mb-12 bg-gray-100 shadow-inner p-6 md:p-12 rounded-md">
          <div class="flex flex-col items-start mb-5">
            <span class="text-usea_secondary text-2xl md:text-3xl font-bold">
              DEPARTMENT
            </span>
            <div class="h-1 w-[15%] md:w-[5%] bg-usea_secondary"></div>
          </div>

          <div
            class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="department in faculty.departments"
              :key="department.name"
              @click="goToDepartment(department.params.departmentName)"
              class="group relative text-center cursor-pointer overflow-hidden rounded-md"
            >
              <img
                :src="department.image"
                alt="Department"
                class="h-48 md:h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gray-700 opacity-60 pointer-events-none group-hover:opacity-40 transition-opacity duration-300"
              ></div>
              <div
                class="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <h2 class="text-white text-lg md:text-2xl font-bold">
                  {{ department.name }}
                </h2>
              </div>
            </div>
          </div>
        </section>

        <!-- Members -->
        <section class="mb-12">
          <div class="flex flex-col items-start mb-5">
            <span class="text-usea_secondary text-2xl md:text-3xl font-bold">
              FACULTY'S MEMBERS
            </span>
            <div class="h-1 w-[15%] md:w-[5%] bg-usea_secondary"></div>
          </div>

          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="member in faculty.members"
              :key="member.name"
              class="relative"
            >
              <div class="overflow-hidden rounded-md relative">
                <img
                  :src="member.image"
                  alt="member"
                  class="w-full h-64 md:h-[350px] object-cover transform transition-transform duration-300 hover:scale-105 rounded-md"
                />
                <div
                  class="absolute bottom-0 w-full h-16 bg-usea_secondary opacity-50"
                ></div>
                <div
                  class="absolute bottom-3 w-full text-center"
                >
                  <span class="text-white font-bold text-base md:text-xl">
                    {{ member.name }}
                  </span>
                </div>
              </div>
              <div class="mt-3">
                <span class="font-bold text-sm md:text-lg">{{ member.position }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Sidebar -->
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
