import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
//document.querySelector("h1").addEventListener("click", function (e) {
// alert("Bana tıkladın!");
//});

// Kodlar buraya gelecek!

// 1. mouseover

document.querySelector("h1").addEventListener("mouseover", mouseOver);

function mouseOver() {
  document.querySelector("h1").style.color = "red";
}

// 2. mouseout

document.querySelector("h1").addEventListener("mouseout", mouseOut);
function mouseOut() {
  document.querySelector("h1").style.color = "black";
}

// 3. click - Arka plan rengini değiştir, resimleri
document.querySelector("h1").addEventListener("click", () => {
  document.body.style.backgroundColor = "pink";
});

const imgOtobus = document.querySelectorAll("img");
imgOtobus.forEach((item) => {
  item.addEventListener("click", (item) => {
    item.target.setAttribute("style", "filter:grayscale(100%)");
  });
});

// 4. dblclick

document.querySelectorAll("img");
imgOtobus.forEach((item) => {
  item.addEventListener("dblclick", (item) => {
    item.target.setAttribute("style", "filter:grayscale(0%)");
  });
});

// 5. Scroll

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.body.style.backgroundColor = "orange";
  }
}

// 6. Wheel

document.getElementById("forWheel").addEventListener("wheel", wheelFn);

function wheelFn() {
  this.style.fontSize = "45px";
}
