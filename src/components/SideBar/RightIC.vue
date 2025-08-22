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

    <!-- Contact -->
    <section class="space-y-3">
      <button
        class="w-full flex items-center justify-between"
        @click="open.contact = !open.contact"
        :aria-expanded="open.contact"
      >
        <span class="text-[#002060] text-md md:text-md font-bold"
          >College +</span
        >
        <svg
          class="h-5 w-5 transition-transform"
          :class="open.contact ? 'rotate-180' : ''"
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

      <nav v-show="open.contact" class="flex flex-col">
        <RouterLink
          :to="{ name: 'international-college' }"
          class="nav-link text-md md:text-md"
          :class="{ active: isActive({ name: 'international-college' }) }"
        >
          About International College
        </RouterLink>

        <RouterLink
          :to="{ name: 'international-college-staff' }"
          class="nav-link text-md md:text-md"
          :class="{ active: isActive({ name: 'international-college-staff' }) }"
        >
          Program's Staff
        </RouterLink>
      </nav>
    </section>

    <!-- Programs -->
    <section class="space-y-3">
      <button
        class="w-full flex items-center justify-between text-md md:text-md"
        @click="open.programs = !open.programs"
        :aria-expanded="open.programs"
      >
        <span class="text-[#002060] text-md md:text-md font-bold"
          >Programs +</span
        >
        <svg
          class="h-5 w-5 transition-transform"
          :class="open.programs ? 'rotate-180' : ''"
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

      <nav v-show="open.programs" class="flex flex-col">
        <RouterLink
          :to="{ name: 'acca-program' }"
          class="nav-link text-md md:text-md"
          :class="{ active: isActive({ name: 'acca-program' }) }"
        >
          ACCA
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
const open = reactive({ contact: true, programs: true });

// Mobile expand/collapse all
const allOpen = computed(() => open.contact && open.programs);
const toggleAll = () => {
  const next = !allOpen.value;
  open.contact = next;
  open.programs = next;
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
  color: #ef4444; /* red-500 */
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
