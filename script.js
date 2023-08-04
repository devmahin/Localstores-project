const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const reset = document.getElementById("reset");
const main = document.querySelector("main");
const textColor = document.getElementById("textColor");

function setValue(font, color, fontColor) {
  selectFontSize.value = font;
  selectBgColor.value = color;
    textColor.value = fontColor;
    
  main.style.fontSize = font;
  main.style.backgroundColor = color;
  main.style.fontWeight = fontColor;
}

function getItem() {
  let font = localStorage.getItem("fontsize");
  let color = localStorage.getItem("color");
  let colorBG = localStorage.getItem("colorBG");

  if (font && color && colorBG) {
    setValue(font, color, colorBG);
  }
  if (!font && !color && !colorBG) {
    setValue("16px", "aqua", "400");
  }
  if (!font && color && colorBG) {
    setValue("16px", color, colorBG);
  }
  if (font && !color && colorBG) {
    setValue(font, "aqua", colorBG);
  }
  if (font && color && !colorBG) {
    setValue(font, color, "400");
  }
}

function fontSize(e) {
  const text = e.target.value;
  main.style.fontSize = text;
  localStorage.setItem("fontsize", text);
}
function bgColor(e) {
  const color = e.target.value;
  main.style.backgroundColor = color;
  localStorage.setItem("color", color);
}
function ColorBg(e) {
  const colorBG = e.target.value;
  console.log(colorBG);
  main.style.fontWeight = colorBG;
  localStorage.setItem("colorBG", colorBG);
}

function resetBtn() {
  localStorage.removeItem("fontsize");
  localStorage.removeItem("color");
  localStorage.removeItem("colorBG");

  setValue("16px", "aqua", "400");
}

selectFontSize.addEventListener("change", fontSize);
selectBgColor.addEventListener("change", bgColor);
textColor.addEventListener("change", ColorBg);
reset.addEventListener("click", resetBtn);
getItem();
