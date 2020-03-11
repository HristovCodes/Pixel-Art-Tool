let resolution = 0;
const grid = document.getElementById("grid");
const generate = document.getElementById("generate");
const pixels = document.getElementsByClassName("pixel");

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
  cellColor();
}

generate.onclick = function() {
  resolution = document.querySelector("#resolution").value;
  generateGrid();
};

function addDivs(n) {
  for (let i = 0; i < n * n; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    grid.appendChild(div);
  }
}

function createColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function cellColor() {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", e => {
      let brightness = getComputedStyle(e.target)
        .getPropertyValue("filter")
        .split(/\(([^)]+)\)/);
      if (brightness == "none") {
        e.target.style.backgroundColor = createColor();
        e.target.style.filter = "brightness(1)";
      } else if (brightness[1] > 0) {
        e.target.style.filter = `brightness(${brightness[1] - 0.2})`;
      }
    });
  }
}

generateGrid();
cellColor();
