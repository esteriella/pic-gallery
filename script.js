const pColors = ["white", "blue", "yellow", "black"];
const divColors = ["green", "orange", "purple", "white"];
let colorIndex = 0;

function changeColor(element) {
  element.style.color = pColors[colorIndex];
  element.parentNode.style.backgroundColor = divColors[colorIndex];
  colorIndex = (colorIndex + 1) % pColors.length;
}
