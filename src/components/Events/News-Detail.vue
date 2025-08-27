<template>
  <div>
    <Titlebg title="News Detail" breadcrumb="News Detail" />
  </div>

  <div
    class="mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%]"
  >
    <article v-if="article" class="py-8">
      <!-- Title -->
      <header class="mb-5">
        <h1
          class="text-2xl md:text-3xl font-extrabold text-usea_secondary leading-snug"
        >
          {{ article.title }}
        </h1>
        <div class="mt-2 text-sm text-gray-500 flex flex-wrap gap-4">
          <span
            ><i class="fa-solid fa-calendar-days"></i>
            {{ article.displayDate }}</span
          >
          <span v-if="article.displayTime"
            ><i class="fa-solid fa-clock"></i> {{ article.displayTime }}</span
          >
          <span v-if="article.venue"
            ><i class="fa-solid fa-location-dot"></i> {{ article.venue }}</span
          >
        </div>
      </header>

      <!-- Hero -->
      <figure
        v-if="article.img"
        class="mb-6 overflow-hidden rounded-xl border border-gray-200"
      >
        <div
          class="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/7]"
        >
          <img
            :src="article.img"
            :alt="article.title"
            class="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </figure>

      <!-- Content -->
      <div
        class="prose max-w-none prose-p:leading-relaxed prose-headings:mt-6 prose-headings:mb-3"
      >
        <p v-if="article.excerpt" class="text-gray-800 mb-4">
          {{ article.excerpt }}
        </p>
        <p class="text-gray-800">{{ article.body || fallbackBody }}</p>
      </div>

      <!-- Optional gallery -->
      <div
        v-if="article.gallery?.length"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
      >
        <img
          v-for="(g, idx) in article.gallery"
          :key="idx"
          :src="g"
          :alt="`${article.title} - ${idx + 1}`"
          class="w-full h-56 object-cover rounded-lg border border-gray-200"
          loading="lazy"
        />
      </div>
    </article>

    <!-- Not found -->
    <div v-else class="py-16 text-center text-gray-600">
      <p>We couldn’t find this news item.</p>
      <router-link
        :to="{ name: 'news-events', query: { tab: 'News' } }"
        class="text-usea_secondary font-semibold hover:underline"
      >
        Back to News
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";
import {
  NEWS,
  formatDisplayDate,
  formatDisplayTime,
} from "@/data/news-events.js";

const route = useRoute();
const slug = computed(() => String(route.params.slug || ""));

/* Prefer router state (if provided), else look up by id (slug) in NEWS */
const raw = computed(() => {
  const fromState = history.state && history.state.item;
  if (fromState && (!slug.value || fromState.id === slug.value))
    return fromState;
  return NEWS.find((n) => n.id === slug.value) || null;
});

const article = computed(() => {
  if (!raw.value) return null;
  return {
    title: raw.value.title,
    img: raw.value.image,
    displayDate: formatDisplayDate(raw.value.date),
    displayTime: raw.value.time ? formatDisplayTime(raw.value.time) : "",
    venue: raw.value.location || "",
    excerpt: raw.value.description,
    body: raw.value.body || "",
    gallery: raw.value.gallery || [],
  };
});

onMounted(() => {
  if (article.value?.title) document.title = `${article.value.title} - USEA`;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const fallbackBody =
  "Details coming soon. Please check back shortly for the full story and photos.";
</script>
