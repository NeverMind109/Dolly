const filterCategoryDropdown = document.querySelector(
  ".filter__category-title"
);
const filterCategoryContent = document.querySelector(
  ".filter__category-content"
);
const filterCategoryCaret = document.querySelector("#categoryCaret");

const filterBrandDropdown = document.querySelector(".filter__brand-title");
const filterBrandContent = document.querySelector(".filter__brand-content");
const filterBrandCaret = document.querySelector("#brandCaret");

const filterBrandMoreBtn = document.querySelector(".filter__brand-morebtn");
const filterBrandHidden = document.querySelector(".filter__brand-hidden");

if (filterCategoryDropdown) {
  filterCategoryDropdown.addEventListener("click", function (event) {
    event.preventDefault();
    if (!filterCategoryContent.classList.contains("active")) {
      filterCategoryContent.classList.add("active");
      filterCategoryCaret.classList.add("active");
      filterCategoryContent.style.height = "auto";
    } else {
      setTimeout(function () {
        filterCategoryCaret.classList.remove("active");
        filterCategoryContent.classList.remove("active");
        filterCategoryContent.style.height = "0px";
      }, 100);
    }
  });
}

if (filterBrandDropdown) {
  filterBrandDropdown.addEventListener("click", function (event) {
    event.preventDefault();
    if (!filterBrandContent.classList.contains("active")) {
      filterBrandContent.classList.add("active");
      filterBrandCaret.classList.add("active");
      filterBrandContent.style.height = "auto";
    } else {
      setTimeout(function () {
        filterBrandCaret.classList.remove("active");
        filterBrandContent.classList.remove("active");
        filterBrandContent.style.height = "0px";
      }, 100);
    }
  });

  filterBrandMoreBtn.addEventListener("click", function (event) {
    if (!filterBrandHidden.classList.contains("active")) {
      filterBrandHidden.classList.add("active");
      filterBrandHidden.style.display = "flex";
      filterBrandMoreBtn.innerHTML = "Скрыть";
    } else {
      setTimeout(function () {
        filterBrandHidden.classList.remove("active");
        filterBrandHidden.style.display = "none";
        filterBrandMoreBtn.innerHTML = "Смотреть еще";
      }, 100);
    }
  });
}
