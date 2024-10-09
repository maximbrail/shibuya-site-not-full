const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')

burger.addEventListener('click', () => {
  nav.classList.toggle('active')
})






const swiperAlbum = new Swiper('.album-swiper-1', {
  loop: true,
  slidesPerView: 0.5,
  speed: 20000,
  spaceBetween: 10,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});


const swiperAlbum2 = new Swiper('.album-swiper-2', {
  loop: true,
  slidesPerView: 0.5,
  speed: 20000,
  spaceBetween: 10,
  allowTouchMove: false,
  autoplay: {
    reverseDirection: true,
    delay: 0,
    disableOnInteraction: false,
  },
});