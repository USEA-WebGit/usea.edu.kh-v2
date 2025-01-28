<template>
    <div>
        <Titlebg title="Contact" breadcrumb="Contact" />
    </div>
    <div class="grid 2xl:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 mb-10">
        <div class="flex flex-col gap-10">
            <div v-for="(staff, index) in staffs" :key="index" class="flex gap-10 overflow-hidden">
                <img :src="staff.img" alt="img" class="2xl:w-1/4 object-cover transform transition-transform duration-300 hover:scale-105 rounded-md">
                <div class="flex flex-col">
                    <span class="text-2xl font-bold">{{ staff.name }}</span>
                    <div class="h-[1px] w-[50%] bg-gray-500 my-3"></div>
                    <span>{{ staff.position }}</span>
                    <span>{{ staff.number }}</span>
                    <span>{{ staff.email }}</span>
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
import RinRatha from '@/assets/images/tat_bunseang.png';
import BiVouchheng from '@/assets/images/teal_youlong.png';
import BornSokea from '@/assets/images/sa_sokngim.png';

const staffs = [
    {
        id: '1',
        img: RinRatha,
        name: 'Rin Ratha',
        position: 'Lorem ipsum dolor sit amet.',
        number: '012 345 678',
        email: 'ratharin22@usea.edu.kh'
    },
    {
        id: '2',
        img: BiVouchheng,
        name: 'Bi Vouchheng',
        position: 'Lorem ipsum dolor sit amet.',
        number: '012 345 678',
        email: 'bivouchheng@usea.edu.kh'
    },
    {
        id: '3',
        img: BornSokea,
        name: 'Born Sokea',
        position: 'Lorem ipsum dolor sit amet.',
        number: '012 345 678',
        email: 'bornsokea@usea.edu.kh'
    },
    

]
</script>