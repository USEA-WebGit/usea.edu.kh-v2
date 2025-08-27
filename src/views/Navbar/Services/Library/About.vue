<!-- views/services/library/About.vue -->
<template>
  <div>
    <Titlebg
      :title="lib?.title || 'Library'"
      :breadcrumb="lib?.title || 'Library'"
    />

    <div
      class="grid lg:grid-cols-[70%_30%] gap-6 lg:gap-10 mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] mb-5"
    >
      <div>
        <!-- LEFT -->
        <div class="flex flex-col gap-10 min-w-0">
          <!-- INTRO / ABOUT -->
          <section
            class="relative overflow-hidden rounded-2xl border border-gray-100 bg-white/80 shadow-sm backdrop-blur"
          >
            <div class="grid md:grid-cols-2">
              <!-- Text -->
              <div class="p-6 sm:p-8 lg:p-10 flex flex-col gap-5">
                <div class="inline-flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-usea_secondary"></span>
                  <span
                    class="uppercase tracking-wide text-xs sm:text-sm text-usea_secondary/80 font-semibold"
                  >
                    {{ lib?.title || "Library" }}
                  </span>
                </div>

                <h2
                  class="text-2xl sm:text-3xl font-bold text-usea_secondary leading-tight"
                >
                  {{ lib?.title || "Library" }}
                </h2>

                <p
                  v-if="about.history"
                  class="text-justify text-base sm:text-lg leading-7 text-gray-700"
                >
                  {{ about.history }}
                </p>
              </div>

              <!-- Visual -->
              <div class="relative order-1 md:order-none">
                <img
                  :src="lib?.image"
                  :alt="lib?.title"
                  class="h-full w-full object-cover md:rounded-l-2xl"
                />
                <div
                  class="pointer-events-none absolute inset-0 md:inset-y-0 md:inset-x-auto md:w-1/6"
                ></div>
              </div>
            </div>
          </section>

          <!-- EACH SUB-LIBRARY (JPIC, American Corner) -->
          <section
            v-for="(unit, idx) in libUnits"
            :key="unit.name"
            class="space-y-6"
          >
            <!-- Unit Intro -->
            <div
              class="relative overflow-hidden rounded-2xl border border-gray-100 bg-white/80 shadow-sm backdrop-blur"
            >
              <div class="grid md:grid-cols-2">
                <!-- Text -->
                <div
                  class="p-6 sm:p-8 lg:p-10 flex flex-col gap-5"
                  :class="idx % 2 === 1 ? 'md:order-2' : ''"
                >
                  <div class="inline-flex items-center gap-2">
                    <span class="h-2 w-2 rounded-full bg-usea_secondary"></span>
                    <span
                      class="uppercase tracking-wide text-xs sm:text-sm text-usea_secondary/80 font-semibold"
                    >
                      {{ unit.name }}
                    </span>
                  </div>

                  <h3
                    class="text-2xl sm:text-3xl font-bold text-usea_secondary leading-tight"
                  >
                    {{ unit.name }}
                  </h3>

                  <p
                    v-if="unit.about?.description"
                    class="text-justify text-base sm:text-lg leading-7 text-gray-700"
                  >
                    {{ unit.about.description }}
                  </p>
                </div>

                <!-- Image (fallback to library image if unit.image missing) -->
                <div
                  class="relative"
                  :class="idx % 2 === 1 ? 'md:order-1' : ''"
                >
                  <img
                    :src="unit.image || lib?.image"
                    :alt="unit.name"
                    class="h-full w-full object-cover md:rounded-r-2xl"
                  />
                  <div
                    class="pointer-events-none absolute inset-0 md:inset-y-0 md:inset-x-auto md:w-1/6"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Unit Services/Sections -->
            <div
              v-if="(unit.about?.sections || []).length"
              class="rounded-2xl bg-gradient-to-br from-[#334155] to-[#1f2937] p-6 sm:p-8 lg:p-10 shadow-md"
            >
              <div class="flex flex-col items-center text-center">
                <h4
                  class="text-2xl sm:text-3xl font-bold leading-tight text-white"
                >
                  {{ unitShort(unit.name) }} SERVICES & RESOURCES
                </h4>
                <div class="h-1 w-16 sm:w-20 bg-emerald-400 mt-2 rounded"></div>
              </div>

              <div class="mt-6 grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                <!-- Image (re-use unit image) -->
                <div class="group relative overflow-hidden rounded-xl">
                  <img
                    :src="unit.image || lib?.image"
                    :alt="unit.name + ' image'"
                    class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  ></div>
                </div>

                <!-- Lists -->
                <div class="flex flex-col gap-6">
                  <div
                    v-for="(sec, sIdx) in unit.about.sections"
                    :key="sIdx"
                    class="rounded-xl text-white p-5 border border-white/20"
                  >
                    <h5 class="text-lg font-semibold mb-3">
                      {{ sec.title }}
                    </h5>
                    <ul class="space-y-2 text-[15px] leading-6">
                      <li
                        v-for="(li, i) in sec.li || []"
                        :key="i"
                        class="flex gap-2"
                      >
                        <i
                          class="fa-regular fa-circle-check mt-0.5 text-emerald-500"
                        ></i>
                        <span>{{ li }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- ACTIVITIES (library wide) -->
          <section
            v-if="(lib?.activities || []).length"
            class="flex flex-col gap-6"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-2xl sm:text-3xl font-bold text-usea_secondary">
                Activities
              </h3>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div
                v-for="(act, i) in lib.activities"
                :key="i"
                class="group overflow-hidden rounded-xl bg-gray-100"
              >
                <img
                  :src="act.image"
                  alt="Library activity"
                  class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- RIGHT -->
      <aside
        class="w-full lg:w-[340px] xl:w-[380px] shrink-0 lg:sticky lg:top-28 h-max"
      >
        <RightServices />
      </aside>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightServices from "@/components/SideBar/RightServices.vue";
import { services } from "@/data/service.js";

/* Root library node from service.js */
const lib = services.library ?? {};

/* About (history + highlights) with safe defaults */
const about = computed(() => ({
  history: lib?.about?.history || "",
  highlights: Array.isArray(lib?.about?.highlights) ? lib.about.highlights : [],
}));

/* Sub-libraries (JPIC, American Corner) */
const libUnits = computed(() =>
  Array.isArray(lib?.libraries) ? lib.libraries : []
);

/* Short label for headline (e.g., "JPIC" | "American Corner") */
const unitShort = (name = "") => {
  if (name.toLowerCase().includes("american")) return "American Corner";
  if (name.toLowerCase().includes("public")) return "JPIC";
  return name;
};
</script>

<style scoped>
/* Tailwind handles layout — keep custom CSS minimal */
</style>
