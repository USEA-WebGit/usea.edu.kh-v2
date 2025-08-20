<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import Titlebg from '@/components/Slide/TitleBg.vue'
import { recognitions } from '@/data/recognition.js'

const route = useRoute()
const slug = computed(() => route.params.slug)
const recData = computed(() => recognitions[slug.value])

// Build gallery: prefer images[], then image, then cover
const gallery = computed(() => {
  if (!recData.value) return []
  if (Array.isArray(recData.value.images) && recData.value.images.length) return recData.value.images
  if (recData.value.image) return [recData.value.image]
  if (recData.value.cover) return [recData.value.cover]
  return []
})

// Update document title whenever data changes
watch(recData, (val) => {
  document.title = `${val?.title || 'Recognition Detail'} - USEA`
}, { immediate: true })
</script>

<template>
  <div>
    <Titlebg
      :title="recData?.title || 'Recognition Detail'"
      :breadcrumb="recData?.title || 'Recognition Detail'"
    />
  </div>

  <div class="mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
    <div v-if="recData" class="container-fluid py-5">
      <div class="container py-5">
        <!-- Hero cover -->
        <!-- <div v-if="recData.cover" class="mb-8 overflow-hidden rounded-xl border border-gray-200 shadow">
          <img
            :src="recData.cover"
            :alt="`${recData.title} cover`"
            class="h-72 w-full object-cover"
            loading="eager"
          />
        </div> -->

        <div class="row">
          <div class="col-lg-12">
            <div class="mb-5">
              <div class="section-title position-relative mb-5">
                <h1 class="display-4 motion-preset-slide-up text-2xl text-usea_secondary font-bold">
                  {{ recData.title }}
                </h1>
              </div>

              <p class="text-justify text-xl mb-5">
                {{ recData.description }}
              </p>

              <div v-if="gallery.length" class="grid 2xl:grid-cols-3 gap-5">
                <img
                  v-for="(img, i) in gallery"
                  :key="i"
                  :src="img"
                  :alt="`${recData.title} - image ${i + 1}`"
                  class="w-full h-64 rounded-lg object-cover shadow motion-preset-slide-down"
                  loading="lazy"
                />
              </div>

              <!-- Back button -->
              <router-link
                :to="{ name: 'recognition' }"
                class="mt-8 inline-flex items-center gap-2 rounded-full bg-[#002060] px-5 py-2.5
                       font-medium text-white shadow-lg ring-1 ring-white/10 transition-all duration-300
                       hover:shadow-xl hover:brightness-110 focus:outline-none focus-visible:ring-2
                       focus-visible:ring-[#002060] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" class="size-5 -ml-0.5">
                  <path fill-rule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L6.414 9H16a1 1 0 110 2H6.414l3.293 3.293a1 1 0 010 1.414z"
                        clip-rule="evenodd" />
                </svg>
                <span>Back to all recognitions</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="py-16 text-center text-gray-500">
      Recognition not found.
      <router-link class="text-[#002060] underline" :to="{ name: 'recognition' }">
        Back to Recognition & Accreditation
      </router-link>
    </div>
  </div>
</template>
