<template>
  <div>
    <Titlebg title="Research" breadcrumb="Research" />
  </div>

  <!-- Full-width content (no sidebar) -->
  <div class="mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] mb-10">

    <!-- Back button -->
    <div class="mt-6">
      <button
        @click="goBack"
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-sm font-semibold"
      >
        <i class="fa-solid fa-arrow-left"></i>
        Back
      </button>
    </div>

    <!-- Tabs + quick stats -->
    <div class="mt-6 flex flex-col gap-4">
      <!-- Tabs -->
      <div class="flex justify-center">
        <div class="flex flex-wrap gap-2 sm:gap-3 bg-white/80 border border-gray-200 rounded-full p-1.5 shadow-sm">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="switchTab(tab)"
            class="px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300"
            :class="activeTab === tab ? 'bg-[#002060] text-white' : 'bg-transparent text-gray-700 hover:bg-gray-50'"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div class="rounded-xl border border-gray-200 bg-white/90 p-4 text-center">
          <div class="text-xs text-gray-500">Total Projects</div>
          <div class="text-2xl font-extrabold text-[#002060]">{{ stats.total }}</div>
        </div>
        <div class="rounded-xl border border-gray-200 bg-white/90 p-4 text-center">
          <div class="text-xs text-gray-500">Ongoing</div>
          <div class="text-2xl font-extrabold text-emerald-600">{{ stats.ongoing }}</div>
        </div>
        <div class="rounded-xl border border-gray-200 bg-white/90 p-4 text-center">
          <div class="text-xs text-gray-500">Completed</div>
          <div class="text-2xl font-extrabold text-amber-600">{{ stats.completed }}</div>
        </div>
        <div class="rounded-xl border border-gray-200 bg-white/90 p-4 text-center">
          <div class="text-xs text-gray-500">Partners</div>
          <div class="text-2xl font-extrabold text-[#002060]">{{ stats.partners }}</div>
        </div>
      </div>
    </div>

    <!-- Featured -->
    <article v-if="featured" class="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm group mt-6">
      <div class="h-56 sm:h-72 w-full">
        <template v-if="featured.thumbnail">
          <img
            :src="featured.thumbnail"
            :alt="featured.title"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </template>
        <template v-else>
          <div class="h-full w-full bg-gradient-to-br from-slate-200 to-slate-300"></div>
        </template>
      </div>

      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <div class="absolute left-4 right-4 bottom-4">
        <div class="flex items-center gap-2">
          <span
            class="px-2 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase"
            :class="featured.status === 'ongoing' ? 'bg-emerald-400/90 text-emerald-950' : 'bg-amber-300/90 text-amber-950'"
          >
            {{ featured.status === 'ongoing' ? 'Ongoing' : 'Completed' }}
          </span>
          <span class="text-white/80 text-xs">{{ dateRange(featured) }}</span>
          <span class="text-white/80 text-xs" v-if="featured.region">• {{ featured.region }}</span>
        </div>

        <div class="mt-2 text-white text-xl sm:text-2xl font-bold leading-snug line-clamp-2">
          {{ featured.title }}
        </div>

        <div class="mt-1 text-white/90 text-sm line-clamp-2">
          Partners: {{ featured.partners.join(', ') }}
        </div>
      </div>
    </article>

    <!-- Filters -->
    <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Search -->
      <div class="col-span-1">
        <div class="flex items-center gap-2 rounded-xl border border-gray-200 bg-white/90 px-3 py-2">
          <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
          <input
            v-model.trim="query"
            type="text"
            placeholder="Search project title, partner…"
            class="w-full bg-transparent outline-none text-sm"
          />
          <button
            v-if="query"
            @click="query=''"
            class="text-xs text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>
        </div>
      </div>

      <!-- Partner (options depend on current tab) -->
      <div class="col-span-1">
        <div class="rounded-xl border border-gray-200 bg-white/90 px-3 py-2">
          <label class="text-xs text-gray-500">Partner</label>
          <select v-model="partner" class="w-full bg-transparent outline-none text-sm">
            <option value="">All partners</option>
            <option v-for="p in partnersOptions" :key="p" :value="p">{{ p }}</option>
          </select>
        </div>
      </div>

      <!-- Region + Year -->
      <div class="col-span-1 grid grid-cols-2 gap-3">
        <div class="rounded-xl border border-gray-200 bg-white/90 px-3 py-2">
          <label class="text-xs text-gray-500">Region</label>
          <select v-model="region" class="w-full bg-transparent outline-none text-sm">
            <option value="">All</option>
            <option value="International">International</option>
            <option value="Local">Local</option>
          </select>
        </div>
        <div class="rounded-xl border border-gray-200 bg-white/90 px-3 py-2">
          <label class="text-xs text-gray-500">Year</label>
          <select v-model="year" class="w-full bg-transparent outline-none text-sm">
            <option value="">All years</option>
            <option v-for="y in yearOptions" :key="y" :value="String(y)">{{ y }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Results header -->
    <div class="mt-4 flex items-center justify-between text-sm text-gray-600">
      <div>
        Showing <span class="font-semibold">{{ shown }}</span> of
        <span class="font-semibold">{{ filtered.length }}</span> project<span v-if="filtered.length !== 1">s</span>
      </div>
      <button
        v-if="hasActiveFilters"
        @click="resetFilters"
        class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
      >
        <i class="fa-regular fa-circle-xmark"></i> Reset filters
      </button>
    </div>

    <!-- Cards grid -->
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
      <div
        v-for="item in visible"
        :key="item.id"
        class="group bg-white/90 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
      >
        <!-- Thumb -->
        <div class="relative aspect-[16/9] w-full">
          <template v-if="item.thumbnail">
            <img :src="item.thumbnail" :alt="item.title" class="h-full w-full object-cover" />
          </template>
          <template v-else>
            <div class="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200"></div>
          </template>

          <!-- Status badge -->
          <div class="absolute left-3 top-3">
            <span
              class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
              :class="item.status === 'ongoing' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-amber-100 text-amber-700 border border-amber-200'"
            >
              {{ item.status === 'ongoing' ? 'Ongoing' : 'Completed' }}
            </span>
          </div>
        </div>

        <!-- Body -->
        <div class="p-5 flex flex-col gap-2">
          <h3 class="font-bold text-[#002060] leading-snug line-clamp-2">
            {{ item.title }}
          </h3>

          <div class="text-xs text-gray-500">
            {{ dateRange(item) }}
            <span v-if="item.region"> • {{ item.region }}</span>
          </div>

          <p v-if="item.summary" class="text-gray-700 text-sm line-clamp-3">
            {{ item.summary }}
          </p>

          <!-- Meta -->
          <div class="mt-2 grid grid-cols-2 gap-2 text-[13px] text-gray-700">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-user-tie text-[#002060]"></i>
              <span class="truncate"><b>Role:</b> {{ item.role }}</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-hand-holding-dollar text-[#002060]"></i>
              <span class="truncate"><b>Funding:</b> {{ item.funding }}</span>
            </div>
          </div>

          <!-- Partners chips -->
          <div class="mt-2 flex flex-wrap gap-2">
            <span
              v-for="(p, i) in item.partners"
              :key="i"
              class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px]"
            >
              <i class="fa-solid fa-building text-[#002060]"></i>
              {{ p }}
            </span>
          </div>

          <!-- Actions -->
          <div class="mt-3 flex items-center justify-between">
            <a
              v-if="item.website"
              :href="item.website"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
            >
              Website <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <span v-else class="text-xs text-gray-400 italic">No website</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Load more -->
    <div v-if="visible.length < filtered.length" class="mt-6 flex justify-center">
      <button
        @click="loadMore"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
      >
        Load more
        <i class="fa-solid fa-chevron-down"></i>
      </button>
    </div>

    <!-- Empty -->
    <div v-if="!filtered.length" class="py-16 text-center text-gray-500">
      No projects found.
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";

/* Demo thumbnails (reuse existing assets) */
import img1 from "@/assets/images/news1.jpg";
import img2 from "@/assets/images/news2.jpg";
import img3 from "@/assets/images/news3.jpg";
import img4 from "@/assets/images/news4.jpg";

/* Back button handler */
const router = useRouter();
function goBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push({ name: "Home" });
  }
}

/* Helpers */
const toDate = (iso) => (iso ? new Date(`${iso}T00:00:00`) : null);
const formatMMMYYYY = (iso) =>
  toDate(iso)?.toLocaleDateString("en-US", { month: "short", year: "numeric" }) || "";

/* Data (replace with API later) */
const projects = ref([
  {
    id: 1,
    title: "ANGEL Project — AI for Next-Gen Education & Learning",
    status: "ongoing",
    startDate: "2024-10-01",
    endDate: null,
    partners: ["Angel Consortium", "USEA"],
    region: "International",
    role: "Partner",
    funding: "Grant",
    thumbnail: img1,
    summary:
      "Collaborative research on AI-enhanced classrooms and teacher-assistive tools, focusing on equitable access and scalable pedagogy.",
    website: "",
  },
  {
    id: 2,
    title: "ChaIN Project — Cross-border Higher-ed Innovation Network",
    status: "ongoing",
    startDate: "2025-02-01",
    endDate: null,
    partners: ["ChaIN Network", "USEA", "Regional Universities"],
    region: "International",
    role: "Partner",
    funding: "Consortium",
    thumbnail: img2,
    summary:
      "Building an innovation network to co-develop curricula, mobility, and joint labs across ASEAN and partner institutions.",
    website: "",
  },
  {
    id: 3,
    title: "Tourism Data Lab — Sustainable Tourism Analytics",
    status: "completed",
    startDate: "2023-02-01",
    endDate: "2024-01-31",
    partners: ["Provincial Tourism Dept.", "USEA"],
    region: "Local",
    role: "Lead",
    funding: "Provincial Fund",
    thumbnail: img3,
    summary:
      "Developed dashboards and models to support sustainable tourism planning and policy in the region.",
    website: "https://example.org/tourismlab",
  },
  {
    id: 4,
    title: "AgriTech 4.0 — Smart Irrigation Pilot",
    status: "completed",
    startDate: "2022-06-01",
    endDate: "2023-05-31",
    partners: ["AgriCo", "USEA"],
    region: "Local",
    role: "Partner",
    funding: "Industry",
    thumbnail: img4,
    summary:
      "Piloted IoT sensors and predictive models to reduce water usage for smallholder farmers.",
    website: "",
  },
]);

/* Tabs */
const tabs = ["Ongoing", "Completed", "All"];
const activeTab = ref("Ongoing");
function switchTab(t) {
  activeTab.value = t;
  visibleCount.value = PER_PAGE; // reset paging
}

/* Filters */
const query = ref("");
const partner = ref("");
const region = ref("");
const year = ref("");

/* Base lists */
const baseSorted = computed(() => {
  const score = (p) => (p.status === "ongoing" ? 1 : 0);
  return [...projects.value].sort((a, b) => {
    if (score(b) !== score(a)) return score(b) - score(a);
    return (toDate(b.startDate) ?? 0) - (toDate(a.startDate) ?? 0);
  });
});

const tabbed = computed(() => {
  if (activeTab.value === "Ongoing") return baseSorted.value.filter((p) => p.status === "ongoing");
  if (activeTab.value === "Completed") return baseSorted.value.filter((p) => p.status === "completed");
  return baseSorted.value;
});

/* Partner options now depend on current tab */
const partnersOptions = computed(() => {
  const set = new Set();
  tabbed.value.forEach((p) => p.partners.forEach((x) => set.add(String(x).trim())));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
});

/* Year options can also depend on current tab for consistency */
const yearOptions = computed(() => {
  const set = new Set();
  tabbed.value.forEach((p) => {
    const y1 = toDate(p.startDate)?.getFullYear();
    const y2 = toDate(p.endDate || p.startDate)?.getFullYear();
    if (y1) set.add(y1);
    if (y2) set.add(y2);
  });
  return Array.from(set).sort((a, b) => b - a);
});

/* Auto-clear partner if it becomes invalid after tab/filters change */
watch([activeTab, tabbed], () => {
  if (partner.value && !partnersOptions.value.includes(partner.value)) {
    partner.value = "";
  }
});

/* Derived list with filters */
const hasActiveFilters = computed(
  () => !!query.value || !!partner.value || !!region.value || !!year.value
);

function resetFilters() {
  query.value = "";
  partner.value = "";
  region.value = "";
  year.value = "";
}

const filtered = computed(() => {
  const q = query.value.toLowerCase().trim();
  const picked = partner.value.toLowerCase().trim();

  return tabbed.value.filter((p) => {
    const matchesQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.partners.some((x) => String(x).toLowerCase().includes(q)) ||
      (p.summary || "").toLowerCase().includes(q);

    const matchesPartner =
      !picked ||
      p.partners.some((x) => String(x).toLowerCase().trim() === picked);

    const matchesRegion = !region.value || p.region === region.value;

    const y = year.value;
    const matchesYear =
      !y ||
      String(toDate(p.startDate)?.getFullYear() || "") === y ||
      String(toDate(p.endDate || p.startDate)?.getFullYear() || "") === y;

    return matchesQ && matchesPartner && matchesRegion && matchesYear;
  });
});

/* Featured + paging */
const featured = computed(() => filtered.value[0] || null);
const list = computed(() => (featured.value ? filtered.value.slice(1) : []));
const PER_PAGE = 9;
const visibleCount = ref(PER_PAGE);
const visible = computed(() => list.value.slice(0, visibleCount.value));
const shown = computed(() => Math.min(visibleCount.value, list.value.length));
function loadMore() {
  visibleCount.value += PER_PAGE;
}

/* Stats */
const stats = computed(() => {
  const total = projects.value.length;
  const ongoing = projects.value.filter((p) => p.status === "ongoing").length;
  const completed = total - ongoing;
  const partnerSet = new Set();
  projects.value.forEach((p) => p.partners.forEach((x) => partnerSet.add(x)));
  return { total, ongoing, completed, partners: partnerSet.size };
});

/* UI helper */
function dateRange(p) {
  const start = formatMMMYYYY(p.startDate);
  const end = p.status === "ongoing" || !p.endDate ? "Present" : formatMMMYYYY(p.endDate);
  return `${start} – ${end}`;
}
</script>

<style scoped>
.line-clamp-2,
.line-clamp-3,
.line-clamp-1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-1 { -webkit-line-clamp: 1; }
.line-clamp-2 { -webkit-line-clamp: 2; }
.line-clamp-3 { -webkit-line-clamp: 3; }
</style>
