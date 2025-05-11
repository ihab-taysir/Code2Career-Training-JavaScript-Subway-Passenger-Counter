let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

document.getElementById("increment-btn").addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;
});

document.getElementById("save-btn").addEventListener("click", function () {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
});
