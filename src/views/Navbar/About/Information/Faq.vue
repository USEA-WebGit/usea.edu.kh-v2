<template>
  <div>
    <Titlebg title="FAQ" breadcrumb="FAQ" />
  </div>

  <div
    class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto
           2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
    <!-- Left -->
    <div class="mx-auto w-full max-w-2xl divide-y divide-gray-200">
      <div v-for="(item, i) in items" :key="item.title" class="py-4">
        <!-- Header -->
        <button
          type="button"
          class="w-full flex items-center justify-between text-left"
          @click="toggle(i)"
          :aria-expanded="openIndex === i"
          :aria-controls="'acc-panel-'+i"
          :id="'acc-button-'+i"
        >
          <span class="text-lg font-semibold">{{ item.title }}</span>
          <svg
            class="size-5 shrink-0 transition-transform"
            :class="openIndex === i ? 'rotate-180' : ''"
            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clip-rule="evenodd" />
          </svg>
        </button>

        <!-- Panel -->
        <div
          :id="'acc-panel-'+i"
          role="region"
          :aria-labelledby="'acc-button-'+i"
          class="mt-3 overflow-hidden transition-[max-height] duration-300 ease-in-out"
          :class="openIndex === i ? 'max-h-[600px]' : 'max-h-0'"
        >
          <p class="text-gray-600 pb-4 pr-1">
            {{ item.content }}
          </p>
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
import Titlebg from '@/components/Slide/TitleBg.vue'
import RightNav from '@/components/SideBar/Right-Nav.vue'
import { ref } from 'vue'

const items = [
  { title: 'What is USEA?', content: 'The University of South-East Asia (USEA) is …' },
  { title: 'Admissions & Requirements', content: 'High school certificate, application form, entrance exam…' },
  { title: 'Scholarships', content: 'Merit-based and need-based scholarships are available.' },
]

const openIndex = ref(null) // set to 0 if you want the first item open by default

const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>
