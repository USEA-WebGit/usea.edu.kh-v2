<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue'
import RightNav from '@/components/SideBar/Right-Nav.vue'
import { recognitions } from '@/data/recognition.js'

// turn the map into an array with slug for v-for
const items = Object.entries(recognitions).map(([slug, v]) => ({ slug, ...v }))
</script>

<template>
  <div>
    <Titlebg title="Recognition & Accreditation" breadcrumb="Recognition & Accreditation" />
  </div>

  <div
    class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto
           2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px]
           gap-10 mb-10"
  >
    <div class="flex flex-col gap-10">
      <div v-for="card in items" :key="card.slug" class="grid 2xl:grid-cols-2 xl:grid-cols-2 gap-5">
        <!-- Cover image -->
        <div class="overflow-hidden rounded-lg border border-gray-300 shadow-xl">
          <img
            :src="card.cover || card.image || (card.images && card.images[0])"
            :alt="card.title"
            class="h-64 w-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        <!-- Text + button -->
        <div class="flex flex-col">
          <h2 class="font-bold text-2xl text-center mb-5">
            {{ card.title }}
          </h2>

          <p class="text-xl text-justify clamp-3">
            {{ card.description }}
          </p>

          <router-link
            :to="{ name: 'recognition-detail', params: { slug: card.slug } }"
            class="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-[#002060] px-5 py-2.5
                   font-medium text-white shadow-lg ring-1 ring-white/10 transition-all duration-300
                   hover:shadow-xl hover:brightness-110 focus:outline-none focus-visible:ring-2
                   focus-visible:ring-[#002060] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <span>Read more</span>
            <svg
              class="size-5 -mr-0.5 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            >
              <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>

    <div>
      <RightNav />
    </div>
  </div>
</template>

<style scoped>
/* 3-line clamp without Tailwind plugin */
.clamp-3{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
