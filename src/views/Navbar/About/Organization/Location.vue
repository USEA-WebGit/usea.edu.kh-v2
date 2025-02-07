<template>
    <div>
        <Titlebg title="Location" breadcrumb="Location" />
    </div>
    <div class="grid grid-cols-[70%_30%] mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-5 mb-10">
        <div class="grid grid-cols-[60%_40%]">
            <div>
                <p class="flex justify-center text-2xl font-bold">Contact US</p>
                <div class="grid grid-cols-2 gap-5 mt-10 text-lg">
                    <div>
                        <p class="text-xl font-bold">Address</p>
                        <span>Wat Bo Village, SangKat Salakamroek Siemreap Municipality, Cambodia(Opposite Angkor High School)</span>
                    </div>
                    <div>
                        <p class="text-xl font-bold">Social Media</p>
                        <div class="flex gap-5 text-2xl mt-3">
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                            <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                        </div>
                    </div>
                    <div>
                        <p class="text-xl font-bold">Phone</p>
                        <ul>
                            <li>(+855) 63 900 090</li>
                            <li>(+855) 92 429 966</li>
                            <li>(+855) 77 667 873</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="h-full">
                <GoogleMap />
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
    import GoogleMap from '@/components/GoogleMap.vue';
    
</script>
