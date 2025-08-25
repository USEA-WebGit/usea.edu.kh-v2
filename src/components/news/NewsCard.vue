<template>
  <div
    class="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition hover:shadow-md"
  >
    <!-- Image -->
    <div class="overflow-hidden">
      <img
        :src="item.image"
        :alt="item.title"
        class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <!-- Badge -->
    <div class="absolute top-3 left-3">
      <span
        class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white"
        :class="badgeClass"
      >
        {{ item.type }}
      </span>
    </div>

    <!-- Body -->
    <div class="p-5 flex flex-col gap-3">
      <h3 class="font-bold text-lg leading-tight line-clamp-2">
        {{ item.title }}
      </h3>

      <div
        class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600"
      >
        <span class="inline-flex items-center gap-2">
          <i class="fa-regular fa-calendar"></i>{{ item.date }}
        </span>
        <span
          v-if="item.time && item.time !== '—'"
          class="inline-flex items-center gap-2"
        >
          <i class="fa-regular fa-clock"></i>{{ item.time }}
        </span>
      </div>

      <p class="text-gray-600 text-sm line-clamp-3">
        {{ item.excerpt }}
      </p>

      <div class="mt-2">
        <router-link
          v-if="item.to"
          :to="item.to"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white font-semibold text-sm hover:opacity-95 active:scale-[0.98] transition"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
            <path d="M5 5h5V3H3v7h2V5z" />
            <path d="M19 19H5V9H3v12h16v-2z" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"; // <-- add this

const props = defineProps({
  item: {
    type: Object,
    required: true,
    // expected: { id, type, title, date, time, image, excerpt, to? }
  },
});

const badgeClass = computed(() => {
  switch (props.item?.type) {
    case "News":
      return "bg-red-600";
    case "Events":
      return "bg-blue-600";
    case "Upcoming":
      return "bg-emerald-600";
    default:
      return "bg-gray-700";
  }
});
</script>

<style scoped>
.line-clamp-2,
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-2 {
  -webkit-line-clamp: 2;
}
.line-clamp-3 {
  -webkit-line-clamp: 3;
}
</style>
