<template>
    <div>
        <Titlebg title="Partnership" breadcrumb="Partnership" />
    </div>
    <div class="mx-auto 2xl:max-w-[1320px] xl:max-w-[1152px] lg:max-w-[1024px] sm:max-w-[600px] max-w-[300px] gap-10">
        <div>
            <div class="font-bold text-center mb-5">
                <span class="text-[40px]">Our Local Partnership</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-5">
                <div v-for="local in localPartner" :key="local.name"  class="text-center">
                    <div class="p-5">
                        <img :src="local.logo" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">{{local.name}}</span>
                        <p>{{local.title}}</p>
                        <button class="button">
                            <a :href="local.website" target="_blank">Websites</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="text-2xl font-bold text-center mb-5">
                <span class="text-[40px]">Our International Partnership</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                <div v-for="international in internationalPartner" :key="international.name" class="text-center">
                    <div class="p-5">
                        <img :src="international.logo" alt="logo partnership" class="mx-auto mb-4">
                        <span class="font-bold text-xl">{{international.name}}</span>
                        <p>{{ international.title }}</p>
                        <button class="button">
                            <a :href="international.website" target="_blank">Websites</a>
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
import knu from '@/assets/partnerships/knu.png';
import ku from '@/assets/partnerships/ku.png';
import acca from '@/assets/partnerships/acca.png';
import ke from '@/assets/partnerships/ke.png';
import aiac from '@/assets/partnerships/aiac-logo.svg';
import shinhanBank from '@/assets/partnerships/shinhan-logo.png';

const localPartner = 
[
    {
        logo: acca,
        name: "ACCA Cambodia",
        title: "Start your career in finance with ACCA",
        website: 'https://www.accaglobal.com/gb/en.html'
    },
    {
        logo: ke,
        name: "Khmer Enterprise",
        title: "INSPIRED, CONNECT & TRANSFORM",
        website: 'https://test.khmerenterprise.gov.kh/home'
    },
    {
        logo: shinhanBank,
        name: "Kasetsart University",
        title: "Knowledge of the Land",
        website: 'https://www.ku.ac.th/en/community-home'
    },
    {
        logo: aiac,
        name: "Kasetsart University",
        title: "Knowledge of the Land",
        website: 'https://www.ku.ac.th/en/community-home'
    },
]
const internationalPartner = 
[
    {
        logo: knu,
        name: "Kunsan National University",
        title: "Kunsan National University always stands by you and raises the value of future with you!",
        website: 'https://www.kunsan.ac.kr/en/index.kunsan'
    },
    {
        logo: ku,
        name: "Kasetsart University",
        title: "Knowledge of the Land",
        website: 'https://www.ku.ac.th/en/community-home'
    },
]



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