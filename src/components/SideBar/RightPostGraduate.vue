<template>
  <aside
    class="bg-white/90 backdrop-blur p-5 flex flex-col gap-6 rounded-2xl shadow-sm border border-gray-200
           md:sticky md:top-28 md:h-max"
  >
    <!-- Header (mobile) -->
    <div class="flex items-center justify-between md:hidden">
      <h2 class="text-[#002060] font-bold text-lg">Menu</h2>
      <button
        class="px-3 py-1 text-sm rounded-lg border hover:bg-gray-50"
        @click="toggleAll"
      >
        {{ allOpen ? 'Collapse' : 'Expand' }}
      </button>
    </div>

    <!-- Contact -->
    <section class="space-y-3">
      <button
        class="w-full flex items-center justify-between"
        @click="open.contact = !open.contact"
        :aria-expanded="open.contact"
      >
        <span class="text-[#002060] text-xl font-bold">Contact +</span>
        <svg class="h-5 w-5 transition-transform" :class="open.contact ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.128l3.71-3.9a.75.75 0 011.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
        </svg>
      </button>

      <nav v-show="open.contact" class="flex flex-col">
        <RouterLink
          :to="{ name: 'post-graduate' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'post-graduate' }) }"
        >
          About Graduate School
        </RouterLink>

        <RouterLink
          :to="{ name: 'post-graduate-staff' }"
          class="nav-link"
          :class="{ active: isActive({ name: 'post-graduate-staff' }) }"
        >
          Staff
        </RouterLink>
      </nav>
    </section>

    <!-- Master's Degree -->
    <section class="space-y-3">
      <button
        class="w-full flex items-center justify-between"
        @click="open.masters = !open.masters"
        :aria-expanded="open.masters"
      >
        <span class="text-[#002060] text-xl font-bold">Master's Degree +</span>
        <svg class="h-5 w-5 transition-transform" :class="open.masters ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.128l3.71-3.9a.75.75 0 011.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
        </svg>
      </button>

      <nav v-show="open.masters" class="flex flex-col">
        <RouterLink
          :to="{ name: 'department-name', params: { departmentName: 'department-business' } }"
          class="nav-link"
          :class="{ active: isActive({ name: 'department-name', params: { departmentName: 'department-business' } }) }"
        >
          Accounting
        </RouterLink>

        <RouterLink
          :to="{ name: 'department-name', params: { departmentName: 'department-tourism' } }"
          class="nav-link"
          :class="{ active: isActive({ name: 'department-name', params: { departmentName: 'department-tourism' } }) }"
        >
          Finance &amp; Banking
        </RouterLink>

        <RouterLink
          :to="{ name: 'department-name', params: { departmentName: 'department-economic' } }"
          class="nav-link"
          :class="{ active: isActive({ name: 'department-name', params: { departmentName: 'department-economic' } }) }"
        >
          Information Technology
        </RouterLink>
      </nav>
    </section>

    <!-- Doctoral's Degree -->
    <section class="space-y-3">
      <button
        class="w-full flex items-center justify-between"
        @click="open.doctoral = !open.doctoral"
        :aria-expanded="open.doctoral"
      >
        <span class="text-[#002060] text-xl font-bold">Doctoral's Degree +</span>
        <svg class="h-5 w-5 transition-transform" :class="open.doctoral ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.128l3.71-3.9a.75.75 0 011.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
        </svg>
      </button>

      <nav v-show="open.doctoral" class="flex flex-col">
        <RouterLink
          :to="{ name: 'department-name', params: { departmentName: 'department-business' } }"
          class="nav-link"
          :class="{ active: isActive({ name: 'department-name', params: { departmentName: 'department-business' } }) }"
        >
          Accounting
        </RouterLink>
      </nav>
    </section>
  </aside>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Collapsible states
const open = reactive({ contact: true, masters: true, doctoral: true })

// Expand/Collapse all
const allOpen = computed(() => open.contact && open.masters && open.doctoral)
const toggleAll = () => {
  const next = !allOpen.value
  open.contact = next
  open.masters = next
  open.doctoral = next
}

// Active checker (supports name + optional params)
const isActive = (to) => {
  if (route.name !== to.name) return false
  if (to.params) {
    return Object.entries(to.params).every(([k, v]) => route.params[k] === v)
  }
  return true
}
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
  background: linear-gradient(0deg, rgba(239,68,68,0.08), rgba(239,68,68,0.08));
  border-color: rgba(239,68,68,0.25);
}
.nav-link:focus-visible {
  outline: 2px solid #002060;
  outline-offset: 2px;
}
</style>
