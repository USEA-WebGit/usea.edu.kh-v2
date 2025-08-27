<template>
  <div>
    <Titlebg title="Job Opportunity" breadcrumb="Job Opportunity" />

    <!-- PAGE WRAPPER: 1 col on mobile, 2 cols on md+; sensible paddings -->
    <div
      class="grid lg:grid-cols-[70%_30%] gap-6 lg:gap-10 mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%]"
    >
      <!-- LEFT: Jobs -->
      <section class="flex flex-col gap-6 mb-10">
        <!-- Controls (sticky only on lg+) -->
        <div
          class="lg:sticky lg:top-24 z-[1] bg-white/95 backdrop-blur p-4 rounded-xl border border-gray-200 shadow-sm"
        >
          <div
            class="flex flex-col md:flex-row gap-3 md:items-center md:justify-between"
          >
            <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <!-- search -->
              <div class="relative w-full sm:w-auto sm:flex-1 md:w-[320px]">
                <input
                  v-model="q"
                  type="text"
                  placeholder="Search job title or description..."
                  class="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002060]/30"
                />
                <svg
                  class="pointer-events-none absolute left-3 top-2 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <!-- location -->
              <select
                v-model="loc"
                class="w-1/3 sm:w-[200px] px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#002060]/30"
              >
                <option value="">All locations</option>
                <option v-for="l in locations" :key="l" :value="l">
                  {{ l }}
                </option>
              </select>

              <!-- status -->
              <select
                v-model="status"
                class="w-1/2 sm:w-[130px] px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#002060]/30"
              >
                <option value="any">Any status</option>
                <option value="open">Open only</option>
                <option value="closing-soon">Closing ≤ 7 days</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <div class="flex gap-3">
              <select
                v-model="sortBy"
                class="w-full sm:w-[150px] md:w-[100px] px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#002060]/30"
              >
                <option value="newest">Newest</option>
                <option value="closing">Closing soon</option>
                <option value="az">A → Z</option>
              </select>

              <button
                class="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                @click="resetFilters"
                title="Reset filters"
              >
                Reset
              </button>
            </div>
          </div>

          <!-- tiny chips summary -->
          <div class="mt-3 flex flex-wrap gap-2 text-xs">
            <span v-if="q" class="chip">Query: “{{ q }}”</span>
            <span v-if="loc" class="chip">Location: {{ loc }}</span>
            <span v-if="status !== 'any'" class="chip"
              >Status: {{ statusLabel }}</span
            >
          </div>
        </div>

        <!-- Counts -->
        <div class="text-sm text-gray-600">
          Showing <span class="font-semibold">{{ paginated.length }}</span> of
          <span class="font-semibold">{{ filtered.length }}</span> result(s)
        </div>

        <!-- Job Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <article
            v-for="job in paginated"
            :key="job.id"
            class="group bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <!-- header -->
            <header class="flex items-start gap-4">
              <img
                :src="job.logo"
                alt="logo"
                class="h-14 w-14 rounded-xl object-cover border border-gray-200 flex-shrink-0"
              />

              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg font-bold text-[#002060] group-hover:underline underline-offset-4 truncate"
                  :title="job.title"
                >
                  {{ job.title }}
                </h3>
                <div
                  class="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-600"
                >
                  <span class="inline-flex items-center gap-1">
                    <i class="fa-solid fa-location-dot"></i> {{ job.location }}
                  </span>
                  <span class="text-gray-300" v-if="job.address">•</span>
                  <span v-if="job.address">{{ job.address }}</span>
                </div>

                <!-- mobile actions (under title) -->
                <div class="mt-2 flex gap-2 sm:hidden">
                  <button
                    class="icon-btn"
                    @click="toggleSave(job.id)"
                    title="Save"
                  >
                    <i
                      :class="
                        isSaved(job.id)
                          ? 'fa-solid fa-bookmark'
                          : 'fa-regular fa-bookmark'
                      "
                    ></i>
                  </button>
                  <button
                    class="icon-btn"
                    @click="share(job)"
                    title="Copy share link"
                  >
                    <i class="fa-solid fa-share-nodes"></i>
                  </button>
                </div>
              </div>

              <!-- right actions (≥sm) -->
              <div class="ml-auto hidden sm:flex items-center gap-2 self-start">
                <button
                  class="icon-btn"
                  @click="toggleSave(job.id)"
                  title="Save"
                >
                  <i
                    :class="
                      isSaved(job.id)
                        ? 'fa-solid fa-bookmark'
                        : 'fa-regular fa-bookmark'
                    "
                  ></i>
                </button>
                <button
                  class="icon-btn"
                  @click="share(job)"
                  title="Copy share link"
                >
                  <i class="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </header>

            <p class="mt-4 text-gray-700 leading-relaxed line-clamp-3">
              {{ job.description }}
            </p>

            <div
              class="mt-4 flex flex-wrap items-center gap-2 text-[13px] leading-tight"
            >
              <span class="badge">Posted: {{ fmt(job.hiredate) }}</span>
              <span class="badge" :class="dueBadgeClass(job.duedate)"
                >Due: {{ fmt(job.duedate) }}</span
              >
              <span
                v-if="daysLeft(job.duedate) !== null"
                class="badge bg-red-400 text-white font-bold"
                :title="
                  daysLeft(job.duedate) >= 0 ? 'Days remaining' : 'Past due'
                "
              >
                {{
                  daysLeft(job.duedate) >= 0
                    ? daysLeft(job.duedate) + " days left"
                    : "Closed"
                }}
              </span>
            </div>

            <footer class="mt-5 flex items-center justify-end gap-3">
              <RouterLink
                :to="{ name: 'career-job-detail', params: { id: job.id } }"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-usea_secondary text-white hover:bg-gray-50 hover:text-usea_secondary text-sm font-semibold"
                title="View full description"
              >
                View details
                <i class="fa-solid fa-arrow-right-long"></i>
              </RouterLink>
            </footer>
          </article>
        </div>

        <!-- Empty state -->
        <div
          v-if="!paginated.length && (q || loc || status !== 'any')"
          class="text-gray-500 bg-white/70 p-8 rounded-xl border border-gray-200"
        >
          No jobs match your filters. Try clearing them.
        </div>

        <!-- Pagination -->
        <div
          v-if="pages > 1"
          class="flex items-center justify-center gap-2 mt-4 select-none"
        >
          <button class="btn" :disabled="page === 1" @click="page--">
            Prev
          </button>
          <button
            v-for="n in pages"
            :key="n"
            class="px-3 py-1.5 rounded-lg border"
            :class="
              n === page
                ? 'border-[#002060] bg-[#002060]/5 font-semibold'
                : 'border-gray-200 hover:bg-gray-50'
            "
            @click="page = n"
          >
            {{ n }}
          </button>
          <button class="btn" :disabled="page === pages" @click="page++">
            Next
          </button>
        </div>
      </section>

      <!-- RIGHT: Sidebar -->
      <aside class="w-full">
        <RightServices />
      </aside>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightServices from "@/components/SideBar/RightServices.vue";
import { services } from "@/data/service.js";

const router = useRouter();

/** Career jobs from service.js */
const jobLink = services["career-center"]?.links?.find(
  (l) => l.key === "career-jobs"
);
const jobs = Array.isArray(jobLink?.joblist) ? jobLink.joblist : [];

/* ----------------------- Filters / Sort / Pagination ----------------------- */
const q = ref("");
const loc = ref("");
const status = ref("any"); // any | open | closing-soon | closed
const sortBy = ref("newest"); // newest | closing | az
const page = ref(1);
const pageSize = 6;

/** unique location list for filter dropdown */
const locations = computed(() => {
  const set = new Set(jobs.map((j) => j.location).filter(Boolean));
  return Array.from(set).sort();
});

const filtered = computed(() => {
  const query = q.value.trim().toLowerCase();
  const wantLoc = loc.value;

  return jobs
    .filter((j) => {
      const matchesQuery =
        !query ||
        j.title?.toLowerCase().includes(query) ||
        j.description?.toLowerCase().includes(query) ||
        j.address?.toLowerCase().includes(query) ||
        j.location?.toLowerCase().includes(query);

      const matchesLoc = !wantLoc || j.location === wantLoc;

      // status filter
      const left = daysLeft(j.duedate);
      const isOpen = left === null ? true : left >= 0;
      const isClosingSoon = left !== null && left >= 0 && left <= 7;
      const isClosed = left !== null && left < 0;

      const matchesStatus =
        status.value === "any" ||
        (status.value === "open" && isOpen) ||
        (status.value === "closing-soon" && isClosingSoon) ||
        (status.value === "closed" && isClosed);

      return matchesQuery && matchesLoc && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy.value === "newest")
        return parseDMY(b.hiredate) - parseDMY(a.hiredate);
      if (sortBy.value === "closing")
        return parseDMY(a.duedate) - parseDMY(b.duedate);
      return (a.title || "").localeCompare(b.title || ""); // A → Z
    });
});

const pages = computed(() =>
  Math.max(1, Math.ceil(filtered.value.length / pageSize))
);

const paginated = computed(() => {
  if (page.value > pages.value) page.value = pages.value;
  const start = (page.value - 1) * pageSize;
  return filtered.value.slice(start, start + pageSize);
});

function resetFilters() {
  q.value = "";
  loc.value = "";
  status.value = "any";
  sortBy.value = "newest";
  page.value = 1;
}

/* ------------------------------ Helpers ---------------------------------- */
/** dates are "dd-mm-yyyy" */
function parseDMY(str) {
  if (!str) return new Date("1970-01-01");
  const [dd, mm, yyyy] = String(str)
    .split("-")
    .map((s) => parseInt(s, 10));
  const m = Math.min(Math.max(mm || 1, 1), 12);
  const d = Math.min(Math.max(dd || 1, 1), 31);
  return new Date(yyyy || 1970, m - 1, d);
}
function fmt(str) {
  const d = parseDMY(str);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${day}-${m}-${y}`;
}
function daysLeft(dueStr) {
  if (!dueStr) return null;
  const due = parseDMY(dueStr);
  const today = new Date();
  due.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return Math.round((due - today) / (1000 * 60 * 60 * 24));
}
function dueBadgeClass(dueStr) {
  const left = daysLeft(dueStr);
  if (left === null) return "bg-gray-100 border-gray-200";
  if (left < 0) return "bg-red-50 border-red-200 text-red-600";
  if (left <= 7) return "bg-amber-50 border-amber-200 text-amber-700";
  return "bg-emerald-50 border-emerald-200 text-emerald-700";
}
const statusLabel = computed(() => {
  return status.value === "open"
    ? "Open"
    : status.value === "closing-soon"
    ? "Closing soon"
    : status.value === "closed"
    ? "Closed"
    : "Any";
});

/* ------------------------------- Save / Share ----------------------------- */
const saved = ref(
  new Set(JSON.parse(localStorage.getItem("career_saved_jobs") || "[]"))
);
function isSaved(id) {
  return saved.value.has(id);
}
function toggleSave(id) {
  if (saved.value.has(id)) saved.value.delete(id);
  else saved.value.add(id);
  localStorage.setItem(
    "career_saved_jobs",
    JSON.stringify(Array.from(saved.value))
  );
}
async function share(job) {
  const url = `${window.location.origin}/services/career-center/jobs/${job.id}`;
  try {
    await navigator.clipboard.writeText(url);
    alert("Share link copied to clipboard!");
  } catch {
    window.prompt("Copy this link", url);
  }
}
</script>

<style scoped>
/* clamp description lines nicely */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.badge {
  @apply px-2.5 py-1 rounded-full border text-[13px];
}
.badge.muted {
  @apply bg-gray-50 border-gray-200;
}
.chip {
  @apply px-2 py-1 rounded-md bg-gray-100 border border-gray-200;
}
.btn {
  @apply px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40;
}
/* consistent icon button size & alignment */
.icon-btn {
  @apply h-9 w-9 inline-flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-[15px];
}
</style>
