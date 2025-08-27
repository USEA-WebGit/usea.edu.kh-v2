<!-- views/services/health/About.vue -->
<template>
  <div>
    <Titlebg
      :title="hs?.title || 'Health Services'"
      :breadcrumb="hs?.title || 'Health Services'"
    />

    <div
      class="grid lg:grid-cols-[70%_30%] gap-6 lg:gap-10 mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] mb-5"
    >
      <div>
        <!-- LEFT -->
        <div class="flex flex-col gap-10 min-w-0">
          <!-- HERO / ABOUT -->
          <section
            class="relative overflow-hidden rounded-2xl border border-gray-100 bg-white/80 shadow-sm backdrop-blur"
          >
            <div class="grid md:grid-cols-2 gap-0">
              <!-- Text -->
              <div class="p-6 sm:p-8 lg:p-10 flex flex-col gap-5">
                <div class="inline-flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-usea_secondary"></span>
                  <span
                    class="uppercase tracking-wide text-xs sm:text-sm text-usea_secondary/80 font-semibold"
                  >
                    {{ hs?.title || "Health Services" }}
                  </span>
                </div>

                <h2
                  class="text-2xl sm:text-3xl font-bold text-usea_secondary leading-tight"
                >
                  ABOUT {{ (hs?.title || "Health Services").toUpperCase() }}
                </h2>

                <p
                  v-if="about?.description"
                  class="text-justify text-base sm:text-lg leading-7 text-gray-700"
                >
                  {{ about.description }}
                </p>
              </div>

              <!-- Image -->
              <div class="relative">
                <img
                  :src="hs?.image"
                  :alt="hs?.title || 'Health Services'"
                  class="h-full w-full object-cover md:rounded-r-2xl"
                />
                <div
                  class="pointer-events-none absolute inset-0 md:inset-y-0 md:inset-x-auto md:w-1/6"
                ></div>
              </div>
            </div>
          </section>

          <!-- SERVICES (from health-about.content) -->
          <section
            v-if="sections.length"
            class="rounded-2xl bg-gradient-to-br from-[#334155] to-[#1f2937] text-white p-6 sm:p-8 lg:p-10 shadow-md"
          >
            <div class="flex flex-col items-center text-center mb-2">
              <h3 class="text-2xl sm:text-3xl font-bold leading-tight">
                HEALTH SERVICES
              </h3>
              <div class="h-1 w-16 sm:w-20 bg-emerald-400 mt-2 rounded"></div>
            </div>

            <div class="mt-6 grid gap-6 md:gap-8">
              <div
                v-for="(sec, idx) in sections"
                :key="idx"
                class="grid md:grid-cols-2 gap-6 md:gap-10 items-start"
              >
                <!-- Image (reuse service image) -->
                <div class="group relative overflow-hidden rounded-xl">
                  <img
                    :src="hs?.image"
                    :alt="(hs?.title || 'Health Services') + ' image'"
                    class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  ></div>
                </div>

                <!-- Bullet list -->
                <div class="rounded-xl text-white p-5 border border-white/20">
                  <h4 class="text-lg font-semibold mb-3">{{ sec.title }}</h4>
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
          </section>

          <!-- TEAM (from health-staff link, if present) -->
          <section v-if="staff.length" class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl sm:text-3xl font-bold text-usea_secondary">
                Our Team
              </h3>
            </div>

            <div
              class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              <div
                v-for="m in staff"
                :key="m.name"
                class="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden"
              >
                <div class="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    :src="m.image"
                    :alt="m.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="p-4">
                  <div
                    class="font-semibold text-[#002060] leading-tight line-clamp-1"
                    :title="m.name"
                  >
                    {{ m.name }}
                  </div>
                  <div
                    class="text-sm text-gray-600 line-clamp-2"
                    :title="m.position"
                  >
                    {{ m.position }}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- ACTIVITIES -->
          <section
            v-if="(hs?.activities || []).length"
            class="flex flex-col gap-6"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-2xl sm:text-3xl font-bold text-usea_secondary">
                Activities
              </h3>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div
                v-for="(a, i) in hs.activities"
                :key="i"
                class="group overflow-hidden rounded-xl bg-gray-100"
              >
                <img
                  :src="a.image"
                  alt="Health activity"
                  class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- RIGHT -->
      <aside>
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

/* Root node for Health Services from service.js */
const hs = services["health-services"] ?? {};

/* Find the "About Health Services" link block */
const about = computed(() => {
  const links = Array.isArray(hs.links) ? hs.links : [];
  return (
    links.find((l) => (l.key || "").toLowerCase() === "health-about") || {}
  );
});

/* Sections inside the about block -> lists we render */
const sections = computed(() =>
  Array.isArray(about.value?.content) ? about.value.content : []
);

/* Staff (optional) from the 'health-staff' link */
const staff = computed(() => {
  const links = Array.isArray(hs.links) ? hs.links : [];
  const staffLink = links.find(
    (l) => (l.key || "").toLowerCase() === "health-staff"
  );
  return Array.isArray(staffLink?.members) ? staffLink.members : [];
});
</script>

<style scoped>
/* Minimal custom CSS; Tailwind handles visuals */
</style>
