<template>
  <div>
    <Titlebg title="News & Events" breadcrumb="News-Events" />

    <div
      class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] gap-10"
    >
      <!-- Left -->
      <div>
        <!-- Tabs -->
        <div class="mt-10 mb-6">
          <div class="flex flex-wrap justify-center gap-2 sm:gap-4">
            <button
              v-for="(tab, idx) in tabs"
              :key="idx"
              @click="activeTab = tab"
              class="px-4 py-2 font-semibold rounded-full border transition-all duration-300"
              :class="
                activeTab === tab
                  ? 'bg-red-600 text-white border-red-600 shadow-sm'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              "
            >
              {{ tab }}
            </button>
          </div>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
          <NewsCard
            v-for="(item, i) in filteredItems"
            :key="item.id || i"
            :item="item"
          />
        </div>

        <!-- Empty state -->
        <div
          v-if="filteredItems.length === 0"
          class="text-center text-gray-500 py-16"
        >
          No items to show for “{{ activeTab }}”.
        </div>
      </div>

      <!-- Right -->
      <div>
        <RightNav />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightNav from "@/components/SideBar/Right-Nav.vue";
import NewsCard from "@/components/news/NewsCard.vue";

// Demo image (replace with real images from API)
import demo from "@/assets/images/demoCard.png";

const tabs = ["All", "News", "Upcoming"];
const activeTab = ref(tabs[0]);

// Example data shape — replace with your API later
const items = ref([
  {
    id: 1,
    type: "News",
    title: "AI and Simulation Lab Inauguration: A New Hub for Innovation",
    date: "24-Oct-2024",
    time: "1:30pm - 4:00pm",
    image: demo,
    excerpt:
      "USEA launches its AI & Simulation Lab to accelerate research, education, and industry collaboration.",
    to: { name: "events-detail" }, // or { name: 'news-detail', params: { slug: '...' } }
  },
  {
    id: 3,
    type: "Upcoming",
    title: "Open House 2025 — Explore Programs & Labs",
    date: "15-Jan-2025",
    time: "9:00am - 3:00pm",
    image: demo,
    excerpt:
      "Prospective students and parents are invited to explore programs, facilities, and student life.",
    to: { name: "events-detail" },
  },
  {
    id: 4,
    type: "News",
    title: "USEA Signs MoU with Industry Partners",
    date: "05-Dec-2024",
    time: "—",
    image: demo,
    excerpt:
      "Strengthening collaboration for internships, joint research, and curriculum development.",
    to: { name: "events-detail" },
  },
  {
    id: 6,
    type: "Upcoming",
    title: "Tech Career Day @ USEA Signs MoU with Industry Partners",
    date: "10-Feb-2025",
    time: "9:00am - 5:00pm",
    image: demo,
    excerpt:
      "Meet employers, attend talks, and get feedback on your CV and portfolio.",
    to: { name: "events-detail" },
  },
]);

const filteredItems = computed(() => {
  if (activeTab.value === "All") return items.value;
  return items.value.filter((x) => x.type === activeTab.value);
});
</script>
