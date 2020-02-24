const app = new Vue({
  el: '#app',
  data() {
    return {
      burger: false,
      tabNumber: 1
    };
  },
  methods: {
    burgerToggle() {
      this.burger = !this.burger;
    },
    tabChange(num) {
      this.tabNumber = num;
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const load = document.querySelector('.loading');
  setTimeout(() => {
    load.classList.add('loaded');
  }, 2000);
});

AOS.init({
  offset: 120,
  delay: 100,
  duration: 800,
  easing: 'ease-in-out',
  once: false,
  mirror: false,
  anchorPlacement: 'top-center'
});

const mySwiper = new Swiper('.swiper-container', {
  loop: true,
  effect: 'coverflow',
  // effect: 'fade',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  breakpoints: {
    769: {
      slidesPerView: 1.2
    }
  }
});
