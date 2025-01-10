<template>
  <TopBar />
  <NavBar/>
    <div>
      <router-view></router-view>
    </div>
  <Footer />
    
</template>
<script setup>
import TopBar from './components/TopBar.vue';
import NavBar from './components/NavBar.vue';
import BottomPage from './components/BottomPage.vue';
import Footer from './components/Footer.vue';
</script>