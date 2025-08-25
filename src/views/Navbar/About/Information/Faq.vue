<template>
  <div>
    <Titlebg title="FAQ" breadcrumb="FAQ" />
  </div>

  <div
    class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] gap-10"
  >
    <!-- Left -->
    <div class="w-full">
      <!-- Controls -->
      <div
        class="sticky top-20 z-10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 rounded-2xl border border-gray-200 p-4 mb-6"
      >
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <!-- Search -->
          <div class="relative flex-1">
            <input
              v-model="query"
              type="text"
              placeholder="Search FAQs (e.g., scholarship, admission, program)…"
              class="w-full rounded-xl border border-gray-200 px-4 py-3 pl-10 outline-none focus:ring-2 focus:ring-[#002060] focus:border-transparent"
              aria-label="Search FAQs"
            />
            <svg
              class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M15.5 14h-.79l-.28-.27a6.47 6.47 0 001.57-4.23 6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM6 9.5C6 7.02 8.02 5 10.5 5S15 7.02 15 9.5 12.98 14 10.5 14 6 11.98 6 9.5z"
              />
            </svg>
          </div>

          <!-- Expand / Collapse -->
          <div class="flex items-center gap-2">
            <button
              @click="expandAll"
              class="px-3 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50"
            >
              Expand all
            </button>
            <button
              @click="collapseAll"
              class="px-3 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50"
            >
              Collapse all
            </button>
          </div>
        </div>

        <!-- Categories -->
        <div class="mt-3 flex flex-wrap gap-2">
          <button
            v-for="c in ['All', ...categories]"
            :key="c"
            @click="activeCategory = c"
            class="px-3 py-1.5 rounded-full text-sm border transition"
            :class="
              activeCategory === c
                ? 'bg-[#002060] text-white border-[#002060]'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            "
          >
            {{ c }}
          </button>
        </div>
      </div>

      <!-- List -->
      <div
        class="mx-auto w-full max-w-2xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white overflow-hidden"
      >
        <div v-for="(item, i) in visibleItems" :key="item.slug" class="p-4">
          <!-- Header -->
          <button
            type="button"
            class="w-full flex items-start justify-between text-left group"
            @click="toggle(i)"
            @keydown.enter.prevent="toggle(i)"
            @keydown.space.prevent="toggle(i)"
            :aria-expanded="isOpen(i)"
            :aria-controls="'acc-panel-' + i"
            :id="'acc-button-' + i"
          >
            <div class="flex flex-col">
              <span
                class="text-base sm:text-lg font-semibold leading-snug"
                v-html="highlight(item.title)"
              ></span>
              <span
                class="mt-1 inline-flex items-center gap-2 text-xs text-gray-500"
              >
                <span
                  class="inline-flex items-center rounded-full px-2 py-0.5 border border-gray-200 bg-gray-50"
                >
                  {{ item.category }}
                </span>
                <span>Updated {{ formatDate(item.updatedAt) }}</span>
              </span>
            </div>
            <svg
              class="ml-4 size-5 shrink-0 text-gray-500 transition-transform group-hover:text-[#002060]"
              :class="isOpen(i) ? 'rotate-180' : ''"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!-- Panel -->
          <div
            :id="'acc-panel-' + i"
            role="region"
            :aria-labelledby="'acc-button-' + i"
            class="mt-3 overflow-hidden transition-[max-height] duration-300 ease-in-out"
            :class="isOpen(i) ? 'max-h-[600px]' : 'max-h-0'"
          >
            <p
              class="text-gray-600 pb-4 pr-1"
              v-html="highlight(item.content)"
            ></p>

            <div class="flex items-center gap-3 pt-2">
              <!-- Only render the link if it resolves to a real route -->
              <router-link
                v-if="item.link && isValidLink(item.link)"
                :to="item.link"
                class="text-sm font-semibold text-[#002060] hover:underline"
              >
                Learn more
              </router-link>

              <button
                class="text-sm text-gray-500 hover:text-[#002060]"
                @click="copyLink(item.slug)"
                title="Copy link to this question"
              >
                Copy link
              </button>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div
          v-if="visibleItems.length === 0"
          class="p-10 text-center text-gray-500"
          aria-live="polite"
        >
          No results. Try a different keyword or category.
        </div>
      </div>
    </div>

    <!-- Right -->
    <div>
      <RightNav />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightNav from "@/components/SideBar/Right-Nav.vue";

/** Demo data — swap to your API later */
const faqs = [
  {
    title: "What is USEA?",
    content:
      "The University of South-East Asia (USEA) is a higher education institution in Siem Reap, Cambodia.",
    category: "General",
    updatedAt: "2024-12-20",
    slug: "what-is-usea",
  },
  {
    title: "Admissions & Requirements",
    content:
      "You need a high school certificate, application form, and to pass the entrance exam. Additional documents may apply.",
    category: "Admissions",
    updatedAt: "2025-01-15",
    slug: "admissions-and-requirements",
    // Adjust this to an existing route name/path in your app, or keep and it will be auto-hidden if not found
    link: { name: "admissions" }, // e.g., { path: '/admissions' }
  },
  {
    title: "Scholarships",
    content:
      "We offer merit-based and need-based scholarships. Eligibility depends on academic performance and financial need.",
    category: "Scholarship",
    updatedAt: "2025-02-01",
    slug: "scholarships",
  },
  {
    title: "Programs & Majors",
    content:
      "We provide undergraduate and graduate programs across multiple faculties including Economics, Technology, Law, and more.",
    category: "Programs",
    updatedAt: "2025-03-05",
    slug: "programs-and-majors",
  },
];

/* State */
const items = ref(faqs);
const query = ref("");
const activeCategory = ref("All");
const openIndexSet = ref(new Set()); // allow multi-open

/* Derived */
const categories = computed(() => {
  const set = new Set(items.value.map((i) => i.category));
  return [...set];
});

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  return items.value.filter((i) => {
    const inCategory =
      activeCategory.value === "All" || i.category === activeCategory.value;
    if (!q) return inCategory;
    return (
      inCategory &&
      (i.title.toLowerCase().includes(q) || i.content.toLowerCase().includes(q))
    );
  });
});

const visibleItems = computed(() => filtered.value);

/* Actions */
const toggle = (i) => {
  if (openIndexSet.value.has(i)) openIndexSet.value.delete(i);
  else openIndexSet.value.add(i);
  // force reactivity
  openIndexSet.value = new Set(openIndexSet.value);
};
const isOpen = (i) => openIndexSet.value.has(i);

const expandAll = () => {
  openIndexSet.value = new Set(visibleItems.value.map((_, i) => i));
};
const collapseAll = () => {
  openIndexSet.value = new Set();
};

/* Utils */
const highlight = (text) => {
  const q = query.value.trim();
  if (!q) return text;
  const esc = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(esc, "gi");
  return text.replace(
    re,
    (m) => `<mark class="bg-yellow-200 rounded px-1">${m}</mark>`
  );
};
const formatDate = (iso) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
};

/* Deep link: open item if URL has #slug */
const route = useRoute();
const router = useRouter();

const openBySlug = (slug) => {
  const idx = visibleItems.value.findIndex((i) => i.slug === slug);
  if (idx >= 0) {
    openIndexSet.value.add(idx);
    // scroll into view
    setTimeout(() => {
      const el = document.getElementById(`acc-button-${idx}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
};

onMounted(() => {
  const hash = route.hash?.replace("#", "");
  if (hash) openBySlug(hash);
});

watch([query, activeCategory], () => {
  // Re-open the hashed item after filters change
  const hash = route.hash?.replace("#", "");
  if (hash) openBySlug(hash);
});

/* Router-link guard: only show "Learn more" if it resolves */
const isValidLink = (to) => {
  try {
    const res = router.resolve(to);
    return res.matched.length > 0;
  } catch {
    return false;
  }
};

/* Copy permalink to clipboard */
const copyLink = async (slug) => {
  const base = window.location.href.split("#")[0];
  const url = `${base}#${slug}`;
  try {
    await navigator.clipboard.writeText(url);
  } catch {}
};
</script>

<style scoped>
/* smooth accordion */
.transition-[max-height] {
  transition-property: max-height;
}
.size-5 {
  width: 1.25rem;
  height: 1.25rem;
}
mark {
  color: inherit;
}
</style>
