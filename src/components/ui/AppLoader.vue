<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-[9999] bg-white/70 backdrop-blur-sm flex items-center justify-center"
      >
        <div class="flex flex-col items-center gap-3">
          <!-- Spinner -->
          <div class="w-12 h-12 rounded-full border-4 border-[#002060]/20 border-t-[#002060] animate-spin"></div>
          <p v-if="text" class="text-sm text-[#002060]/70">{{ text }}</p>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { useLoading } from "@/composables/useLoading.js";
const { isLoading, text } = useLoading();
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
