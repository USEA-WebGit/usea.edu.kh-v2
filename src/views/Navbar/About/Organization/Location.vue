<template>
  <div>
    <Titlebg title="Location" breadcrumb="Location" />
  </div>

  <div
    class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10"
  >
    <!-- Left -->
    <div class="flex flex-col gap-6 mt-4">
      <!-- Section Heading -->
      <div class="text-center">
        <h2
          class="text-usea_secondary font-bold 2xl:text-[2rem] xl:text-[1.8rem] lg:text-[1.8rem] md:text-[1.8rem] text-[1.4rem]"
        >
          CONTACT & LOCATION
        </h2>
        <div
          class="h-1 w-[5%] mx-auto bg-usea_secondary rounded-full mt-2"
        ></div>
      </div>

      <!-- Info Cards -->
      <div
        class="grid gap-4 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <!-- Address -->
        <div
          class="rounded-xl border border-usea_secondary/15 bg-white p-5 hover:shadow-sm transition"
        >
          <div class="flex items-start gap-3">
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-usea_secondary/10 text-usea_secondary"
            >
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-usea_secondary">Address</h3>
              <p class="mt-2 text-gray-700 leading-relaxed">
                {{ address }}
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <a
                  :href="gmapsDirections"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 rounded-md border border-usea_secondary px-3 py-1.5 text-sm text-usea_secondary hover:bg-usea_secondary hover:text-white transition"
                  title="Open directions in Google Maps"
                >
                  <i class="fa-solid fa-route"></i> Get directions
                </a>
                <button
                  @click="copy(address)"
                  class="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 transition"
                  title="Copy address"
                >
                  <i class="fa-regular fa-copy"></i> Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div
          class="rounded-xl border border-usea_secondary/15 bg-white p-5 hover:shadow-sm transition"
        >
          <div class="flex items-start gap-3">
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-usea_secondary/10 text-usea_secondary"
            >
              <i class="fa-solid fa-share-nodes"></i>
            </span>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-usea_secondary">
                Social Media
              </h3>
              <div class="mt-3 flex flex-wrap items-center gap-3">
                <a
                  v-for="s in socials"
                  :key="s.label"
                  :href="s.href"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full border border-usea_secondary/30 text-usea_secondary hover:bg-usea_secondary hover:text-white transition"
                  :aria-label="s.label"
                  :title="s.label"
                >
                  <i :class="s.icon + ' text-lg'"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Phone -->
        <div
          class="rounded-xl border border-usea_secondary/15 bg-white p-5 hover:shadow-sm transition"
        >
          <div class="flex items-start gap-3">
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-usea_secondary/10 text-usea_secondary"
            >
              <i class="fa-solid fa-phone"></i>
            </span>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-usea_secondary">Phone</h3>
              <ul class="mt-3 space-y-2 text-gray-800">
                <li
                  v-for="(p, i) in phones"
                  :key="i"
                  class="flex items-center gap-2"
                >
                  <i
                    class="fa-solid fa-circle text-[6px] text-usea_secondary/70"
                  ></i>
                  <a
                    :href="`tel:${p.replace(/\\s+/g, '')}`"
                    class="hover:text-usea_secondary"
                    >{{ p }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Card -->
      <div
        class="rounded-xl border border-usea_secondary/15 bg-white hover:shadow-sm transition overflow-hidden"
      >
        <div class="p-4 flex items-center justify-between">
          <h3 class="text-lg font-semibold text-usea_secondary">Map</h3>
          <a
            :href="gmapsPlace"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-usea_secondary"
            title="Open in Google Maps"
          >
            <i class="fa-brands fa-google"></i> Open in Google Maps
          </a>
        </div>
        <div class="h-[360px]">
          <GoogleMap />
        </div>
      </div>
    </div>

    <!-- Right -->
    <div>
      <RightNav />
    </div>
  </div>
</template>

<script setup>
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightNav from "@/components/SideBar/Right-Nav.vue";
import GoogleMap from "@/components/GoogleMap.vue";
import { computed } from "vue";

// Content (edit as needed)
const address =
  "Wat Bo Village, SangKat Salakamroek, Siem Reap Municipality, Cambodia (Opposite Angkor High School)";
const phones = ["(+855) 63 900 090", "(+855) 92 429 966", "(+855) 77 667 873"];

const socials = [
  { label: "Facebook", icon: "fab fa-facebook-f", href: "#" },
  { label: "Telegram", icon: "fab fa-telegram", href: "#" },
  { label: "YouTube", icon: "fab fa-youtube", href: "#" },
];

// Google Maps links from address
const gmapsDirections = computed(
  () =>
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address
    )}`
);
const gmapsPlace = computed(
  () =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`
);

// Copy helper
const copy = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {}
};
</script>

<style scoped>
/* Tailwind handles visuals; no extra CSS needed */
</style>
