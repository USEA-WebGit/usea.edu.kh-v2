<template>
  <div>
    <Titlebg title="Career Center" breadcrumb="Career Center" />
  </div>
  <div
    class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10"
  >
    <div>
      <section class="flex justify-center items-center gap-5 flex-col">
        <div class="flex gap-10 overflow-hidden mt-10">
          <div class="flex flex-col gap-5">
            <h3 class="text-2xl text-usea_secondary font-bold">
              CAREER CENTER
            </h3>
            <span class="text-justify font-noto_sans">
              The South East Asia University Career Center, in partnership with
              USAID DWD Digital Workforce Development, was established to engage
              higher education institutions (HEIs) and the local private sector
              for the development of internship programs and / or job
              opportunities for students. And young professionals. The center
              will help address the mismatch between youth skills and the needs
              of employers through soft skills training and workshops. Through
              the University of South East Asia Student Job Center, students
              will have access to the right career information, career networks
              and career development opportunities that will empower them to
              make their own decisions about their future careers.   USEA Career
              Centers are designed with the central purpose of providing the
              University with an independent and sustainable center for students
              across all disciplines to seek employment advice, soft skills
              development, and to access internships and job opportunities. The
              Career Center will directly support students by connecting them to
              resources, events, seminars, mentoring and acting as a link to
              them to potential employers.
            </span>
          </div>
          <img
            :src="ItCenter"
            alt="image"
            class="w-[50%] transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section class="bg-gray-500 p-10 mt-10 rounded-xl">
        <div class="flex flex-col justify-center items-center">
          <h3 class="text-2xl font-bold text-white">VISION & OBJECTIVE</h3>
          <div class="h-1 w-[5%] bg-green-600"></div>
        </div>
        <div class="flex gap-10 text-white bg-opacity-80 rounded-lg mt-5">
          <div>
            <img
              :src="ItCenter"
              alt="image"
              class="w-full transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
            />
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-5">
              <div class="flex flex-col gap-5">
                <p class="font-noto_sans">
                  និស្សិតត្រូវបានផ្ដល់សិទ្ធិសម្រាប់បង្កើតនូវជម្រើសរបស់ពួកគេដោយខ្លួនឯងអំពីអាជីពការងារក៏ដូច
                  ជាអាចគ្រប់គ្រងបាននូវជីវិតដោយឆ្លងកាត់ការប្រើប្រាស់នូវអាជីពផ្ទាល់ខ្លួន
                  ដែលភ្ជាប់ទំនាក់ទំនងទៅនឹង ព័ត៌មាន បណ្តាញវិជ្ជាជីវៈ ឱកាស
                  និងភាពមានការងារធ្វើដែលអាចជំរុញអោយមានការអភិវឌ្ឍ ក៏ដូចជា
                  ការពង្រឹងជំនាញដ៏ត្រឹមត្រូវនឹងច្បាស់លាស់មួយ។
                </p>
                <ul class="space-y-2 font-noto_sans">
                  <li class="flex items-start gap-2">
                    <i class="fa-solid fa-check text-green-400 mt-1"></i>
                    ភ្ជាប់និស្សិតជាមួយជំនាញមួយច្បាស់លាស់
                    ក៏ដូចជាផ្នត់គំនិតដើម្បីត្រៀមខ្លួនជាស្រេចក្នុងការបម្រើការងារក្នុងយុគសម័យសេដ្ឋកិច្ចឌីជីថលមួយនេះ
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fa-solid fa-check text-green-400 mt-1"></i>
                    ផ្តល់ការងារហាត់ការ
                    និងអាហារូបករណ៍ដែលជាកន្លែងនៃឱកាសទទួលបានការងាររួមទាំងបទ
                    ពិសោធន៍ផ្សេងៗដែលពួកគេចាប់អារម្មណ៍
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fa-solid fa-check text-green-400 mt-1"></i>
                    ភ្ជាប់និស្សិតទៅនិយោជក ( ក្រុមហ៊ុនឯកជន អង្គការសង្គមស៊ីវិល
                    និងរដ្ឋាភិបាល)
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fa-solid fa-check text-green-400 mt-1"></i>
                    បង្កើតសហគមន៍មួយដែលរឹងមាំនៃមជ្ឈមណ្ឌលការងារជាមួយអតីតនិស្សិតធ្វើអោយមានការផ្លាស់ប្តូរដោយវិជ្ជមាន។
                  </li>
                </ul>
              </div>
              ​
            </div>
          </div>
        </div>
      </section>
      <div class="mt-10">
        <div class="flex flex-col justify-center items-start">
          <span class="text-2xl text-usea_secondary font-bold">ACTIVITIES</span>
          <!-- <div class="h-1 w-[5%] bg-usea_secondary"></div> -->
        </div>
        <div class="grid grid-cols-3 gap-3 mt-5 mb-5 overflow-hidden">
          <img
            :src="demo"
            alt=""
            class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
          />
          <img
            :src="demo"
            alt=""
            class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
          />
          <img
            :src="demo"
            alt=""
            class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
          />
          <img
            :src="demo"
            alt=""
            class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
          />
          <img
            :src="demo"
            alt=""
            class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
          />
          <img
            :src="demo"
            alt=""
            class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
          />
        </div>
      </div>
    </div>
    <div>
      <RightServices />
    </div>
  </div>
</template>

<script setup>
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightServices from "@/components/SideBar/RightServices.vue";
import demo from "@/assets/images/demoCard.png";
import ItCenter from "@/assets/images/it-center.jpg";
</script>
