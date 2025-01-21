<template>
        <div>
            <Titlebg title="History and Logo Meaning" breadcrumb="History and Logo meaning" />
        </div>
        <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col mb-8 gap-8">
                    <span class="text-red-600 text-2xl font-bold ">USEA's History</span>
                    <p class="text-justify">The University of South-East Asia was established on July 7, 2006 by four dedicated Cambodian shareholders in response to the government educational development program of building and enhancing human resources through higher education. It is located in Siem Reap province, Cambodia and about 314 km from Phnom Penh, the capital city of Cambodia. Siem Reap province is one of the important economic regions in Cambodia. Because it is rich in ancient temples and other resorts that attract local and international visitors. USEA was recognized by the Royal Government of Cambodia and operating through Sub-decree No. 63 duly signed by his Excellency Prime Minister Hun Sen. The Ministry of Education, Youth and Sports (MoEYS) recognized USEA by issuing Prakas No. 802 dated 09 July 2007.  USEA gained its double accreditation in 2006-2009 and 2010-13 granted by the Accreditation Committee of Cambodia (ACC). USEA had its first enrollment of 600 bachelor students and at present with a total enrollment of 2,980.  The enrollment in the undergraduate program is 2,780 and 200 in the MBA program. The top three faculties are: Faculty of Business and Tourism, Faculty of Art, Humanities and Languages and Faculty of Science and Technology. The graduate rate of employment is 95%.</p>
                    <img :src="Building" alt="building" class="w-full object-cover">
                </div>
                <div class="flex flex-col">
                    <span class="text-red-600 text-2xl font-bold ">Logo's Meaning</span>
                    <div class="grid grid-cols-2 justify-items-center items-center">
                        <div class="text-justify">
                            <ul class="flex flex-col gap-3">
                                <li>1. The picture of the golden rice panicles around the circle symbolizes the university’s strength, development and sustainability.</li>
                                <li>2. The dark blue phrases written in both Khmer and English around the circle and the word USEA with the light blue color  on the book symbolize the name of the University of South-East Asia.</li>
                                <li>3. The picture of the light blue globe inside the circle represents fame, national and international recognition, and regional  and global integration.</li>
                                <li>4. The pictures of the blue hat and spearhead on the book symbolize high quality education and research, resulting in excellent leadership with professional ethics, creativity, social understanding, and commitment to promoting national.</li>
                            </ul>
                        </div>
                        <img :src="USEA" alt="logo" width="400px">
                    </div>
                    <div>
                        <img :src="LOGOVONE" alt="logo-v1">
                        <img :src="LOGOV2" alt="logo-v2">
                        <img :src="LOGOV3" alt="logo-v3">
                    </div>
                </div>
            </div>
            <div>
                <RightNav />
            </div>
        </div>
</template>

<script setup>
    import Titlebg from '@/components/Slide/TitleBg.vue';
    import RightNav from '@/components/SideBar/Right-Nav.vue';
    import Building from '@/assets/navbar/usea_building.png';
    import USEA from '@/assets/title/logo_update.png';
    import USEAVONE from '@/assets/title/usea_logo_v1.png';
    import USEAV2 from '@/assets/title/usea-logo-v2.png';
    import USEAV3 from '@/assets/title/usea-logo-v3.png';
    

</script>