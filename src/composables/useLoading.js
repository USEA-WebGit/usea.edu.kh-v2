// src/composables/useLoading.js
import { ref } from "vue";

const isLoading = ref(false);
const text = ref("");
let timer;
let startedAt = 0;

const MIN_SHOW_MS = 350; // prevents flicker on fast routes

function start(msg = "") {
  clearTimeout(timer);
  text.value = msg;
  if (!isLoading.value) {
    isLoading.value = true;
    startedAt = Date.now();
  }
}

function stop() {
  const elapsed = Date.now() - startedAt;
  const wait = Math.max(MIN_SHOW_MS - elapsed, 0);
  clearTimeout(timer);
  timer = setTimeout(() => {
    isLoading.value = false;
    text.value = "";
  }, wait);
}

export function useLoading() {
  return { isLoading, text, start, stop };
}
