<template>
  <section class="text-center mt-10 mb-10">
    <!-- Title -->
    <div class="flex flex-col mb-8 items-center">
      <h2
        class="text-usea_secondary font-bold 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem]"
      >
        LATEST NEWS
      </h2>
      <div class="h-1 w-[5%] bg-usea_secondary rounded-full"></div>
    </div>

    <!-- Grid -->
    <div class="grid gap-6 grid-cols-1 lg:grid-cols-2 text-left">
      <!-- Featured -->
      <router-link
        v-if="featured"
        :to="{ name: 'news-detail', params: { slug: featured.slug } }"
        class="relative group overflow-hidden rounded-2xl min-h-[320px] bg-gray-100"
      >
        <img
          :src="featured.img"
          :alt="featured.title"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
        ></div>

        <div
          class="relative z-10 p-5 sm:p-6 md:p-7 mt-auto text-white flex flex-col justify-end h-full"
        >
          <div
            class="inline-flex items-center gap-2 text-xs font-semibold mb-2"
          >
            <span class="px-2 py-0.5 rounded-full bg-red-600">News</span>
            <span class="opacity-90">
              <i class="fa-solid fa-calendar-days"></i> {{ featured.date }}
            </span>
            <span class="opacity-90" v-if="featured.time">
              <i class="fa-solid fa-clock"></i> {{ featured.time }}
            </span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold leading-snug line-clamp-3">
            {{ featured.title }}
          </h3>
          <p class="mt-2 text-white/90 line-clamp-2" v-if="featured.venue">
            <i class="fa-solid fa-location-dot"></i> {{ featured.venue }}
          </p>
        </div>
      </router-link>

      <!-- List of 3 secondary cards -->
      <div class="grid gap-6">
        <router-link
          v-for="(n, i) in secondary"
          :key="i"
          :to="{ name: 'news-detail', params: { slug: n.slug } }"
          class="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition bg-white"
        >
          <div class="grid grid-cols-[40%_60%] sm:grid-cols-[35%_65%]">
            <div class="relative overflow-hidden">
              <img
                :src="n.img"
                :alt="n.title"
                class="w-full h-full object-cover min-h-[140px] transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div class="p-4 flex flex-col">
              <div class="text-xs text-red-600 font-semibold mb-1">
                <i class="fa-solid fa-calendar-days"></i> {{ n.date }}
                <span v-if="n.time" class="text-gray-500 ml-2">
                  <i class="fa-solid fa-clock"></i> {{ n.time }}
                </span>
              </div>
              <h4
                class="font-semibold leading-snug line-clamp-2 hover:text-red-600"
              >
                {{ n.title }}
              </h4>
              <div
                class="mt-auto pt-3 text-sm text-gray-500 line-clamp-1"
                v-if="n.venue"
              >
                <i class="fa-solid fa-location-dot"></i> {{ n.venue }}
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- CTA -->
    <router-link :to="{ name: 'news-events' }">
      <button
        class="mt-6 inline-flex items-center gap-2 bg-usea_secondary text-white px-4 py-2 rounded-md hover:bg-white hover:text-usea_secondary hover:border hover:border-usea_secondary transition"
      >
        More News
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </router-link>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";

/* Demo images (replace with API data as needed) */
import news1 from "@/assets/images/news1.jpg";
import news2 from "@/assets/images/news2.jpg";
import news3 from "@/assets/images/news3.jpg";
import news4 from "@/assets/images/news4.jpg";

const STORAGE_KEY = "latestNewsItems";

/* Props: allow passing news from parent; otherwise use fallback */
const props = defineProps({
  news: {
    type: Array,
    default: () => [
      {
        img: news1,
        title:
          "Congratulations to the 3 winners of the 2025 Public English Speaking Competition for High School Students.",
        date: "August 16, 2025",
        time: "8:00",
        venue: "Meeting Hall, USEA",
      },
      {
        img: news2,
        title:
          "USEA-Unipreneur BMC 2025 finals supported by Khmer Entrepreneurs (KE).",
        date: "August 11, 2025",
        time: "8:00",
        venue: "Meeting Hall, USEA",
      },
      {
        img: news3,
        title:
          "Top 3 startup teams awarded ~8,400,000 riels at Final Pitching (USEA-Unipreneur BMC 2025).",
        date: "August 09, 2025",
        time: "5:00",
        venue: "Meeting Hall, USEA",
      },
      {
        img: news4,
        title:
          'Seminar on "Sustainable & Eco-Tourism" with Boule Du Bruel School of Hotel and Tourism.',
        date: "August 04, 2025",
        time: "8:00",
        venue: "Meeting Hall, USEA",
      },
    ],
  },
});

/* Helpers */
const slugify = (s) =>
  s
    ?.toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "") || "";

/* Normalize: add id + slug so detail page can resolve item */
const items = computed(() =>
  (props.news || []).map((n, idx) => ({
    id: n.id ?? idx + 1,
    slug: n.slug ?? slugify(n.title || `news-${idx + 1}`),
    ...n,
  }))
);

const featured = computed(() => items.value[0] || null);
const secondary = computed(() => items.value.slice(1, 4));

/* Save to sessionStorage so News-Detail.vue can read after navigation/refresh */
onMounted(() => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
  } catch {}
});
</script>

<style scoped>
.line-clamp-2,
.line-clamp-3,
.line-clamp-1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-1 {
  -webkit-line-clamp: 1;
}
.line-clamp-2 {
  -webkit-line-clamp: 2;
}
.line-clamp-3 {
  -webkit-line-clamp: 3;
}
</style>
