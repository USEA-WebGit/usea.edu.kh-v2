<template>
  <div>
    <Titlebg title="Department Staff" breadcrumb="Department Staff" />
  </div>

  <div
    class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10"
    v-if="department"
  >
    <!-- Staff list -->
    <div class="flex flex-col gap-10 mb-10">
      <div
        v-for="(member, index) in department.members"
        :key="index"
        class="flex gap-10 overflow-hidden"
      >
        <img
          :src="member.image"
          alt="member"
          class="2xl:w-1/3 xl:w-1/2 h-[350px] object-cover transform transition-transform duration-300 hover:scale-105 rounded-md"
        />
        <div class="flex flex-col motion-preset-slide-left">
          <span class="text-2xl font-bold">{{ member.name }}</span>
          <div class="h-[1px] w-[50%] bg-gray-500 my-3"></div>
          <span class="font-bold">{{ member.position }}</span>
          <span v-if="member.number">{{ member.number }}</span>
          <span v-if="member.email">{{ member.email }}</span>
        </div>
      </div>
    </div>

    <!-- Sidebar (reusable) -->
    <div>
      <DepartmentSidebar
        :departmentKey="departmentKey"
        :routes="{ aboutDept: 'department-name', deptStaff: 'faculty-staff-language', major: 'major-name' }"
        :paramKeys="{
          departmentName: 'departmentName',
          departmentStaff: 'departmentStaff',
          majorDepartment: 'majorDepartment',
          majorDegree: 'majorDegree',
          majorName: 'majorName'
        }"
        :collapseOnMobile="true"
      />
    </div>
  </div>

  <!-- Fallback if key not found -->
  <div v-else class="mx-auto max-w-[800px] p-6 text-center text-gray-600">
    Department not found.
  </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue'
import { departments } from '@/data/department.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DepartmentSidebar from '@/components/SideBar/Department/DepartmentSidebar.vue'

// Route: /academic/department/:departmentStaff/department-staff
const route = useRoute()
const departmentKey = computed(() => route.params.departmentStaff)
const department = computed(() => departments[departmentKey.value])
</script>
