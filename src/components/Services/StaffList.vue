<template>
  <div>
    <Titlebg :title="pageTitle" :breadcrumb="pageTitle" />

    <div
      class="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[2fr_1fr] xl:gap-14 mb-5"
    >
      <!-- LEFT -->
      <section class="flex flex-col gap-6 min-w-0">
        <h2 class="text-2xl sm:text-3xl font-bold text-usea_secondary">
          Our Team
        </h2>

        <div
          v-if="members.length"
          class="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <article
            v-for="(m, i) in members"
            :key="i"
            :id="'member-' + slug(m.name)"
            class="bg-white/95 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <!-- Top gradient header with rounded corners -->
            <div
              class="h-3 w-full rounded-t-2xl bg-gradient-to-r from-[#002060] via-[#2246b8] to-[#6aa6ff]"
            ></div>

            <!-- Body -->
            <div class="p-5">
              <!-- Avatar now sits BELOW the stripe, no overlap / notch -->
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

        <div
          v-else
          class="text-gray-500 bg-white/70 p-8 rounded-xl border border-gray-200 text-center"
        >
          No staff members found.
        </div>
      </section>

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

const props = defineProps({
  // 'career-center' | 'library' | 'it-services' | 'health-services'
  serviceKey: { type: String, required: true },
});

const service = computed(() => services?.[props.serviceKey] || {});

/* Members:
   - career/it/health: links[*-staff].members
   - library: service.members
*/
const members = computed(() => {
  const s = service.value || {};
  const fromLink = Array.isArray(s.links)
    ? s.links.find((l) => /\-staff$/.test(String(l?.key || l?.name || "")))
        ?.members || []
    : [];
  if (fromLink.length) return fromLink;
  return Array.isArray(s.members) ? s.members : [];
});

const pageTitle = computed(() =>
  service.value?.title ? `${service.value.title} Staff` : "Staff"
);

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
      .map((p) => p.charAt(0))
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
