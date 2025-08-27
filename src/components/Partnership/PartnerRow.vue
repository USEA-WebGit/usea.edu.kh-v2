<template>
  <div class="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-white">
    <img
      :src="item.logo"
      :alt="`${item.name} logo`"
      class="h-14 w-14 sm:h-16 sm:w-16 object-contain flex-shrink-0"
      loading="lazy"
    />
    <div class="flex-1 min-w-0">
      <h3 class="font-bold text-base sm:text-lg truncate">{{ item.name }}</h3>
      <p class="text-sm text-gray-600 line-clamp-2 sm:line-clamp-1">
        {{ item.title }}
      </p>
    </div>
    <!-- <div class="flex-shrink-0">
      <a
        v-if="item.website"
        :href="item.website"
        target="_blank"
        rel="noopener"
        class="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-[#002060] text-white text-sm font-medium hover:opacity-95 active:scale-[0.98] transition"
      >
        Website
      </a>
    </div> -->
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
