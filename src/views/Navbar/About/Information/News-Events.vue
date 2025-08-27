<template>
  <div>
    <Titlebg title="News & Events" breadcrumb="News-Events" />

    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] gap-10 mb-5">
      <!-- LEFT -->
      <div class="min-w-0">
        <!-- Tabs + count + top pagination -->
        <div class="mt-8 mb-6 flex flex-col gap-3">
          <div class="flex justify-center">
            <div class="flex flex-wrap gap-2 sm:gap-3 bg-white/80 border border-gray-200 rounded-full p-1.5 shadow-sm">
              <button
                v-for="tab in tabs"
                :key="tab"
                @click="switchTab(tab)"
                class="px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300"
                :class="activeTab === tab ? 'bg-[#002060] text-white' : 'bg-transparent text-gray-700 hover:bg-gray-50'"
              >
                {{ tab }}
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-600 font-medium">
              {{ total }} item{{ total !== 1 ? "s" : "" }}
              <span class="text-gray-400">•</span>
              Page {{ page }} of {{ pages }}
            </div>

            <!-- Inline pagination (top) -->
            <div v-if="pages > 1" class="flex items-center gap-1">
              <button
                class="px-3 py-1.5 rounded-lg border text-sm"
                :class="page === 1 ? 'border-gray-200 text-gray-400' : 'border-gray-200 hover:bg-gray-50'"
                :disabled="page === 1"
                @click="prevPage"
              >
                Prev
              </button>

              <button
                v-for="n in pages"
                :key="n"
                class="px-3 py-1.5 rounded-lg border text-sm"
                :class="n === page ? 'bg-[#002060]/5 border-[#002060] text-[#002060] font-semibold' : 'border-gray-200 hover:bg-gray-50'"
                @click="go(n)"
              >
                {{ n }}
              </button>

              <button
                class="px-3 py-1.5 rounded-lg border text-sm"
                :class="page === pages ? 'border-gray-200 text-gray-400' : 'border-gray-200 hover:bg-gray-50'"
                :disabled="page === pages"
                @click="nextPage"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <!-- Featured -->
        <article v-if="featured" class="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm group mb-8">
          <div class="h-64 sm:h-80 w-full">
            <template v-if="featured.image">
              <img :src="featured.image" :alt="featured.title" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
            </template>
            <template v-else>
              <div class="h-full w-full bg-gradient-to-br from-slate-200 to-slate-300"></div>
            </template>
          </div>

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div class="absolute left-4 right-4 bottom-4">
            <div class="flex items-center gap-2">
              <span
                class="px-2 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase"
                :class="featured.type === 'event' ? 'bg-emerald-400/90 text-emerald-950' : 'bg-amber-300/90 text-amber-950'"
              >
                {{ featured.type === "event" ? "Event" : "News" }}
              </span>
              <span class="text-white/80 text-xs">
                <template v-if="featured.type === 'event'">
                  {{ formatDisplayDate(featured.date) }}
                  <template v-if="featured.time">• {{ formatDisplayTime(featured.time) }}</template>
                </template>
                <template v-else>
                  {{ formatDisplayDate(featured.date) }}
                </template>
              </span>
            </div>

            <RouterLink :to="routeFor(featured)" class="mt-2 block text-white text-2xl sm:text-3xl font-bold leading-snug hover:underline underline-offset-4 line-clamp-2">
              {{ featured.title }}
            </RouterLink>

            <p v-if="featured.description" class="mt-2 text-white/90 line-clamp-2 hidden sm:block">
              {{ featured.description }}
            </p>
          </div>
        </article>

        <!-- Grid -->
        <div v-if="paged.length" class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
          <div v-for="item in paged" :key="item.id" class="group bg-white/90 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div class="relative">
              <div class="aspect-[16/9] w-full">
                <template v-if="item.image">
                  <img :src="item.image" :alt="item.title" class="h-full w-full object-cover" />
                </template>
                <template v-else>
                  <div class="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200"></div>
                </template>
              </div>

              <!-- Date badge -->
              <div class="absolute left-3 top-3">
                <div class="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-white/95 border border-white/60 shadow-sm">
                  <div class="text-[10px] font-semibold text-gray-500 leading-none">{{ monthAbbrev(item.date).toUpperCase() }}</div>
                  <div class="text-lg font-extrabold text-gray-800 leading-none">{{ dayOfMonth(item.date) }}</div>
                </div>
              </div>
            </div>

            <div class="p-5">
              <div class="flex items-center gap-2 mb-1">
                <span
                  class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
                  :class="item.type === 'event' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-amber-100 text-amber-700 border border-amber-200'"
                >
                  {{ item.type === "event" ? "Event" : "News" }}
                </span>
                <span class="text-xs text-gray-500">
                  <template v-if="item.type === 'event'">
                    {{ formatDisplayDate(item.date) }}<template v-if="item.time"> • {{ formatDisplayTime(item.time) }}</template>
                  </template>
                  <template v-else>{{ formatDisplayDate(item.date) }}</template>
                </span>
              </div>

              <RouterLink :to="routeFor(item)" class="text-base font-bold text-[#002060] group-hover:underline underline-offset-4 line-clamp-2">
                {{ item.title }}
              </RouterLink>

              <p v-if="item.description" class="mt-2 text-gray-700 line-clamp-3">
                {{ item.description }}
              </p>

              <div class="mt-3 text-sm text-gray-600 flex items-center gap-2" v-if="item.location">
                <i class="fa-solid fa-location-dot"></i>
                <span class="line-clamp-1">{{ item.location }}</span>
              </div>

              <div class="mt-4 flex items-center justify-between">
                <RouterLink :to="routeFor(item)" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold">
                  View
                  <i class="fa-solid fa-arrow-right-long"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty -->
        <div v-else class="text-center text-gray-500 py-16">
          No items to show for “{{ activeTab }}”.
        </div>

        <!-- Bottom pagination -->
        <div v-if="pages > 1" class="mt-6 flex items-center justify-end gap-1">
          <button
            class="px-3 py-1.5 rounded-lg border text-sm"
            :class="page === 1 ? 'border-gray-200 text-gray-400' : 'border-gray-200 hover:bg-gray-50'"
            :disabled="page === 1"
            @click="prevPage"
          >
            Prev
          </button>

          <button
            v-for="n in pages"
            :key="n"
            class="px-3 py-1.5 rounded-lg border text-sm"
            :class="n === page ? 'bg-[#002060]/5 border-[#002060] text-[#002060] font-semibold' : 'border-gray-200 hover:bg-gray-50'"
            @click="go(n)"
          >
            {{ n }}
          </button>

          <button
            class="px-3 py-1.5 rounded-lg border text-sm"
            :class="page === pages ? 'border-gray-200 text-gray-400' : 'border-gray-200 hover:bg-gray-50'"
            :disabled="page === pages"
            @click="nextPage"
          >
            Next
          </button>
        </div>
      </div>

      <!-- RIGHT -->
      <div>
        <RightNav />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightNav from "@/components/SideBar/Right-Nav.vue";
import {
  latestNewsSorted,
  upcomingEventsSorted,
  formatDisplayDate,
  formatDisplayTime,
  monthAbbrev,
  dayOfMonth,
} from "@/data/news-events.js";

const PER_PAGE = 9;
const tabs = ["All", "News", "Upcoming"];

const route = useRoute();
const router = useRouter();

const activeTab = ref(tabs.includes(String(route.query.tab)) ? String(route.query.tab) : "All");
const page = ref(Math.max(1, parseInt(route.query.page || "1", 10) || 1));

watch([activeTab, page], ([tab, p]) => {
  router.replace({ query: { ...route.query, tab, page: String(p) } });
});

// normalize + tag type
const newsItems = computed(() => latestNewsSorted().map((n) => ({ ...n, type: "news" })));
const eventItems = computed(() => upcomingEventsSorted().map((e) => ({ ...e, type: "event" })));

// combined (for All)
const toDate = (it) => new Date(`${it.date}T${it.time || "00:00"}:00`);
const allItems = computed(() => [...newsItems.value, ...eventItems.value].sort((a, b) => toDate(b) - toDate(a)));

// filter by tab
const filtered = computed(() => {
  if (activeTab.value === "News") return newsItems.value;
  if (activeTab.value === "Upcoming") return eventItems.value;
  return allItems.value;
});

// featured + list
const featured = computed(() => filtered.value[0] || null);
const list = computed(() => (featured.value ? filtered.value.slice(1) : []));

// pagination
const total = computed(() => list.value.length);
const pages = computed(() => Math.max(1, Math.ceil(total.value / PER_PAGE)));
const paged = computed(() => {
  const start = (page.value - 1) * PER_PAGE;
  return list.value.slice(start, start + PER_PAGE);
});

function switchTab(tab) {
  if (activeTab.value === tab) return;
  activeTab.value = tab;
  page.value = 1;
}
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
watch([list, pages], () => {
  if (page.value > pages.value) page.value = pages.value;
});

/** Route builder:
 * - Event -> { name: 'events-detail', query: { id: String(item.id) }, state: { item } }
 * - News  -> { name: 'news-detail', params: { slug: String(item.id) }, state: { item } }
 */
function routeFor(item) {
  if (item?.type === "event") {
    return { name: "events-detail", query: { id: String(item.id) }, state: { item } };
  }
  return { name: "news-detail", params: { slug: String(item?.id ?? "") }, state: { item } };
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
