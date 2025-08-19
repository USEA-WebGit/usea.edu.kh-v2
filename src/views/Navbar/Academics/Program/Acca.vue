<template>
  <div>
    <Titlebg title="ACCA" breadcrumb="ACCA" />
  </div>

  <!-- Main container -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[2fr_1fr]">
    <!-- LEFT -->
    <div class="flex flex-col gap-8 mb-10">
      <!-- PROGRAM DESCRIPTION -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-center">
        <div class="flex flex-col gap-4">
          <h2 class="font-bold text-2xl sm:text-3xl text-usea_secondary">PROGRAM DESCRIPTION</h2>
          <p class="text-base sm:text-lg leading-7 text-justify">
            University of South-East Asia (USEA), based in Siem Reap Province, was formally awarded
            the ACCA Computer-Based Examination Centre License on 23 August 2021 and has become a
            place for every ACCA student from around the world to take ACCA courses and CBE examinations
            in Siem Reap city. ACCA (The Association of Chartered Certified Accountants) is a global
            body for professional accountants, operating in more than 183 countries worldwide.
          </p>
        </div>
        <div class="flex justify-center md:justify-center">
          <img
            :src="acca"
            alt="ACCA logo"
            class="w-2/3 sm:w-1/2 md:w-4/5 lg:w-2/3 xl:w-1/2 h-40 sm:h-48 md:h-56 object-contain"
          />
        </div>
      </section>

      <!-- FOUNDATIONS IN ACCOUNTANCY -->
      <section class="flex flex-col gap-4">
        <h3 class="font-bold text-2xl sm:text-3xl text-usea_secondary">FOUNDATIONS IN ACCOUNTANCY</h3>
        <p class="text-base sm:text-lg">Why study Certified Accounting Technician (CAT) with USEA?</p>
        <p class="text-base sm:text-lg">
          Upon successful completion of this program, candidates will receive a globally-recognized
          ACCA Diploma of Certified Accounting Technician (CAT) and should be able to:
        </p>

        <ul class="mt-2 space-y-3 text-base sm:text-lg leading-7">
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Describe the main types of business transactions and documentation and how these are
            recorded up to the trial balance stage.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Provide basic management information to support planning and decision-making.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Apply principles for maintaining financial records with double-entry techniques and prepare
            basic financial statements.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Prepare, process, and present basic cost information to support management decisions.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Explain how organizational environments influence structures and the roles of accounting and
            other functions—including interactions with technology, data, and information systems.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Use management accounting techniques to plan, control, and monitor performance.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Explain and apply financial accounting principles using double-entry techniques to prepare
            basic financial statements.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Explain and apply external audit principles and the audit process, including key skills for
            auditing financial statements.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Explain ways organizations finance operations, plan cash flows, manage working capital, and
            allocate resources to long-term investments.
          </li>
        </ul>
      </section>

      <!-- ADMISSION -->
      <section class="flex flex-col gap-4">
        <h3 class="font-bold text-2xl sm:text-3xl text-usea_secondary">ADMISSION</h3>
        <p class="text-base sm:text-lg">To register into the program, a student must:</p>
        <ul class="mt-2 space-y-3 text-base sm:text-lg leading-7">
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Hold at least a high school diploma or equivalent.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Have English at intermediate level.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Pay ACCA registration and annual subscription fees.
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-caret-right text-red-400 ml-5 mt-2"></i>
            Pay tuition fees to the International College at University of South-East Asia.
          </li>
        </ul>
      </section>

      <!-- (Optional) Curriculum tabs block you commented out can be re-enabled here -->
    </div>

    <!-- RIGHT (sticky sidebar) -->
    <aside class="lg:sticky lg:top-28 h-max">
      <RightIC />
    </aside>
  </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue'
import RightIC from '@/components/SideBar/RightIC.vue'
import acca from '@/assets/partnerships/acca.png'

// --- If you later need the 'major' and sidebars, keep your script below.
// For this responsive pass, they’re not required to render the page ---
/*
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { majors } from '@/data/major.js'
import DepartmentEnglishSidebar from '@/components/SideBar/Department/DepartEnglish.vue'
...
*/
</script>
