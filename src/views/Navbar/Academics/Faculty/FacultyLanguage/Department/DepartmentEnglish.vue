<template>
    <div>
        <Titlebg title="Department of English" breadcrumb="Department of English" />
    </div>
    <div class="grid 2xl:grid-cols-[70%_30%] xl:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10 mb-10">
        
        <div>
            Main Content
        </div>
        <div>
            <RightLanguage />
        </div>
    </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightLanguage from '@/components/SideBar/RightLanguage.vue';

</script>

<style lang="scss" scoped>

</style>