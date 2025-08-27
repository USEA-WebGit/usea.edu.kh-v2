<template>
  <section class="text-center mt-10 mb-10">
    <div class="flex flex-col mb-8 items-center">
      <h2 class="text-usea_secondary font-bold 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem]">
        LATEST NEWS
      </h2>
      <div class="h-1 w-[5%] bg-usea_secondary rounded-full"></div>
    </div>

    <div class="grid gap-6 grid-cols-1 lg:grid-cols-2 text-left">
      <!-- Featured -->
      <router-link
        v-if="featured"
        :to="{ name: 'news-detail', params: { slug: featured.slug }, state: { item: featured._raw } }"
        class="relative group overflow-hidden rounded-2xl min-h-[320px] bg-gray-100"
      >
        <img :src="featured.img" :alt="featured.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div class="relative z-10 p-5 sm:p-6 md:p-7 mt-auto text-white flex flex-col justify-end h-full">
          <div class="inline-flex items-center gap-2 text-xs font-semibold mb-2">
            <span class="px-2 py-0.5 rounded-full bg-red-600">News</span>
            <span class="opacity-90"><i class="fa-solid fa-calendar-days"></i> {{ featured.date }}</span>
            <span class="opacity-90" v-if="featured.time"><i class="fa-solid fa-clock"></i> {{ featured.time }}</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold leading-snug line-clamp-3">{{ featured.title }}</h3>
          <p class="mt-2 text-white/90 line-clamp-2" v-if="featured.venue"><i class="fa-solid fa-location-dot"></i> {{ featured.venue }}</p>
        </div>
      </router-link>

      <!-- Secondary (3) -->
      <div class="grid gap-6">
        <router-link
          v-for="(n, i) in secondary"
          :key="i"
          :to="{ name: 'news-detail', params: { slug: n.slug }, state: { item: n._raw } }"
          class="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition bg-white"
        >
          <div class="grid grid-cols-[40%_60%] sm:grid-cols-[35%_65%]">
            <div class="relative overflow-hidden">
              <img :src="n.img" :alt="n.title" class="w-full h-full object-cover min-h-[140px] transition-transform duration-500 hover:scale-105" loading="lazy" />
            </div>
            <div class="p-4 flex flex-col">
              <div class="text-xs text-red-600 font-semibold mb-1">
                <i class="fa-solid fa-calendar-days"></i> {{ n.date }}
                <span v-if="n.time" class="text-gray-500 ml-2"><i class="fa-solid fa-clock"></i> {{ n.time }}</span>
              </div>
              <h4 class="font-semibold leading-snug line-clamp-2 hover:text-red-600">{{ n.title }}</h4>
              <div class="mt-auto pt-3 text-sm text-gray-500 line-clamp-1" v-if="n.venue">
                <i class="fa-solid fa-location-dot"></i> {{ n.venue }}
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <router-link :to="{ name: 'news-events', query: { tab: 'News' } }">
      <button class="mt-6 inline-flex items-center gap-2 bg-usea_secondary text-white px-4 py-2 rounded-md hover:bg-white hover:text-usea_secondary hover:border hover:border-usea_secondary transition">
        More News
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </router-link>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { latestNewsSorted, formatDisplayDate, formatDisplayTime } from "@/data/news-events.js";

const STORAGE_KEY = "latestNewsItems";

const items = computed(() =>
  latestNewsSorted().map((n) => ({
    _raw: n, // keep full item for router state
    id: n.id,
    slug: String(n.id),          // 👈 slug must be a string
    img: n.image,                // normalized by data file
    title: n.title,
    date: formatDisplayDate(n.date),
    time: n.time ? formatDisplayTime(n.time) : "",
    venue: n.location || "",
    excerpt: n.description || "",
  }))
);

const featured = computed(() => items.value[0] || null);
const secondary = computed(() => items.value.slice(1, 4));

onMounted(() => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
  } catch {}
});
</script>

<style scoped>
.line-clamp-1,
.line-clamp-2,
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-1 { -webkit-line-clamp: 1; }
.line-clamp-2 { -webkit-line-clamp: 2; }
.line-clamp-3 { -webkit-line-clamp: 3; }
</style>
