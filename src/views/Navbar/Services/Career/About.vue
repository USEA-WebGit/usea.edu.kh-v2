<!-- views/services/career/About.vue -->
<template>
  <div>
    <Titlebg
      :title="career?.title || 'Career Center'"
      :breadcrumb="career?.title || 'Career Center'"
    />

    <!-- Main container -->
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
            <div class="grid md:grid-cols-2">
              <!-- Visual -->
              <div class="relative order-1 md:order-none">
                <img
                  :src="career?.image"
                  :alt="career?.title"
                  class="h-full w-full object-cover md:rounded-l-2xl"
                />
                <div
                  class="pointer-events-none absolute inset-0 md:inset-y-0 md:inset-x-auto md:w-1/6"
                ></div>
              </div>

              <!-- Text -->
              <div class="p-6 sm:p-8 lg:p-10 flex flex-col gap-5">
                <div class="inline-flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-usea_secondary"></span>
                  <span
                    class="uppercase tracking-wide text-xs sm:text-sm text-usea_secondary/80 font-semibold"
                  >
                    Student Success
                  </span>
                </div>

                <h1 class="text-2xl sm:text-3xl font-bold leading-tight">
                  {{ career?.title }}
                </h1>

                <p
                  v-if="about?.description"
                  class="text-justify text-base sm:text-lg leading-7 text-gray-700 font-noto_sans"
                >
                  {{ about.description }}
                </p>
              </div>
            </div>
          </section>

          <!-- VISION & MISSION -->
          <section
            v-if="vision"
            class="rounded-2xl bg-gradient-to-br from-[#334155] to-[#1f2937] p-6 sm:p-8 lg:p-10 shadow-md"
          >
            <div class="flex flex-col items-center text-center text-white">
              <h3 class="text-2xl sm:text-3xl font-bold leading-tight">
                {{ vision.title || "VISION & MISSION" }}
              </h3>
              <div class="h-1 w-16 sm:w-20 bg-emerald-400 mt-2 rounded"></div>
            </div>

            <div
              class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start"
            >
              <!-- Image -->
              <div class="group relative overflow-hidden rounded-xl">
                <img
                  :src="career?.image"
                  alt="Career vision"
                  class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                ></div>
              </div>

              <!-- Copy -->
              <div class="flex flex-col gap-5 text-base sm:text-lg leading-7">
                <p v-if="vision.description" class="text-white font-noto_sans">
                  {{ vision.description }}
                </p>
                <ul v-if="vision.li?.length" class="space-y-3 font-noto_sans">
                  <li
                    v-for="(item, i) in vision.li"
                    :key="i"
                    class="flex items-start gap-3 text-white/90"
                  >
                    <i class="fa-solid fa-check mt-2 text-emerald-300"></i>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- THE CAREER CENTER SERVICES -->
          <section v-if="servicesBlocks?.length" class="flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl sm:text-3xl font-bold text-usea_secondary">
                {{ servicesTitle }}
              </h3>
            </div>

            <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              <div
                v-for="(block, idx) in servicesBlocks"
                :key="idx"
                class="rounded-xl border border-gray-200 bg-white/90 p-5 shadow-sm hover:shadow-md transition"
              >
                <h4 class="font-semibold text-[#002060] mb-3">
                  {{ block.title }}
                </h4>
                <ul class="space-y-2 text-gray-700 text-[15px] leading-6">
                  <li
                    v-for="(li, i) in block.li || []"
                    :key="i"
                    class="flex gap-2"
                  >
                    <i
                      class="fa-regular fa-circle-check mt-2 text-emerald-500"
                    ></i>
                    <span>{{ li }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- RESPONSIBILITIES -->
          <section
            v-if="responsibilities?.content?.length"
            class="rounded-2xl border border-gray-200 bg-white/90 p-6 sm:p-8 shadow-sm"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-2xl sm:text-3xl font-bold text-usea_secondary">
                {{
                  responsibilities.title || "Career Center Staff Responsible"
                }}
              </h3>
            </div>

            <ul
              class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-800"
            >
              <li
                v-for="(item, i) in responsibilities.content"
                :key="i"
                class="flex gap-2"
              >
                <i class="fa-solid fa-briefcase text-[#002060] mt-2"></i>
                <span>{{ item }}</span>
              </li>
            </ul>
          </section>

          <!-- ACTIVITIES (gallery) -->
          <section
            v-if="career?.activities?.length"
            class="flex flex-col gap-6"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-2xl sm:text-3xl font-bold text-usea_secondary">
                ACTIVITIES
              </h3>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div
                v-for="(act, i) in career.activities"
                :key="i"
                class="group overflow-hidden rounded-xl bg-gray-100"
              >
                <img
                  :src="act.image"
                  alt="Career Center activity"
                  class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <!-- ===== NEWS & EVENTS (modern) ===== -->
          <section
            v-if="allNewsSorted.length || allUpcomingSorted.length"
            class="flex flex-col gap-6"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-2xl sm:text-3xl font-bold text-usea_secondary">
                NEWS & EVENTS
              </h3>

              <div class="hidden sm:flex items-center gap-2">
                <RouterLink
                  :to="{ name: 'career-news' }"
                  class="px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-200 hover:bg-gray-50"
                >
                  All News
                </RouterLink>
                <RouterLink
                  :to="{ name: 'career-events' }"
                  class="px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-200 hover:bg-gray-50"
                >
                  All Events
                </RouterLink>
              </div>
            </div>

            <!-- Featured card -->
            <article
              v-if="featured"
              class="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm group"
            >
              <img
                :src="featured.thumbnail || career?.image"
                :alt="featured.title"
                class="h-64 sm:h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
              ></div>

              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center gap-2">
                  <span
                    class="px-2 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase"
                    :class="
                      featured.type === 'event'
                        ? 'bg-emerald-400/90 text-emerald-950'
                        : 'bg-amber-300/90 text-amber-950'
                    "
                  >
                    {{ featured.typeLabel }}
                  </span>
                  <span class="text-white/80 text-xs">{{ featured.meta }}</span>
                </div>

                <RouterLink
                  :to="featured.to"
                  class="mt-2 block text-white text-2xl sm:text-3xl font-bold leading-snug hover:underline underline-offset-4 line-clamp-2"
                >
                  {{ featured.title }}
                </RouterLink>
              </div>
            </article>

            <!-- Two panels -->
            <div class="grid md:grid-cols-2 gap-5">
              <!-- Latest News -->
              <div
                class="rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm"
              >
                <div class="flex items-center justify-between mb-3">
                  <h4 class="font-semibold text-[#002060]">Latest News</h4>
                  <RouterLink
                    :to="{ name: 'career-news' }"
                    class="text-xs font-semibold text-[#002060] hover:underline"
                  >
                    View all
                  </RouterLink>
                </div>

                <div v-if="!latestFour.length" class="text-gray-500 text-sm">
                  No news at the moment.
                </div>

                <ul v-else class="divide-y divide-gray-100">
                  <li
                    v-for="n in latestFour"
                    :key="n.id"
                    class="py-3 first:pt-0 last:pb-0"
                  >
                    <RouterLink
                      :to="{ name: 'career-news-detail', params: { id: n.id } }"
                      class="grid grid-cols-[5.5rem_1fr] gap-3 items-start"
                    >
                      <img
                        :src="n.thumbnail || career?.image"
                        alt="News"
                        class="h-20 w-22 rounded-xl object-cover border"
                      />
                      <div class="min-w-0">
                        <div
                          class="font-medium text-[15px] text-[#002060] line-clamp-2"
                        >
                          {{ n.title }}
                        </div>
                        <div class="mt-1 text-xs text-gray-500">
                          {{ fmt(n.date) }}
                        </div>
                        <p class="mt-1 text-[13px] text-gray-700 line-clamp-2">
                          {{ n.description }}
                        </p>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <!-- Upcoming Events -->
              <div
                class="rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm"
              >
                <div class="flex items-center justify-between mb-3">
                  <h4 class="font-semibold text-[#002060]">Upcoming Events</h4>
                  <RouterLink
                    :to="{ name: 'career-events' }"
                    class="text-xs font-semibold text-[#002060] hover:underline"
                  >
                    View all
                  </RouterLink>
                </div>

                <div v-if="!upcomingFour.length" class="text-gray-500 text-sm">
                  No upcoming events.
                </div>

                <ul v-else class="divide-y divide-gray-100">
                  <li
                    v-for="ev in upcomingFour"
                    :key="ev.id"
                    class="py-3 first:pt-0 last:pb-0"
                  >
                    <RouterLink
                      :to="{
                        name: 'career-event-detail',
                        params: { id: ev.id },
                      }"
                      class="grid grid-cols-[5.5rem_1fr] gap-3 items-start"
                    >
                      <img
                        :src="ev.thumbnail || career?.image"
                        alt="Event"
                        class="h-20 w-22 rounded-xl object-cover border"
                      />
                      <div class="min-w-0">
                        <div
                          class="font-medium text-[15px] text-[#002060] line-clamp-2"
                        >
                          {{ ev.title }}
                        </div>
                        <div class="mt-1 text-xs text-gray-500">
                          {{ fmt(ev.date) }}
                          <template v-if="ev.time">• {{ ev.time }}</template>
                          <template v-if="ev.location">
                            • {{ ev.location }}</template
                          >
                        </div>
                        <span
                          class="inline-flex mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                          :class="eventBadge(ev.date)"
                        >
                          {{ eventBadgeText(ev.date) }}
                        </span>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <!-- ===== /NEWS & EVENTS ===== -->
        </div>
      </div>

      <!-- RIGHT (sticky on desktop) -->
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

/* Root career center node */
const career = services["career-center"];

/* Find the 'About Career Center' link block to drive all sections */
const aboutLink = career?.links?.find((l) => l.key === "career-about");

/* About intro paragraph */
const about = computed(() => ({
  description: aboutLink?.description ?? "",
}));

/* VISION & MISSION block (title, description, li[]) */
const vision = computed(() => {
  return (
    aboutLink?.content?.find((c) =>
      String(c.title || "")
        .toLowerCase()
        .includes("vision")
    ) || null
  );
});

/* THE CAREER CENTER SERVICES (cards) */
const servicesTitle = computed(() => {
  const node = aboutLink?.content?.find((c) =>
    String(c.title || "")
      .toLowerCase()
      .includes("career center services")
  );
  return node?.title || "The Career Center Services";
});
const servicesBlocks = computed(() => {
  const node = aboutLink?.content?.find((c) =>
    String(c.title || "")
      .toLowerCase()
      .includes("career center services")
  );
  return Array.isArray(node?.content) ? node.content : [];
});

/* Responsibilities list */
const responsibilities = computed(() => {
  return (
    aboutLink?.content?.find((c) =>
      String(c.title || "")
        .toLowerCase()
        .includes("staff responsible")
    ) || null
  );
});

/* ===== News & Events data (pulled from 'career-events' link) ===== */
const eventsLink =
  (career?.links || []).find(
    (l) => (l.key || "").toLowerCase() === "career-events"
  ) || {};
const allItems = Array.isArray(eventsLink.eventnewlist)
  ? eventsLink.eventnewlist
  : [];

/* helpers */
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

/* Sorted buckets */
const allNewsSorted = computed(() =>
  allItems
    .filter((i) =>
      String(i.category || "")
        .toLowerCase()
        .includes("news")
    )
    .sort((a, b) => parseDMY(b.date) - parseDMY(a.date))
);

const allUpcomingSorted = computed(() =>
  allItems
    .filter((i) => {
      const isEvent = String(i.category || "")
        .toLowerCase()
        .includes("event");
      const d = daysLeft(i.date);
      return isEvent && d !== null && d >= 0;
    })
    .sort((a, b) => parseDMY(a.date) - parseDMY(b.date))
);

/* Featured = nearest upcoming event; otherwise latest news */
const featured = computed(() => {
  const ev = allUpcomingSorted.value[0];
  if (ev) {
    return {
      ...ev,
      type: "event",
      typeLabel: "Event",
      meta: `${fmt(ev.date)}${ev.time ? " • " + ev.time : ""}`,
      to: { name: "career-event-detail", params: { id: ev.id } },
    };
  }
  const n = allNewsSorted.value[0];
  return n
    ? {
        ...n,
        type: "news",
        typeLabel: "News",
        meta: fmt(n.date),
        to: { name: "career-news-detail", params: { id: n.id } },
      }
    : null;
});

/* Panels (max 4 each) */
const latestFour = computed(() => allNewsSorted.value.slice(0, 4));
const upcomingFour = computed(() => allUpcomingSorted.value.slice(0, 4));
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
