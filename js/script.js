const result = document.querySelector(".js-result");
const buttonConvert = document.querySelector(".js-convert");
const buttonReset = document.querySelector(".js-reset");
const buttonChange = document.querySelector(".js-change");
const label = document.querySelector("label");
const form = document.querySelector(".js-form");
const converter = document.querySelector(".js-input");

let changeOption = 0;

const celToFar = () => {
  return converter.value * 1.8 + 32;
};

const farToCel = () => {
  return (converter.value - 32) / 1.8;
};

const reset = () => {
  result.textContent = "";
  converter.value = "";
};

buttonChange.addEventListener("click", () => {
  if (changeOption === 1) {
    changeOption = 0;
    label.textContent = "Convert from °F to °C";
    reset();
  } else {
    changeOption = 1;
    label.textContent = "Convert from °C to °F";
    reset();
  }
});

buttonConvert.addEventListener("click", () => {
  if (converter.value !== 0) {
    if (changeOption === 0) {
      result.textContent = `Temperature: ${celToFar().toFixed(2)}°F`;
    } else {
      result.textContent = `Temperature: ${farToCel().toFixed(2)}°C`;
    }
  } else {
    result.textContent = "You need to put value!";
  }
});

buttonReset.addEventListener("click", reset);

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
