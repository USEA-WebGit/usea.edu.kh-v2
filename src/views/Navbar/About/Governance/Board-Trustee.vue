<template>
  <div>
    <Titlebg title="Board of Trustees" breadcrumb="Board of Trustees" />
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-[65%_35%] lg:grid-cols-[70%_30%] mx-auto
           2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-6 md:gap-10"
  >
    <!-- Left -->
    <div class="flex flex-col mb-10 gap-6 md:gap-10">
      <!-- Selected Board Member Details -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
        <div class="order-2 md:order-1 space-y-2">
          <span class="font-bold text-xl sm:text-2xl md:text-3xl">{{ selectedBoard.name }}</span>
          <p class="text-base sm:text-lg md:text-xl text-gray-700 leading-snug">{{ selectedBoard.position }}</p>
        </div>
        <div class="order-1 md:order-2 overflow-hidden rounded-lg border border-gray-300 shadow-lg">
          <img
            :src="selectedBoard.img"
            alt="selected-board-image"
            class="w-full h-[250px] sm:h-[320px] md:h-[360px] lg:h-[420px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <!-- Carousel -->
      <div class="relative">
        <div class="flex items-center gap-3 mt-2 md:mt-4 py-3 px-10 md:px-12 rounded-lg relative overflow-hidden">
          <!-- Prev -->
          <button
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 md:p-3 rounded-full hover:bg-red-700 z-10 disabled:opacity-40 disabled:cursor-not-allowed"
            @click="scrollLeft"
            :disabled="startIndex <= 0"
            aria-label="Previous"
          >
            ‹
          </button>

          <!-- Visible items -->
          <div class="w-full overflow-hidden">
            <div class="flex gap-3 md:gap-4 transition-transform duration-300 ease-out">
              <div
                v-for="(board, index) in visibleBoards"
                :key="board.name"
                class="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36
                       flex flex-col items-center rounded-xl cursor-pointer p-2 transition-all border border-transparent"
                :class="[
                  'snap-start',
                  selectedIndex === (startIndex + index)
                    ? 'bg-gray-100 ring-2 ring-red-500'
                    : 'hover:border hover:border-gray-300'
                ]"
                @click="selectBoard(startIndex + index)"
              >
                <img
                  :src="board.img"
                  :alt="board.name"
                  class="object-cover rounded-full transition-transform duration-300 hover:scale-105
                         w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                />
                <span class="font-semibold text-sm sm:text-base text-center mt-2 leading-tight line-clamp-2">
                  {{ board.name }}
                </span>
                <p class="text-xs sm:text-sm text-gray-600 text-center line-clamp-2">
                  {{ board.position }}
                </p>
              </div>
            </div>
          </div>

          <!-- Next -->
          <button
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 md:p-3 rounded-full hover:bg-red-700 z-10
                   disabled:opacity-40 disabled:cursor-not-allowed"
            @click="scrollRight"
            :disabled="startIndex >= boards.length - itemsToShow"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        <!-- Dots -->
        <div class="flex justify-center gap-1 mt-2">
          <span
            v-for="(board, i) in boards"
            :key="'dot-' + board.name"
            class="inline-block w-1.5 h-1.5 rounded-full"
            :class="i === selectedIndex ? 'bg-gray-800' : 'bg-gray-400'"
          />
        </div>
      </div>
    </div>

    <!-- Right -->
    <div class="px-2 md:px-0">
      <RightNav />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

import Titlebg from '@/components/Slide/TitleBg.vue'
import RightNav from '@/components/SideBar/Right-Nav.vue'

import MeanSothy from '@/assets/images/dr_mean_sothy.png'
import YoeungSothan from '@/assets/images/dr_sothan.png'
import JivReakSmey from '@/assets/images/j_reaksmey.png'
import YimChanVisal from '@/assets/images/mr_yim_chanvisal.png'
import TatBunSeang from '@/assets/images/tat_bunseang.png'
import TealYuLong from '@/assets/images/teal_youlong.png'
import SaSokNgim from '@/assets/images/sa_sokngim.png'
import leangTaingSoth from '@/assets/images/leang_taingsoth.png'

// Data
const boards = [
  { img: MeanSothy, name: 'Dr. Mean Sothy', position: 'President' },
  { img: YoeungSothan, name: 'Dr. Yoeung Sothan', position: 'Vice President' },
  { img: JivReakSmey, name: 'Mr. Jiv Reaksmey', position: 'Vice President' },
  { img: YimChanVisal, name: 'Mr. Yim Chanvisal', position: 'Vice President' },
  { img: TealYuLong, name: 'Mr. Teal Yulong', position: 'Dean of Faculty Economic Business and Tourism' },
  { img: SaSokNgim, name: 'Mrs. Sa Sokngim', position: 'Dean of Faculty Sciences and Technology' },
  { img: leangTaingSoth, name: 'Mr.Leang Taingsoth', position: 'Dean of Faculty Social Science and Law' },
  { img: TatBunSeang, name: 'Mr. Tat Bunseang', position: 'Director of IT Center' },
]

// State
const startIndex = ref(0)
const selectedIndex = ref(0)
const selectedBoard = ref(boards[selectedIndex.value])

// Responsive items to show
const itemsToShow = ref(5) // default for lg+

function computeItemsToShow() {
  const w = window.innerWidth
  if (w < 640) itemsToShow.value = 2          // < sm
  else if (w < 768) itemsToShow.value = 3     // sm
  else if (w < 1024) itemsToShow.value = 4    // md
  else itemsToShow.value = 5                  // lg+
}

onMounted(() => {
  computeItemsToShow()
  window.addEventListener('resize', computeItemsToShow)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', computeItemsToShow)
})

// Keep window valid on resize
watch(itemsToShow, () => {
  const maxStart = Math.max(0, boards.length - itemsToShow.value)
  if (startIndex.value > maxStart) startIndex.value = maxStart
})

// Derived
const visibleBoards = computed(() =>
  boards.slice(startIndex.value, startIndex.value + itemsToShow.value)
)

// Actions
const scrollLeft = () => {
  if (startIndex.value > 0) startIndex.value--
}

const scrollRight = () => {
  if (startIndex.value < boards.length - itemsToShow.value) startIndex.value++
}

const selectBoard = (index) => {
  selectedIndex.value = index
  selectedBoard.value = boards[index]
}
</script>

<style scoped>
/* Smooth touch behavior & snap on mobile */
@media (max-width: 767px) {
  .snap-start {
    scroll-snap-align: start;
  }
}
/* Optional line clamp utility if not included via plugin */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
