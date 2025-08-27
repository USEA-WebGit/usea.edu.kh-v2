<template>
  <aside
    class="w-full bg-white/90 backdrop-blur p-5 flex flex-col gap-6 rounded-2xl shadow-sm border border-gray-200 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-auto"
  >
    <!-- Header (mobile) -->
    <div class="flex items-center justify-between lg:hidden">
      <h2 class="text-[#002060] font-bold text-lg">Menu</h2>
      <button
        class="px-3 py-1.5 text-sm rounded-lg border hover:bg-gray-50"
        @click="toggleAll"
      >
        {{ allOpen ? "Collapse" : "Expand" }}
      </button>
    </div>

    <!-- Services root list -->
    <section class="space-y-4">
      <!-- Career Center -->
      <div>
        <button
          class="w-full flex items-center justify-between"
          @click="toggle('career')"
          :aria-expanded="isOpen('career')"
        >
          <span class="text-[#002060] text-base font-bold"
            >Career Center +</span
          >
          <Chevron :open="isOpen('career')" />
        </button>

        <nav v-show="isOpen('career')" class="mt-2 flex flex-col">
          <!-- Top-level items -->
          <RouterLink
            v-for="link in careerBasicLinks"
            :key="link.name"
            :to="{ name: link.name }"
            class="nav-link sub-link"
            :class="{ active: isActive({ name: link.name }) }"
          >
            {{ link.label }}
          </RouterLink>

          <!-- Grouped News & Events -->
          <div
            class="mt-1 mb-1 px-3 py-2 text-sm font-semibold text-gray-600 select-none"
          >
            News &amp; Events
          </div>

          <RouterLink
            v-if="careerNewsRoute"
            :to="careerNewsRoute"
            class="sub-link"
            :class="{ active: isActive(careerNewsRoute) }"
          >
            News
          </RouterLink>

          <RouterLink
            v-if="careerEventsRoute"
            :to="careerEventsRoute"
            class="sub-link"
            :class="{ active: isActive(careerEventsRoute) }"
          >
            Events
          </RouterLink>
        </nav>
      </div>

      <!-- Library -->
      <div>
        <button
          class="w-full flex items-center justify-between"
          @click="toggle('library')"
          :aria-expanded="isOpen('library')"
        >
          <span class="text-[#002060] text-base font-bold">Library +</span>
          <Chevron :open="isOpen('library')" />
        </button>

        <nav v-show="isOpen('library')" class="mt-2 flex flex-col">
          <RouterLink
            :to="libraryAboutRoute"
            class="nav-link sub-link"
            :class="{ active: isActive(libraryAboutRoute) }"
          >
            About Library
          </RouterLink>

          <RouterLink
            :to="libraryStaffRoute"
            class="nav-link sub-link"
            :class="{ active: isActive(libraryStaffRoute) }"
          >
            Library Staff
          </RouterLink>

          <div
            class="mt-1 mb-1 px-3 py-2 text-sm font-semibold text-gray-600 select-none"
          >
            Library
          </div>

          <RouterLink
            v-for="(sub, idx) in librarySubs"
            :key="idx"
            :to="{ name: sub.toName, params: sub.params, query: sub.query }"
            class="sub-link"
            :class="{
              active: isActive({ name: sub.toName, params: sub.params }),
            }"
          >
            {{ sub.name }}
          </RouterLink>
        </nav>
      </div>

      <!-- IT Services -->
      <div>
        <button
          class="w-full flex items-center justify-between"
          @click="toggle('it')"
          :aria-expanded="isOpen('it')"
        >
          <span class="text-[#002060] text-base font-bold">IT Services +</span>
          <Chevron :open="isOpen('it')" />
        </button>

        <nav v-show="isOpen('it')" class="mt-2 flex flex-col">
          <RouterLink
            v-for="link in itLinks"
            :key="link.name"
            :to="{ name: link.name }"
            class="nav-link"
            :class="{ active: isActive({ name: link.name }) }"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>

      <!-- Health Services -->
      <div>
        <button
          class="w-full flex items-center justify-between"
          @click="toggle('health')"
          :aria-expanded="isOpen('health')"
        >
          <span class="text-[#002060] text-base font-bold"
            >Health Services +</span
          >
          <Chevron :open="isOpen('health')" />
        </button>

        <nav v-show="isOpen('health')" class="mt-2 flex flex-col">
          <RouterLink
            v-for="link in healthLinks"
            :key="link.name"
            :to="{ name: link.name }"
            class="nav-link"
            :class="{ active: isActive({ name: link.name }) }"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>
    </section>
  </aside>
</template>

<script setup>
import { ref, computed, onMounted, h, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { services } from "@/data/service.js";

const route = useRoute();
const router = useRouter();

const routeExists = (name) => !!router.getRoutes().find((r) => r.name === name);

/* ---------------- Accordion state: only one open ---------------- */
const active = ref(null); // "career" | "library" | "it" | "health" | null

const isOpen = (key) => active.value === key;
const toggle = (key) => {
  active.value = active.value === key ? null : key;
};

/* Auto-open matching section based on the current route */
onMounted(() => {
  const rn = String(route.name || "");
  if (rn.startsWith("career-")) active.value = "career";
  else if (rn.startsWith("library-")) active.value = "library";
  else if (rn.startsWith("it-")) active.value = "it";
  else if (rn.startsWith("health-")) active.value = "health";
});

/* Mobile expand/collapse (open current or collapse all) */
const allOpen = computed(() => active.value !== null);
const toggleAll = () => {
  if (active.value) {
    active.value = null; // collapse
  } else {
    const rn = String(route.name || "");
    if (rn.startsWith("library-")) active.value = "library";
    else if (rn.startsWith("it-")) active.value = "it";
    else if (rn.startsWith("health-")) active.value = "health";
    else active.value = "career";
  }
};

/* ---------------- Active link helpers + menus ---------------- */
const isActive = (to) => {
  if (!to || !to.name) return false;
  if (route.name !== to.name) return false;
  if (to.params) {
    return Object.entries(to.params).every(([k, v]) => route.params[k] === v);
  }
  return true;
};

// Top-level Career links (exclude Events here)
const careerBasicLinks = computed(() => {
  const s = services["career-center"];
  if (!s?.links) return [];
  const order = ["career-about", "career-staff", "career-jobs"]; // no events here
  const map = new Map(s.links.map((l) => [l.key, l]));
  return order
    .map((k) => map.get(k))
    .filter(Boolean)
    .map((l) => ({ label: l.label, name: l.name }));
});

// Child links under "News & Events"
const careerNewsRoute = computed(() =>
  routeExists("career-news") ? { name: "career-news" } : null
);
const careerEventsRoute = computed(() =>
  routeExists("career-events") ? { name: "career-events" } : null
);

/* Library routes with safe fallbacks */
const libraryAboutRoute = computed(() =>
  routeExists("library-about")
    ? { name: "library-about" }
    : { name: "library-services", query: { section: "about" } }
);
const libraryStaffRoute = computed(() =>
  routeExists("library-staff")
    ? { name: "library-staff" }
    : { name: "library-services", query: { section: "staff" } }
);

/* Sub-libraries (JPIC & American Corner) -> use library-unit + libraryName */
const librarySubs = computed(() => {
  const subs = services.library?.libraries || [];
  const hasUnit = routeExists("library-unit");
  return subs.map((d) => ({
    name: d.name,
    toName: hasUnit ? "library-unit" : "library-services",
    params: hasUnit ? { libraryName: d.params?.libraryName } : {},
    query: hasUnit ? undefined : { section: d.sourceKey || "corner" },
  }));
});

/* IT submenu */
const itLinks = computed(() => {
  const s = services["it-services"];
  if (!s?.links) return [];
  const order = ["it-about", "it-staff"];
  const map = new Map(s.links.map((l) => [l.key, l]));
  return order
    .map((k) => map.get(k))
    .filter(Boolean)
    .map((l) => ({ label: l.label, name: l.name }));
});

/* Health submenu */
const healthLinks = computed(() => {
  const s = services["health-services"];
  if (!s?.links) return [];
  const order = ["health-about", "health-staff"];
  const map = new Map(s.links.map((l) => [l.key, l]));
  return order
    .map((k) => map.get(k))
    .filter(Boolean)
    .map((l) => ({ label: l.label, name: l.name }));
});

/* Chevron icon (no JSX) */
const Chevron = defineComponent({
  name: "Chevron",
  props: { open: { type: Boolean, default: false } },
  setup(props) {
    return () =>
      h(
        "svg",
        {
          class: [
            "h-5 w-5 transition-transform",
            props.open ? "rotate-180" : "",
          ],
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true",
        },
        [
          h("path", {
            "fill-rule": "evenodd",
            d: "M5.23 7.21a.75.75 0 011.06.02L10 11.128l3.71-3.9a.75.75 0 011.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z",
            "clip-rule": "evenodd",
          }),
        ]
      );
  },
});
</script>

<style scoped>
.nav-link {
  @apply px-3 py-2.5 rounded-lg transition-colors duration-200 border border-transparent text-sm;
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

/* Indented child links under "Library" */
.sub-link {
  @apply ml-4 px-3 py-2.5 rounded-lg transition-colors duration-200 border border-transparent text-sm;
  text-decoration: none;
  color: inherit;
}
.sub-link:hover {
  @apply border-gray-200 bg-gray-50;
}
.sub-link.active {
  color: #ef4444;
  font-weight: 700;
  background: linear-gradient(
    0deg,
    rgba(239, 68, 68, 0.08),
    rgba(239, 68, 68, 0.08)
  );
  border-color: rgba(239, 68, 68, 0.25);
}

.nav-link:focus-visible,
.sub-link:focus-visible {
  outline: 2px solid #002060;
  outline-offset: 2px;
}
</style>
