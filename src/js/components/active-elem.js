const sizeBtns = document.querySelectorAll(".sizes__btn");
const colorBtns = document.querySelectorAll(".colors__btn");
const favouritesBtn = document.querySelector(".product__favourites");
const favouritesIcon = document.querySelector(".product__favourites-icon");
const favouritesText = document.querySelector("#favouritesText");
const productSection = document.querySelector(".product");
const popularGoodsSection = document.querySelector(".popular-goods");
const popularGoodsTitle = document.querySelector(".popular-goods__title");

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
