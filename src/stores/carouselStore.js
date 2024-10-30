import { defineStore } from 'pinia';

export const useCarouselStore = defineStore('carousel', {
  state: () => ({
    currentSlide: 0,
    slides: [
      'https://via.placeholder.com/800x400?text=Slide+1',
      'https://via.placeholder.com/800x400?text=Slide+2',
      'https://via.placeholder.com/800x400?text=Slide+3',
    ],
  }),
  actions: {
    nextSlide(state) {
      if (state.currentSlide < state.slides.length - 1) {
        state.currentSlide++;
      } else {
        state.currentSlide = 0;
      }
    },
    prevSlide(state) {
      if (state.currentSlide > 0) {
        state.currentSlide--;
      } else {
        state.currentSlide = state.slides.length - 1;
      }
    },
  },
});
