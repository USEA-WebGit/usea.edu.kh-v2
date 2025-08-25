<template>
  <div>
    <Titlebg
      title="History and Logo Meaning"
      breadcrumb="History and Logo Meaning"
    />
  </div>

  <div
    class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] gap-10"
  >
    <!-- Main -->
    <div class="flex flex-col gap-10">
      <!-- History -->
      <section class="space-y-5">
        <h2
          class="text-usea_secondary text-[1.75rem] font-extrabold tracking-tight"
        >
          USEA’S HISTORY
        </h2>

        <!-- Hero image -->
        <figure class="overflow-hidden rounded-lg border border-gray-200">
          <img
            :src="Building"
            alt="USEA building"
            class="w-full h-auto object-cover"
            loading="lazy"
          />
        </figure>

        <!-- Editorial body -->
        <div class="mt-2">
          <p class="text-justify text-[1.05rem] leading-relaxed text-gray-800">
            The University of South-East Asia was established on July 7, 2006 by
            four dedicated Cambodian shareholders in response to the government
            educational development program of building and enhancing human
            resources through higher education. It is located in Siem Reap
            province, Cambodia and about 314 km from Phnom Penh, the capital
            city of Cambodia. Siem Reap province is one of the important
            economic regions in Cambodia. Because it is rich in ancient temples
            and other resorts that attract local and international visitors.
            USEA was recognized by the Royal Government of Cambodia and
            operating through Sub-decree No. 63 duly signed by his Excellency
            Prime Minister Hun Sen. The Ministry of Education, Youth and Sports
            (MoEYS) recognized USEA by issuing Prakas No. 802 dated 09 July
            2007. USEA gained its double accreditation in 2006–2009 and 2010–13
            granted by the Accreditation Committee of Cambodia (ACC). USEA had
            its first enrollment of 600 bachelor students and at present with a
            total enrollment of 2,980. The enrollment in the undergraduate
            program is 2,780 and 200 in the MBA program. The top three faculties
            are: Faculty of Business and Tourism, Faculty of Art, Humanities and
            Languages and Faculty of Science and Technology. The graduate rate
            of employment is 95%.
          </p>
        </div>
      </section>

      <!-- Logo Meaning -->
      <section class="space-y-5">
        <h2
          class="text-usea_secondary text-[1.75rem] font-extrabold tracking-tight"
        >
          LOGO’S MEANING
        </h2>

        <ul class="space-y-3 text-[1.05rem] text-gray-800 leading-relaxed">
          <li class="flex items-start gap-3">
            <span
              class="mt-2 h-1.5 w-1.5 rounded-full bg-usea_secondary inline-block"
            ></span>
            <span>
              The picture of the golden rice panicles around the circle
              symbolizes the university’s strength, development and
              sustainability.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span
              class="mt-2 h-1.5 w-1.5 rounded-full bg-usea_secondary inline-block"
            ></span>
            <span>
              The dark blue phrases written in both Khmer and English around the
              circle and the word USEA with the light blue color on the book
              symbolize the name of the University of South-East Asia.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span
              class="mt-2 h-1.5 w-1.5 rounded-full bg-usea_secondary inline-block"
            ></span>
            <span>
              The picture of the light blue globe inside the circle represents
              fame, national and international recognition, and regional and
              global integration.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span
              class="mt-2 h-1.5 w-1.5 rounded-full bg-usea_secondary inline-block"
            ></span>
            <span>
              The pictures of the blue hat and spearhead on the book symbolize
              high quality education and research, resulting in excellent
              leadership with professional ethics, creativity, social
              understanding, and commitment to promoting national.
            </span>
          </li>
        </ul>

        <!-- Logo versions -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-2">
          <figure class="text-center">
            <div class="rounded-lg border border-gray-200 overflow-hidden">
              <img
                :src="USEAVONE"
                alt="USEA logo version 1"
                class="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <figcaption class="mt-2 text-sm font-semibold text-gray-700">
              Version 1
            </figcaption>
          </figure>

          <figure class="text-center">
            <div class="rounded-lg border border-gray-200 overflow-hidden">
              <img
                :src="USEAV2"
                alt="USEA logo version 2"
                class="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <figcaption class="mt-2 text-sm font-semibold text-gray-700">
              Version 2
            </figcaption>
          </figure>

          <figure class="text-center">
            <div class="rounded-lg border border-gray-200 overflow-hidden">
              <img
                :src="USEAV3"
                alt="USEA logo version 3"
                class="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <figcaption class="mt-2 text-sm font-semibold text-gray-700">
              Version 3
            </figcaption>
          </figure>
        </div>
      </section>
    </div>

    <!-- Sidebar -->
    <div>
      <RightNav />
    </div>
  </div>
</template>

<script setup>
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightNav from "@/components/SideBar/Right-Nav.vue";

import Building from "@/assets/navbar/usea_building.png";
import USEAVONE from "@/assets/title/usea_logo_v1.png";
import USEAV2 from "@/assets/title/usea-logo-v2.png";
import USEAV3 from "@/assets/title/usea-logo-v3.png";
</script>
