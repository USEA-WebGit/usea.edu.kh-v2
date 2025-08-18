<template>
    <div>
        <Titlebg title="IT Services" breadcrumb="IT Services" />
    </div>
    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div>
            <section class="flex justify-center items-center gap-5 flex-col">
                <div class="flex gap-10 overflow-hidden mt-10">
                    <div class="flex flex-col gap-5">
                        <h3 class="text-2xl text-usea_secondary font-bold">ABOUT IT CENTER</h3>
                        <span class="text-justify text-xl">មជ្ឈមណ្ឌល ព័ត៌មានវិទ្យា (IT Center) ជាអង្គភាពចំណុះសាកលវិទ្យាល័យ សៅស៍អ៊ីសថ៍អេយសៀ ដែលផ្ដល់នូវសេវាកម្មដូចជា គាំទ្រទៅលើការប្រើប្រាស់ Internet របស់ បុគ្គលិក សាស្ដ្រាចារ្យ និងនិស្សិត សេវាកម្មដោះស្រាយទៅលើបញ្ហាកុំព្យូទ័រ (Software) តម្លើងកម្មវិធីសម្រាប់កុំព្យូទ័រ ការរចនា និងបោះពុម្ភ គ្រប់គ្រងទៅលើគេហទំព័រ និងបណ្ដាញសង្គមរបស់សាកលវិទ្យាល័យ និង គ្រប់គ្រងទៅលើ Database USEA App និង USEA LMS ផងដែរ។</span>
                    </div>
                    <img :src="ItCenter" alt="image" class="w-[50%] transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg shadow-lg">
                </div>
            </section>
            <section class="bg-gray-500 p-10 mt-10 rounded-xl">
                
                <div class=" flex flex-col justify-center items-start text-white">
                    
                    <!-- <div class="h-1 w-[5%] bg-usea_secondary"></div> -->
                </div>
                <div class="flex gap-10 text-white bg-opacity-80 p-5 rounded-lg mt-5">
                    <div>
                        <img
                            :src="ItCenter"
                            alt="image"
                            class="w-full transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
                            />
                    </div>
                    <div class="flex flex-col gap-5">
                        <h3 class="text-2xl  font-bold text-white">IT SERVICES</h3>
                        <ul class="space-y-3 text-xl">
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                ផ្ដល់សេវាកម្មសុខភាពស្របតាមម៉ោងការងាររបស់សាកលវិទ្យាល័យ
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                ផ្ដល់សេវាពិនិត្យសុខភាព និងកាយសម្បទា
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                ផ្ដល់សេវាសង្គ្រោះបឋម
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                ផ្ដល់សេវាប្រឹក្សាសុខភាពផ្លូវកាយ និងផ្លូវចិត្ត
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                ផ្ដល់ថ្នាំបង្ការ ឬថ្នាំព្យាបាលនានាស្របតាមគោលនយោបាយជាតិ ឬ កម្មវិធីជាតិផ្ដល់ថ្នាំបង្ការរបស់ក្រសួរសុខាភិបាល
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                ផ្ដល់ព័ត៌មានបន្ទាន់ដល់អ្នកអាណាព្យាបាលពីស្ថានភាពជំងឺរបស់បុគ្គលិករដ្ឋបាលគ្រូបង្រៀន និងសិស្សានុសិស្ស ក្នុងលក្ខខណ្ឌតម្រូវមកទទួលទៅព្យាបាលបន្តនៅផ្ទះ ឬទទួលការឯកភាពមុននឹងបញ្ជូនអ្នកជំងឺទៅព្យាបាលនៅបន្ទីពេទ្យ
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                រៀបចំ និងចូលរួមអប់រំផ្សព្វផ្សាយស្ដីពីការលើកកម្ពស់សុខភាព សុវត្ថភាព និងបរិស្ថានស្អាត ដល់បុគ្គលិករដ្ឋបាល គ្រូបង្រៀន សិស្សានុសិស្ស និងអ្នកពាក់ព័ន្ធ
                            </li>
                            <li class="flex items-start gap-2">
                                <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                រក្សាឯកជនភាព និងរក្សាការសម្ងាត់នូវរាល់ព័ត៌មានពាក់ព័ន្ធនឹងស្ថានភាពសុខភាពរបស់បុគ្គលិករដ្ឋបាល គ្រូបង្រៀន និងសិស្សានុសិស្សដែលមកទទួលសេវានៅបន្ទប់សុខភាព ព្រមទាំងគោរពក្រមសីលធម៌វិជ្ជាជីវៈ
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </section>

            <div class="mt-10">
                <div class=" flex flex-col justify-center items-start">
                    <span class="text-2xl text-usea_secondary font-bold">ACTIVITIES</span>
                    <!-- <div class="h-1 w-[5%] bg-usea_secondary"></div> -->
                </div>
                <div class="grid grid-cols-3 gap-3 mt-5 mb-5 overflow-hidden">
                    <img :src="demo" alt="" class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg ">
                    <img :src="demo" alt="" class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg ">
                    <img :src="demo" alt="" class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg ">
                    <img :src="demo" alt="" class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg ">
                    <img :src="demo" alt="" class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg ">
                    <img :src="demo" alt="" class="transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg ">
                </div>
            </div>
        </div>
        <div>
            <RightServices />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightServices from '@/components/SideBar/RightServices.vue';
import demo from '@/assets/images/demoCard.png';
import ItCenter from '@/assets/images/it-center.jpg'
</script>