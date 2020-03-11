let resolution = 0;
const grid = document.getElementById("grid");
const generate = document.getElementById("generate");

function generateGrid() {
  grid.classList = "grid";
  grid.innerHTML = "";
  if (resolution <= 8) {
    grid.classList.add("x8");
    addDivs(8);
  } else if (resolution <= 16) {
    grid.classList.add("x16");
    addDivs(16);
  } else if (resolution <= 32) {
    grid.classList.add("x32");
    addDivs(32);
  } else if (resolution <= 64) {
    grid.classList.add("x64");
    addDivs(64);
  }
}

generate.onclick = function() {
  resolution = document.querySelector("#resolution").value;
  generateGrid();
};

function addDivs(n) {
  for (let i = 0; i < n * n; i++) {
    let div = document.createElement("div");
    div.classList.add("child");
    grid.appendChild(div);
  }
}
