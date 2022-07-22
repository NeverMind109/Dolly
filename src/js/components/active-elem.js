const sizeBtns = document.querySelectorAll(".sizes__btn");
const colorBtns = document.querySelectorAll(".colors__btn");
const favouritesBtn = document.querySelector(".product__favourites");
const favouritesIcon = document.querySelector(".product__favourites-icon");
const favouritesText = document.querySelector("#favouritesText");
const productSection = document.querySelector(".product");
const popularGoodsSection = document.querySelector(".popular-goods");
const popularGoodsTitle = document.querySelector(".popular-goods__title");
const filterMobileBtn = document.querySelector(".filter__btn");
const filterContent = document.querySelector(".filter__wrapper");

if (sizeBtns) {
  sizeBtns.forEach((item) => {
    item.addEventListener("click", function () {
      if (!item.classList.contains("active")) {
        sizeBtns.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
}

if (colorBtns) {
  colorBtns.forEach((item) => {
    item.addEventListener("click", function () {
      if (!item.classList.contains("active")) {
        colorBtns.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
}

if (favouritesBtn) {
  favouritesBtn.addEventListener("click", function () {
    if (!favouritesIcon.classList.contains("active")) {
      favouritesIcon.classList.add("active");
      favouritesText.innerHTML = "в избранном";
    } else {
      favouritesIcon.classList.remove("active");
      favouritesText.innerHTML = "в избранное";
    }
  });
}

if (productSection) {
  if (popularGoodsSection) {
    popularGoodsTitle.innerHTML = "С этим покупают";
  }
}

if (filterMobileBtn) {
  mobileFilterSection();
  window.onresize = mobileFilterSection;

  function mobileFilterSection() {
    if (window.innerWidth <= 576) {
      filterMobileBtn.nextElementSibling.classList.add("hidden");
      filterMobileBtn.addEventListener("click", function () {
        if (!filterMobileBtn.nextElementSibling.classList.contains("hidden")) {
          filterMobileBtn.innerHTML = "Показать фильтры";
          filterMobileBtn.nextElementSibling.classList.add("hidden");
        } else {
          filterMobileBtn.innerHTML = "Скрыть фильтры";
          filterMobileBtn.nextElementSibling.classList.remove("hidden");
        }
      });
    }
    if (window.innerWidth > 576) {
      filterMobileBtn.innerHTML = "Показать фильтры";
      filterMobileBtn.nextElementSibling.classList.remove("hidden");
    }
  }
}
