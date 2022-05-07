// Assign elements to variables
const color = document.getElementById("colorPicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const picker = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");


// When size is submitted by the user, call makeGrid()
picker.addEventListener("submit", function(grid) {
  canvas.innerHTML = "";
  grid.preventDefault();
  makeGrid();
});

// Turn grid on or off with the design canvas
canvas.addEventListener("click", function(grid) {
  if (grid.target.nodeName === "TD") {
    grid.target.style.backgroundColor = colorPicker.value;
  }
})


// Call the makeGrid function
function makeGrid() {
  for (let i = 0; i < height.value; i += 1) {
    const row = canvas.insertRow(0);
    for (let j = 0; j < width.value; j += 1) {
      row.insertCell(0);
    }
}
}
