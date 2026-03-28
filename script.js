const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generatePalette);
paletteContainer.addEventListener("click", handleClick);

function handleClick(e) {
  const box = e.target.closest(".color-box");
  if (!box) {
    return;
  }
  if (!e.target.closest(".copy-btn, .color")) {
    return;
  }
  const hexValue = box.querySelector(".hex-value").textContent;
  const copyBtn = box.querySelector(".copy-btn");
  copyToClipboard(hexValue, copyBtn);
}

function copyToClipboard(hexValue, copyBtn) {
  navigator.clipboard
    .writeText(hexValue)
    .then(() => showCopySuccess(copyBtn).catch((err) => console.log(err)));
}

function showCopySuccess(copyBtn) {
  copyBtn.classList.remove("far", "fa-copy");
  copyBtn.classList.add("fas", "fa-check");
  copyBtn.style.color = "#48bb78";

  setTimeout(() => {
    copyBtn.classList.remove("fas", "fa-check");
    copyBtn.classList.add("far", "fa-copy");
    copyBtn.style.color = "";
  }, 1500);
}

function generatePalette() {
  let colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(generateRandom());
  }
  updateDisplay(colors);
}

function generateRandom() {
  const hexChars = "0123456789ABCDEF";
  let hexValue = "#";

  for (let i = 0; i < 6; i++) {
    hexValue += hexChars[Math.floor(Math.random() * 16)];
  }
  return hexValue;
}

function updateDisplay(colors) {
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach((colorBox, index) => {
    const color = colors[index];
    const colorDiv = colorBox.querySelector(".color");
    const hexValue = colorBox.querySelector(".hex-value");
    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}
