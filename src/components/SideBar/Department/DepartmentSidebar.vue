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
    <section class="space-y-3" v-if="department">
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
          :to="{ name: routes.aboutDept, params: { [paramKeys.departmentName]: departmentKey } }"
          class="nav-link"
          :class="{ active: isActive({ name: routes.aboutDept, params: { [paramKeys.departmentName]: departmentKey } }) }"
        >
          About Department
        </RouterLink>

        <RouterLink
          :to="{ name: routes.deptStaff, params: { [paramKeys.departmentStaff]: departmentKey } }"
          class="nav-link"
          :class="{ active: isActive({ name: routes.deptStaff, params: { [paramKeys.departmentStaff]: departmentKey } }) }"
        >
          Department's Staff
        </RouterLink>
      </nav>
    </section>

    <!-- Majors: dynamically render categories that exist -->
    <section class="space-y-3" v-for="cat in categories" :key="cat.key">
      <button
        class="w-full flex items-center justify-between"
        @click="toggleCategory(cat.key)"
        :aria-expanded="open.cats[cat.key]"
      >
        <span class="text-[#002060] text-xl font-bold">{{ cat.label }} +</span>
        <svg class="h-5 w-5 transition-transform" :class="open.cats[cat.key] ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.128l3.71-3.9a.75.75 0 011.08 1.04l-4.24 4.45a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
        </svg>
      </button>

      <nav v-show="open.cats[cat.key]" class="flex flex-col">
        <RouterLink
          v-for="major in department.majors[cat.key]"
          :key="major.params.majorName"
          :to="{ name: routes.major, params: {
            [paramKeys.majorDepartment]: major.params.majorDepartment,
            [paramKeys.majorDegree]: major.params.majorDegree,
            [paramKeys.majorName]: major.params.majorName
          }}"
          class="nav-link"
          :class="{ active: isActive({
            name: routes.major,
            params: {
              [paramKeys.majorDepartment]: major.params.majorDepartment,
              [paramKeys.majorDegree]: major.params.majorDegree,
              [paramKeys.majorName]: major.params.majorName
            }
          })}"
        >
          {{ major.name }}
        </RouterLink>
      </nav>
    </section>
  </aside>
</template>

<script setup>
import { reactive, computed, toRef, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { departments } from '@/data/department.js'

const props = defineProps({
  departmentKey: { type: String, required: true },
  routes: {
    type: Object,
    default: () => ({
      aboutDept: 'department-name',
      deptStaff: 'faculty-staff-language',
      major: 'major-name'
    })
  },
  paramKeys: {
    type: Object,
    default: () => ({
      departmentName: 'departmentName',
      departmentStaff: 'departmentStaff',
      majorDepartment: 'majorDepartment',
      majorDegree: 'majorDegree',
      majorName: 'majorName'
    })
  },
  collapseOnMobile: { type: Boolean, default: false }
})

const route = useRoute()
const departmentKey = toRef(props, 'departmentKey')
const department = computed(() => departments[departmentKey.value])

// Build category list based on existing majors
const categories = computed(() => {
  const m = department.value?.majors || {}
  const out = []
  if (m.general?.length) out.push({ key: 'general', label: 'General Chinese Programs' })
  if (m.associate?.length) out.push({ key: 'associate', label: "Associate's Degree" })
  if (m.bachelor?.length) out.push({ key: 'bachelor', label: "Bachelor's Degree" })
  return out
})

// Collapsible states
const open = reactive({ contact: true, cats: {} })

// Initialize category open states
watchEffect(() => {
  const init = {}
  for (const c of categories.value) init[c.key] = true
  open.cats = init
})

// Optional: collapse on mobile
if (props.collapseOnMobile && typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
  open.contact = false
  for (const k in open.cats) open.cats[k] = false
}

// Global expand/collapse
const allOpen = computed(() => {
  const catsAll = Object.values(open.cats).every(Boolean)
  return open.contact && catsAll
})
const toggleAll = () => {
  const next = !allOpen.value
  open.contact = next
  for (const k in open.cats) open.cats[k] = next
}
const toggleCategory = (key) => { open.cats[key] = !open.cats[key] }

// Active checker (supports name + params)
const isActive = (to) => {
  if (route.name !== to.name) return false
  if (to.params) {
    return Object.entries(to.params).every(([k, v]) => route.params[k] === v)
  }
  return true
}

// expose
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
