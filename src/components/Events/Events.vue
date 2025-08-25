<template>
  <section class="mt-10 mb-10">
    <!-- Title -->
    <div class="flex flex-col text-center items-center">
      <h2
        class="text-usea_secondary font-bold 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem]"
      >
        EVENTS
      </h2>
      <div class="h-1 w-[5%] bg-usea_secondary rounded-full"></div>
    </div>

    <!-- Tabs (single 'Upcoming' kept for now) -->
    <div class="flex justify-center mt-5">
      <div
        class="inline-flex rounded-full bg-gray-100 p-1 border border-gray-200"
      >
        <button
          class="px-4 py-1.5 rounded-full text-sm font-semibold bg-white text-red-600 border border-red-600"
        >
          Upcoming
        </button>
      </div>
    </div>

    <!-- Timeline -->
    <div class="mt-6 space-y-5">
      <router-link
        v-for="(e, idx) in eventsList"
        :key="idx"
        :to="e.to || { name: 'events-detail' }"
        class="group grid grid-cols-[6.5rem_1fr] gap-5 items-start"
      >
        <!-- Date badge -->
        <div class="w-[6.5rem] border-r-2 border-gray-300 pr-5">
          <div
            class="flex flex-col items-center justify-center rounded-xl border bg-white shadow-sm py-2"
          >
            <div class="text-xs uppercase tracking-wide text-gray-500">
              {{ e.month }}
            </div>
            <div class="text-2xl font-extrabold text-gray-800 leading-none">
              {{ e.day }}
            </div>
          </div>
        </div>

        <!-- Content card -->
        <div
          class="rounded-2xl border border-gray-200 p-4 bg-white transition group-hover:shadow-md"
        >
          <h3 class="font-semibold leading-snug hover:text-red-600">
            {{ e.title }}
          </h3>
          <div
            class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600"
          >
            <span v-if="e.time"
              ><i class="fa-solid fa-clock"></i> {{ e.time }}</span
            >
            <span v-if="e.venue"
              ><i class="fa-solid fa-location-dot"></i> {{ e.venue }}</span
            >
          </div>
          <div class="mt-3 h-1 w-20 bg-red-600 rounded"></div>
        </div>
      </router-link>
    </div>

    <!-- CTA -->
    <div class="mt-6 text-center">
      <router-link :to="{ name: 'news-events' }">
        <button
          class="bg-usea_secondary text-white px-4 py-2 rounded-md hover:bg-white hover:text-usea_secondary hover:border hover:border-usea_secondary transition"
        >
          More Events
        </button>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

// Default demo data (replace with API)
const props = defineProps({
  events: {
    type: Array,
    default: () => [
      {
        date: "2025-10-16",
        title: "Guest Lecture on AI in Education",
        time: "8:00 am",
        venue: "Meeting Hall, USEA",
        to: { name: "events-detail" },
      },
      {
        date: "2025-10-10",
        title: "Research Showcase: Data & Society",
        time: "8:00 am",
        venue: "Meeting Hall, USEA",
        to: { name: "events-detail" },
      },
      {
        date: "2025-10-25",
        title: "Student Startup Demo Day",
        time: "1:30 pm",
        venue: "Auditorium, USEA",
        to: { name: "events-detail" },
      },
      {
        date: "2025-10-21",
        title: "Faculty Seminar: Emerging Tech",
        time: "8:00 am",
        venue: "Meeting Hall, USEA",
        to: { name: "events-detail" },
      },
    ],
  },
});

const monthShort = (iso) => {
  try {
    return new Date(iso).toLocaleString(undefined, { month: "short" });
  } catch {
    return "";
  }
};
const dayNum = (iso) => {
  try {
    return new Date(iso).getDate();
  } catch {
    return "";
  }
};

const eventsList = computed(() =>
  (props.events || []).map((e) => ({
    ...e,
    month: monthShort(e.date),
    day: dayNum(e.date),
  }))
);
</script>
