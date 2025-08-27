<!-- views/faculty/FacultyStaff.vue -->
<template>
  <div>
    <Titlebg :title="pageTitle" :breadcrumb="pageTitle" />

     <div v-if="faculty"
      class="grid lg:grid-cols-[70%_30%] gap-6 lg:gap-10 mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] mb-5"
    >
      <!-- LEFT -->
      <section class="flex flex-col gap-6 min-w-0">
        <h2 class="text-2xl sm:text-3xl font-bold text-usea_secondary">
          Our Team
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article
            v-for="(m, i) in faculty.members"
            :key="i"
            :id="'member-' + slug(m.name)"
            class="bg-white/95 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <!-- top stripe -->
            <div
              class="h-3 w-full rounded-t-2xl bg-gradient-to-r from-[#002060] via-[#2246b8] to-[#6aa6ff]"
            ></div>

            <div class="p-5">
              <!-- avatar (no overlap for a clean stripe) -->
              <div class="mb-3">
                <div
                  class="h-full w-full rounded-xl overflow-hidden ring-2 ring-gray-100 shadow-sm bg-gray-100"
                >
                  <img
                    v-if="m.image"
                    :src="m.image"
                    :alt="m.name"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div
                    v-else
                    class="h-full w-full flex items-center justify-center text-gray-700 font-bold"
                  >
                    {{ initials(m.name) }}
                  </div>
                </div>
              </div>

              <h3
                class="text-lg font-bold text-[#002060] leading-tight line-clamp-1"
                :title="m.name"
              >
                {{ m.name }}
              </h3>
              <p
                class="mt-0.5 text-sm text-gray-600 line-clamp-2"
                :title="m.position"
              >
                {{ m.position }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <a
                  v-if="phoneOf(m)"
                  :href="'tel:' + telHref(phoneOf(m))"
                  class="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                >
                  <i class="fa-solid fa-phone text-[13px]"></i>
                  <span>{{ phoneOf(m) }}</span>
                </a>

                <a
                  v-if="m.email"
                  :href="'mailto:' + m.email"
                  class="inline-flex items-center gap-2 rounded-full border border-[#002060]/20 bg-[#002060]/5 px-3 py-1.5 text-xs font-semibold text-[#002060] hover:bg-[#002060]/10"
                >
                  <i class="fa-regular fa-envelope text-[13px]"></i>
                  <span>{{ m.email }}</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- RIGHT -->
      <aside
        class="w-full lg:w-[340px] xl:w-[380px] shrink-0 lg:sticky lg:top-28 h-max"
      >
        <FacultySidebar
          :facultyKey="facultyKey"
          :routes="{
            about: 'faculty-page',
            staff: 'faculty-staff',
            department: 'department-name',
          }"
          :paramKeys="{ about: 'facultyName', staff: 'facultyStaff' }"
          :collapseOnMobile="true"
        />
      </aside>
    </div>

    <!-- Fallback -->
    <div v-else class="mx-auto max-w-[800px] p-6 text-center text-gray-600">
      Faculty not found.
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";
import FacultySidebar from "@/components/SideBar/FacultySidebar.vue";
import { faculties } from "@/data/faculty.js";

/* Route: /academic/faculty/:facultyStaff/faculty-staff */
const route = useRoute();
const facultyKey = computed(() => String(route.params.facultyStaff || ""));
const faculty = computed(() => faculties?.[facultyKey.value] || null);

const pageTitle = computed(() => {
  const base = faculty?.value?.title || "Faculty Staff";
  return `${base} Staff`;
});

/* Helpers */
function slug(s = "") {
  return s
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
function initials(name = "") {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return (
    parts
      .map((p) => p[0])
      .join("")
      .toUpperCase() || "U"
  );
}
// Prefer 'phone', fallback to 'number'
function phoneOf(m = {}) {
  return m.phone || m.number || "";
}
function telHref(s = "") {
  return s.replace(/\s+/g, "");
}
</script>
