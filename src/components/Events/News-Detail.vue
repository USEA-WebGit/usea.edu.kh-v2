  <template>
    <div>
        <Titlebg title="Events Detail" breadcrumb="Events Details" />
    </div>
        <div class="mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
            <div>
                <div class="container-fluid py-5">
                    <div class="container py-5">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="mb-5">
                                    <div class="section-title position-relative mb-5">
                                        <h1 class="display-4  motion-preset-slide-up">🎉✨Congratulations to the 3 winners of the 2025 Public English Speaking Competition for High School Students.</h1>
                                    </div>
                                    
                                    <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                                    
                                    <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem.
                                        Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam
                                        consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit
                                        gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea
                                        sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>
                                        <div class="grid grid-cols-3 gap-5">
                                            <img class="img-fluid rounded w-100 mb-4 motion-preset-slide-down" :src="event" alt="Image">
                                            <img class="img-fluid rounded w-100 mb-4 motion-preset-slide-down" :src="event1" alt="Image">
                                            <img class="img-fluid rounded w-100 mb-4 motion-preset-slide-down" :src="event2" alt="Image">
                                            <img class="img-fluid rounded w-100 mb-4 motion-preset-slide-down" :src="event3" alt="Image">
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div>
                <RightNav />
            </div> -->
        </div>
</template>

<script setup>
import Titlebg from '@/components/Slide/TitleBg.vue';
import RightNav from '@/components/SideBar/Right-Nav.vue';
import event from '@/assets/images/news1.jpg';
import event1 from '@/assets/images/news5.jpg';
import event2 from '@/assets/images/news6.jpg';
import event3 from '@/assets/images/news7.jpg';



</script>
