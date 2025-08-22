<template>
  <div>
    <Titlebg title="Faculty Staff" breadcrumb="Faculty Staff" />
  </div>

  <div
    v-if="faculty"
    class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10"
  >
    <!-- Staff list -->
    <div class="flex flex-col gap-10 mb-10">
      <div
        v-for="(member, index) in faculty.members"
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

    <!-- Reusable Faculty Sidebar -->
    <div>
      <FacultySidebar
        :facultyKey="facultyKey"
        :routes="{
          about: 'faculty-page',
          staff: 'faculty-staff',
          department: 'department-name',
        }"
        :paramKeys="{ about: 'facultyName', staff: 'facultyStaff' }"
        :collapseOnMobile="true"
      />
    </div>
  </div>

  <!-- Fallback -->
  <div v-else class="mx-auto max-w-[800px] p-6 text-center text-gray-600">
    Faculty not found.
  </div>
</template>

<script setup>
import Titlebg from "@/components/Slide/TitleBg.vue";
import { faculties } from "@/data/faculty.js";
import { computed } from "vue";
import { useRoute } from "vue-router";
import FacultySidebar from "@/components/SideBar/FacultySidebar.vue";

// Route: /academic/faculty/:facultyStaff/faculty-staff
const route = useRoute();
const facultyKey = computed(() => route.params.facultyStaff);
const faculty = computed(() => faculties[facultyKey.value]);
</script>
