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
            ><i class="fa-solid fa-calendar-days"></i> {{ article.date }}</span
          >
          <span v-if="article.time"
            ><i class="fa-solid fa-clock"></i> {{ article.time }}</span
          >
          <span v-if="article.venue"
            ><i class="fa-solid fa-location-dot"></i> {{ article.venue }}</span
          >
        </div>
      </header>

      <!-- Hero (responsive aspect ratios to avoid layout shift) -->
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
        <p class="text-gray-800">
          {{ article.body || fallbackBody }}
        </p>
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
        :to="{ name: 'news-events' }"
        class="text-usea_secondary font-semibold hover:underline"
      >
        Back to News
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";

const STORAGE_KEY = "latestNewsItems";
const route = useRoute();
const slug = computed(() => route.params.slug);

/* Load list from sessionStorage (seeded by LatestNews.vue).
   Also accept history.state.article if you decide to pass it via <router-link :state="{ article }"> */
const list = ref([]);

const loadList = () => {
  try {
    list.value = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    list.value = [];
  }
};

onMounted(() => {
  loadList();

  // If router state has an article, merge it to list so direct nav also works
  const stateArticle = history.state && history.state.article;
  if (stateArticle && !list.value.find((i) => i.slug === stateArticle.slug)) {
    list.value.push(stateArticle);
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(list.value));
    } catch {}
  }

  // Set page title
  if (article.value?.title) {
    document.title = `${article.value.title} - USEA`;
  }
  // Scroll to top on open
  window.scrollTo({ top: 0, behavior: "smooth" });
});

watch(slug, () => {
  // If navigating between details without full reload
  if (article.value?.title) {
    document.title = `${article.value.title} - USEA`;
  }
});

const article = computed(() => list.value.find((i) => i.slug === slug.value));

const fallbackBody =
  "Details coming soon. Please check back shortly for the full story and photos.";
</script>
