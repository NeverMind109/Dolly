import { Swiper, Navigation, Pagination, Thumbs } from "swiper";
Swiper.use([Navigation, Pagination, Thumbs]);

const casualBigImage = document.querySelector("#casualClothesSlider");
const casualClothesThumbs = document.querySelector("#casualClothesThumbs");
const popularList = document.querySelector("#popularList");
const productBigImage = document.querySelector("#productSlider");
const productsThumbs = document.querySelector("#productThumbs");

const casualClothesThumbsSlider = new Swiper(casualClothesThumbs, {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".casual-section__pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const casualClothesSlider = new Swiper(casualBigImage, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  thumbs: {
    swiper: casualClothesThumbsSlider,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
    },
  },
});

const popularListSlider = new Swiper(popularList, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: ".popular-goods__list-next",
    prevEl: ".popular-goods__list-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

const productThumbsSlider = new Swiper(productsThumbs, {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
      speed: 400,
    },
  },
});

const productSlider = new Swiper(productBigImage, {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 400,

  thumbs: {
    swiper: productThumbsSlider,
  },
  navigation: {
    nextEl: ".product__images-next",
    prevEl: ".product__images-prev",
  },
});
