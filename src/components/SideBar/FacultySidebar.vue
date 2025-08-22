<template>
  <aside
    class="bg-white/90 backdrop-blur p-5 flex flex-col gap-6 rounded-2xl shadow-sm border border-gray-200 md:sticky md:top-28 md:h-max"
  >
    <!-- Header (mobile) -->
    <div class="flex items-center justify-between md:hidden">
      <h2 class="text-[#002060] font-bold text-lg">All Faculties</h2>
      <button
        class="px-3 py-1 text-sm rounded-lg border hover:bg-gray-50"
        @click="toggleAll"
      >
        {{ openKey ? "Collapse" : "Expand" }}
      </button>
    </div>

    <!-- Faculties accordion (single-open) -->
    <section class="space-y-4">
      <div
        v-for="[key, f] in facultiesEntries"
        :key="key"
        class="border rounded-xl overflow-hidden"
      >
        <!-- Faculty header -->
        <button
          class="w-full flex items-center justify-between px-4 py-3"
          @click="toggle(key)"
          :aria-expanded="isOpen(key)"
          :aria-controls="`fac-${key}`"
        >
          <span class="text-[#002060] font-semibold text-sm md:text-sm">
            {{ f.title }}
          </span>
          <svg
            class="h-5 w-5 transition-transform"
            :class="isOpen(key) ? 'rotate-180' : ''"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.128l3.71-3.9a.75.75 0 011.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <!-- Faculty content -->
        <div v-show="isOpen(key)" :id="`fac-${key}`" class="px-4 pb-4 pt-1">
          <nav class="flex flex-col gap-2 text-sm">
            <!-- About -->
            <RouterLink
              :to="{ name: routes.about, params: { [paramKeys.about]: key } }"
              class="nav-link"
              :class="{
                active: isActive({
                  name: routes.about,
                  params: { [paramKeys.about]: key },
                }),
              }"
            >
              About Faculty
            </RouterLink>

            <!-- Staff -->
            <RouterLink
              :to="{ name: routes.staff, params: { [paramKeys.staff]: key } }"
              class="nav-link"
              :class="{
                active: isActive({
                  name: routes.staff,
                  params: { [paramKeys.staff]: key },
                }),
              }"
            >
              Faculty's Staff
            </RouterLink>

            <!-- Departments -->
            <div v-if="f?.departments?.length" class="mt-1">
              <div class="text-sm text-gray-500 mb-1">Departments</div>
              <div class="flex flex-col">
                <RouterLink
                  v-for="dep in f.departments"
                  :key="dep.params?.departmentName || dep.name"
                  :to="{
                    name: routes.department,
                    params: { departmentName: dep.params?.departmentName },
                  }"
                  class="nav-link"
                  :class="{
                    active: isActive({
                      name: routes.department,
                      params: { departmentName: dep.params?.departmentName },
                    }),
                  }"
                >
                  {{ dep.name }}
                </RouterLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </aside>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { faculties } from "@/data/faculty.js";

/** Route names and param names kept compatible with your app */
const props = defineProps({
  routes: {
    type: Object,
    default: () => ({
      about: "faculty-page",
      staff: "faculty-staff",
      department: "department-name",
    }),
  },
  paramKeys: {
    type: Object,
    default: () => ({
      about: "facultyName", // e.g. /faculty/:facultyName
      staff: "facultyStaff", // e.g. /faculty-staff/:facultyStaff
    }),
  },
  /** Start collapsed on mobile (optional) */
  collapseOnMobile: { type: Boolean, default: false },
});

const route = useRoute();
const routes = props.routes;
const paramKeys = props.paramKeys;

const facultiesEntries = computed(() => Object.entries(faculties));

/** Single-open state: which faculty key is open (or null if none) */
const openKey = ref(null);

/* ---------- Accordion helpers (single-open) ---------- */
const isOpen = (key) => openKey.value === key;
const toggle = (key) => {
  openKey.value = openKey.value === key ? null : key;
};

/** Mobile header button: Expand current (or first), or collapse all */
const toggleAll = () => {
  if (openKey.value) {
    openKey.value = null;
  } else {
    openKey.value =
      getCurrentFacultyKeyFromRoute() ?? facultiesEntries.value[0]?.[0] ?? null;
  }
};

/* ---------- Infer current faculty from the route ---------- */
const getCurrentFacultyKeyFromRoute = () => {
  // About page → paramKeys.about
  if (route.name === routes.about) {
    return route.params[paramKeys.about] ?? null;
  }
  // Staff page → paramKeys.staff
  if (route.name === routes.staff) {
    return route.params[paramKeys.staff] ?? null;
  }
  // Department page → find faculty by departmentName
  if (route.name === routes.department) {
    const depParam = route.params.departmentName;
    for (const [key, f] of Object.entries(faculties)) {
      if (f?.departments?.some((d) => d.params?.departmentName === depParam)) {
        return key;
      }
    }
  }
  return null;
};

/** Set the open faculty to match the current route (always, mobile & desktop) */
const expandCurrentFaculty = () => {
  openKey.value = getCurrentFacultyKeyFromRoute();
};

/* ---------- Initialize: optionally collapse on mobile, then ALWAYS expand current ---------- */
if (props.collapseOnMobile && typeof window !== "undefined") {
  if (window.matchMedia("(max-width: 767px)").matches) {
    openKey.value = null; // start collapsed
  }
}
expandCurrentFaculty(); // ensure the current faculty is open

/* ---------- Keep accordion synced with route changes ---------- */
watch(
  () => route.fullPath,
  () => {
    expandCurrentFaculty();
  }
);

/* ---------- Active checker ---------- */
const isActive = (to) => {
  if (!route.name) return false;
  // allow exact match or child routes like 'faculty-staff.details'
  const sameRoute =
    String(route.name) === String(to.name) ||
    String(route.name).startsWith(String(to.name) + ".");
  if (!sameRoute) return false;

  if (to.params) {
    return Object.entries(to.params).every(([k, v]) => route.params[k] === v);
  }
  return true;
};
</script>

<style scoped>
.nav-link {
  @apply px-3 py-2 rounded-lg transition-colors duration-200 border border-transparent;
  text-decoration: none;
  color: inherit;
}
.nav-link:hover {
  @apply border-gray-200 bg-gray-50;
}
.nav-link.active {
  color: #ef4444;
  font-weight: 700;
  background: linear-gradient(
    0deg,
    rgba(239, 68, 68, 0.08),
    rgba(239, 68, 68, 0.08)
  );
  border-color: rgba(239, 68, 68, 0.25);
}
.nav-link:focus-visible {
  outline: 2px solid #002060;
  outline-offset: 2px;
}
</style>
