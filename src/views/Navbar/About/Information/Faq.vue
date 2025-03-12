<template>
    <div>
        <Titlebg title="FAQ" breadcrumb="FAQ" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div class="w-full px-4 pt-16">
            <div class="mx-auto w-full rounded-2xl bg-white">
                <Disclosure v-slot="{ open }">
                    <DisclosureButton class="group flex w-full justify-between rounded-lg bg-usea_secondary px-4 py-5 text-left text-sm font-medium text-white hover:bg-white hover:text-usea_secondary hover:outline-double focus:outline-double">
                        <span>What documents does the university require to register for a bachelor's degree</span>
                        <ChevronUpIcon
                            :class="open ? 'rotate-180 transform' : ''"
                            class="h-5 w-5 text-white group-hover:text-usea_secondary"
                        />
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                        Undergraduate Admission Requirements at USEA
                        <ul class="ml-5 list-disc">
                            <li>BACII Certificate (x2)</li>
                            <li>Images 3x4 (x4)</li>
                            <li>Images 4x6 (x3)</li>
                        </ul>
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton class="group flex w-full justify-between rounded-lg bg-usea_secondary px-4 py-5 text-left text-sm font-medium text-white hover:bg-white hover:text-usea_secondary hover:outline-double focus:outline-double">
                        <span>What documents does the university require to register for a Assocate's  degree</span>
                        <ChevronUpIcon
                            :class="open ? 'rotate-180 transform' : ''"
                            class="h-5 w-5 text-white group-hover:text-usea_secondary"
                        />
                    </DisclosureButton>

                    <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                        Undergraduate Admission Requirements at USEA
                        <ul class="ml-5 list-disc">
                            <li>BACII Fail Certificate (x2)</li>
                            <li>Images 3x4 (x4)</li>
                            <li>Images 4x6 (x3)</li>
                        </ul>
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton class="group flex w-full justify-between rounded-lg bg-usea_secondary px-4 py-5 text-left text-sm font-medium text-white hover:bg-white hover:text-usea_secondary hover:outline-double focus:outline-double">
                        <span>What is your refund policy?</span>
                        <ChevronUpIcon
                            :class="open ? 'rotate-180 transform' : ''"
                            class="h-5 w-5 text-white group-hover:text-usea_secondary"
                        />
                    </DisclosureButton>

                    <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                        No.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton class="group flex w-full justify-between rounded-lg bg-usea_secondary px-4 py-5 text-left text-sm font-medium text-white hover:bg-white hover:text-usea_secondary hover:outline-double focus:outline-double">
                        <span>What is your refund policy?</span>
                        <ChevronUpIcon
                            :class="open ? 'rotate-180 transform' : ''"
                            class="h-5 w-5 text-white group-hover:text-usea_secondary"
                        />
                    </DisclosureButton>

                    <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                        No.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton class="group flex w-full justify-between rounded-lg bg-usea_secondary px-4 py-5 text-left text-sm font-medium text-white hover:bg-white hover:text-usea_secondary hover:outline-double focus:outline-double">
                        <span>What is your refund policy?</span>
                        <ChevronUpIcon
                            :class="open ? 'rotate-180 transform' : ''"
                            class="h-5 w-5 text-white group-hover:text-usea_secondary"
                        />
                    </DisclosureButton>

                    <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                        No.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton class="group flex w-full justify-between rounded-lg bg-usea_secondary px-4 py-5 text-left text-sm font-medium text-white hover:bg-white hover:text-usea_secondary hover:outline-double focus:outline-double">
                        <span>What is your refund policy?</span>
                        <ChevronUpIcon
                            :class="open ? 'rotate-180 transform' : ''"
                            class="h-5 w-5 text-white group-hover:text-usea_secondary"
                        />
                    </DisclosureButton>

                    <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                        No.
                    </DisclosurePanel>
                </Disclosure>
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
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'



</script>