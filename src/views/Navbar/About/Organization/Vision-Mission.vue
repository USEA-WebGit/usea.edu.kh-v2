<template>
  <div>
    <Titlebg title="Vision and Mission" breadcrumb="Vision and Mission" />
  </div>

  <div
    class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] gap-10 mb-12"
  >
    <!-- Main -->
    <div class="mt-6 space-y-12">
      <!-- Vision + Mission -->
      <section class="space-y-10">
        <div class="grid lg:grid-cols-2 gap-10">
          <div>
            <h2
              class="text-[1.75rem] font-extrabold tracking-tight text-usea_secondary flex items-center gap-3"
            >
              <i class="fa-solid fa-eye text-usea_secondary"></i> VISION
            </h2>
            <div class="mt-4 pl-6 border-l-4 border-usea_secondary/60">
              <p class="text-[1.05rem] leading-relaxed text-gray-700">
                University of South-East Asia will develop human resources with
                high competency, virtue, and professional attitude in response
                to national and international labor market, where they can find
                employment and live in the era of globalization to contribute to
                the building of society.
              </p>
            </div>
          </div>

          <div>
            <h2
              class="text-[1.75rem] font-extrabold tracking-tight text-usea_secondary flex items-center gap-3"
            >
              <i class="fa-solid fa-flag text-usea_secondary"></i> MISSION
            </h2>
            <div class="mt-4 pl-6 border-l-4 border-usea_secondary/60">
              <p class="text-[1.05rem] leading-relaxed text-gray-700">
                University of South-East Asia builds higher education and
                technical and vocational education systems at all levels in
                compliance with national and international standards to provide
                knowledge, know-how, technical skills, soft skills, and
                professional attitude to learners to meet the needs of national
                and international labor market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Philosophy -->
      <section>
        <h3
          class="text-xl font-bold text-usea_secondary flex items-center gap-3"
        >
          <i class="fa-solid fa-seedling text-usea_secondary"></i> EDUCATION
          PHILOSOPHY
        </h3>
        <div class="mt-3 pl-6 border-l-2 border-usea_secondary/40">
          <p class="text-gray-700">
            Your life will be more successful with University of South-East
            Asia.
          </p>
        </div>
      </section>

      <!-- Core Values -->
      <section>
        <h2
          class="text-[1.75rem] font-extrabold tracking-tight text-usea_secondary flex items-center gap-3"
        >
          <i class="fa-solid fa-gem text-usea_secondary"></i> CORE VALUES
        </h2>
        <p class="text-gray-700 mt-1">
          Knowledge • Skills • Excellence • Society
        </p>

        <div class="mt-6 grid gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="v in values" :key="v.key" class="space-y-3">
            <h3 class="text-lg font-semibold text-usea_secondary">
              {{ v.title }}
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li
                v-for="(item, i) in v.items"
                :key="i"
                class="flex items-start gap-2"
              >
                <span
                  class="mt-2 h-1.5 w-1.5 rounded-full bg-usea_secondary inline-block"
                ></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Goals & Objectives -->
      <section>
        <h2
          class="text-[1.75rem] font-extrabold tracking-tight text-usea_secondary flex items-center gap-3"
        >
          <i class="fa-solid fa-bullseye text-usea_secondary"></i> GOALS &
          OBJECTIVES
        </h2>
        <ul class="mt-5 grid gap-y-3 gap-x-10 sm:grid-cols-2">
          <li v-for="(g, i) in goals" :key="i" class="flex items-start gap-3">
            <span
              class="mt-2 h-1.5 w-1.5 rounded-full bg-usea_secondary inline-block"
            ></span>
            <span class="text-gray-800">{{ g }}</span>
          </li>
        </ul>
      </section>
    </div>

    <!-- Sidebar -->
    <div>
      <RightNav />
    </div>
  </div>
</template>

<script setup>
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightNav from "@/components/SideBar/Right-Nav.vue";

const values = [
  {
    key: "knowledge",
    title: "Knowledge",
    items: [
      "Enjoy lifelong learning and research",
      "Extensive knowledge",
      "Knowledge of foreign languages that can be used officially",
      "Self-confidence",
    ],
  },
  {
    key: "skills",
    title: "Skills",
    items: [
      "Able to use information technology proficiently",
      "Technical skills",
      "Soft skills",
      "Innovation and creativity",
    ],
  },
  {
    key: "excellence",
    title: "Excellence",
    items: [
      "High commitment and responsibility to perform the work",
      "High commitment and responsibility in teaching",
      "High commitment and responsibility in study and research",
      "Honesty, virtue, accountability, open communication, and teamwork",
    ],
  },
  {
    key: "society",
    title: "Society",
    items: [
      "National consciousness",
      "Participate in social activities",
      "Preservation and protection of national culture and traditions",
      "Maintain and protect the environment",
    ],
  },
];

const goals = [
  "Good management and governance",
  "Improving the quality of education to national and international standards",
  "Promoting research and development",
  "International communication and cooperation",
  "Recognition of quality of education nationally and internationally",
];
</script>

<style scoped>
/* Minimal; Tailwind handles layout. */
</style>
