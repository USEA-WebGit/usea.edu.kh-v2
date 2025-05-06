<template>
    <div>
      <div
        :class="[
          'navbar flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-between items-center font-Ubuntu font-bold drop-shadow-2xl',
          { 'shrink-navbar': isShrunk, 'fixed-navbar': isFixed }
        ]"
      >
        <div class="flex-1 flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-between md:px-5 sm:justify-between sm:px-5 sm:items-center justify-between items-center px-5">
          <!-- Desktop Logo -->
          <router-link :to="{name: 'Home'}" v-if="!showMobileMenu">
            <img
              :src="TitleLogo"
              alt="Title Logo"
              :class="[
                'transition-all duration-300',
                isShrunk
                  ? '2xl:w-[400px] xl:w-[350px] lg:w-[300px] sm:w-[300px] w-[200px]'
                  : '2xl:w-[500px] xl:w-[400px] lg:w-[400px] sm:w-[400px] w-[200px]'
              ]"
            />
          </router-link>

          <!-- Hamburger Menu Icon -->
          <div
            class="2xl:hidden xl:hidden lg:hidden md:flex justify-center items-center text-2xl cursor-pointer hover:text-usea_primary"
            @click="toggleSidebar"
          >
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>

        <nav
          class="flex-1 pt-10 2xl:text-lg xl:text-md lg:text-md 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden font-bold text-usea_secondary relative"
        >
          <ul class="flex align-top gap-8 relative">
            <!-- Submenu: About -->
            <li class="nav-item pb-10 group relative">
              ABOUT
              <ul
                class="mega-menu hidden absolute 2xl:-left-[600px] -left-[535px] top-full w-max bg-white shadow-lg px-20 py-20 grid grid-cols-3 gap-x-5 z-50 rounded-md"
              >
                <div class="mega-menu-item">
                  <h3 class="font-bold text-xl pb-7 text-usea_secondary">
                    Organization
                  </h3>
                  <ul class="text-lg text-gray-500">
                    <li class="flex gap-2">
                      <router-link :to="{ name: 'history' }" class="link" >History & Logo Meaning</router-link>
                    </li>
                    <li class="flex gap-2">
                      <router-link :to="{ name: 'vision' }">Vision & Mission</router-link>
                    </li>
                    <li class="flex gap-2">
                      <router-link :to="{ name: 'location' }">Location</router-link>
                    </li>
                  </ul>

                </div>
                <div class="mega-menu-item px-12 w-full">
                  <h3 class="font-bold text-lg pb-7 text-usea_secondary">
                    Governance & Accreditation
                  </h3>
                  <ul class="text-lg text-gray-500">
                    <router-link :to="{name: 'message'}"><li class="flex gap-2">Message from President</li></router-link>
                    <router-link :to="{name: 'board-trustee'}"><li class="flex gap-2">Board of Trustees</li></router-link>
                    <router-link :to="{name: 'recognition'}"><li class="flex gap-2">Recognition & Accreditation</li></router-link>
                  </ul>
                </div>
                <div class="mega-menu-item px-12 w-full">
                  <h3 class="font-bold text-lg pb-7 text-usea_secondary">Information</h3>
                  <ul class="text-lg text-gray-500">
                    <router-link :to="{name: 'news-events'}"><li class="flex gap-2">News & Events</li></router-link>
                    <router-link :to="{name: 'faq'}"><li class="flex gap-2">FAQ</li></router-link>
                    <router-link :to="{name: 'contact'}"><li class="flex gap-2">Contact</li></router-link>
                  </ul>
                </div>
              </ul>
            </li>
  
            <!-- Submenu: Academics -->
            <li class="nav-item pb-10 group relative">
              ACADEMICS
              <ul
                class="mega-menu hidden absolute 2xl:-left-[600px] -left-[515px] top-full w-max bg-white shadow-lg px-12 py-12 grid grid-cols-2 gap-x-5 z-50 rounded-md"
              >
                <div class="mega-menu-item">
                  <h3 class="font-bold text-xl pb-7 text-usea_secondary">Faculty</h3>
                  <ul class="text-lg text-gray-500">
                    <router-link :to="{name: 'faculty-page', params: {facultyName: 'economics-business-tourism'}}"><li class="flex gap-2">Faculty of Economics, Business & Tourism</li></router-link>
                    <router-link :to="{name: 'faculty-page', params: {facultyName: 'science-technology'}}"><li class="flex gap-2">Faculty of Sciences & Technology</li></router-link>
                    <router-link :to="{name: 'faculty-page', params: {facultyName: 'social-science-law'}}"><li class="flex gap-2">Faculty of Social Science & Law</li></router-link>
                    <router-link :to="{name: 'faculty-page', params: {facultyName: 'arts-humanities-languages'}}"><li class="flex gap-2">Faculty of Art, Humanities & Language</li></router-link>
                  </ul>
                </div>
                <div class="mega-menu-item px-12 w-full">
                  <h3 class="font-bold text-lg pb-7 text-usea_secondary">
                    Programs & Courses
                  </h3>
                  <ul class="text-lg text-gray-500">
                    <router-link :to="{name: 'internationa-college'}"><li class="flex gap-2">International College</li></router-link>
                    <router-link :to="{name: 'post-graduate'}"><li class="flex gap-2">Post Graduate</li></router-link>
                    <router-link :to="{name: 'language-center'}"><li class="flex gap-2">Foreign Language Center</li></router-link>
                    <router-link :to="{name: 'short-course'}"><li class="flex gap-2">Short Course</li></router-link>
                  </ul>
                </div>
                <!-- <div class="mega-menu-item px-12 w-full">
                  <img :src="Building" alt="Building" width="400px" />
                </div> -->
              </ul>
            </li>
  
            <!-- Submenu: Partnership -->
            <li class="nav-item group relative pb-10">
              PARTNERSHIP
              <div class="mega-menu hidden absolute top-full left-0 w-max bg-white p-7 z-50 rounded-md">
                <ul class="text-lg text-gray-500">
                  <router-link :to="{name: 'local-partnership'}"><li class="flex gap-2">Local Partner</li></router-link>
                  <router-link :to="{name: 'international-partnership'}"><li class="flex gap-2">International Partner</li></router-link>
                </ul>
              </div>
            </li>
  
            <!-- Additional Navbar Items -->
            <router-link :to="{name: 'research'}"><li class="nav-item pb-10">RESEARCH</li></router-link>
            <li class="nav-item group relative pb-10">
              SERVICES
              <div class="mega-menu hidden absolute top-full left-0 w-max bg-white shadow-lg p-7 grid grid-cols-1 z-50 rounded-md">
                <ul class="text-lg text-gray-500">
                  <router-link :to="{name: 'health-services'}"><li class="flex gap-2">Health Services</li></router-link>
                  <router-link :to="{name: 'it-services'}"><li class="flex gap-2">IT Services</li></router-link>
                  <router-link :to="{name: 'library-services'}"><li class="flex gap-2">Library</li></router-link>
                  <router-link :to="{name: 'career-center'}"><li class="flex gap-2">Career Center</li></router-link>
                </ul>
              </div>
            </li>
          </ul>
          <!-- <div class="absolute right-[17rem] top-[2rem] ml-8">
            <button class="bg-usea_secondary px-5 py-3 rounded-md text-white">Journal</button>
          </div> -->
        </nav>
        
      </div>
      <!-- Mobile Menu -->
      <nav
        v-if="showMobileMenu"
        class="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-start px-5 pt-10 overflow-y-auto"
      >
        <button
          class="absolute top-5 right-5 text-3xl text-usea_primary"
          @click="toggleSidebar"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <ul class="w-full space-y-4 text-xl font-bold text-usea_secondary flex flex-col">
          <!-- About Menu -->
          <li>
            <div
              @click="toggleSubNav('about')"
              class="flex justify-between items-center cursor-pointer mt-10"
            >
              About
              <i
                :class="subNavs.about ? 'fa-chevron-up' : 'fa-chevron-down'"
                class="fa-solid"
              ></i>
            </div>
            <transition name="slide">
              <ul
                v-if="subNavs.about"
                class="pl-4 space-y-2 text-gray-500 text-lg mt-5 flex flex-col"
              >
                <router-link :to="{name: 'history'}" @click="navigateAndClose('history')"><li>History & Logo Meaning</li></router-link>
                <router-link :to="{name: 'vision'}" @click="navigateAndClose('vision')"><li>Vision & Mission</li></router-link>
                <router-link :to="{name: 'location'}" @click="navigateAndClose('location')"><li>Location</li></router-link>
                <router-link :to="{name: 'message'}" @click="navigateAndClose('message')"><li>Message from President</li></router-link>
                <router-link :to="{name: 'board-trustee'}" @click="navigateAndClose('board-trustee')"><li>Board of Trustees</li></router-link>
                <router-link :to="{name: 'recognition'}" @click="navigateAndClose('recognition')"><li>Recognition & Accreditation</li></router-link>
                <router-link :to="{name: 'news-events'}" @click="navigateAndClose('news-events')"><li>News & Events</li></router-link>
                <router-link :to="{name: 'faq'}" @click="navigateAndClose('faq')"><li>FAQ</li></router-link>
                <router-link :to="{name: 'contact'}" @click="navigateAndClose('contact')"><li>Contact</li></router-link>
              </ul>
            </transition>
          </li>

          <!-- Academics Menu -->
          <li>
            <div
              @click="toggleSubNav('academics')"
              class="flex justify-between items-center cursor-pointer"
            >
              Academics
              <i
                :class="subNavs.academics ? 'fa-chevron-up' : 'fa-chevron-down'"
                class="fa-solid"
              ></i>
            </div>
            <transition name="slide">
              <ul
                v-if="subNavs.academics"
                class="pl-4 space-y-2 text-gray-500 text-lg mt-5 flex flex-col"
              >
                <router-link :to="{name: 'faculty-page', params: {facultyName: 'economics-business-tourism'}}" @click="navigateAndClose('economics-business-tourism')"><li>Faculty of Economics, Business & Tourism</li></router-link>
                <router-link :to="{name: 'faculty-page', params: {facultyName: 'science-technology'}}" @click="navigateAndClose('science-technology')"><li>Faculty of Sciences & Technology</li></router-link>
                <router-link :to="{name: 'faculty-page', params: {facultyName: 'social-science-law'}}" @click="navigateAndClose('social-science-law')"><li>Faculty of Social Science & Law</li></router-link>
                <router-link :to="{name: 'faculty-page', params: {facultyName: 'arts-huminaties-languages'}}" @click="navigateAndClose('arts-huminaties-languages')"><li>Faculty of Art, Humanities & Language</li></router-link>
                <router-link :to="{name: 'internationa-college'}" @click="navigateAndClose('internationa-college')"><li>International College</li></router-link>
                <router-link :to="{name: 'post-graduate'}" @click="navigateAndClose('post-graduate')"><li>Post Graduate</li></router-link>
                <router-link :to="{name: 'language-center'}" @click="navigateAndClose('language-center')"><li>Foreign Language Center</li></router-link>
                <router-link :to="{name: 'short-course'}" @click="navigateAndClose('short-course')"><li>Short Course</li></router-link>
              </ul>
            </transition>
          </li>

          <!-- Partnership Menu -->
          <li>
            <div
              @click="toggleSubNav('partnership')"
              class="flex justify-between items-center cursor-pointer"
            >
              Partnership
              <i
                :class="subNavs.partnership ? 'fa-chevron-up' : 'fa-chevron-down'"
                class="fa-solid"
              ></i>
            </div>
            <transition name="slide">
              <ul
                v-if="subNavs.partnership"
                class="pl-4 space-y-2 text-gray-500 text-lg mt-5 flex flex-col"
              >
                <router-link :to="{name: 'local-partnership'}" @click="navigateAndClose('local-partnership')"><li>Local Partner</li></router-link>
                <router-link :to="{name: 'international-partnership'}" @click="navigateAndClose('international-partnership')"><li>International Partner</li></router-link>
              </ul>
            </transition>
          </li>

          <!-- Research -->
          <router-link :to="{name: 'research'}" @click="navigateAndClose('research')"><li>Research</li></router-link>

          <!-- Services Menu -->
          <li>
            <div
              @click="toggleSubNav('services')"
              class="flex justify-between items-center cursor-pointer"
            >
              Services
              <i
                :class="subNavs.services ? 'fa-chevron-up' : 'fa-chevron-down'"
                class="fa-solid"
              ></i>
            </div>
            <transition name="slide">
              <ul
                v-if="subNavs.services"
                class="pl-4 space-y-2 text-gray-500 text-lg mt-5 flex flex-col"
              >
                <router-link :to="{name: 'health-services'}" @click="navigateAndClose('health-services')"><li>Health Services</li></router-link>
                <router-link :to="{name: 'it-services'}" @click="navigateAndClose('it-services')"><li>IT Services</li></router-link>
                <router-link :to="{name: 'library-services'}" @click="navigateAndClose('library-services')"><li>Library</li></router-link>
                <router-link :to="{name: 'career-center'}" @click="navigateAndClose('career-center')"><li>Career Center</li></router-link>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>

    </div>
  </template>
  
  <script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import TitleLogo from "@/assets/title/usea-title-1.png";
import TitleMobile from "@/assets/title/title-mobile.png";
import Building from "@/assets/navbar/usea_building.png";

// States for navbar behavior
const isShrunk = ref(false);
const isFixed = ref(false);

// Mobile menu state
const showMobileMenu = ref(false);

// Sub-nav visibility states
const subNavs = ref({
  about: false,
  academics: false,
  partnership: false,
  services: false,
});

// Router instance for navigation
const router = useRouter();

const isActive = (name) => route.name === name;
// Handle scroll event
const handleScroll = () => {
  const scrollY = window.scrollY;
  isShrunk.value = scrollY > 80; // Shrink navbar on scroll
  isFixed.value = scrollY > 0; // Fix navbar on any scroll
};

// Toggle mobile menu visibility
const toggleSidebar = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

// Toggle individual sub-nav visibility
const toggleSubNav = (menu) => {
  for (const key in subNavs.value) {
    if (key === menu) {
      subNavs.value[key] = !subNavs.value[key]; // Toggle clicked menu
    } else {
      subNavs.value[key] = false; // Close other menus
    }
  }
};

// Close sidebar and navigate
const navigateAndClose = (routeName) => {
  showMobileMenu.value = false; // Close the mobile menu
  router.push({ name: routeName }); // Navigate to the selected route
};

// Add and remove scroll listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

  
<style scoped>
    /* Base navbar styles */
    .navbar {
      position: relative;
      top: 0;
      width: 100%;
      z-index: 50;
      background-color: white;
      /* opacity: 0.9; */
      transition: all 0.3s ease-in-out;
    }
    
    /* Shrink navbar */
    .shrink-navbar {
      padding: 0px 5px !important;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    /* Fixed navbar */
    .fixed-navbar {
      position: fixed;
      top: 0;
      left: 0;
    }
    
    /* Navbar items */
    .nav-item {
      position: relative;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    .link.active {
    color: red;
  }
    .nav-item::after {
      content: "";
      position: absolute;
      width: 0;
      height: 7px;
      background-color: #d71818;
      bottom: -5px;
      left: 0;
      transition: width 0.3s ease;
      z-index: 60;
    }
    
    .nav-item:hover {
      color: #d71818;
    }
    
    .nav-item:hover::after {
      width: 100%;
    }
    
    /* Mega Menu */
    .group:hover .mega-menu {
      display: grid;
    }
    
    .mega-menu li:hover {
      color: red;
      /* opacity: 0.8; */
      transform: translateX(3px);
    }
    
    .mega-menu li {
      padding: 8px 0;
      transition: transform 0.3s ease, color 0.3s ease, opacity 0.3s ease; /* Smooth transition */
    }
    
    .mega-menu li::after {
      content: none;
    }
    
    .mega-menu > div {
      position: relative; /* Needed for the divider */
      padding: 1.875rem; /* Add some padding for better spacing */
      border-right: 1px solid #ccc; /* Light gray dividing line */
    }
    
    /* Remove border from the last column */
    .mega-menu > div:last-child {
      border-right: none;
    }
    
    /* Mobile menu styles */
    nav.absolute {
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
      overflow-y: auto; /* Allow scrolling within the menu */
    }
    
    /* Slide Transition */
    .slide-enter-active,
    .slide-leave-active {
      transition: max-height 0.3s ease, opacity 0.3s ease;
    }
    
    .slide-enter-from,
    .slide-leave-to {
      max-height: 0;
      opacity: 0;
    }
    
    .slide-enter-to,
    .slide-leave-from {
      max-height: 500px; /* Adjust for expected content height */
      opacity: 1;
    }
    
    /* Mobile menu item hover effects */
    nav ul li {
      transition: color 0.3s ease;
    }
    
    nav ul li:hover {
      color: #d71818; /* Use your theme's primary hover color */
    }
    
    /* Mobile menu close button */
    button {
      transition: color 0.3s ease;
    }
    
    button:hover {
      color: #d71818; /* Use your theme's primary hover color */
    }
    </style>
    
  