<template>
  <div>
    <Titlebg title="Partnership" breadcrumb="Partnership" />

    <div
      class="mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%]"
    >
      <!-- Header + Controls -->
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6"
      >
        <div class="space-y-1">
          <h1 class="text-3xl font-bold text-[#002060]">Our Partnerships</h1>
          <p class="text-gray-600">
            Browse our local and international partners.
          </p>
        </div>

        <!-- View toggle -->
        <div
          class="inline-flex rounded-xl overflow-hidden border border-gray-200 shadow-sm"
        >
          <button
            class="px-4 py-2 text-sm font-medium transition hover:bg-gray-50"
            :class="
              viewMode === 'grid'
                ? 'bg-usea_secondary text-white hover:bg-usea_primary hover:text-white'
                : 'bg-white text-gray-700'
            "
            @click="viewMode = 'grid'"
            aria-label="Grid view"
            title="Grid view"
          >
            <!-- grid icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block align-[-2px]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 8v-8h8v8h-8z"
              />
            </svg>
            <span class="ml-2 hidden sm:inline">Grid</span>
          </button>
          <button
            class="px-4 py-2 text-sm font-medium transition hover:bg-gray-50"
            :class="
              viewMode === 'list'
                ? 'bg-usea_secondary text-white hover:bg-usea_primary hover:text-white'
                : 'bg-white text-gray-700 '
            "
            @click="viewMode = 'list'"
            aria-label="List view"
            title="List view"
          >
            <!-- list icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block align-[-2px]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
            <span class="ml-2 hidden sm:inline">List</span>
          </button>
        </div>
      </div>

      <!-- Local Partners -->
      <section class="mb-12">
        <h2 class="text-center font-bold mb-6 text-[32px] leading-tight">
          Our Local Partnerships
        </h2>

        <!-- GRID MODE -->
        <div
          v-if="viewMode === 'grid'"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <PartnerCard
            v-for="p in localPartner"
            :key="p.name + '-local'"
            :item="p"
          />
        </div>

        <!-- LIST MODE -->
        <div
          v-else
          class="divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden"
        >
          <PartnerRow
            v-for="p in localPartner"
            :key="p.name + '-local-list'"
            :item="p"
          />
        </div>
      </section>

      <!-- International Partners -->
      <section class="mb-16">
        <h2 class="text-center font-bold mb-6 text-[32px] leading-tight">
          Our International Partnerships
        </h2>

        <!-- GRID MODE -->
        <div
          v-if="viewMode === 'grid'"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <PartnerCard
            v-for="p in internationalPartner"
            :key="p.name + '-intl'"
            :item="p"
          />
        </div>

        <!-- LIST MODE -->
        <div
          v-else
          class="divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden"
        >
          <PartnerRow
            v-for="p in internationalPartner"
            :key="p.name + '-intl-list'"
            :item="p"
          />
        </div>
      </section>

      <!-- Optional right nav -->
      <!-- <RightNav /> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Titlebg from "@/components/Slide/TitleBg.vue";
// import RightNav from '@/components/SideBar/Right-Nav.vue'
import PartnerCard from "@/components/Partnership/PartnerCard.vue";
import PartnerRow from "@/components/Partnership/PartnerRow.vue";
// Assets
import knu from "@/assets/partnerships/knu.png";
import ku from "@/assets/partnerships/ku.png";
import acca from "@/assets/partnerships/acca.png";
import ke from "@/assets/partnerships/ke.png";
import aiac from "@/assets/partnerships/aiac-logo.svg";
import shinhanBank from "@/assets/partnerships/shinhan-logo.png";

/**
 * View mode: 'grid' | 'list'
 */
const viewMode = ref("grid");

/**
 * Data
 * Tip: you can move these to Pinia or fetch from your API later.
 */
const localPartner = [
  {
    logo: acca,
    name: "ACCA Cambodia",
    title: "Start your career in finance with ACCA",
    website: "https://www.accaglobal.com/gb/en.html",
  },
  {
    logo: ke,
    name: "Khmer Enterprise",
    title: "INSPIRE, CONNECT & TRANSFORM",
    website: "https://khmerenterprise.gov.kh/",
  },
  {
    logo: shinhanBank,
    name: "Shinhan Bank Cambodia",
    title: "Digital-first banking for Cambodia",
    website: "https://www.shinhan.com.kh/",
  },
  {
    logo: aiac,
    name: "Asian International Arbitration Centre",
    title: "Leading ADR institution in Asia",
    website: "https://www.aiac.world/",
  },
];

const internationalPartner = [
  {
    logo: knu,
    name: "Kunsan National University",
    title: "Standing by you to raise the value of the future",
    website: "https://www.kunsan.ac.kr/en/index.kunsan",
  },
  {
    logo: ku,
    name: "Kasetsart University",
    title: "Knowledge of the Land",
    website: "https://www.ku.ac.th/en/community-home",
  },
];
</script>
