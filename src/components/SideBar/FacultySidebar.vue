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
    <section class="space-y-3" v-if="faculty">
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
        <!-- About -->
        <RouterLink
          :to="{
            name: routes.about,
            params: { [paramKeys.about]: facultyKey }
          }"
          class="nav-link"
          :class="{
            active: isActive({
              name: routes.about,
              params: { [paramKeys.about]: facultyKey }
            })
          }"
        >
          About Faculty
        </RouterLink>

        <!-- Staff -->
        <RouterLink
          :to="{
            name: routes.staff,
            params: { [paramKeys.staff]: facultyKey }
          }"
          class="nav-link"
          :class="{
            active: isActive({
              name: routes.staff,
              params: { [paramKeys.staff]: facultyKey }
            })
          }"
        >
          Faculty's Staff
        </RouterLink>
      </nav>
    </section>

    <!-- Departments -->
    <section class="space-y-3" v-if="faculty?.departments?.length">
      <button
        class="w-full flex items-center justify-between"
        @click="open.department = !open.department"
        :aria-expanded="open.department"
      >
        <span class="text-[#002060] text-xl font-bold">Department +</span>
        <svg class="h-5 w-5 transition-transform" :class="open.department ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.128l3.71-3.9a.75.75 0 011.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
        </svg>
      </button>

      <nav v-show="open.department" class="flex flex-col">
        <RouterLink
          v-for="dep in faculty.departments"
          :key="dep.params?.departmentName || dep.name"
          :to="{
            name: routes.department,
            params: { departmentName: dep.params?.departmentName }
          }"
          class="nav-link"
          :class="{
            active: isActive({
              name: routes.department,
              params: { departmentName: dep.params?.departmentName }
            })
          }"
        >
          {{ dep.name }}
        </RouterLink>
      </nav>
    </section>
  </aside>
</template>

<script setup>
import { reactive, computed, watch, toRef } from 'vue'
import { useRoute } from 'vue-router'
import { faculties } from '@/data/faculty' // <-- adjust path if different

/**
 * Props:
 * - facultyKey: key of the faculty in faculties object, e.g. 'science-technology'
 * - routes: route name map (override if your names differ)
 * - paramKeys: param keys for about/staff (defaults match your older sidebars)
 * - collapseOnMobile: start collapsed on < md
 */
const props = defineProps({
  facultyKey: { type: String, required: true },
  routes: {
    type: Object,
    default: () => ({
      about: 'faculty-page',
      staff: 'faculty-staff',
      department: 'department-name'
    })
  },
  paramKeys: {
    type: Object,
    default: () => ({
      about: 'facultyName',  // older pattern
      staff: 'facultyStaff'  // older pattern
      // If you use unified param (e.g. 'faculty'), pass { about:'faculty', staff:'faculty' }
    })
  },
  collapseOnMobile: { type: Boolean, default: false }
})

const route = useRoute()

// Resolve faculty data by key (reactive)
const facultyKey = toRef(props, 'facultyKey')
const faculty = computed(() => faculties[facultyKey.value])

// Open states
const open = reactive({ contact: true, department: true })

// Auto-collapse on mobile if requested
const maybeCollapseForMobile = () => {
  if (!props.collapseOnMobile) return
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
    open.contact = false
    open.department = false
  }
}
maybeCollapseForMobile()

// Re-evaluate on faculty change (optional)
watch(facultyKey, () => {
  // keep current open states, or reset if you prefer:
  // open.contact = true; open.department = true
})

// Global toggle
const allOpen = computed(() => open.contact && open.department)
const toggleAll = () => {
  const next = !allOpen.value
  open.contact = next
  open.department = next
}

// Active checker (name + params)
const isActive = (to) => {
  if (route.name !== to.name) return false
  if (to.params) {
    return Object.entries(to.params).every(([k, v]) => route.params[k] === v)
  }
  return true
}

// Expose for template
const routes = toRef(props, 'routes')
const paramKeys = toRef(props, 'paramKeys')
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
  background: linear-gradient(0deg, rgba(239,68,68,0.08), rgba(239,68,68,0.08));
  border-color: rgba(239,68,68,0.25);
}
.nav-link:focus-visible {
  outline: 2px solid #002060;
  outline-offset: 2px;
}
</style>
