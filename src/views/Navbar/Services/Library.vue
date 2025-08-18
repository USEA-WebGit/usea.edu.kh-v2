<template>
    <div>
        <Titlebg title="Library" breadcrumb="Library" />
    </div>
    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div>
            <section class="flex justify-center items-center gap-5 flex-col">
                <div class="flex gap-10 overflow-hidden mt-10">
                    <div class="flex flex-col gap-5">
                        <h3 class="text-2xl text-usea_secondary font-bold">JOINT PUBLIC INFORMATION CENTER</h3>
                        <span class="text-justify text-xl">សាកលវិទ្យាល័យ សៅស៍អ៊ីសថ៍អេយសៀ ជាគ្រឹះស្ថានឧត្ដមសក្សាដែលផ្ដល់ការអប់រំ និងស្រាវជ្រាវប្រកបដោយគុណភាព មានកម្មវិធីសិក្សាសម្ភាររូបវ័ន្ដ និងសម្ភារសិក្សាស្តង់ដាស្របតាមនិយាមគរុកោសល្យត្រូវបានធនាគារពិភពលោក និងធនាគារអភិវឌ្ឍន៍អាស៊ីជ្រើសរើសជាដៃគូរបង្កើតមណ្ឌលព័ត៌មានសាធារណៈ ដើម្បីផ្ដល់ឱកាសឲ្យនិស្សិត បុគ្គលិ សាស្ដ្រាចារ្យ និងសាធារណជនគ្រប់មជ្ឈដ្ឋានសិក្សាស្រាវជ្រាវ ពង្រីកនូវចំណេះដឹងឲ្យបានទូលំទូលាយ ។ </span>
                    </div>
                    <img :src="pic" alt="image" class="w-[50%] transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg shadow-lg">
                </div>
            </section>
            <section class="bg-gray-500 p-10 mt-10 rounded-xl">
                <div class="flex flex-col justify-center items-center">
                    <h3 class="text-2xl font-bold text-white">PIC SERVICES</h3>
                    <div class="h-1 w-[5%] bg-green-600"></div>
                </div>
                <div class="flex gap-10 text-white bg-opacity-80 rounded-lg mt-5">
                    <div>
                        <img
                            :src="pic1"
                            alt="image"
                            class="w-full transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
                            />
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-5">
                            <div class="flex flex-col gap-5">
                                <ul class="space-y-2 text-xl">
                                    <li class="flex items-start gap-2">
                                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                        ផ្ដល់ឯកសារថ្មីៗសម្បូរបែបលើគ្រប់វិស័យដូចជាសៀវភនិងឯកសារអេឡិចត្រូនិចដែលទាក់ទងនឹងការវិវឌ្ឍរបស់ពិភពលោករួមមានសហគមន៍អឺរ៉ុបអាស៊ានជាពិសេសគាំទ្រឱ្យការបង្រៀនការសិក្សានិងការស្រាវជ្រាវស្របតាមកម្មវិធីបណ្ដុះបណ្ដាលគ្រប់កម្រិត
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                        ផ្ដល់សេវាខ្ចីសៀវភៅដោយឥតគិតថ្លៃ
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                        ផផ្ដល់ការស្រាវជ្រាវ និងការប្រើប្រាស់អ៊ីនធឺណិតដោយឥតគិតថ្លៃ
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-col gap-5">
                                <div class="flex flex-col justify-center items-start">
                                    <div class="text-center inline-block">
                                        <h1 class="text-2xl font-bold">លក្ខខណ្ឌស្រាវជ្រាវ</h1>
                                        <div class="h-1 w-[50%] bg-green-600 mx-auto"></div>
                                    </div>
                                </div>
                                
                                <P class="text-xl">សាធារណជន សិស្សានុសិស្ស និស្សិត គ្រូបង្រៀន សាស្ដ្រាចារ្យ មន្ដ្រីរាជការ និងអង្គការ អាចស្រាវជ្រាវ នៅមណ្ឌលព័ត៌មានសាធារណៈ បានក្នុងម៉ោងធ្វើការងារដោយឥតគិតថ្លៃ</P>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
            <section class="flex justify-center items-center gap-5 flex-col">
                <div class="flex gap-10 overflow-hidden mt-10">
                    <div class="flex flex-col gap-5">
                        <h3 class="text-2xl text-usea_secondary font-bold">AMERICAN CORNER</h3>
                        <span class="text-justify text-xl">បណ្ណាល័យអាមេរិក ត្រូវបានបង្កើតឡើងរួមគ្នាដោយស្ថានទូតអាមេរិកប្រចាំប្រទេសកម្ពុជា និងសាកលវិទ្យាល័យ សៅស៍អ៊ីសថ៍អេយសៀ នៅឆ្នាំ ២០១២</span>
                    </div>
                    <img :src="ac1" alt="image" class="w-[50%] transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg shadow-lg">
                </div>
            </section>
            <section class="bg-gray-500 p-10 mt-10 rounded-xl">
                <div class="flex flex-col justify-center items-center">
                    <h3 class="text-2xl font-bold text-white">AC SERVICES</h3>
                    <div class="h-1 w-[5%] bg-green-600"></div>
                </div>
                <div class="flex gap-10 text-white bg-opacity-80 rounded-lg mt-5">
                    <div>
                        <img
                            :src="ac"
                            alt="image"
                            class="w-full transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
                            />
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-5">
                            <div class="flex flex-col gap-5">
                                <ul class="space-y-2 text-xl">
                                    <li class="flex items-start gap-2">
                                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                        ផ្ដល់សៀវភៅ និងឯកសារភាសាអង់គ្លេសសម្បូរបែបជាច្រើនដែលផ្ដោតលើសហរដ្ឋអាមេរិក
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                        ផ្ដល់សៀវភៅ និងឯកសារភាសាអង់គ្លេសទូទៅពីកម្រិត Starter ដល់ Advanced ជាច្រើនក្បាល
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                        ផ្ដល់សៀវភៅ រឿងអប់រំជាភាសាអង់គ្លេសគ្រប់ប្រភេទជាច្រើនក្បាល
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                        ផ្ដល់ព័ត៌មានអំពីការបង្រៀន និងការរៀនភាសាអង់គ្លេស ការសិក្សានៅសហរដ្ឋអាមេរិកដែលរួមមានឯកសារណែនាំសម្រាប់អ្នកសិក្សា និងការភ្ជាប់ទំនាក់ទំនងទៅនឹងគេហទំព័រស្ដីពីលក្ខខណ្ឌចូលរៀននៅសាកលវិទ្យាល័យ និងអាហារូបករណ៍ផ្សេងៗ
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                        ផ្ដល់សៀវភៅយោងអំពីតេស្ដ TOEFL, IELTS, SAT, GRE, GMAT សម្រាប់ត្រៀមប្រឡងដើម្បីទទួលបានអាហារូបករណ៍សិក្សានៅបរទេស ពិសេសសហរដ្ឋអាមេរិកផ្ដល់ព័ត៌មានថ្មីៗ និងត្រឹមត្រូវអំពីប្រធានបទជាច្រើនរួមមានការសិក្សាអំពីសហរដ្ឋអាមេរិក ប្រវត្តិសាស្ដ្រ វប្បធម៌ ពាណិជ្ជកម្ម អក្សរសិល្ប៍ ច្បាប់ នយោបាយ និងប្រជាធិបតេយ្យ
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                                        ផ្ដល់ការប្រើប្រាស់កុំព្យូទ័រ អ៊ីនធឺណិត និងប្រភពឯកសារអេឡិចត្រូនិច
                                    </li>
                                </ul>
                            </div>
                            <div class="flex flex-col gap-5">
                                <div class="flex flex-col justify-center items-start">
                                    <div class="text-center inline-block">
                                        <h1 class="text-2xl font-bold">លក្ខខណ្ឌស្រាវជ្រាវ</h1>
                                        <div class="h-1 w-[50%] bg-green-600 mx-auto"></div>
                                    </div>
                                </div>
                                
                                <P class="text-xl">សាធារណជន សិស្សានុសិស្ស និស្សិត គ្រូបង្រៀន សាស្ដ្រាចារ្យ មន្ដ្រីរាជការ និងអង្គការ អាចស្រាវជ្រាវ នៅបណ្ណាល័យអាមេរិក បានក្នុងម៉ោងធ្វើការងារដោយឥតគិតថ្លៃ</P>
                            </div>
                        </div>
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
import pic from '@/assets/images/pic.jpg';
import pic1 from '@/assets/images/pic_2.jpg';
import ac1 from '@/assets/images/ac_1.jpg';
import ac from '@/assets/images/ac.jpg';
import ItCenter from '@/assets/images/it-center.jpg'

const library = [
    {
        pic: "Joint Public Information Center",
        purpose: "សាកលវិទ្យាល័យ សៅស៍អ៊ីសថ៍អេយសៀ ជាគ្រឹះស្ថានឧត្ដមសក្សាដែលផ្ដល់ការអប់រំ និងស្រាវជ្រាវប្រកបដោយគុណភាព មានកម្មវិធីសិក្សាសម្ភាររូបវ័ន្ដ និងសម្ភារសិក្សាស្តង់ដាស្របតាមនិយាមគរុកោសល្យត្រូវបានធនាគារពិភពលោក និងធនាគារអភិវឌ្ឍន៍អាស៊ីជ្រើសរើសជាដៃគូរបង្កើតមណ្ឌលព័ត៌មានសាធារណៈ ដើម្បីផ្ដល់ឱកាសឲ្យនិស្សិត បុគ្គលិ សាស្ដ្រាចារ្យ និងសាធារណជនគ្រប់មជ្ឈដ្ឋានសិក្សាស្រាវជ្រាវ ពង្រីកនូវចំណេះដឹងឲ្យបានទូលំទូលាយ ។ ",
        services: [
            {
                service: 'ផ្ដល់ឯកសារថ្មីៗសម្បូរបែបលើគ្រប់វិស័យដូចជាសៀវភៅ និងឯកសារអេឡិចត្រូនិក (E-Library) ដែលទាក់ទងនឹងការវិវឌ្ឍរបស់ពិភពលោករួមមានសហគមន៍អឺរ៉ុប អាស៊ាន ជាពិសេស គាំទ្រការបង្រៀន ការសិក្សា និងការស្រាវជ្រាវស្របតាមកម្មវិធីបណ្ដុះបណ្ដាលគ្រប់កម្រិត'
            },
            {
                service: 'ផ្ដល់សេវាខ្ចីសៀវភៅដោយឥតគិតថ្លៃ'
            },
            {
                service: 'ផ្ដល់ការស្រាវជ្រាវ និងការប្រើប្រាស់អ៊ីនធឺណិតដោយឥតគិតថ្លៃ'
            },
            {
                service: 'សាធារណជន សិស្សានុសិស្ស និស្សិត គ្រូបង្រៀន សាស្ដ្រាចារ្យ មន្ដ្រីរាជការ និងអង្កការអាចស្រាវជ្រាវនៅ មណ្ឌលព័ត៌មានសាធារណៈ បានក្នុងម៉ោងធ្វើការងារដោយឥតគិតថ្លៃ'
            },
        ]
    }
]
</script>