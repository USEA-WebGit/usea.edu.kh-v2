<template>
  <aside
    class="bg-white/90 backdrop-blur p-5 flex flex-col gap-6 rounded-2xl shadow-sm border border-gray-200 md:sticky md:top-28 md:h-max"
  >
    <!-- Header (mobile) -->
    <div class="flex items-center justify-between md:hidden">
      <h2 class="text-[#002060] font-bold text-lg">Menu</h2>
      <button
        class="px-3 py-1 text-sm rounded-lg border hover:bg-gray-50"
        @click="toggleAll"
      >
        {{ allOpen ? "Collapse" : "Expand" }}
      </button>
    </div>

    <!-- Organization Info -->
    <section class="space-y-3">
      <button
        class="w-full flex items-center justify-between"
        @click="open.org = !open.org"
        :aria-expanded="open.org"
      >
        <span class="text-[#002060] text-md md:text-md font-bold"
          >Organization Info +</span
        >
        <svg
          class="h-5 w-5 transition-transform"
          :class="open.org ? 'rotate-180' : ''"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.128l3.71-3.9a.75.75 0 011.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <nav v-show="open.org" class="flex flex-col text-md md:text-md">
        <RouterLink
          :to="{ name: 'history' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'history' }) }"
        >
          History &amp; Logo Meaning
        </RouterLink>

        <RouterLink
          :to="{ name: 'vision' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'vision' }) }"
        >
          Vision &amp; Mission
        </RouterLink>

        <RouterLink
          :to="{ name: 'location' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'location' }) }"
        >
          Location
        </RouterLink>
      </nav>
    </section>

    <!-- Governance & Accreditation -->
    <section class="space-y-3">
      <button
        class="w-full flex items-center justify-between"
        @click="open.gov = !open.gov"
        :aria-expanded="open.gov"
      >
        <span class="text-[#002060] text-md md:text-md font-bold"
          >Governance &amp; Accreditation +</span
        >
        <svg
          class="h-5 w-5 transition-transform"
          :class="open.gov ? 'rotate-180' : ''"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.128l3.71-3.9a.75.75 0 011.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <nav v-show="open.gov" class="flex flex-col text-md md:text-md">
        <RouterLink
          :to="{ name: 'message' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'message' }) }"
        >
          Message from President
        </RouterLink>

        <RouterLink
          :to="{ name: 'board-trustee' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'board-trustee' }) }"
        >
          Board of Trustees
        </RouterLink>

        <RouterLink
          :to="{ name: 'recognition' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'recognition' }) }"
        >
          Recognition &amp; Accreditation
        </RouterLink>
      </nav>
    </section>

    <!-- Information -->
    <section class="space-y-3">
      <button
        class="w-full flex items-center justify-between"
        @click="open.info = !open.info"
        :aria-expanded="open.info"
      >
        <span class="text-[#002060] text-md md:text-md font-bold"
          >Information +</span
        >
        <svg
          class="h-5 w-5 transition-transform"
          :class="open.info ? 'rotate-180' : ''"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.128l3.71-3.9a.75.75 0 011.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <nav v-show="open.info" class="flex flex-col">
        <RouterLink
          :to="{ name: 'news-events' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'news-events' }) }"
        >
          Event &amp; News
        </RouterLink>

        <RouterLink
          :to="{ name: 'faq' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'faq' }) }"
        >
          FAQ
        </RouterLink>

        <RouterLink
          :to="{ name: 'contact' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'contact' }) }"
        >
          Contact
        </RouterLink>
      </nav>
    </section>
  </aside>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Collapsible state
const open = reactive({ org: true, gov: true, info: true });

// Global expand/collapse (mobile header)
const allOpen = computed(() => open.org && open.gov && open.info);
const toggleAll = () => {
  const next = !allOpen.value;
  open.org = next;
  open.gov = next;
  open.info = next;
};

// Active checker (supports name + optional params)
const isActive = (to) => {
  if (route.name !== to.name) return false;
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
