<template>
  <div>
    <Titlebg :title="job?.title || 'Job Detail'" breadcrumb="Job Detail" />

    <div
      class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10"
    >
      <!-- LEFT: Detail -->
      <section
        class="bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-6 shadow-sm mb-10"
      >
        <div class="flex items-start gap-4">
          <img
            :src="job?.logo"
            alt="logo"
            class="h-16 w-16 rounded-xl object-cover border border-gray-200"
          />
          <div class="flex-1">
            <h1 class="text-2xl font-extrabold text-[#002060]">
              {{ job?.title }}
            </h1>
            <div
              class="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-600"
            >
              <span class="inline-flex items-center gap-1"
                ><i class="fa-solid fa-location-dot"></i>
                {{ job?.location }}</span
              >
              <span class="text-gray-300" v-if="job?.address">•</span>
              <span v-if="job?.address">{{ job?.address }}</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button
              class="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm"
              @click="toggleSave(job.id)"
            >
              <i
                :class="
                  isSaved(job.id)
                    ? 'fa-solid fa-bookmark'
                    : 'fa-regular fa-bookmark'
                "
              ></i>
              <span class="ml-2 hidden md:inline">{{
                isSaved(job.id) ? "Saved" : "Save"
              }}</span>
            </button>
            <button
              class="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm"
              @click="copyLink"
            >
              <i class="fa-solid fa-share-nodes"></i>
              <span class="ml-2 hidden md:inline">Share</span>
            </button>
          </div>
        </div>

        <div class="mt-5 flex flex-wrap items-center gap-2 text-sm">
          <span
            class="px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200"
            >Posted: {{ fmt(job?.hiredate) }}</span
          >
          <span
            class="px-2.5 py-1 rounded-full border"
            :class="dueBadgeClass(job?.duedate)"
            >Due: {{ fmt(job?.duedate) }}</span
          >
          <span
            v-if="daysLeft(job?.duedate) !== null"
            class="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200"
          >
            {{
              daysLeft(job?.duedate) >= 0
                ? daysLeft(job?.duedate) + " days left"
                : "Closed"
            }}
          </span>
        </div>

        <hr class="my-6" />

        <h2 class="text-lg font-bold mb-2">Job Description</h2>
        <p class="text-gray-700 leading-relaxed">
          {{ job?.description }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold"
            @click.prevent
          >
            Apply Now
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <RouterLink
            :to="{ name: 'career-jobs' }"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm"
          >
            Back to jobs
          </RouterLink>
        </div>
      </section>

      <!-- RIGHT:related -->
      <aside class="flex flex-col gap-6">
        <div
          class="bg-white/90 backdrop-blur p-4 rounded-2xl border border-gray-200 shadow-sm"
        >
          <h3 class="text-[#002060] font-bold mb-3">Related jobs</h3>
          <ul class="space-y-3">
            <li v-for="r in related" :key="r.id">
              <RouterLink
                :to="{ name: 'career-job-detail', params: { id: r.id } }"
                class="block p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                <div class="font-semibold">{{ r.title }}</div>
                <div class="text-xs text-gray-600">
                  {{ r.location }} • Due {{ fmt(r.duedate) }}
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightServices from "@/components/SideBar/RightServices.vue";
import { services } from "@/data/service.js";

const route = useRoute();
const id = Number(route.params.id);

const joblist =
  services["career-center"]?.links?.find((l) => l.key === "career-jobs")
    ?.joblist || [];
const job = computed(() => joblist.find((j) => Number(j.id) === id));

/* basic guards (optional) */
// If you want, you can redirect when not found:
// onMounted(() => { if (!job.value) router.replace({ name: 'career-jobs' }) })

/* helpers (reuse from list) */
function parseDMY(str) {
  if (!str) return new Date("1970-01-01");
  const [dd, mm, yyyy] = String(str)
    .split("-")
    .map((s) => parseInt(s, 10));
  return new Date(yyyy || 1970, (mm || 1) - 1, dd || 1);
}
function fmt(str) {
  const d = parseDMY(str);
  return `${String(d.getDate()).padStart(2, "0")}-${String(
    d.getMonth() + 1
  ).padStart(2, "0")}-${d.getFullYear()}`;
}
function daysLeft(s) {
  if (!s) return null;
  const due = parseDMY(s),
    t = new Date();
  due.setHours(0, 0, 0, 0);
  t.setHours(0, 0, 0, 0);
  return Math.round((due - t) / (1000 * 60 * 60 * 24));
}
function dueBadgeClass(s) {
  const left = daysLeft(s);
  if (left === null) return "bg-gray-100 border-gray-200";
  if (left < 0) return "bg-red-50 border-red-200 text-red-600";
  if (left <= 7) return "bg-amber-50 border-amber-200 text-amber-700";
  return "bg-emerald-50 border-emerald-200 text-emerald-700";
}

/* related (simple: same location, exclude self; fallback to latest 3) */
const related = computed(() => {
  if (!job.value) return [];
  const sameLoc = joblist.filter(
    (j) => j.location === job.value.location && j.id !== job.value.id
  );
  const pick = sameLoc.length
    ? sameLoc
    : joblist.filter((j) => j.id !== job.value.id);
  return pick
    .sort((a, b) => parseDMY(b.hiredate) - parseDMY(a.hiredate))
    .slice(0, 3);
});

/* save/share */
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
async function copyLink() {
  const url = window.location.href;
  try {
    await navigator.clipboard.writeText(url);
    alert("Link copied!");
  } catch {
    window.prompt("Copy this link", url);
  }
}
</script>
