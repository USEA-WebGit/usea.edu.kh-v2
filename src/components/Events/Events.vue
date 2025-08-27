<template>
  <section class="mt-10 mb-10">
    <div class="flex flex-col text-center items-center">
      <h2 class="text-usea_secondary font-bold 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem]">
        EVENTS
      </h2>
      <div class="h-1 w-[5%] bg-usea_secondary rounded-full"></div>
    </div>

    <div class="flex justify-center mt-5">
      <div class="inline-flex rounded-full bg-gray-100 p-1 border border-gray-200">
        <button class="px-4 py-1.5 rounded-full text-sm font-semibold bg-white text-red-600 border border-red-600">
          Upcoming
        </button>
      </div>
    </div>

    <div class="mt-6 space-y-5">
      <router-link
        v-for="(e, idx) in eventsList"
        :key="idx"
        :to="routeFor(e)"
        class="group grid grid-cols-[6.5rem_1fr] gap-5 items-start"
      >
        <div class="w-[6.5rem] border-r-2 border-gray-300 pr-5">
          <div class="flex flex-col items-center justify-center rounded-xl border bg-white shadow-sm py-2">
            <div class="text-xs uppercase tracking-wide text-gray-500">{{ e.month }}</div>
            <div class="text-2xl font-extrabold text-gray-800 leading-none">{{ e.day }}</div>
          </div>
        </div>

        <div class="rounded-2xl border border-gray-200 p-4 bg-white transition group-hover:shadow-md">
          <h3 class="font-semibold leading-snug hover:text-red-600">{{ e.title }}</h3>
          <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
            <span v-if="e.time"><i class="fa-solid fa-clock"></i> {{ e.time }}</span>
            <span v-if="e.venue"><i class="fa-solid fa-location-dot"></i> {{ e.venue }}</span>
          </div>
          <div class="mt-3 h-1 w-20 bg-red-600 rounded"></div>
        </div>
      </router-link>

      <div v-if="!eventsList.length" class="text-center text-gray-500 py-10">
        No upcoming events at the moment.
      </div>
    </div>

    <div class="mt-6 text-center">
      <router-link :to="{ name: 'news-events', query: { tab: 'Upcoming' } }">
        <button class="bg-usea_secondary text-white px-4 py-2 rounded-md hover:bg-white hover:text-usea_secondary hover:border hover:border-usea_secondary transition">
          More Events
        </button>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { upcomingEventsSorted, monthAbbrev, dayOfMonth, formatDisplayTime } from "@/data/news-events.js";

const props = defineProps({ limit: { type: Number, default: 4 } });

const upcoming = computed(() => upcomingEventsSorted(props.limit));

const eventsList = computed(() =>
  upcoming.value.map((ev) => ({
    id: ev.id,
    title: ev.title,
    month: monthAbbrev(ev.date),
    day: dayOfMonth(ev.date),
    time: ev.time ? formatDisplayTime(ev.time) : "",
    venue: ev.location || "",
    to: { name: "events-detail", query: { id: String(ev.id) }, state: { item: ev } }, // 👈 pass string id + state
  }))
);

function routeFor(e) {
  return e.to || { name: "events-detail", query: { id: String(e.id) }, state: { item: e } };
}
</script>
