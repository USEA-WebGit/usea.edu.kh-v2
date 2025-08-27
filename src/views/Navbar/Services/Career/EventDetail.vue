<!-- /src/views/Navbar/Services/Career/EventDetail.vue -->
<template>
  <div>
    <Titlebg :title="pageTitle" :breadcrumb="pageTitle" />

    <div
      class="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[2fr_1fr] xl:gap-14 mb-10"
    >
      <!-- MAIN -->
      <article class="min-w-0">
        <!-- Back button -->
        <div class="mb-4">
          <button
            @click="back"
            aria-label="Back to events"
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-semibold hover:bg-gray-50"
          >
            <i class="fa-solid fa-arrow-left-long"></i>
            Back
          </button>
        </div>

        <div
          class="bg-white/90 border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
        >
          <!-- Cover -->
          <div class="relative">
            <img
              :src="item?.thumbnail || career?.image"
              :alt="item?.title"
              class="w-full h-72 object-cover"
            />
            <div
              class="absolute left-4 top-4 rounded bg-white/90 border px-2 py-1 text-xs font-semibold"
            >
              {{ fmt(item?.date) }} • {{ item?.time }}
            </div>
          </div>

          <!-- Body -->
          <div class="p-6 sm:p-8 space-y-5">
            <h1
              class="text-2xl sm:text-3xl font-bold text-[#002060] leading-tight"
            >
              {{ item?.title }}
            </h1>

            <div class="flex flex-wrap gap-3 text-sm text-gray-600">
              <span class="inline-flex items-center gap-2">
                <i class="fa-solid fa-location-dot"></i>
                <span>{{ item?.location || "TBA" }}</span>
              </span>
              <span
                class="px-2.5 py-1 rounded-full text-xs border"
                :class="eventBadge(item?.date)"
              >
                {{ eventBadgeText(item?.date) }}
              </span>
            </div>

            <p class="text-gray-800 leading-7">
              {{ item?.description }}
            </p>

            <!-- Optional gallery if your event has activity images -->
            <div v-if="(item?.activity || []).length" class="pt-3">
              <h3 class="font-semibold text-[#002060] mb-3">Gallery</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <img
                  v-for="(g, i) in item.activity"
                  :key="i"
                  :src="g.image"
                  class="w-full aspect-[4/3] object-cover rounded-xl"
                  alt="Event photo"
                />
              </div>
            </div>

            <!-- Share -->
            <div class="pt-2">
              <button
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
                @click="share()"
              >
                <i class="fa-solid fa-share-nodes"></i> Share
              </button>
            </div>
          </div>
        </div>
      </article>

      <!-- RIGHT (related) -->
      <aside class="space-y-8">
        <!-- Related events -->
        <section
          v-if="relatedEvents.length"
          class="bg-white/90 border border-gray-200 rounded-2xl p-5 shadow-sm"
        >
          <h3 class="font-semibold text-[#002060] mb-3">Related Events</h3>
          <ul class="space-y-3">
            <li v-for="ev in relatedEvents" :key="ev.id" class="flex gap-3">
              <img
                :src="ev.thumbnail || career?.image"
                class="w-16 h-16 rounded object-cover border"
                alt=""
              />
              <div class="min-w-0">
                <RouterLink
                  :to="{ name: 'career-event-detail', params: { id: ev.id } }"
                  class="font-medium text-sm text-[#002060] hover:underline line-clamp-2"
                >
                  {{ ev.title }}
                </RouterLink>
                <div class="text-xs text-gray-500">
                  {{ fmt(ev.date) }} • {{ ev.time }}
                </div>
              </div>
            </li>
          </ul>
        </section>

        <!-- Latest news -->
        <section
          v-if="latestNews.length"
          class="bg-white/90 border border-gray-200 rounded-2xl p-5 shadow-sm"
        >
          <h3 class="font-semibold text-[#002060] mb-3">Latest News</h3>
          <ul class="space-y-3">
            <li v-for="n in latestNews" :key="n.id" class="flex gap-3">
              <img
                :src="n.thumbnail || career?.image"
                class="w-16 h-16 rounded object-cover border"
                alt=""
              />
              <div class="min-w-0">
                <RouterLink
                  :to="{ name: 'career-news-detail', params: { id: n.id } }"
                  class="font-medium text-sm text-[#002060] hover:underline line-clamp-2"
                >
                  {{ n.title }}
                </RouterLink>
                <div class="text-xs text-gray-500">{{ fmt(n.date) }}</div>
              </div>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  </div>

  <!-- Not found -->
  <div v-if="!item" class="mx-auto max-w-[800px] p-6 text-center text-gray-600">
    Event not found.
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";
import { services } from "@/data/service.js";

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

const career = services["career-center"] ?? {};
const links = Array.isArray(career.links) ? career.links : [];
const eventsBlock =
  links.find((l) => (l.key || "").toLowerCase() === "career-events") || {};
const all = Array.isArray(eventsBlock.eventnewlist)
  ? eventsBlock.eventnewlist
  : [];

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
  if (!str) return "";
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

/* Data */
const item = computed(() =>
  all.find(
    (e) =>
      e.id === id &&
      String(e.category || "")
        .toLowerCase()
        .includes("event")
  )
);
const pageTitle = computed(() => item.value?.title || "Event Detail");

/* Right column: related and news */
const relatedEvents = computed(() =>
  all
    .filter(
      (e) =>
        e.id !== id &&
        String(e.category || "")
          .toLowerCase()
          .includes("event")
    )
    .sort((a, b) => parseDMY(a.date) - parseDMY(b.date))
    .slice(0, 4)
);

const latestNews = computed(() =>
  all
    .filter((e) =>
      String(e.category || "")
        .toLowerCase()
        .includes("news")
    )
    .sort((a, b) => parseDMY(b.date) - parseDMY(a.date))
    .slice(0, 4)
);

/* Actions */
function back() {
  // Go back if there is history; otherwise go to the events list
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push({ name: "career-events" });
  }
}

async function share() {
  const base = window.location.origin;
  const url = `${base}/services/career-center/events/${id}`;
  try {
    await navigator.clipboard.writeText(url);
    alert("Share link copied to clipboard!");
  } catch {
    window.prompt("Copy this link", url);
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
