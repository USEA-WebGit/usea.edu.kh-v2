<template>
  <div>
    <Titlebg title="International College" breadcrumb="International College" />

    <!-- Main container -->
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[2fr_1fr]"
    >
      <!-- LEFT -->
      <div>
        <!-- ABOUT -->
        <section class="mb-12">
          <div class="flex flex-col items-start mb-5">
            <span class="text-usea_secondary text-2xl sm:text-3xl font-bold">
              ABOUT INTERNATIONAL COLLEGE
            </span>
            <div class="h-1 w-16 sm:w-20 bg-usea_secondary mt-2 rounded"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <p class="text-justify text-base md:text-md lg:text-md leading-7">
              University of South-East Asia (USEA), based in Siem Reap Province,
              has formally been awarded ACCA Computer Based Examination Centre
              License on 23 August 2021 and become ACCA become a place for every
              ACCA student from around the world to take ACCA courses and CBE
              exams in Siem Reap city. ACCA (The Association of Chartered
              Certified Accountant) is a global body for professional
              accountants, which operates its offices in more than 183 countries
              around the World.
            </p>
            <img
              :src="demoCard"
              alt="International College"
              class="w-full h-48 sm:h-56 md:h-52 object-cover rounded"
            />
          </div>

          <!-- VISION / MISSION / PHILOSOPHY -->
          <div class="grid gap-8 mt-10">
            <!-- Vision -->
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
              <div
                class="bg-blue-500 text-white flex flex-col items-center p-5 rounded-md"
              >
                <div class="text-3xl sm:text-4xl mb-3">
                  <i class="fas fa-eye"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold">VISION</h3>
              </div>
              <p class="text-justify text-base md:text-md lg:text-md leading-7">
                The Faculty of Arts, Humanities and Languages aims to become the
                leading faculty in Cambodia for training students in the arts,
                humanities, and languages, equipping them with knowledge,
                skills, and professional attitudes that meet national and
                international standards.
              </p>
            </div>

            <!-- Mission -->
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
              <p
                class="order-2 md:order-1 text-justify text-base md:text-md lg:text-md leading-7"
              >
                Faculty of Arts, Humanities and Languages is committed to
                educating technical skills, soft skills, and professionalism,
                which allow graduates to well function in the global economy.
              </p>
              <div
                class="order-1 md:order-2 bg-red-500 text-white flex flex-col items-center p-5 rounded-md"
              >
                <div class="text-3xl sm:text-4xl mb-3">
                  <i class="fas fa-bullseye"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold">MISSION</h3>
              </div>
            </div>

            <!-- Educational Philosophy -->
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
              <div
                class="bg-usea_secondary text-white flex flex-col items-center p-5 rounded-md"
              >
                <div class="text-3xl sm:text-4xl mb-3">
                  <i class="fas fa-gem"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold">
                  Educational Philosophy
                </h3>
              </div>
              <p class="text-justify text-base md:text-md lg:text-md leading-7">
                We believe that students learn best through questioning,
                analyzing, and interpreting the world around them.
              </p>
            </div>
          </div>
        </section>

        <!-- PROGRAM -->
        <section class="mb-12 bg-gray-200 p-6 sm:p-10 rounded-md">
          <div class="flex flex-col items-start mb-5">
            <span class="text-usea_secondary text-2xl sm:text-3xl font-bold"
              >PROGRAM</span
            >
            <div class="h-1 w-16 sm:w-20 bg-usea_secondary mt-2 rounded"></div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <router-link
              :to="{ name: 'acca-program' }"
              class="group relative block overflow-hidden rounded-md"
            >
              <img
                :src="departmentbg"
                alt="ACCA"
                class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/40"
              ></div>
              <div
                class="absolute inset-0 flex items-center justify-center p-3"
              >
                <h2 class="text-white text-xl sm:text-2xl font-bold">ACCA</h2>
              </div>
            </router-link>
          </div>
        </section>

        <!-- MEMBERS -->
        <section class="mb-12">
          <div class="flex flex-col items-start mb-5">
            <span class="text-usea_secondary text-2xl sm:text-3xl font-bold"
              >FACULTY'S MEMBERS</span
            >
            <div class="h-1 w-16 sm:w-20 bg-usea_secondary mt-2 rounded"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(member, index) in CollegeMembers" :key="index">
              <div class="relative overflow-hidden rounded-md group">
                <img
                  :src="member.img"
                  alt="member"
                  class="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <!-- bottom gradient overlay -->
                <div
                  class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"
                ></div>
                <div class="absolute inset-x-0 bottom-0 p-3 text-center">
                  <span class="text-white font-bold text-lg sm:text-xl">{{
                    member.name
                  }}</span>
                </div>
              </div>
              <div class="mt-3">
                <span class="font-bold text-base md:text-md lg:text-md">{{
                  member.position
                }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- RIGHT (sticky sidebar) -->
      <aside class="lg:sticky lg:top-28 h-max">
        <RightIC />
      </aside>
    </div>
  </div>
</template>

<script setup>
import demoCard from "@/assets/images/demoCard.png";
import departmentbg from "@/assets/building/department.png";
import sivvuthy from "@/assets/images/dr_siv_vuthy.png";
import toursreyleak from "@/assets/images/tour_sreyleak.png";
import RightIC from "@/components/SideBar/RightIC.vue";
import Titlebg from "@/components/Slide/TitleBg.vue";

const CollegeMembers = [
  {
    img: sivvuthy,
    name: "Dr. Siv Vuthy",
    position: "Head of International College",
  },
  {
    img: toursreyleak,
    name: "Ms. Tour Sreyleak",
    position: "Deputy Chief of International College",
  },
];
</script>
