<!-- views/services/career/Events.vue -->
<template>
  <div>
    <Titlebg :title="pageTitle" :breadcrumb="pageTitle" />

     <div
      class="grid lg:grid-cols-[70%_30%] gap-6 lg:gap-10 mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] mb-5"
    >
      <!-- LEFT -->
      <section class="flex flex-col gap-6 min-w-0">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl sm:text-3xl font-bold text-usea_secondary">
            Events
          </h2>
          <div class="text-sm text-gray-500 font-medium">
            {{ total }} event{{ total !== 1 ? "s" : "" }}
          </div>
        </div>

        <!-- Tabs -->
        <div class="flex items-center gap-2">
          <button
            class="px-3 py-1.5 rounded-lg border text-sm font-semibold"
            :class="
              activeTab === 'upcoming'
                ? 'bg-[#002060] text-white border-[#002060]'
                : 'border-gray-200 hover:bg-gray-50 text-[#002060]'
            "
            @click="switchTab('upcoming')"
            title="Events happening today or tomorrow"
          >
            Upcoming ({{ upcoming.length }})
          </button>

          <button
            class="px-3 py-1.5 rounded-lg border text-sm font-semibold"
            :class="
              activeTab === 'past'
                ? 'bg-[#002060] text-white border-[#002060]'
                : 'border-gray-200 hover:bg-gray-50 text-[#002060]'
            "
            @click="switchTab('past')"
          >
            Past ({{ past.length }})
          </button>
        </div>

        <!-- Empty state -->
        <div
          v-if="activeCount === 0"
          class="text-gray-500 bg-white/70 p-8 rounded-xl border border-gray-200"
        >
          No {{ activeTab }} events.
        </div>

        <!-- Cards -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <article
            v-for="ev in activeItems"
            :key="ev.id"
            class="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div class="relative">
              <img
                :src="ev.thumbnail || career?.image"
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

              <div class="mt-1 text-sm text-gray-600 flex items-center gap-2">
                <i class="fa-solid fa-location-dot"></i>
                <span class="line-clamp-1" :title="ev.location">
                  {{ ev.location }}
                </span>
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
                    :to="{ name: 'career-event-detail', params: { id: ev.id } }"
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
                    title="View details"
                  >
                    View
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </RouterLink>

                  <button
                    class="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-[15px]"
                    @click="share(ev)"
                    title="Copy share link"
                  >
                    <i class="fa-solid fa-share-nodes"></i>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination (per-tab) -->
        <div
          v-if="activePages > 1"
          class="flex items-center justify-center gap-2 pt-2"
        >
          <button
            class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm disabled:opacity-50"
            :disabled="activePage === 1"
            @click="prevPage()"
          >
            Prev
          </button>

          <button
            v-for="n in activePages"
            :key="n"
            class="px-3 py-1.5 rounded-lg border text-sm"
            :class="
              n === activePage
                ? 'bg-[#002060]/5 border-[#002060] text-[#002060] font-semibold'
                : 'border-gray-200 hover:bg-gray-50'
            "
            @click="go(n)"
          >
            {{ n }}
          </button>

          <button
            class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm disabled:opacity-50"
            :disabled="activePage === activePages"
            @click="nextPage()"
          >
            Next
          </button>
        </div>
      </section>

      <!-- RIGHT -->
      <aside
      >
        <RightServices />
      </aside>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightServices from "@/components/SideBar/RightServices.vue";
import { services } from "@/data/service.js";

/* Root career node */
const career = services["career-center"] ?? {};
const links = Array.isArray(career.links) ? career.links : [];
const eventsBlock =
  links.find((l) => (l.key || "").toLowerCase() === "career-events") || {};
const raw = Array.isArray(eventsBlock.eventnewlist)
  ? eventsBlock.eventnewlist
  : [];

const pageTitle = "Career Center Events";

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
  if (left === 0 || left === 1)
    return "bg-emerald-50 border-emerald-200 text-emerald-700";
  return "bg-amber-50 border-amber-200 text-amber-700";
}
function eventBadgeText(dateStr) {
  const left = daysLeft(dateStr);
  if (left === null) return "Scheduled";
  if (left < 0) return "Past";
  if (left === 0) return "Today";
  if (left === 1) return "Tomorrow";
  return `${left} day(s) left`;
}
async function share(ev) {
  const base = window.location.origin;
  const url = `${base}/services/career-center/events/${ev.id}`;
  try {
    await navigator.clipboard.writeText(url);
    alert("Share link copied to clipboard!");
  } catch {
    window.prompt("Copy this link", url);
  }
}

// All items are events now
const eventsOnly = computed(() => raw);

/* Buckets:
   - Upcoming = today (0) or tomorrow (1)
   - Past     = dates < today
*/
// Upcoming = any future (>= today)
const upcoming = computed(() =>
  eventsOnly.value
    .filter((e) => {
      const d = daysLeft(e.date);
      return d !== null && d >= 0; // ← was: d >= 0 && d <= 1
    })
    .sort((a, b) => parseDMY(a.date) - parseDMY(b.date))
);

const past = computed(() =>
  eventsOnly.value
    .filter((e) => {
      const d = daysLeft(e.date);
      return d !== null && d < 0;
    })
    .sort((a, b) => parseDMY(b.date) - parseDMY(a.date))
);

const total = computed(() => eventsOnly.value.length);

/* Tabs + per-tab pagination */
const activeTab = ref("upcoming"); // stays 2-tab
const perPage = 6;

const pageUpcoming = ref(1);
const pagePast = ref(1);

const pagesUpcoming = computed(() =>
  Math.max(1, Math.ceil(upcoming.value.length / perPage))
);
const pagesPast = computed(() =>
  Math.max(1, Math.ceil(past.value.length / perPage))
);

const itemsUpcoming = computed(() => {
  const start = (pageUpcoming.value - 1) * perPage;
  return upcoming.value.slice(start, start + perPage);
});
const itemsPast = computed(() => {
  const start = (pagePast.value - 1) * perPage;
  return past.value.slice(start, start + perPage);
});

/* Active derived */
const activeItems = computed(() =>
  activeTab.value === "upcoming" ? itemsUpcoming.value : itemsPast.value
);
const activePages = computed(() =>
  activeTab.value === "upcoming" ? pagesUpcoming.value : pagesPast.value
);
const activePage = computed({
  get: () =>
    activeTab.value === "upcoming" ? pageUpcoming.value : pagePast.value,
  set: (v) => {
    if (activeTab.value === "upcoming") pageUpcoming.value = v;
    else pagePast.value = v;
  },
});
const activeCount = computed(() =>
  activeTab.value === "upcoming" ? upcoming.value.length : past.value.length
);

function switchTab(tab) {
  if (activeTab.value === tab) return;
  activeTab.value = tab;
  if (tab === "upcoming") pageUpcoming.value = 1;
  else pagePast.value = 1;
}
function go(n) {
  if (n < 1 || n > activePages.value) return;
  activePage.value = n;
}
function prevPage() {
  if (activePage.value > 1) activePage.value -= 1;
}
function nextPage() {
  if (activePage.value < activePages.value) activePage.value += 1;
}

/* Keep page indices valid */
watch(upcoming, () => {
  if (pageUpcoming.value > pagesUpcoming.value)
    pageUpcoming.value = pagesUpcoming.value;
});
watch(past, () => {
  if (pagePast.value > pagesPast.value) pagePast.value = pagesPast.value;
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
