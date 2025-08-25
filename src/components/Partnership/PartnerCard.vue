<template>
  <div class="group h-full">
    <div
      class="h-full flex flex-col rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white transition hover:shadow-md"
    >
      <div class="p-6 flex flex-col items-center text-center gap-4">
        <img
          :src="item.logo"
          :alt="`${item.name} logo`"
          class="h-16 object-contain"
          loading="lazy"
        />
        <div class="space-y-1">
          <h3 class="font-bold text-lg">{{ item.name }}</h3>
          <p class="text-sm text-gray-600 line-clamp-3">
            {{ item.title }}
          </p>
        </div>
        <a
          v-if="item.website"
          :href="item.website"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#002060] text-white text-sm font-medium hover:opacity-95 active:scale-[0.98] transition"
        >
          Visit Website
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
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
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
