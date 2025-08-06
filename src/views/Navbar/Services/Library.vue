<template>
    <div>
        <Titlebg title="Library" breadcrumb="Library" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div>
            <section class="flex justify-center items-center gap-5 flex-col">
                <div class="flex gap-10 overflow-hidden mt-10">
                    <div class="flex flex-col gap-5">
                        <h3 class="text-2xl text-usea_secondary font-bold">ABOUT LIBRARY</h3>
                        <span class="text-justify">សាកលវិទ្យាល័យ សៅស៍អ៊ីសថ៍អេយសៀ ជាគ្រឹះស្ថានឧត្ដមសក្សាដែលផ្ដល់ការអប់រំ និងស្រាវជ្រាវប្រកបដោយគុណភាព មានកម្មវិធីសិក្សាសម្ភាររូបវ័ន្ដ និងសម្ភារសិក្សាស្តង់ដាស្របតាមនិយាមគរុកោសល្យត្រូវបានធនាគារពិភពលោក និងធនាគារអភិវឌ្ឍន៍អាស៊ីជ្រើសរើសជាដៃគូរបង្កើតមណ្ឌលព័ត៌មានសាធារណៈ ដើម្បីផ្ដល់ឱកាសឲ្យនិស្សិត បុគ្គលិ សាស្ដ្រាចារ្យ និងសាធារណជនគ្រប់មជ្ឈដ្ឋានសិក្សាស្រាវជ្រាវ ពង្រីកនូវចំណេះដឹងឲ្យបានទូលំទូលាយ ។ </span>
                    </div>
                    <img :src="ItCenter" alt="image" class="w-[50%] transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg shadow-lg">
                </div>
            </section>
            <section class="bg-gray-500 p-10 mt-10 rounded-xl">
                
                <div class=" flex flex-col justify-center items-start text-white">
                    
                    <!-- <div class="h-1 w-[5%] bg-usea_secondary"></div> -->
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
                        <h3 class="text-2xl font-bold text-white">JOINT PUBLIC INFORMATION CENTER</h3>
                        <div class="flex flex-col gap-5">
                            <div class="flex flex-col gap-3">
                                <h1 class="text-2xl font-bold">PURPOSE</h1>
                                <span class="text-justify">សាកលវិទ្យាល័យ សៅស៍អ៊ីសថ៍អេយសៀ ជាគ្រឹះស្ថានឧត្ដមសក្សាដែលផ្ដល់ការអប់រំ និងស្រាវជ្រាវប្រកបដោយគុណភាព មានកម្មវិធីសិក្សាសម្ភាររូបវ័ន្ដ និងសម្ភារសិក្សាស្តង់ដាស្របតាមនិយាមគរុកោសល្យត្រូវបានធនាគារពិភពលោក និងធនាគារអភិវឌ្ឍន៍អាស៊ីជ្រើសរើសជាដៃគូរបង្កើតមណ្ឌលព័ត៌មានសាធារណៈ ដើម្បីផ្ដល់ឱកាសឲ្យនិស្សិត បុគ្គលិ សាស្ដ្រាចារ្យ និងសាធារណជនគ្រប់មជ្ឈដ្ឋានសិក្សាស្រាវជ្រាវ ពង្រីកនូវចំណេះដឹងឲ្យបានទូលំទូលាយ ។ </span>
                            </div>
                            <div class="flex flex-col gap-5">
                                <h1 class="text-2xl font-bold">SERVICES</h1>
                                <ul class="space-y-2">
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