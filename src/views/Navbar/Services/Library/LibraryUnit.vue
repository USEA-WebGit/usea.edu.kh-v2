<template>
  <div>
    <Titlebg :title="unit?.name || 'Library Unit'" :breadcrumb="crumb" />

    <div
      class="grid lg:grid-cols-[70%_30%] gap-6 lg:gap-10 mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] mb-5"
    >
      <!-- LEFT -->
      <div class="flex flex-col gap-10 min-w-0">
        <!-- HERO / INTRO -->
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
                  Library
                </span>
              </div>

              <h2
                class="text-2xl sm:text-3xl font-bold text-usea_secondary leading-tight"
              >
                {{ unit?.name || "Library Unit" }}
              </h2>

              <p
                v-if="unit?.about?.description"
                class="text-justify text-base sm:text-lg leading-7 text-gray-700"
              >
                {{ unit.about.description }}
              </p>
            </div>

            <!-- Visual -->
            <div class="relative order-1 md:order-none">
              <img
                :src="unit?.image || lib?.image"
                :alt="unit?.name || 'Library Unit'"
                class="h-full w-full object-cover md:rounded-l-2xl"
              />
              <div
                class="pointer-events-none absolute inset-0 md:inset-y-0 md:inset-x-auto md:w-1/6"
              ></div>
            </div>
          </div>
        </section>

        <!-- TABS -->
        <section class="flex flex-col gap-5">
          <div
            class="flex flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-white/90 p-2"
          >
            <button
              v-for="t in tabs"
              :key="t.value"
              class="px-4 py-2 rounded-lg text-sm font-semibold border"
              :class="
                activeTab === t.value
                  ? 'bg-[#002060]/5 border-[#002060] text-[#002060]'
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              "
              @click="setTab(t.value)"
            >
              {{ t.label }}
              <span
                v-if="t.value === 'events' && eventsCount"
                class="ml-2 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs font-bold rounded-full bg-gray-100 border border-gray-200"
                >{{ eventsCount }}</span
              >
              <span
                v-if="t.value === 'news' && newsCount"
                class="ml-2 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs font-bold rounded-full bg-gray-100 border border-gray-200"
                >{{ newsCount }}</span
              >
            </button>
          </div>

          <!-- OVERVIEW -->
          <div v-show="activeTab === 'overview'" class="space-y-6">
            <div
              v-for="(sec, idx) in servicesSections"
              :key="idx"
              class="rounded-2xl bg-gradient-to-br from-[#334155] to-[#1f2937] text-white p-6 sm:p-8 lg:p-10 shadow-md"
            >
              <div class="flex flex-col items-center text-center">
                <h3
                  class="text-2xl sm:text-3xl font-bold leading-tight text-white"
                >
                  {{ sec.title }}
                </h3>
                <div class="h-1 w-16 sm:w-20 bg-emerald-400 mt-2 rounded"></div>
              </div>

              <div class="mt-6 grid md:grid-cols-2 gap-6 md:gap-10">
                <!-- Image -->
                <div class="group relative overflow-hidden rounded-xl">
                  <img
                    :src="unit?.image || lib?.image"
                    :alt="(unit?.name || 'Library Unit') + ' services'"
                    class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  ></div>
                </div>

                <!-- List -->
                <div class="rounded-xl text-white p-5 border border-white/20">
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

            <!-- Gallery (unit level) -->
            <div
              v-if="(unit?.activities || []).length"
              class="flex flex-col gap-4"
            >
              <h4 class="text-xl sm:text-2xl font-bold text-usea_secondary">
                Gallery
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                <div
                  v-for="(g, i) in unit.activities"
                  :key="i"
                  class="group overflow-hidden rounded-xl bg-gray-100"
                >
                  <img
                    :src="g.image"
                    alt="Unit activity image"
                    class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- EVENTS -->
          <div v-show="activeTab === 'events'" class="space-y-4">
            <!-- Controls -->
            <div
              class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-xl border border-gray-200 bg-white/90 p-4"
            >
              <div class="relative w-full md:w-[360px]">
                <input
                  v-model="eventQuery"
                  type="text"
                  placeholder="Search events by title or description..."
                  class="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002060]/30"
                />
                <svg
                  class="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div class="flex gap-3">
                <select
                  v-model="eventStatus"
                  class="w-full md:w-[200px] px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#002060]/30"
                >
                  <option value="all">All</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                </select>

                <select
                  v-model="eventSort"
                  class="w-full md:w-[200px] px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#002060]/30"
                >
                  <option value="soonest">Soonest</option>
                  <option value="newest">Newest</option>
                  <option value="az">A → Z</option>
                </select>

                <button
                  class="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                  @click="resetEventFilters"
                >
                  Reset
                </button>
              </div>
            </div>

            <div
              v-if="!filteredEvents.length"
              class="text-gray-500 bg-white/70 p-8 rounded-xl border border-gray-200"
            >
              No events found. Try adjusting filters.
            </div>

            <!-- GRID (paginated) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <article
                v-for="ev in paginatedEvents"
                :key="ev.id"
                class="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div class="relative">
                  <img
                    :src="ev.thumbnail || lib?.image"
                    :alt="ev.title"
                    class="h-44 w-full object-cover"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                  ></div>
                  <div class="absolute left-3 top-3">
                    <div
                      class="rounded-lg bg-white/90 border border-white/50 px-2 py-1 text-xs font-semibold"
                    >
                      {{ fmt(ev.date) }} • {{ ev.time }}
                    </div>
                  </div>
                </div>

                <div class="p-5">
                  <h3
                    class="text-lg font-bold text-[#002060] group-hover:underline underline-offset-4 line-clamp-1"
                    :title="ev.title"
                  >
                    {{ ev.title }}
                  </h3>
                  <div
                    class="mt-1 text-sm text-gray-600 flex items-center gap-2"
                  >
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="line-clamp-1" :title="ev.location">{{
                      ev.location
                    }}</span>
                  </div>

                  <p class="mt-3 text-gray-700 line-clamp-3">
                    {{ ev.description }}
                  </p>

                  <div class="mt-4 flex items-center justify-between">
                    <span
                      class="px-2.5 py-1 rounded-full text-xs border"
                      :class="eventBadge(ev.date)"
                    >
                      {{ eventBadgeText(ev.date) }}
                    </span>

                    <div class="flex items-center gap-2">
                      <RouterLink
                        :to="{
                          name: 'library-unit-event-detail',
                          params: { libraryName: currentKey, id: ev.id },
                        }"
                        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
                        title="View details"
                      >
                        View
                        <i class="fa-solid fa-arrow-right-long"></i>
                      </RouterLink>

                      <button
                        class="icon-btn"
                        @click="share('event', ev)"
                        title="Copy share link"
                      >
                        <i class="fa-solid fa-share-nodes"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <!-- Pagination -->
            <div
              v-if="eventPages > 1"
              class="flex items-center justify-center gap-2 pt-2"
            >
              <button
                class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm hover:bg-gray-50"
                :disabled="eventPage === 1"
                @click="goEventPage(eventPage - 1)"
              >
                Prev
              </button>
              <button
                v-for="p in eventPageNumbers"
                :key="p"
                class="px-3 py-1.5 rounded-lg border text-sm"
                :class="
                  p === eventPage
                    ? 'border-[#002060] bg-[#002060]/5 text-[#002060] font-semibold'
                    : 'border-gray-200 hover:bg-gray-50'
                "
                @click="goEventPage(p)"
              >
                {{ p }}
              </button>
              <button
                class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm hover:bg-gray-50"
                :disabled="eventPage === eventPages"
                @click="goEventPage(eventPage + 1)"
              >
                Next
              </button>
            </div>
          </div>

          <!-- NEWS -->
          <div v-show="activeTab === 'news'" class="space-y-4">
            <!-- Controls -->
            <div
              class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-xl border border-gray-200 bg-white/90 p-4"
            >
              <div class="relative w-full md:w-[360px]">
                <input
                  v-model="newsQuery"
                  type="text"
                  placeholder="Search news by title or description..."
                  class="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002060]/30"
                />
                <svg
                  class="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div class="flex gap-3">
                <select
                  v-model="newsSort"
                  class="w-full md:w-[200px] px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#002060]/30"
                >
                  <option value="newest">Newest</option>
                  <option value="az">A → Z</option>
                </select>

                <button
                  class="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                  @click="resetNewsFilters"
                >
                  Reset
                </button>
              </div>
            </div>

            <div
              v-if="!filteredNews.length"
              class="text-gray-500 bg-white/70 p-8 rounded-xl border border-gray-200"
            >
              No news found. Try adjusting filters.
            </div>

            <!-- GRID (paginated) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <article
                v-for="n in paginatedNews"
                :key="n.id"
                class="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div class="relative">
                  <img
                    :src="n.thumbnail || lib?.image"
                    :alt="n.title"
                    class="h-44 w-full object-cover"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                  ></div>
                  <div class="absolute left-3 top-3">
                    <div
                      class="rounded-lg bg-white/90 border border-white/50 px-2 py-1 text-xs font-semibold"
                    >
                      {{ fmt(n.date) }}
                    </div>
                  </div>
                </div>

                <div class="p-5">
                  <h3
                    class="text-lg font-bold text-[#002060] group-hover:underline underline-offset-4 line-clamp-1"
                    :title="n.title"
                  >
                    {{ n.title }}
                  </h3>

                  <p class="mt-3 text-gray-700 line-clamp-3">
                    {{ n.description }}
                  </p>

                  <div class="mt-4 flex items-center justify-end gap-2">
                    <RouterLink
                      :to="{
                        name: 'library-unit-news-detail',
                        params: { libraryName: currentKey, id: n.id },
                      }"
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
                      title="View details"
                    >
                      View
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </RouterLink>

                    <button
                      class="icon-btn"
                      @click="share('news', n)"
                      title="Copy share link"
                    >
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </article>
            </div>

            <!-- Pagination -->
            <div
              v-if="newsPages > 1"
              class="flex items-center justify-center gap-2 pt-2"
            >
              <button
                class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm hover:bg-gray-50"
                :disabled="newsPage === 1"
                @click="goNewsPage(newsPage - 1)"
              >
                Prev
              </button>
              <button
                v-for="p in newsPageNumbers"
                :key="p"
                class="px-3 py-1.5 rounded-lg border text-sm"
                :class="
                  p === newsPage
                    ? 'border-[#002060] bg-[#002060]/5 text-[#002060] font-semibold'
                    : 'border-gray-200 hover:bg-gray-50'
                "
                @click="goNewsPage(p)"
              >
                {{ p }}
              </button>
              <button
                class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm hover:bg-gray-50"
                :disabled="newsPage === newsPages"
                @click="goNewsPage(newsPage + 1)"
              >
                Next
              </button>
            </div>
          </div>

          <!-- GALLERY (full) -->
          <div v-show="activeTab === 'gallery'">
            <div
              v-if="(unit?.activities || []).length"
              class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              <div
                v-for="(g, i) in unit.activities"
                :key="i"
                class="group overflow-hidden rounded-xl bg-gray-100"
              >
                <img
                  :src="g.image"
                  alt="Gallery image"
                  class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              v-else
              class="text-gray-500 bg-white/70 p-8 rounded-xl border border-gray-200"
            >
              No gallery items yet.
            </div>
          </div>
        </section>
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
import { computed, ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightServices from "@/components/SideBar/RightServices.vue";
import { services } from "@/data/service.js";

/* Accept route param as prop (you set props: true in the router) */
const props = defineProps({
  libraryName: { type: String, default: "" },
});

const route = useRoute();
const router = useRouter();

/* Root data */
const lib = services.library ?? {};
const libs = Array.isArray(lib?.libraries) ? lib.libraries : [];

/* Helpers to resolve a unit from param */
const slugify = (s = "") =>
  s
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const resolveUnit = (param) => {
  if (!param) return libs[0] || {};
  // 1) direct match on declared params.libraryName
  let u = libs.find(
    (x) => (x.params?.libraryName || "").toLowerCase() === param.toLowerCase()
  );
  if (u) return u;
  // 2) match slug of the unit name
  u = libs.find((x) => slugify(x.name) === param.toLowerCase());
  if (u) return u;
  // 3) match sourceKey (like "jpic" or "ac")
  u = libs.find(
    (x) => (x.sourceKey || "").toLowerCase() === param.toLowerCase()
  );
  return u || libs[0] || {};
};

/* Reactive current key from prop or route */
const currentKey = computed(() =>
  (props.libraryName || route.params.libraryName || "").toString()
);

/* Active unit (ref so we can reset filters when it changes) */
const unit = ref(resolveUnit(currentKey.value));

watch(currentKey, (val) => {
  unit.value = resolveUnit(val);
  // reset filters / tabs when switching between PIC <-> AC without remount
  setTab("overview", false);
  resetEventFilters();
  resetNewsFilters();
  eventPage.value = 1;
  newsPage.value = 1;
});

/* Breadcrumb text */
const crumb = computed(() => {
  const n = unit.value?.name || "Library Unit";
  if (n.toLowerCase().includes("public")) return "JPIC";
  if (n.toLowerCase().includes("american")) return "American Corner";
  return n;
});

/* Tabs */
const tabs = [
  { label: "Overview", value: "overview" },
  { label: "Events", value: "events" },
  { label: "News", value: "news" },
  { label: "Gallery", value: "gallery" },
];
const activeTab = ref("overview");

/* Initialize tab from ?tab= and keep URL in sync */
const validTabs = new Set(["overview", "events", "news", "gallery"]);

onMounted(() => {
  const t = (route.query.tab || "").toString();
  if (validTabs.has(t)) activeTab.value = t;
});

watch(
  () => route.query.tab,
  (t) => {
    t = (t || "").toString();
    if (validTabs.has(t)) activeTab.value = t;
  }
);

function setTab(t, pushQuery = true) {
  if (!validTabs.has(t)) return;
  activeTab.value = t;
  if (pushQuery) {
    router.replace({ query: { ...route.query, tab: t }, params: route.params });
  }
}

/* Sections (services/resources) */
const servicesSections = computed(() =>
  Array.isArray(unit.value?.about?.sections) ? unit.value.about.sections : []
);

/* ------------------------ Events ------------------------ */
const PAGE_SIZE = 4;

const rawEvents = computed(() =>
  Array.isArray(unit.value?.eventnewlist) ? unit.value.eventnewlist : []
);
const eventQuery = ref("");
const eventStatus = ref("all"); // all | upcoming | past
const eventSort = ref("soonest"); // soonest | newest | az
const eventsCount = computed(() => rawEvents.value.length);

const filteredEvents = computed(() => {
  const q = eventQuery.value.trim().toLowerCase();
  return rawEvents.value
    .filter((e) => {
      const matchesQ =
        !q ||
        e.title?.toLowerCase().includes(q) ||
        e.description?.toLowerCase().includes(q) ||
        e.location?.toLowerCase().includes(q);
      if (!matchesQ) return false;

      const left = daysLeft(e.date);
      const isUpcoming = left !== null && left >= 0;
      const isPast = left !== null && left < 0;

      if (eventStatus.value === "upcoming") return isUpcoming;
      if (eventStatus.value === "past") return isPast;
      return true;
    })
    .sort((a, b) => {
      if (eventSort.value === "soonest")
        return parseDMY(a.date) - parseDMY(b.date);
      if (eventSort.value === "newest")
        return parseDMY(b.date) - parseDMY(a.date);
      return (a.title || "").localeCompare(b.title || "");
    });
});

/* Pagination: events */
const eventPage = ref(1);
const eventPages = computed(() =>
  Math.max(1, Math.ceil(filteredEvents.value.length / PAGE_SIZE))
);
const eventPageNumbers = computed(() =>
  Array.from({ length: eventPages.value }, (_, i) => i + 1)
);
const paginatedEvents = computed(() => {
  const start = (eventPage.value - 1) * PAGE_SIZE;
  return filteredEvents.value.slice(start, start + PAGE_SIZE);
});
function goEventPage(p) {
  if (p < 1) p = 1;
  if (p > eventPages.value) p = eventPages.value;
  eventPage.value = p;
}

/* Reset when filters change */
watch([eventQuery, eventStatus, eventSort], () => {
  eventPage.value = 1;
});
watch(filteredEvents, () => {
  if (eventPage.value > eventPages.value) eventPage.value = eventPages.value;
});

function resetEventFilters() {
  eventQuery.value = "";
  eventStatus.value = "all";
  eventSort.value = "soonest";
  eventPage.value = 1;
}

/* ------------------------- News ------------------------- */
const rawNews = computed(() =>
  Array.isArray(unit.value?.newslist) ? unit.value.newslist : []
);
const newsQuery = ref("");
const newsSort = ref("newest"); // newest | az
const newsCount = computed(() => rawNews.value.length);

const filteredNews = computed(() => {
  const q = newsQuery.value.trim().toLowerCase();
  return rawNews.value
    .filter((n) => {
      return (
        !q ||
        n.title?.toLowerCase().includes(q) ||
        n.description?.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      if (newsSort.value === "newest")
        return parseDMY(b.date) - parseDMY(a.date);
      return (a.title || "").localeCompare(b.title || "");
    });
});

/* Pagination: news */
const newsPage = ref(1);
const newsPages = computed(() =>
  Math.max(1, Math.ceil(filteredNews.value.length / PAGE_SIZE))
);
const newsPageNumbers = computed(() =>
  Array.from({ length: newsPages.value }, (_, i) => i + 1)
);
const paginatedNews = computed(() => {
  const start = (newsPage.value - 1) * PAGE_SIZE;
  return filteredNews.value.slice(start, start + PAGE_SIZE);
});
function goNewsPage(p) {
  if (p < 1) p = 1;
  if (p > newsPages.value) p = newsPages.value;
  newsPage.value = p;
}

/* Reset when filters change */
watch([newsQuery, newsSort], () => {
  newsPage.value = 1;
});
watch(filteredNews, () => {
  if (newsPage.value > newsPages.value) newsPage.value = newsPages.value;
});

function resetNewsFilters() {
  newsQuery.value = "";
  newsSort.value = "newest";
  newsPage.value = 1;
}

/* ---------------------- Shared helpers ---------------------- */
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
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${day}-${m}-${y}`;
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

/* Share helper */
async function share(type, item) {
  const base = window.location.origin;
  // Build a stable path using the current unit key
  const key = currentKey.value || slugify(unit.value?.name || "library-unit");
  const path =
    type === "event"
      ? `/library-services/library/${key}/events/${item.id}`
      : `/library-services/library/${key}/news/${item.id}`;
  const url = `${base}${path}`;
  try {
    await navigator.clipboard.writeText(url);
    alert("Share link copied to clipboard!");
  } catch {
    window.prompt("Copy this link", url);
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.icon-btn {
  @apply h-9 w-9 inline-flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-[15px];
}
</style>
