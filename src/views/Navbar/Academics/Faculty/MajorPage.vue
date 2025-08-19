<template>
  <div>
    <Titlebg :title="major?.title || ''" :breadcrumb="major?.title || ''" />
  </div>

  <div
    v-if="major"
    class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10"
  >
    <div class="flex flex-col gap-5 mb-10">
      <img :src="major.image" :alt="major.title" class="h-[200px] w-full object-cover rounded-md" />

      <div
        v-for="(section, sIndex) in major.sections"
        :key="section.title || sIndex"
        class="flex flex-col gap-5"
      >
        <!-- Section Title -->
        <span class="font-bold text-2xl text-usea_secondary">
          {{ section.title }}
        </span>

        <!-- A) content as plain text -->
        <span
          v-if="typeof section.content === 'string'"
          class="text-xl text-justify "
        >
          {{ section.content }}
        </span>

        <!-- B) content as array -->
        <template v-else-if="Array.isArray(section.content)">
          <!-- B1) array of strings -->
          <ul
            v-if="section.content.every(i => typeof i === 'string')"
            class="ml-9 text-xl "
          >
            <li
              v-for="(item, i) in section.content"
              :key="i"
              class="flex items-start leading-loose gap-2 "
            >
              <i class="fa-solid fa-caret-right text-red-400 mt-3"></i>
              {{ item }}
            </li>
          </ul>

          <!-- B2) array of objects: [{ title, content: [] }] -->
          <div v-else class="text-xl">
            <div
              v-for="(group, gi) in section.content"
              :key="group.title || gi"
              class="mb-4"
            >
              <div class="font-bold  text-red-600 ml-5">
                {{ group.title }}
              </div>
              <ul class="ml-9 mt-2">
                <li
                  v-for="(line, li) in group.content"
                  :key="li"
                  class="flex items-start gap-2 leading-loose"
                >
                  <i class="fa-solid fa-caret-right text-red-400 mt-3"></i>
                  {{ line }}
                </li>
              </ul>
            </div>
          </div>
        </template>

        <!-- C) table -->
        <template v-else-if="section.table">
          <!-- Mobile cards (sm only) -->
          <div class="grid gap-3 md:hidden">
            <div
              v-for="(row, r) in section.table.rows"
              :key="'card-' + r"
              class="border border-gray-300 rounded-lg p-3"
            >
              <div class="font-semibold mb-2">
                {{ row[0] }}
              </div>
              <div
                v-if="row.length >= 3"
                class="space-y-1 text-sm"
              >
                <div class="flex justify-between">
                  <span class="text-gray-600">{{ section.table.headers[1] }}</span>
                  <span class="font-medium">{{ row[1] }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">{{ section.table.headers[2] }}</span>
                  <span class="font-medium">{{ row[2] }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- md+: scrollable table -->
          <div class="hidden md:block w-full overflow-x-auto">
            <table
              class="min-w-[560px] w-full border-collapse border border-gray-300 mt-3 text-base md:text-xl"
            >
              <thead>
                <tr class="bg-gray-200">
                  <th
                    v-for="(header, h) in section.table.headers"
                    :key="h"
                    class="border border-gray-300 px-4 py-2"
                    :class="{ 'text-center': h >= section.table.headers.length - 2 }"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, r) in section.table.rows" :key="r">
                  <td
                    v-for="(cell, c) in row"
                    :key="c"
                    class="border border-gray-300 px-4 py-2 align-top"
                    :class="[
                      c >= row.length - 2 ? 'text-center whitespace-nowrap' : 'whitespace-normal break-words'
                    ]"
                  >
                    {{ cell }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </div>
    </div>

    <div>
      <component :is="sidebarComponent" />
    </div>
  </div>

  <!-- Fallback if no major found -->
  <div v-else class="mx-auto max-w-xl p-6 text-center text-gray-600">
    មិនមានទិន្នន័យសម្រាប់មុខវិជ្ជានេះទេ។
  </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { majors } from '@/data/major.js'

import DepartmentEnglishSidebar from '@/components/SideBar/Department/DepartEnglish.vue'
import DepartmentChineseSidebar from '@/components/SideBar/Department/DepartChinese.vue'
import DepartmentKhmerSidebar from '@/components/SideBar/Department/DepartKhmer.vue'
import DepartmentITSidebar from '@/components/SideBar/Department/DepartIT.vue'
import DepartmentArchitectureSidebar from '@/components/SideBar/Department/DepartArchitecture.vue'
import DepartmentMathSidebar from '@/components/SideBar/Department/DepartMath.vue'
import DepartmentBusinessSidebar from '@/components/SideBar/Department/DepartBusiness.vue'
import DepartmentTourismSidebar from '@/components/SideBar/Department/DepartTourism.vue'
import DepartmentEconomicSidebar from '@/components/SideBar/Department/DepartEconomic.vue'
import DepartmentLawsSidebar from '@/components/SideBar/Department/DepartLaws.vue'
import DepartmentSocialScienceSidebar from '@/components/SideBar/Department/DepartSocialScience.vue'

const route = useRoute()

// Component mapping for easy scaling
const sidebarComponents = {
  DepartEnglish: DepartmentEnglishSidebar,
  DepartChinese: DepartmentChineseSidebar,
  DepartKhmer: DepartmentKhmerSidebar,
  DepartIT: DepartmentITSidebar,
  DepartArchitecture: DepartmentArchitectureSidebar,
  DepartMath: DepartmentMathSidebar,
  DepartBusiness: DepartmentBusinessSidebar,
  DepartTourism: DepartmentTourismSidebar,
  DepartEconomic: DepartmentEconomicSidebar,
  DepartLaws: DepartmentLawsSidebar,
  DepartSocialScience: DepartmentSocialScienceSidebar,
}

const majorDepartment = computed(() => route.params.majorDepartment)
const majorDegree = computed(() => route.params.majorDegree)
const majorName = computed(() => route.params.majorName)

const major = computed(() => {
  const department = majors[majorDepartment.value]
  if (!department) return null
  const degreeList = department[majorDegree.value]
  if (!degreeList) return null
  return degreeList.find(m => m.id === majorName.value) || null
})

// Get the correct sidebar component
const sidebarComponent = computed(() => {
  return sidebarComponents[major.value?.sidebarComponent] || null
})

const activeTab = ref(0) // (kept if you reuse tabs later)
</script>
