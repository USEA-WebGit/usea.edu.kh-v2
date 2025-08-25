<template>
  <section class="py-12">
    <!-- Title -->
    <div class="text-center mb-10">
      <h2
        class="font-bold text-usea_secondary 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2.3rem] md:text-[2.3rem] sm:text-[2.3rem] text-[1.5rem]"
      >
        OUR PARTNERS
      </h2>
      <div class="h-1 w-16 mx-auto bg-usea_secondary rounded-full"></div>
    </div>

    <!-- Carousel -->
    <div
      class="relative overflow-hidden rounded-2xl bg-white border border-gray-200"
      role="region"
      aria-roledescription="carousel"
      aria-label="Partner logos"
      @mouseenter="pause()"
      @mouseleave="play()"
    >
      <!-- Edge fades -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"
      ></div>

      <!-- Track -->
      <div class="overflow-hidden">
        <ul
          class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <!-- Slide -->
          <li
            v-for="(slide, sIdx) in slides"
            :key="'slide-' + sIdx"
            class="w-full flex-shrink-0"
            role="group"
            :aria-roledescription="'slide'"
            :aria-label="`Slide ${sIdx + 1} of ${slides.length}`"
          >
            <div
              class="grid items-center justify-items-center gap-10 py-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            >
              <component
                v-for="(p, i) in slide"
                :is="p.href ? 'a' : 'div'"
                :key="`logo-${sIdx}-${i}-${p.alt}`"
                :href="p.href"
                target="_blank"
                rel="noopener"
                class="group block"
                title="Open partner website"
              >
                <img
                  :src="p.src"
                  :alt="p.alt"
                  class="h-14 sm:h-16 md:h-20 w-auto object-contain transition duration-300 group-hover:scale-[1.04] group-hover:drop-shadow-md"
                  loading="lazy"
                />
              </component>
            </div>
          </li>
        </ul>
      </div>

      <!-- Controls -->
      <button
        type="button"
        class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow hover:bg-white"
        @click="prev"
        :aria-label="'Previous slide'"
      >
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M12.293 15.707a1 1 0 010-1.414L14.586 12H5a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          />
        </svg>
      </button>
      <button
        type="button"
        class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow hover:bg-white"
        @click="next"
        :aria-label="'Next slide'"
      >
        <svg class="w-5 h-5 rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M12.293 15.707a1 1 0 010-1.414L14.586 12H5a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          />
        </svg>
      </button>

      <!-- Dots -->
      <div
        class="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2"
      >
        <button
          v-for="(slide, i) in slides"
          :key="'dot-' + i"
          class="h-2.5 w-2.5 rounded-full transition"
          :class="
            i === activeIndex
              ? 'bg-usea_secondary'
              : 'bg-gray-300 hover:bg-gray-400'
          "
          @click="go(i)"
          :aria-label="`Go to slide ${i + 1}`"
          :aria-current="i === activeIndex ? 'true' : 'false'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  partners: { type: Array, default: () => [] },
});

/** Demo logos if none are passed */
import knu from "@/assets/partnerships/knu.png";
import ku from "@/assets/partnerships/ku.png";
import acca from "@/assets/partnerships/acca.png";
import ke from "@/assets/partnerships/ke.png";
import aiac from "@/assets/partnerships/aiac-logo.svg";
import shinhanBank from "@/assets/partnerships/shinhan-logo.png";

const fallbackPartners = [
  {
    src: knu,
    alt: "Kunsan National University",
    href: "https://www.kunsan.ac.kr/en/index.kunsan",
  },
  {
    src: ku,
    alt: "Kasetsart University",
    href: "https://www.ku.ac.th/en/community-home",
  },
  { src: acca, alt: "ACCA", href: "https://www.accaglobal.com/gb/en.html" },
  { src: aiac, alt: "AIAC", href: "https://www.aiac.world/" },
  { src: ke, alt: "Khmer Enterprise", href: "https://khmerenterprise.gov.kh/" },
  {
    src: shinhanBank,
    alt: "Shinhan Bank Cambodia",
    href: "https://www.shinhan.com.kh/",
  },
];

const list = computed(() =>
  props.partners?.length ? props.partners : fallbackPartners
);

/** Responsive items per slide */
const perSlide = ref(5);
const computePerSlide = () => {
  const w = window.innerWidth;
  perSlide.value = w >= 1024 ? 5 : w >= 640 ? 3 : 2;
};

/** Build slides */
const slides = computed(() => {
  const n = Math.max(1, perSlide.value);
  const src = [...list.value];
  const out = [];
  for (let i = 0; i < src.length; i += n) out.push(src.slice(i, i + n));
  const last = out[out.length - 1];
  if (last && last.length < n) {
    const need = n - last.length;
    last.push(...src.slice(0, need));
  }
  return out.length ? out : [src.slice(0, n)];
});

/** Carousel state */
const activeIndex = ref(0);
const next = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.value.length;
};
const prev = () => {
  activeIndex.value =
    (activeIndex.value - 1 + slides.value.length) % slides.value.length;
};
const go = (i) => {
  activeIndex.value = i;
};

/** Autoplay */
let timer = null;
const intervalMs = 3500;
const play = () => {
  clearInterval(timer);
  timer = setInterval(next, intervalMs);
};
const pause = () => {
  clearInterval(timer);
};

/** Lifecycle */
onMounted(() => {
  computePerSlide();
  window.addEventListener("resize", computePerSlide, { passive: true });
  play();
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", computePerSlide);
  pause();
});
</script>
