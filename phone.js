var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
var rotateSum;
upBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
downBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

var boxes = document.getElementsByClassName("h-1");
document.querySelector(".showBtn").addEventListener("click", () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.toggle("hide");
  }
  if (document.querySelector(".showBtn").innerText === "showLess") {
    document.querySelector(".showBtn").innerText = "show more";
  } else {
    document.querySelector(".showBtn").innerText = "showLess";
  }
});
