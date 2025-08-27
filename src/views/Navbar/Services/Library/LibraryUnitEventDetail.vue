<!-- views/services/library/LibraryUnitEventDetail.vue -->
<template>
  <div>
    <Titlebg :title="eventItem?.title || 'Event'" :breadcrumb="crumb" />

    <div
      class="grid lg:grid-cols-[70%_30%] gap-6 lg:gap-10 mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] mb-5"
    >
      <!-- LEFT / MAIN -->
      <article class="min-w-0">
        <!-- Cover -->
        <div
          class="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
        >
          <img
            :src="eventItem?.thumbnail || unit?.image || lib?.image"
            :alt="eventItem?.title"
            class="w-full h-60 sm:h-80 object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
          ></div>
          <div class="absolute left-4 bottom-4 flex flex-wrap gap-2">
            <span
              class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/90 border border-white/50"
            >
              {{ fmt(eventItem?.date) }} • {{ eventItem?.time }}
            </span>
            <span
              class="px-2.5 py-1 rounded-lg text-xs font-semibold border"
              :class="eventBadge(eventItem?.date)"
            >
              {{ eventBadgeText(eventItem?.date) }}
            </span>
          </div>
        </div>

        <!-- Title + meta -->
        <header class="mt-6">
          <h1
            class="text-2xl sm:text-3xl font-bold text-[#002060] leading-tight"
          >
            {{ eventItem?.title }}
          </h1>
          <div class="mt-2 text-gray-600 flex items-center gap-2">
            <i class="fa-solid fa-location-dot"></i>
            <span>{{ eventItem?.location }}</span>
          </div>
        </header>

        <!-- Body -->
        <section
          class="prose max-w-none prose-p:leading-7 prose-p:text-gray-700 mt-4"
        >
          <p>{{ eventItem?.description }}</p>
        </section>

        <!-- Back / Share -->
        <div class="mt-6 flex items-center gap-3">
          <RouterLink
            :to="{ name: 'library-unit', params: { libraryName: currentKey } }"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
          >
            <i class="fa-solid fa-arrow-left-long"></i> Back to {{ unit?.name }}
          </RouterLink>
          <button
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
            @click="shareDetail('event', eventItem)"
          >
            <i class="fa-solid fa-share-nodes"></i> Share
          </button>
        </div>
      </article>

      <!-- RIGHT / STICKY SIDEBAR -->
      <aside class="lg:sticky lg:top-28 space-y-6 h-max">
        <!-- Related Events -->
        <section
          v-if="relatedEvents.length"
          class="bg-white/90 border border-gray-200 rounded-2xl p-4 shadow-sm"
        >
          <h3 class="text-sm font-bold text-[#002060] mb-3">Related Events</h3>
          <ul class="space-y-3">
            <li v-for="ev in relatedEvents" :key="ev.id">
              <RouterLink
                :to="{
                  name: 'library-unit-event-detail',
                  params: { libraryName: currentKey, id: ev.id },
                }"
                class="flex gap-3 hover:bg-gray-50 rounded-lg p-2"
              >
                <img
                  :src="ev.thumbnail || unit?.image || lib?.image"
                  :alt="ev.title"
                  class="h-14 w-14 rounded-md object-cover border border-gray-200 flex-shrink-0"
                />
                <div class="min-w-0">
                  <div
                    class="text-[13px] font-semibold text-gray-800 line-clamp-2"
                    :title="ev.title"
                  >
                    {{ ev.title }}
                  </div>
                  <div class="text-[12px] text-gray-500 mt-0.5">
                    {{ fmt(ev.date) }} • {{ ev.time }}
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </section>

        <!-- Related News -->
        <section
          v-if="relatedNews.length"
          class="bg-white/90 border border-gray-200 rounded-2xl p-4 shadow-sm"
        >
          <h3 class="text-sm font-bold text-[#002060] mb-3">Related News</h3>
          <ul class="space-y-3">
            <li v-for="n in relatedNews" :key="n.id">
              <RouterLink
                :to="{
                  name: 'library-unit-news-detail',
                  params: { libraryName: currentKey, id: n.id },
                }"
                class="flex gap-3 hover:bg-gray-50 rounded-lg p-2"
              >
                <img
                  :src="n.thumbnail || unit?.image || lib?.image"
                  :alt="n.title"
                  class="h-14 w-14 rounded-md object-cover border border-gray-200 flex-shrink-0"
                />
                <div class="min-w-0">
                  <div
                    class="text-[13px] font-semibold text-gray-800 line-clamp-2"
                    :title="n.title"
                  >
                    {{ n.title }}
                  </div>
                  <div class="text-[12px] text-gray-500 mt-0.5">
                    {{ fmt(n.date) }}
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";
import { services } from "@/data/service.js";

/* Route params */
const route = useRoute();
const currentKey = computed(() => (route.params.libraryName || "").toString());
const currentId = computed(() => parseInt(route.params.id, 10));

/* Root library + resolve unit (matches your list page logic) */
const lib = services.library ?? {};
const libs = Array.isArray(lib?.libraries) ? lib.libraries : [];
const slugify = (s = "") =>
  s
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

function resolveUnit(param) {
  if (!param) return libs[0] || {};
  let u = libs.find(
    (x) => (x.params?.libraryName || "").toLowerCase() === param.toLowerCase()
  );
  if (u) return u;
  u = libs.find((x) => slugify(x.name) === param.toLowerCase());
  if (u) return u;
  u = libs.find(
    (x) => (x.sourceKey || "").toLowerCase() === param.toLowerCase()
  );
  return u || libs[0] || {};
}
const unit = computed(() => resolveUnit(currentKey.value));

/* Event item */
const eventItem = computed(() => {
  const list = Array.isArray(unit.value?.eventnewlist)
    ? unit.value.eventnewlist
    : [];
  return list.find((e) => Number(e.id) === currentId.value);
});

/* Sidebar data */
const relatedEvents = computed(() => {
  const list = Array.isArray(unit.value?.eventnewlist)
    ? unit.value.eventnewlist
    : [];
  return list
    .filter((e) => Number(e.id) !== currentId.value)
    .sort((a, b) => parseDMY(b.date) - parseDMY(a.date))
    .slice(0, 5);
});
const relatedNews = computed(() => {
  const list = Array.isArray(unit.value?.newslist) ? unit.value.newslist : [];
  return list.sort((a, b) => parseDMY(b.date) - parseDMY(a.date)).slice(0, 5);
});

/* Breadcrumb */
const crumb = computed(() => {
  const n = unit.value?.name || "Library Unit";
  const short = n.toLowerCase().includes("public")
    ? "JPIC"
    : n.toLowerCase().includes("american")
    ? "American Corner"
    : n;
  return `${short} • Event Details`;
});

/* Helpers */
function parseDMY(str) {
  if (!str) return new Date("1970-01-01");
  const [dd, mm, yyyy] = String(str)
    .split("-")
    .map((s) => parseInt(s, 10));
  const m = Math.min(Math.max(mm || 1, 1), 12);
  const d = Math.min(Math.max(dd || 1, 1), 31);
  return new Date(yyyy || 1970, m - 1, d);
}
function fmt(str) {
  const d = parseDMY(str);
  return `${String(d.getDate()).padStart(2, "0")}-${String(
    d.getMonth() + 1
  ).padStart(2, "0")}-${d.getFullYear()}`;
}
function daysLeft(dateStr) {
  if (!dateStr) return null;
  const due = parseDMY(dateStr);
  const today = new Date();
  due.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return Math.round((due - today) / (1000 * 60 * 60 * 24));
}
function eventBadge(dateStr) {
  const left = daysLeft(dateStr);
  if (left === null) return "bg-gray-100 border-gray-200 text-gray-700";
  if (left < 0) return "bg-red-50 border-red-200 text-red-600";
  if (left <= 7) return "bg-amber-50 border-amber-200 text-amber-700";
  return "bg-emerald-50 border-emerald-200 text-emerald-700";
}
function eventBadgeText(dateStr) {
  const left = daysLeft(dateStr);
  if (left === null) return "Scheduled";
  if (left < 0) return "Past";
  if (left === 0) return "Today";
  if (left <= 7) return `${left} day(s) left`;
  return "Upcoming";
}

/* Share */
async function shareDetail(type, item) {
  const base = window.location.origin;
  const url =
    type === "event"
      ? `${base}/library-services/library/${currentKey.value}/events/${item.id}`
      : `${base}/library-services/library/${currentKey.value}/news/${item.id}`;
  try {
    await navigator.clipboard.writeText(url);
    alert("Share link copied to clipboard!");
  } catch {
    window.prompt("Copy this link", url);
  }
}
</script>
