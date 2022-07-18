import { Swiper, Navigation, Pagination, Thumbs } from "swiper";
Swiper.use([Navigation, Pagination, Thumbs]);

const casualBigImage = document.querySelector("#casualClothesSlider");
const casualClothesThumbs = document.querySelector("#casualClothesThumbs");
const popularList = document.querySelector("#popularList");
const productBigImage = document.querySelector("#productSlider");
const productsThumbs = document.querySelector("#productThumbs");

const casualClothesThumbsSlider = new Swiper(casualClothesThumbs, {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,

  pagination: {
    el: ".casual-section__pagination",
    type: "bullets",
    clickable: true,
  },
});

const casualClothesSlider = new Swiper(casualBigImage, {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  thumbs: {
    swiper: casualClothesThumbsSlider,
  },
});

const popularListSlider = new Swiper(popularList, {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,

  navigation: {
    nextEl: ".popular-goods__list-next",
    prevEl: ".popular-goods__list-prev",
  },
});

const productThumbsSlider = new Swiper(productsThumbs, {
  spaceBetween: 20,
  slidesPerView: 3,
  speed: 400,
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
