<!-- /src/views/Navbar/Services/Career/NewsDetail.vue -->
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
            aria-label="Back"
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
              {{ fmt(item?.date) }}
            </div>
          </div>

          <!-- Body -->
          <div class="p-6 sm:p-8 space-y-5">
            <h1
              class="text-2xl sm:text-3xl font-bold text-[#002060] leading-tight"
            >
              {{ item?.title }}
            </h1>

            <p class="text-gray-800 leading-7">
              {{ item?.description }}
            </p>

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

      <!-- RIGHT (more news + events) -->
      <aside class="space-y-8">
        <section
          v-if="moreNews.length"
          class="bg-white/90 border border-gray-200 rounded-2xl p-5 shadow-sm"
        >
          <h3 class="font-semibold text-[#002060] mb-3">More News</h3>
          <ul class="space-y-3">
            <li v-for="n in moreNews" :key="n.id" class="flex gap-3">
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

        <section
          v-if="upcomingEvents.length"
          class="bg-white/90 border border-gray-200 rounded-2xl p-5 shadow-sm"
        >
          <h3 class="font-semibold text-[#002060] mb-3">Upcoming Events</h3>
          <ul class="space-y-3">
            <li v-for="ev in upcomingEvents" :key="ev.id" class="flex gap-3">
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
      </aside>
    </div>
  </div>

  <!-- Not found -->
  <div v-if="!item" class="mx-auto max-w-[800px] p-6 text-center text-gray-600">
    News not found.
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
const block =
  links.find((l) => (l.key || "").toLowerCase() === "career-events") || {};
const all = Array.isArray(block.eventnewlist) ? block.eventnewlist : [];

/* Helpers */
function parseDMY(str) {
  if (!str) return new Date("1970-01-01");
  const [dd, mm, yyyy] = String(str)
    .split("-")
    .map((s) => parseInt(s, 10));
  return new Date(yyyy || 1970, (mm || 1) - 1, dd || 1);
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

/* Main item */
const item = computed(() =>
  all.find(
    (n) =>
      n.id === id &&
      String(n.category || "")
        .toLowerCase()
        .includes("news")
  )
);
const pageTitle = computed(() => item.value?.title || "News Detail");

/* Right rail */
const moreNews = computed(() =>
  all
    .filter(
      (n) =>
        n.id !== id &&
        String(n.category || "")
          .toLowerCase()
          .includes("news")
    )
    .sort((a, b) => parseDMY(b.date) - parseDMY(a.date))
    .slice(0, 4)
);

const upcomingEvents = computed(() =>
  all
    .filter(
      (e) =>
        String(e.category || "")
          .toLowerCase()
          .includes("event") && (daysLeft(e.date) ?? -1) >= 0
    )
    .sort((a, b) => parseDMY(a.date) - parseDMY(b.date))
    .slice(0, 4)
);

/* Actions */
function back() {
  // If there's history, go back; otherwise send to the events/news list
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push({ name: "career-events" });
  }
}

/* Share */
async function share() {
  const base = window.location.origin;
  const url = `${base}/services/career-center/news/${id}`;
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
