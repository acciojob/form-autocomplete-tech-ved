//your JS code here. If required.
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

// load saved data
window.addEventListener("load", () => {
  const savedData = JSON.parse(localStorage.getItem("formData"));

  if (savedData) {
    inputs.forEach(input => {
      if (savedData[input.name]) {
        input.value = savedData[input.name];
      }
    });
  }
});

// save data
form.addEventListener("input", () => {
  let data = {};

  inputs.forEach(input => {
    data[input.name] = input.value;
  });

  localStorage.setItem("formData", JSON.stringify(data));
});