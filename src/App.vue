<template>
  <TopBar />
  <NavBar/>
    <div>
      <router-view></router-view>
    </div>
  <Footer />
  <!-- <Test/> -->
</template>
<script setup>
import TopBar from './components/TopBar.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Test from './views/Test.vue';
</script>