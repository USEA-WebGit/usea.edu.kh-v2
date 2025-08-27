<!-- views/services/career/News.vue -->
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
            News
          </h2>
          <div class="text-sm text-gray-500 font-medium">
            {{ total }} item{{ total !== 1 ? "s" : "" }}
          </div>
        </div>

        <!-- Empty state -->
        <div
          v-if="total === 0"
          class="text-gray-500 bg-white/70 p-8 rounded-xl border border-gray-200"
        >
          No news found.
        </div>

        <!-- Cards -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <article
            v-for="n in items"
            :key="n.id"
            class="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div class="relative">
              <img
                :src="n.thumbnail || career?.image"
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
                  {{ fmt(n.date)
                  }}<template v-if="n.time"> • {{ n.time }}</template>
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

              <div
                v-if="n.location"
                class="mt-1 text-sm text-gray-600 flex items-center gap-2"
              >
                <i class="fa-solid fa-location-dot"></i>
                <span class="line-clamp-1" :title="n.location">
                  {{ n.location }}
                </span>
              </div>

              <p class="mt-3 text-gray-700 line-clamp-3">
                {{ n.description }}
              </p>

              <div class="mt-4 flex items-center justify-between">
                <span
                  class="px-2.5 py-1 rounded-full text-xs border"
                  :class="newsBadge(n.date)"
                >
                  {{ newsBadgeText(n.date) }}
                </span>

                <div class="flex items-center gap-2">
                  <RouterLink
                    :to="{ name: 'career-news-detail', params: { id: n.id } }"
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
                    title="View details"
                  >
                    View
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </RouterLink>

                  <button
                    class="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-[15px]"
                    @click="share(n)"
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
          v-if="pages > 1"
          class="flex items-center justify-center gap-2 pt-2"
        >
          <button
            class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm disabled:opacity-50"
            :disabled="page === 1"
            @click="prevPage()"
          >
            Prev
          </button>

          <button
            v-for="n in pages"
            :key="n"
            class="px-3 py-1.5 rounded-lg border text-sm"
            :class="
              n === page
                ? 'bg-[#002060]/5 border-[#002060] text-[#002060] font-semibold'
                : 'border-gray-200 hover:bg-gray-50'
            "
            @click="go(n)"
          >
            {{ n }}
          </button>

          <button
            class="px-3 py-1.5 rounded-lg border border-gray-200 text-sm disabled:opacity-50"
            :disabled="page === pages"
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

/* Source */
const career = services["career-center"] ?? {};
const links = Array.isArray(career.links) ? career.links : [];
const eventsBlock =
  links.find((l) => (l.key || "").toLowerCase() === "career-events") || {};
const raw = Array.isArray(eventsBlock.eventnewlist)
  ? eventsBlock.eventnewlist
  : [];

const pageTitle = "Career Center News";

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
function daysAgo(dateStr) {
  if (!dateStr) return null;
  const pub = parseDMY(dateStr);
  const today = new Date();
  pub.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return Math.round((today - pub) / (1000 * 60 * 60 * 24));
}
function newsBadge(dateStr) {
  const ago = daysAgo(dateStr);
  if (ago === null) return "bg-gray-100 border-gray-200 text-gray-700";
  if (ago < 0) return "bg-sky-50 border-sky-200 text-sky-700"; // scheduled
  if (ago <= 1) return "bg-emerald-50 border-emerald-200 text-emerald-700";
  if (ago <= 7) return "bg-amber-50 border-amber-200 text-amber-700";
  return "bg-gray-50 border-gray-200 text-gray-700";
}
function newsBadgeText(dateStr) {
  const ago = daysAgo(dateStr);
  if (ago === null) return "Published";
  if (ago < 0) return "Scheduled";
  if (ago === 0) return "Today";
  if (ago === 1) return "Yesterday";
  return `${ago} day(s) ago`;
}
async function share(n) {
  const base = window.location.origin;
  const url = `${base}/services/career-center/news/${n.id}`;
  try {
    await navigator.clipboard.writeText(url);
    alert("Share link copied to clipboard!");
  } catch {
    window.prompt("Copy this link", url);
  }
}

/* News only (category contains 'news'), newest first */
const newsOnly = computed(() =>
  raw
    .filter((i) =>
      String(i.category || "")
        .toLowerCase()
        .includes("news")
    )
    .sort((a, b) => parseDMY(b.date) - parseDMY(a.date))
);

const total = computed(() => newsOnly.value.length);

/* Pagination (same UX as Events.vue) */
const perPage = 6;
const page = ref(1);
const pages = computed(() => Math.max(1, Math.ceil(total.value / perPage)));
const items = computed(() => {
  const start = (page.value - 1) * perPage;
  return newsOnly.value.slice(start, start + perPage);
});
function go(n) {
  if (n < 1 || n > pages.value) return;
  page.value = n;
}
function prevPage() {
  if (page.value > 1) page.value -= 1;
}
function nextPage() {
  if (page.value < pages.value) page.value += 1;
}

/* Keep page index valid when list changes */
watch(newsOnly, () => {
  if (page.value > pages.value) page.value = pages.value;
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
