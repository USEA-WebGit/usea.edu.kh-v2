<template>
  <div>
    <Titlebg title="Event Detail" breadcrumb="Event Detail" />
  </div>

  <div class="mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%]">
    <article v-if="ev" class="py-8">
      <!-- Title -->
      <header class="mb-5">
        <h1 class="text-2xl md:text-3xl font-extrabold text-usea_secondary leading-snug">
          {{ ev.title }}
        </h1>
        <div class="mt-2 text-sm text-gray-500 flex flex-wrap gap-4">
          <span><i class="fa-solid fa-calendar-days"></i> {{ formatDisplayDate(ev.date) }}</span>
          <span v-if="ev.time"><i class="fa-solid fa-clock"></i> {{ formatDisplayTime(ev.time) }}</span>
          <span v-if="ev.location"><i class="fa-solid fa-location-dot"></i> {{ ev.location }}</span>
        </div>
      </header>

      <!-- Optional hero -->
      <figure v-if="hero" class="mb-6 overflow-hidden rounded-xl border border-gray-200">
        <div class="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/7]">
          <img :src="hero" :alt="ev.title" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
      </figure>

      <!-- Body -->
      <div class="prose max-w-none prose-p:leading-relaxed prose-headings:mt-6 prose-headings:mb-3">
        <p class="text-gray-800">{{ ev.description || fallbackBody }}</p>
      </div>

      <!-- Gallery -->
      <div v-if="galleryToShow.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <img
          v-for="(g, idx) in galleryToShow"
          :key="idx"
          :src="g"
          :alt="`${ev.title} - ${idx + 1}`"
          class="w-full h-56 object-cover rounded-lg border border-gray-200"
          loading="lazy"
        />
      </div>
    </article>

    <!-- Not found -->
    <div v-else class="py-16 text-center text-gray-600">
      <p>We couldn’t find this event.</p>
      <router-link :to="{ name: 'news-events', query: { tab: 'Upcoming' } }" class="text-usea_secondary font-semibold hover:underline">
        Back to Events
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";
import { EVENTS, formatDisplayDate, formatDisplayTime } from "@/data/news-events.js";

/* Fallback gallery (sample images) */
import g0 from "@/assets/images/news1.jpg";
import g1 from "@/assets/images/news5.jpg";
import g2 from "@/assets/images/news6.jpg";
import g3 from "@/assets/images/news7.jpg";

const route = useRoute();

/* Prefer RouterLink state; fallback to ?id=; final fallback to first item */
const stateItem = history.state && history.state.item ? history.state.item : null;
const byQuery = route.query.id ? EVENTS.find((e) => String(e.id) === String(route.query.id)) : null;
const ev = ref(stateItem || byQuery || EVENTS[0] || null);

const hero = computed(() => ev.value?.image || ev.value?.thumbnail || null);
const galleryToShow = computed(() =>
  Array.isArray(ev.value?.gallery) && ev.value.gallery.length ? ev.value.gallery : [g0, g1, g2, g3]
);

const fallbackBody = "Details coming soon. Please check back shortly for the full program and photos.";

onMounted(() => {
  if (ev.value?.title) document.title = `${ev.value.title} - USEA`;
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>
