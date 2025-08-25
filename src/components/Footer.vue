<template>
  <footer class="bg-[#002060] text-white">
    <!-- Top -->
    <div
      class="mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] grid gap-10 p-8 lg:p-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      <!-- Brand + Newsletter -->
      <section class="flex flex-col gap-4">
        <RouterLink
          :to="{ name: 'Home' }"
          class="flex flex-col justify-center items-center gap-3"
        >
          <img
            :src="UseaLogo"
            alt="USEA logo"
            class="w-32 h-32 object-contain rounded-lg"
          />
          <div class="leading-tight">
            <p class="font-extrabold text-lg">University of South-East Asia</p>
            <p class="text-white/70 text-sm">Siem Reap, Cambodia</p>
          </div>
        </RouterLink>

        <p class="text-white/80 text-sm">
          Empowering students through quality education, research, and community
          engagement.
        </p>

        <!-- Socials -->
        <div class="flex gap-3">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.href"
            target="_blank"
            class="p-2"
          >
            <i :class="s.icon + ' text-xl hover:text-[#ffcc00] transition'"></i>
          </a>
        </div>
      </section>

      <!-- Quick Links -->
      <nav class="flex flex-col gap-5">
        <h3 class="font-bold text-xl">Quick Links</h3>
        <ul class="space-y-2 text-white/90">
          <li v-for="item in quickLinks" :key="item.label">
            <RouterLink
              :to="item.to"
              class="inline-flex items-center gap-2 hover:translate-x-1 transition hover:text-[#ffcc00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              <span class="i-dot" />
              <span class="font-medium">{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Faculties -->
      <nav class="flex flex-col gap-5">
        <h3 class="font-bold text-xl">Faculty & Information</h3>
        <ul class="space-y-2 text-white/90">
          <li v-for="item in faculties" :key="item.label">
            <RouterLink
              :to="item.to"
              class="inline-flex items-center gap-2 hover:translate-x-1 transition hover:text-[#ffcc00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              <span class="i-dot" />
              <span class="font-medium">{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Contact -->
      <section class="flex flex-col gap-5">
        <h3 class="font-bold text-xl">Contact Us</h3>
        <ul class="space-y-3 text-white/90">
          <li class="leading-relaxed">
            <span class="font-semibold">Address:</span>
            Wat Bo Village, SangKat Salakamroek, Siem Reap (Opposite Angkor High
            School)
          </li>
          <li class="flex items-center gap-2">
            <i class="fa-solid fa-phone"></i> (+855) 63 900 090
          </li>
          <li class="flex items-center gap-2">
            <i class="fa-solid fa-phone"></i> (+855) 92 429 966
          </li>
          <li class="flex items-center gap-2">
            <i class="fa-solid fa-phone"></i> (+855) 77 667 873
          </li>
          <li>
            <a
              href="mailto:info@usea.edu.kh"
              class="inline-flex items-center gap-2 hover:text-[#ffcc00] transition"
            >
              <i class="fa-solid fa-envelope"></i> info@usea.edu.kh
            </a>
          </li>
        </ul>
      </section>
    </div>

    <!-- Divider -->
    <div
      class="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
    />

    <!-- Bottom -->
    <div class="text-center px-4 py-6 text-white/80 text-sm">
      © {{ year }} University of South-East Asia. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import UseaLogo from "@/assets/title/logo_update.png";

const year = new Date().getFullYear();

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/usea.edu.kh",
    icon: "fab fa-facebook-f",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@usea-edu-kh",
    icon: "fab fa-youtube",
  },
  {
    label: "Telegram",
    href: "https://t.me/university_of_south_east_asia",
    icon: "fab fa-telegram-plane",
  },
];

const quickLinks = [
  { label: "History & Logo Meaning", to: { name: "history" } },
  { label: "Vision & Mission", to: { name: "vision" } },
  { label: "Location", to: { name: "location" } },
  { label: "Message from President", to: { name: "message" } },
  { label: "Board of Trustees", to: { name: "board-trustee" } },
  { label: "Recognition & Accreditation", to: { name: "recognition" } },
];

const faculties = [
  {
    label: "Faculty of Economics, Business & Tourism",
    to: {
      name: "faculty-page",
      params: { facultyName: "economics-business-tourism" },
    },
  },
  {
    label: "Faculty of Sciences & Technology",
    to: { name: "faculty-page", params: { facultyName: "science-technology" } },
  },
  {
    label: "Faculty of Social Science & Law",
    to: { name: "faculty-page", params: { facultyName: "social-science-law" } },
  },
  {
    label: "Faculty of Arts Humanities Language",
    to: {
      name: "faculty-page",
      params: { facultyName: "arts-humanities-languages" },
    },
  },
  { label: "Events & News", to: { name: "news-events" } },
  { label: "FAQ", to: { name: "faq" } },
];
</script>

<style scoped>
/* tiny decorative dot before links */
.i-dot {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.6);
  display: inline-block;
}
</style>
