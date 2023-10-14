var mainImage = document.querySelector("img");
var images = ["img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
var num = 0;
const auto = true;
const intervalTime = 5000;
let slideInterval;

function next() {
  num++;
  if (num >= images.length) {
    num = 0;
    mainImage.src = images[num];
  } else {
    mainImage.src = images[num];
  }
}

function back() {
  num--;
  if (num < 0) {
    num = images.length - 1;
    mainImage.src = images[num];
  } else {
    mainImage.src = images[num];
  }
}

if(auto){
    slideInterval =setInterval(next,intervalTime)
}
