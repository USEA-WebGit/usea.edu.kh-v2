<template>
  <div>
    <Titlebg title="Career Center" breadcrumb="Career Center" />
  </div>

  <!-- Main container -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[2fr_1fr]">
    <!-- LEFT -->
    <div>
      <!-- HERO / ABOUT -->
      <section class="mt-8">
        <div class="flex flex-col items-center gap-6">
          <!-- Image scales responsively -->
          <img
            :src="careerCenter"
            alt="Career Center"
            class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-48 sm:h-60 md:h-72 object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />

          <!-- Title + Text (FULL WIDTH of the left column) -->
          <div class="w-full">
            <h3 class="text-2xl sm:text-3xl text-usea_secondary font-bold mb-4">CAREER CENTER</h3>
            <p class="text-justify text-base sm:text-lg leading-7 font-noto_sans">
              The South East Asia University Career Center, in partnership with
              USAID DWD Digital Workforce Development, was established to engage higher education
              institutions (HEIs) and the local private sector for the development of internship
              programs and/or job opportunities for students and young professionals. The center
              will help address the mismatch between youth skills and employer needs through soft
              skills training and workshops. Through the USEA Student Job Center, students will
              access career information, networks, and development opportunities that empower them
              to make informed decisions. The Center serves all disciplines with employment advice,
              soft skills development, and access to internships and jobs—connecting students to
              resources, events, mentoring, and potential employers.
            </p>
          </div>
        </div>
      </section>

      <!-- VISION & OBJECTIVE -->
      <section class="bg-gray-600 mt-10 rounded-xl p-6 sm:p-8">
        <div class="flex flex-col items-center text-center">
          <h3 class="text-2xl sm:text-3xl font-bold text-white">VISION & OBJECTIVE</h3>
          <div class="h-1 w-16 sm:w-20 bg-green-600 mt-2 rounded"></div>
        </div>

        <!-- 1 col on mobile, 2 cols on md+ -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start text-white">
          <!-- Image -->
          <div>
            <img
              :src="careerCenter1"
              alt="Vision and Objective"
              class="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </div>

          <!-- Text / List -->
          <div class="flex flex-col gap-5 text-base sm:text-lg leading-7">
            <p class="font-noto_sans">
              និស្សិតត្រូវបានផ្ដល់សិទ្ធិសម្រាប់បង្កើតនូវជម្រើសរបស់ពួកគេដោយខ្លួនឯងអំពីអាជីពការងារ
              ក៏ដូចជាអាចគ្រប់គ្រងជីវិតដោយការប្រើប្រាស់អាជីពផ្ទាល់ខ្លួន ដែលភ្ជាប់ទៅនឹងព័ត៌មាន
              បណ្តាញវិជ្ជាជីវៈ ឱកាស និងភាពមានការងារធ្វើ ដើម្បីអភិវឌ្ឍ និងពង្រឹងជំនាញដែលត្រឹមត្រូវ។
            </p>
            <ul class="space-y-3 font-noto_sans">
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                ភ្ជាប់និស្សិតជាមួយជំនាញច្បាស់លាស់ និងផ្នត់គំនិតសម្រាប់ការងារនៅយុគសម័យសេដ្ឋកិច្ចឌីជីថល
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                ផ្តល់ឱកាសការងារហាត់ការ និងអាហារូបករណ៍ ដើម្បីទទួលបានបទពិសោធន៍ពាក់ព័ន្ធ
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                ភ្ជាប់និស្សិតទៅនិយោជក (ឯកជន អង្គការសង្គមស៊ីវិល និងរដ្ឋ)
              </li>
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                បង្កើតសហគមន៍រឹងមាំជាមួយអតីតនិស្សិត ដើម្បីជំរុញការផ្លាស់ប្តូរដោយវិជ្ជមាន
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

    <!-- RIGHT (sticky sidebar on desktop) -->
    <aside class="lg:sticky lg:top-28 h-max">
      <RightServices />
    </aside>
  </div>
</template>

<script setup>
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightServices from "@/components/SideBar/RightServices.vue";
import demo from "@/assets/images/demoCard.png";
import careerCenter from "@/assets/images/career-center.png";
import careerCenter1 from "@/assets/images/career-center1.jpg";
</script>
