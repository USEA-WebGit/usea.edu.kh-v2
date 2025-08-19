<template>
  <div>
    <Titlebg title="Health Services" breadcrumb="Health Services" />
  </div>

  <!-- Main container -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[2fr_1fr]">
    <!-- LEFT -->
    <div>
      <!-- ABOUT -->
      <section class="mt-8">
        <div class="flex flex-col gap-6 md:flex-row md:items-start">
          <!-- Text -->
          <div class="md:w-1/2 flex flex-col gap-4">
            <h3 class="text-2xl sm:text-3xl text-usea_secondary font-bold">
              ABOUT MEDICAL ROOM
            </h3>
            <p class="text-justify text-base sm:text-lg leading-7">
              The curriculum is designed to provide training to students who are
              proficient in software and good at public administration, public
              administration, private administration and local NGOs. The
              curriculum is designed to provide training to students who are
              proficient in software and good at public administration, public
              administration, private administration and local NGOs.
            </p>
          </div>

          <!-- Image -->
          <div class="md:w-1/2">
            <img
              :src="medicalRoom1"
              alt="Medical room"
              class="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <!-- SERVICES -->
      <section class="bg-gray-600 mt-10 rounded-xl p-6 sm:p-8">
        <div class="flex flex-col md:flex-row gap-6 md:gap-10 items-start text-white">
          <!-- Image -->
          <div class="w-full md:w-1/2">
            <img
              :src="medicalRoom"
              alt="Health services"
              class="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </div>

          <!-- List -->
          <div class="w-full md:w-1/2 flex flex-col gap-4">
            <h3 class="text-2xl sm:text-3xl font-bold">HEALTH SERVICES</h3>
            <ul class="space-y-3 text-base sm:text-lg leading-7">
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check mt-1"></i>
                ផ្ដល់សេវាកម្មសុខភាពស្របតាមម៉ោងការងាររបស់សាកលវិទ្យាល័យ
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check mt-1"></i>
                ផ្ដល់សេវាពិនិត្យសុខភាព និងកាយសម្បទា
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check mt-1"></i>
                ផ្ដល់សេវាសង្គ្រោះបឋម
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check mt-1"></i>
                ផ្ដល់សេវាប្រឹក្សាសុខភាពផ្លូវកាយ និងផ្លូវចិត្ត
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check mt-1"></i>
                ផ្ដល់ថ្នាំបង្ការ ឬថ្នាំព្យាបាលនានាស្របតាមគោលនយោបាយជាតិ ឬ
                កម្មវិធីជាតិផ្ដល់ថ្នាំបង្ការរបស់ក្រសួរសុខាភិបាល
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check mt-1"></i>
                ផ្ដល់ព័ត៌មានបន្ទាន់ដល់អ្នកអាណាព្យាបាលពីស្ថានភាពជំងឺ...
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check mt-1"></i>
                រៀបចំ និងចូលរួមអប់រំផ្សព្វផ្សាយស្ដីពីការលើកកម្ពស់សុខភាព...
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check mt-1"></i>
                រក្សាឯកជនភាព និងរក្សាការសម្ងាត់នូវរាល់ព័ត៌មានពាក់ព័ន្ធ...
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ACTIVITIES -->
      <section class="mt-10">
        <div>
          <span class="text-2xl sm:text-3xl text-usea_secondary font-bold">ACTIVITIES</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5 mb-5">
          <img
            v-for="i in 6"
            :key="i"
            :src="demo"
            alt="Activity"
            class="w-full h-36 sm:h-40 md:h-44 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>
    </div>

    <!-- RIGHT -->
    <aside class="lg:sticky lg:top-28 h-max">
      <RightServices />
    </aside>
  </div>
</template>

<script setup>
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightServices from "@/components/SideBar/RightServices.vue";
import demo from "@/assets/images/demoCard.png";
import medicalRoom from "@/assets/images/medical_room.jpg";
import medicalRoom1 from "@/assets/images/medical_room1.jpg";
</script>
