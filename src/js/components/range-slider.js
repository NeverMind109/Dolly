import noUiSlider from "nouislider";

const priceRangeSlider = document.querySelector(".filter__price-slider");
const priceRangeSliderMin = document.querySelector("#rangeLowerValue");
const priceRangeSliderMax = document.querySelector("#rangeUpperValue");

const inputs = [priceRangeSliderMin, priceRangeSliderMax];

const rangeSliderInit = () => {
  if (priceRangeSlider) {
    noUiSlider.create(priceRangeSlider, {
      start: [2000, 8000],
      step: 100,
      connect: true,
      range: {
        min: 0,
        max: 10000,
      },
    });

    priceRangeSlider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = parseInt(values[handle]);
    });

    priceRangeSliderMin.addEventListener("change", function () {
      priceRangeSlider.noUiSlider.set([this.value, null]);
    });

    priceRangeSliderMax.addEventListener("change", function () {
      priceRangeSlider.noUiSlider.set([null, this.value]);
    });
  }
};

const init = () => {
  rangeSliderInit();
};

window.addEventListener("DOMContentLoaded", init);
