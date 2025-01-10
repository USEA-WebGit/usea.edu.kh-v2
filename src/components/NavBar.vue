<template>
    <div>
      <div
        :class="[
          'navbar flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-between items-center font-Ubuntu font-bold',
          { 'shrink-navbar': isShrunk, 'fixed-navbar': isFixed }
        ]"
      >
        <div class="flex-1 flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-between md:px-5 sm:justify-between sm:px-5 sm:items-center justify-between items-center px-5">
          <router-link to="/">
            <img :src="TitleLogo" alt="Title Logo" :class="['transition-all duration-300', isShrunk ? '2xl:w-[400px] xl:w-[350px] lg:w-[300px] sm:w-[300px] w-[200px]' : '2xl:w-[500px] xl:w-[400px] lg:w-[400px] sm:w-[400px] w-[300px]']"/>
          </router-link>
          <div
            class="2xl:hidden xl:hidden lg:hidden md:flex justify-center items-center text-2xl cursor-pointer hover:text-usea_primary"
            @click="toggleSidebar"
          >
            <i class="fa-solid fa-bars"></i>
          </div>
          
        </div>
  
        <nav
          class="flex-1 pt-10 2xl:text-lg xl:text-md lg:text-md 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden font-bold text-[#002060] relative"
        >
          <ul class="flex align-top gap-8 relative">
            <!-- Submenu: About -->
            <li class="nav-item pb-10 group relative">
              About
              <ul
                class="mega-menu hidden absolute -left-[600px] top-full w-max bg-white shadow-lg px-20 py-20 grid grid-cols-3 gap-x-5 z-50 rounded-md"
              >
                <div class="mega-menu-item">
                  <h3 class="font-bold text-xl pb-7 text-[#002060]">
                    Organization
                  </h3>
                  <ul class="text-lg text-gray-500">
                    <li class="flex gap-2">History & Logo Meaning</li>
                    <li class="flex gap-2">Vision & Mission</li>
                    <li class="flex gap-2">Location</li>
                  </ul>
                </div>
                <div class="mega-menu-item px-12 w-full">
                  <h3 class="font-bold text-lg pb-7 text-[#002060]">
                    Governance & Accreditation
                  </h3>
                  <ul class="text-lg text-gray-500">
                    <li class="flex gap-2">Message from President</li>
                    <li class="flex gap-2">Board of Trustees</li>
                    <li class="flex gap-2">Recognition & Accreditation</li>
                  </ul>
                </div>
                <div class="mega-menu-item px-12 w-full">
                  <h3 class="font-bold text-lg pb-7 text-[#002060]">Information</h3>
                  <ul class="text-lg text-gray-500">
                    <li class="flex gap-2">News & Events</li>
                    <li class="flex gap-2">FAQ</li>
                    <li class="flex gap-2">Contact</li>
                  </ul>
                </div>
              </ul>
            </li>
  
            <!-- Submenu: Academics -->
            <li class="nav-item pb-10 group relative">
              Academics
              <ul
                class="mega-menu hidden absolute -left-[900px] top-full w-max bg-white shadow-lg px-12 py-12 grid grid-cols-3 gap-x-5 z-50 rounded-md"
              >
                <div class="mega-menu-item">
                  <h3 class="font-bold text-xl pb-7 text-[#002060]">Faculty</h3>
                  <ul class="text-lg text-gray-500">
                    <li class="flex gap-2">
                      Faculty of Economics, Business & Tourism
                    </li>
                    <li class="flex gap-2">Faculty of Sciences & Technology</li>
                    <li class="flex gap-2">Faculty of Social Science & Law</li>
                    <li class="flex gap-2">Faculty of Art, Humanities & Language</li>
                  </ul>
                </div>
                <div class="mega-menu-item px-12 w-full">
                  <h3 class="font-bold text-lg pb-7 text-[#002060]">
                    Programs & Courses
                  </h3>
                  <ul class="text-lg text-gray-500">
                    <li class="flex gap-2">International College</li>
                    <li class="flex gap-2">Post Graduate</li>
                    <li class="flex gap-2">Foreign Language Center</li>
                    <li class="flex gap-2">Short Course</li>
                  </ul>
                </div>
                <div class="mega-menu-item px-12 w-full">
                  <img :src="Building" alt="Building" width="400px" />
                </div>
              </ul>
            </li>
  
            <!-- Submenu: Partnership -->
            <li class="nav-item group relative pb-10">
              Partnership
              <ul
                class="mega-menu hidden absolute top-full left-0 w-max bg-white shadow-lg p-7 grid grid-cols-1 z-50 rounded-md"
              >
                <li class="text-gray-500 flex gap-2">Local Partner</li>
                <li class="text-gray-500 flex gap-2">International Partner</li>
              </ul>
            </li>
  
            <!-- Additional Navbar Items -->
            <li class="nav-item pb-10">Research</li>
            <li class="nav-item group relative pb-10">
              Services
              <ul
                class="mega-menu hidden absolute top-full left-0 w-max bg-white shadow-lg p-7 grid grid-cols-1 z-50 rounded-md"
              >
                <li class="text-gray-500 flex gap-2">Health Services</li>
                <li class="text-gray-500 flex gap-2">IT Services</li>
                <li class="text-gray-500 flex gap-2">Library</li>
                <li class="text-gray-500 flex gap-2">Career Center</li>
              </ul>
            </li>
          </ul>
          <!-- <div class="absolute right-[17rem] top-[2rem] ml-8">
            <button class="bg-[#002060] px-5 py-3 rounded-md text-white">Journal</button>
          </div> -->
        </nav>
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import TitleLogo from "@/assets/title/usea-title-1.png";
  import Building from "@/assets/navbar/usea_building.png";
  
  // States for navbar behavior
  const isShrunk = ref(false);
  const isFixed = ref(false);
  
  // Handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;
    isShrunk.value = scrollY > 80; // Shrink navbar on scroll
    isFixed.value = scrollY > 0; // Fix navbar on any scroll
  };
  
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
    opacity: 0.9;
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
  opacity: 0.80;
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
  </style>
  