const color = document.getElementById("colorPicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const picker = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");


picker.addEventListener("submit", function(grid) {
  canvas.innerHTML = "";
  grid.preventDefault();
  makeGrid();
});


canvas.addEventListener("click", function(grid) {
  if (grid.target.nodeName === "TD") {
    grid.target.style.backgroundColor = colorPicker.value;
  }
})


function makeGrid() {
  for (let i = 0; i < height.value; i += 1) {
    const row = canvas.insertRow(0);
    for (let j = 0; j < width.value; j += 1) {
      row.insertCell(0);
    }
  }
}
