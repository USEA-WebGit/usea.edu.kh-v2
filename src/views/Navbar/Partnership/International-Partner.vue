<template>
    <div>
        <Titlebg title="Partnership" breadcrumb="Partnership" />
    </div>
    <div class="mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div>
            <div class="text-2xl font-bold text-center mb-5">
                <span class="relative inline-block">
                    Our Local Partnership
                    <span class="absolute left-1/2 top-10 bottom-0 transform -translate-x-1/2 w-1/2 h-[5px] bg-red-500"></span>
                </span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-5">
                <div class="text-center">
                    <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div><div class="text-center">
                    <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
            <div class="text-2xl font-bold text-center mb-5">
                <span class="relative inline-block">
                    Our International Partnership
                    <span class="absolute left-1/2 top-10 bottom-0 transform -translate-x-1/2 w-1/2 h-[5px] bg-red-500"></span>
                </span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                <div class="text-center">
           <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div>
                <div class="text-center">
            <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div>
                <div class="text-center">
           <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
                    </div>
                </div>
                <div class="text-center">
            <div class="p-5">
                        <img :src="acca" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">ACCA Cambodia</span>
                        <p>Start your career in finance with ACCA</p>
                        <button class="button">
                            Website 
                        </button>
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
import acca from '@/assets/partnerships/acca.png';
</script>
<style scoped>
.button {
    margin-top: 15px;
  position: relative;
  padding: 5px 22px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #002060;
  transition: all 0.2s ease;
}

.button:active {
  transform: scale(0.96);
}

.button:before,
.button:after {
  position: absolute;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.button:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

</style>