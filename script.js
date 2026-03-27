const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generateColors);

function randomColor() {
  const letter = "0123456789ABCDEF";
  let randomHexCode = "#";
  for (let i = 0; i < 6; i++) {
    randomHexCode += letter[Math.floor(Math.random() * 16)];
  }
  return randomHexCode;
}

function generateColors() {
  let colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(randomColor());
  }
  updateDisplay(colors);
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
