<template>
    <div>
        <Titlebg title="FAQ" breadcrumb="FAQ" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div class="accordion divide-neutral/20 divide-y">
            <div class="accordion-item active" id="payment-arrow-right">
                <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="payment-arrow-right-collapse" aria-expanded="true">
                When is payment taken for my order?
                <span class="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
                </button>
                <div id="payment-arrow-right-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-arrow-right" role="region">
                <div class="px-5 pb-4">
                    <p class="text-base-content/80 font-normal">
                    Payment is taken during the checkout process when you pay for your order. The order number that appears on the
                    confirmation screen indicates payment has been successfully processed.
                    </p>
                </div>
                </div>
            </div>
            <div class="accordion-item" id="delivery-arrow-right">
                <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="delivery-arrow-right-collapse" aria-expanded="false">
                How would you ship my order?
                <span class="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
                </button>
                <div id="delivery-arrow-right-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-arrow-right" role="region">
                <div class="px-5 pb-4">
                    <p class="text-base-content/80 font-normal">
                    For large products, we deliver your product via a third party logistics company offering you the “room of
                    choice” scheduled delivery service. For small products, we offer free parcel delivery.
                    </p>
                </div>
                </div>
            </div>
            <div class="accordion-item" id="cancel-arrow-right">
                <button class="accordion-toggle inline-flex items-center justify-between text-start" aria-controls="cancel-arrow-right-collapse" aria-expanded="false">
                Can I cancel my order?
                <span class="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180" ></span>
                </button>
                <div id="cancel-arrow-right-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-arrow-right" role="region">
                <div class="px-5 pb-4">
                    <p class="text-base-content/80 font-normal">
                    Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
                    </p>
                </div>
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




</script>