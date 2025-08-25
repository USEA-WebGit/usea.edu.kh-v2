<template>
  <div>
    <Titlebg title="President's Message" breadcrumb="President's Message" />
  </div>

  <div
    class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[95%] gap-10 mb-12"
  >
    <!-- Main column -->
    <section class="mt-6">
      <header class="text-center mb-6">
        <h2
          class="font-extrabold text-usea_secondary 2xl:text-[1.9rem] xl:text-[1.8rem] lg:text-[1.7rem] text-[1.4rem] tracking-tight"
        >
          MESSAGE FROM THE PRESIDENT
        </h2>
        <div class="h-1 w-16 mx-auto bg-usea_secondary rounded-full mt-2"></div>
      </header>

      <div class="grid lg:grid-cols-12 gap-8 items-start">
        <!-- Image column -->
        <aside class="lg:col-span-5">
          <div class="lg:sticky lg:top-24">
            <figure
              class="relative w-full rounded-2xl overflow-hidden border border-gray-200"
            >
              <!-- Responsive aspect ratio wrapper -->
              <div
                class="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
              >
                <img
                  :src="President"
                  alt="Portrait of the President"
                  class="absolute inset-0 h-full w-full object-cover object-top lg:object-[center_25%]"
                  loading="lazy"
                />
              </div>

              <!-- Caption -->
              <figcaption class="absolute inset-x-0 bottom-0 p-3">
                <div
                  class="inline-flex items-center gap-3 bg-white/95 backdrop-blur px-4 py-2 rounded-md shadow-sm"
                >
                  <span class="font-semibold text-gray-900"
                    >Dr. Mean Sothy</span
                  >
                  <span class="text-gray-500 text-sm hidden sm:inline"
                    >President</span
                  >
                </div>
              </figcaption>
            </figure>
          </div>
        </aside>

        <!-- Text column -->
        <article
          class="lg:col-span-7 space-y-5 text-gray-800 leading-relaxed text-[1.05rem]"
        >
          <p>
            On behalf of the University of South-East Asia, I would like to
            express my profound gratitude and warm welcome to Your Excellencies,
            Ladies, and Gentlemen for sending your children to our university.
          </p>
          <p>
            The world is growing rapidly in science, technology, and the
            economy. The labour market is increasingly competitive and demands
            practical knowledge, experience, and skills. The university plays a
            vital role in developing human resources with high competency,
            morality, virtue, conscience, discipline, and courage to meet
            national and international labour market needs and to fully
            participate in social development in line with globalization and the
            free-market economy.
          </p>
          <p>
            To achieve these goals, the university continues to strengthen seven
            fundamental factors: management, curricula, teaching staff, student
            affairs, discipline, academic resources, and local & international
            partnerships.
          </p>
          <p>
            I would like to inform you that your children have not yet finished
            their education; they need to pursue tertiary education to acquire
            knowledge, experience, and skills to respond to the labour
            market—now and in the future. Please evaluate a university
            thoroughly before choosing it for your children, for it is closely
            associated with their future.
          </p>
          <p>
            To all students who have chosen our university: study hard to become
            outstanding students, bring honour to your families, and become
            capable successors for your community and your country.
          </p>

          <!-- Pull quote -->
          <blockquote
            class="mt-2 border-l-4 border-usea_secondary pl-5 italic text-gray-700"
          >
            “The university plays a vital role in developing human resources
            with high competency, morality, virtue, conscience, discipline, and
            courage.”
          </blockquote>

          <!-- Signature -->
          <section class="border-t border-gray-200 pt-5">
            <div class="font-semibold text-gray-900">Dr. Mean Sothy</div>
            <div class="text-gray-500 text-sm">
              President, University of South-East Asia
            </div>
          </section>
        </article>
      </div>
    </section>

    <!-- Sidebar -->
    <div>
      <RightNav />
    </div>
  </div>
</template>

<script setup>
import Titlebg from "@/components/Slide/TitleBg.vue";
import RightNav from "@/components/SideBar/Right-Nav.vue";
import President from "@/assets/images/president.jpg";

const foundations = [
  "Management",
  "Curricula",
  "Teaching Staff",
  "Student Affairs",
  "Discipline",
  "Academic Resources",
  "Local & International Partnerships",
];
</script>

<style scoped>
/* Tailwind handles visuals */
</style>
