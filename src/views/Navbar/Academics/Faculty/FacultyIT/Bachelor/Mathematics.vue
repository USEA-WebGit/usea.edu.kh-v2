<template>
    <div>
        <Titlebg title="Mathematics" breadcrumb="Mathematics" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 ">
        <div class="flex flex-col gap-5 mb-10">
            <img :src="demo" alt="" class="h-[200px] object-cover">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-5">
                    <span class="font-bold text-2xl text-red-600">Program Description</span>
                    <span>The curriculum is designed to provide training to students who are proficient in software and good at public administration, public administration, private administration and local NGOs.</span>
                </div>
                <div class="flex flex-col gap-5">
                    <span class="font-bold text-2xl text-red-600">Program Leaning Outcomes</span>
                    The curriculum is designed to provide training to students who are proficient in software and good at public administration, public administration, private administration and local NGOs.
                    <ul>
                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</li>
                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</li>
                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</li>
                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-5">
                    <span class="font-bold text-2xl text-red-600">Credit Accumulation</span>
                    <span>The curriculum is designed to provide training to students who are proficient in software and good at public administration, public administration, private administration and local NGOs.</span>
                </div>
                <div class="flex flex-col gap-5">
                    <span class="font-bold text-2xl text-red-600">Job Opportunity</span>
                    <span>The curriculum is designed to provide training to students who are proficient in software and good at public administration, public administration, private administration and local NGOs.</span>
                </div>
            </div>
            
            <nav class="tabs tabs-bordered mt-10" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                <button type="button" class="tab active-tab:tab-active active w-full text-xl" id="tabs-basic-filled-item-1" data-tab="#tabs-basic-filled-1" aria-controls="tabs-basic-filled-1" role="tab" aria-selected="true">
                    General Education Subjects
                </button>
                <button type="button" class="tab active-tab:tab-active w-full text-xl" id="tabs-basic-filled-item-2" data-tab="#tabs-basic-filled-2" aria-controls="tabs-basic-filled-2" role="tab" aria-selected="false">
                    Core Major Subjects
                </button>
                <button type="button" class="tab active-tab:tab-active w-full text-xl" id="tabs-basic-filled-item-3" data-tab="#tabs-basic-filled-3" aria-controls="tabs-basic-filled-3" role="tab" aria-selected="false">
                    Basic Major Subjects
                </button>
                <button type="button" class="tab active-tab:tab-active w-full text-xl" id="tabs-basic-filled-item-4" data-tab="#tabs-basic-filled-4" aria-controls="tabs-basic-filled-4" role="tab" aria-selected="false">
                    Minor Subjects
                </button>
            </nav>
            <div class="mt-3">
                <div id="tabs-basic-filled-1" role="tabpanel" aria-labelledby="tabs-basic-filled-item-1">
                    <!-- Replaced the previous paragraph with the table -->
                    <table class="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="border border-gray-300 px-4 py-2">No</th>
                                <th class="border border-gray-300 px-4 py-2">Subject Description</th>
                                <th class="border border-gray-300 px-4 py-2">Credit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="border border-gray-300 px-4 py-2">1</td><td class="border border-gray-300 px-4 py-2">Microeconomics</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">2</td><td class="border border-gray-300 px-4 py-2">Public Administration</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">3</td><td class="border border-gray-300 px-4 py-2">History and Culture of South-East Asia</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">4</td><td class="border border-gray-300 px-4 py-2">Critical Thinking and Personal Development</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">5</td><td class="border border-gray-300 px-4 py-2">Computer for Administration</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">6</td><td class="border border-gray-300 px-4 py-2">Mathematics for Business and Economics</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">7</td><td class="border border-gray-300 px-4 py-2">English Language I</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">8</td><td class="border border-gray-300 px-4 py-2">English Language II</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">9</td><td class="border border-gray-300 px-4 py-2">Chinese Language I</td><td class="border border-gray-300 px-4 py-2">0</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">10</td><td class="border border-gray-300 px-4 py-2">Chinese Language II</td><td class="border border-gray-300 px-4 py-2">0</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">11</td><td class="border border-gray-300 px-4 py-2">FA2: Maintaining Financial Records I</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">12</td><td class="border border-gray-300 px-4 py-2">Introduction to Business</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr class="font-bold">
                                <td class="border border-gray-300 px-4 py-2" colspan="2">Total</td>
                                <td class="border border-gray-300 px-4 py-2">30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="tabs-basic-filled-2" class="hidden" role="tabpanel" aria-labelledby="tabs-basic-filled-item-2">
                    <table class="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="border border-gray-300 px-4 py-2">No</th>
                                <th class="border border-gray-300 px-4 py-2">Subject Description</th>
                                <th class="border border-gray-300 px-4 py-2">Credit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="border border-gray-300 px-4 py-2">1</td><td class="border border-gray-300 px-4 py-2">Physics II</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">2</td><td class="border border-gray-300 px-4 py-2">Calculus I</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">3</td><td class="border border-gray-300 px-4 py-2">Calculus II</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">4</td><td class="border border-gray-300 px-4 py-2">Engineering Mechanics</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">5</td><td class="border border-gray-300 px-4 py-2">Engineering Geology</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">6</td><td class="border border-gray-300 px-4 py-2">Computer Aided Geometric Design</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">7</td><td class="border border-gray-300 px-4 py-2">Linear Algebra and Its Applications</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">8</td><td class="border border-gray-300 px-4 py-2">Electricity and Magnetism</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">9</td><td class="border border-gray-300 px-4 py-2">Strength of Materials</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">10</td><td class="border border-gray-300 px-4 py-2">Construction Materials</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">11</td><td class="border border-gray-300 px-4 py-2">Differential Equations</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">12</td><td class="border border-gray-300 px-4 py-2">Probability and Statistics</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">13</td><td class="border border-gray-300 px-4 py-2">Structural Analysis I</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">14</td><td class="border border-gray-300 px-4 py-2">Fluid Mechanics</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">15</td><td class="border border-gray-300 px-4 py-2">Surveying</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">16</td><td class="border border-gray-300 px-4 py-2">Soil Mechanics & Lab</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">17</td><td class="border border-gray-300 px-4 py-2">Strength of Materials II</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">18</td><td class="border border-gray-300 px-4 py-2">Structural Analysis II</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">19</td><td class="border border-gray-300 px-4 py-2">Foundation Engineering</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">20</td><td class="border border-gray-300 px-4 py-2">Reinforced Concrete Structures</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">21</td><td class="border border-gray-300 px-4 py-2">Construction Engineering Management</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">22</td><td class="border border-gray-300 px-4 py-2">Highway Design</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr class="font-bold">
                                <td class="border border-gray-300 px-4 py-2" colspan="2">Total</td>
                                <td class="border border-gray-300 px-4 py-2">80</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="tabs-basic-filled-3" class="hidden" role="tabpanel" aria-labelledby="tabs-basic-filled-item-3">
                    <table class="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="border border-gray-300 px-4 py-2">No</th>
                                <th class="border border-gray-300 px-4 py-2">Subject Description</th>
                                <th class="border border-gray-300 px-4 py-2">Credit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="border border-gray-300 px-4 py-2">1</td><td class="border border-gray-300 px-4 py-2">Microeconomics</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">2</td><td class="border border-gray-300 px-4 py-2">Public Administration</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">3</td><td class="border border-gray-300 px-4 py-2">History and Culture of South-East Asia</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">4</td><td class="border border-gray-300 px-4 py-2">Critical Thinking and Personal Development</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">5</td><td class="border border-gray-300 px-4 py-2">Computer for Administration</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">6</td><td class="border border-gray-300 px-4 py-2">Mathematics for Business and Economics</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">7</td><td class="border border-gray-300 px-4 py-2">English Language I</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">8</td><td class="border border-gray-300 px-4 py-2">English Language II</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">9</td><td class="border border-gray-300 px-4 py-2">Chinese Language I</td><td class="border border-gray-300 px-4 py-2">0</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">10</td><td class="border border-gray-300 px-4 py-2">Chinese Language II</td><td class="border border-gray-300 px-4 py-2">0</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">11</td><td class="border border-gray-300 px-4 py-2">FA2: Maintaining Financial Records I</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">12</td><td class="border border-gray-300 px-4 py-2">Introduction to Business</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr class="font-bold">
                                <td class="border border-gray-300 px-4 py-2" colspan="2">Total</td>
                                <td class="border border-gray-300 px-4 py-2">30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="tabs-basic-filled-4" class="hidden" role="tabpanel" aria-labelledby="tabs-basic-filled-item-4">
                    <table class="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="border border-gray-300 px-4 py-2">No</th>
                                <th class="border border-gray-300 px-4 py-2">Subject Description</th>
                                <th class="border border-gray-300 px-4 py-2">Credit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="border border-gray-300 px-4 py-2">1</td><td class="border border-gray-300 px-4 py-2">Microeconomics</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">2</td><td class="border border-gray-300 px-4 py-2">Public Administration</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">3</td><td class="border border-gray-300 px-4 py-2">History and Culture of South-East Asia</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">4</td><td class="border border-gray-300 px-4 py-2">Critical Thinking and Personal Development</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">5</td><td class="border border-gray-300 px-4 py-2">Computer for Administration</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">6</td><td class="border border-gray-300 px-4 py-2">Mathematics for Business and Economics</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">7</td><td class="border border-gray-300 px-4 py-2">English Language I</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">8</td><td class="border border-gray-300 px-4 py-2">English Language II</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">9</td><td class="border border-gray-300 px-4 py-2">Chinese Language I</td><td class="border border-gray-300 px-4 py-2">0</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">10</td><td class="border border-gray-300 px-4 py-2">Chinese Language II</td><td class="border border-gray-300 px-4 py-2">0</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">11</td><td class="border border-gray-300 px-4 py-2">FA2: Maintaining Financial Records I</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr><td class="border border-gray-300 px-4 py-2">12</td><td class="border border-gray-300 px-4 py-2">Introduction to Business</td><td class="border border-gray-300 px-4 py-2">3</td></tr>
                            <tr class="font-bold">
                                <td class="border border-gray-300 px-4 py-2" colspan="2">Total</td>
                                <td class="border border-gray-300 px-4 py-2">30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
        
        
        <div>
            <RightNavIT />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightNavIT from '@/components/SideBar/RightNavIT.vue';
import sokngim from '@/assets/images/sa_sokngim.png';
import bunhours from '@/assets/images/son_bunhours.png';
import sovattana from '@/assets/images/koy_sovattana.png';
import meas from '@/assets/images/mi_meas.png';
import demo from '@/assets/images/demoCard.png';
const staffs = [
    {
        id: '1',
        img: sokngim,
        name: 'Mrs. Sa Sokngim',
        position: 'Dean of Faculty of Science and Technology',
        number: '012 345 678',
        email: 'sokngim@usea.edu.kh'
    },
    {
        id: '2',
        img: bunhours,
        name: 'Mr. Son Bunhours',
        position: 'Head of Academic Office',
        number: '012 345 678',
        email: 'sonbunhours@usea.edu.kh'
    },
    {
        id: '3',
        img: sovattana,
        name: 'Mrs. Koy Sovattana',
        position: 'Deputy Head of Student​ and Examination Affairs',
        number: '012 345 678',
        email: 'sovattana@usea.edu.kh'
    },
    {
        id: '4',
        img: meas,
        name: 'Mr. Mi Meas',
        position: "Staff of Student's Affair",
        number: '012 345 678',
        email: 'mimeas@usea.edu.kh'
    },
    

]

</script>