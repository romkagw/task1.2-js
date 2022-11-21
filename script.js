//task 1
const blackSquare = document.getElementById("black-square");
document
  .querySelector(".remove-square-css")
  .addEventListener("click", () => (blackSquare.style.display = "none"));
document
  .querySelector(".remove-square-js")
  .addEventListener("click", () => blackSquare.remove());
document
  .querySelector(".remove-square-css-js")
  .addEventListener("click", () => {
    blackSquare.classList.add("hidden");
  });

//task 2

const blockSquare = document.getElementById("black-square-1");
document.querySelector(".remove-block").addEventListener("click", () => {
  if (blockSquare.style.display == "none") {
    blockSquare.style.display = "block";
    document.querySelector(".remove-block").innerHTML = "Remove";
  } else {
    blockSquare.style.display = "none";
    document.querySelector(".remove-block").innerHTML = "Create";
  }
});

//task 3
const square = document.querySelectorAll(".five-square");
document.querySelector(".remove-blocks").addEventListener("click", () => {
  for (let i = 0; i < square.length; i++) {
    console.log(square);
    if (square[i].style.display != "none") {
      square[i].style.display = "none";
      document.querySelector(".remove-blocks").innerHTML = "Create";
    } else {
      square[i].style.display = "block";
      document.querySelector(".remove-blocks").innerHTML = "Remove";
    }
  }
});

//task 4
document.querySelector(".remove-selector").addEventListener("click", () => {
  let selector = document.querySelector(".selector-input").value;
  let display = document.querySelector(selector);
  display.style.display = display.style.display != "none" ? "none" : "block";
});

//task 5
let yellowSquare = document.querySelector(".yellow-square");
yellowSquare.addEventListener("click", click);
function click() {
  alert("hello");
  yellowSquare.removeEventListener("click", click);
  yellowSquare.addEventListener("click", () => {
    yellowSquare.style.display = "none";
  });
}

//task 6
const redSquare = document.querySelector(".red-square");
const btnRed = document.querySelector(".btn-red");
btnRed.addEventListener("mouseover", myFunction);
btnRed.addEventListener("mouseout", mySecondFunction);
function myFunction() {
  redSquare.style.display = "block";
}
function mySecondFunction() {
  redSquare.style.display = "none";
}

//task 7

const input = document.querySelector(".input-green");
input.addEventListener("focus", () => {
  document.querySelector(".green-square").classList.remove("hidden");
});
input.addEventListener("beforeinput", () => {
  document.querySelector(".green-square").classList.add("hidden");
});

//task 8

document.querySelector(".create-image").addEventListener("click", () => {
  let image = document.createElement("img");
  image.setAttribute("src", document.querySelector(".input-img").value);
  document.querySelector(".image-box").append(image);
});

//task 9

document.querySelector(".btn-textarea").addEventListener("click", createImg);
function createImg() {
  let a = document.querySelector("textarea").value.split("\n");
  for (let i = 0; i < a.length; i++) {
    const image = document.createElement("img");
    image.setAttribute("src", a[i]);
    document.querySelector(".image-boxes").append(image);
  }
}

//task 10- 11 12

let pos = "";
navigator.geolocation.getCurrentPosition((position) => {
  pos = `<br>location: <br> Ш: ${position.coords.latitude} <br>
    Д: ${position.coords.longitude}`;
});

let coord = document.querySelector(".coordinate");
document.addEventListener("mousemove", (e) => {
  coord.innerHTML = `X:${e.clientX} Y:${e.clientY} <br> Lang: ${navigator.language} ${pos}`;
});

// task 14

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > document.documentElement.scrollHeight - 800) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

//task 15

document.querySelector(".block-1").addEventListener("click", () => {
  alert("hi big square");
});

document.querySelector(".block-2").addEventListener("click", () => {
  alert("hi small square");
  event.stopPropagation();
});

//task 16
const greySquare = document.querySelector(".grey-square");
document.querySelector(".square-button").onclick = () => {
  greySquare.style.display = "block";
  document.body.style.overflow = "hidden";
};
greySquare.onclick = () => {
  greySquare.style.display = "none";
  document.body.style.overflow = "auto";
};

// Local Storage
document.getElementById("input-1").addEventListener("mouseout", () => {
  localStorage.setItem("localStorage", document.getElementById("input-1").innerHTML);
});

//Cookie
document.getElementById("input-2").addEventListener("mouseout", () => {
document.cookie="cookie="+document.getElementById("input-2").innerHTML;
});


// Session Storage
document.getElementById("input-3").addEventListener("mouseout", () => {
  sessionStorage.setItem("sessionStorage", document.getElementById("input-3").innerHTML);
});

onload = () => {
    document.getElementById("input-1").innerHTML =
    localStorage.getItem("localStorage");

    let a = document.cookie.split("; ").filter(item => item.includes("cookie="))[0].split("=");
    a = a.length>1 ? a[1] : "";
    document.getElementById("input-2").innerHTML = a;
    
    document.getElementById("input-3").innerHTML =
    sessionStorage.getItem("sessionStorage");
};





//task18

const target = document.querySelector("#file_upload");
target.addEventListener("dragenter", () => {
    
document.querySelector("label").classList.add("upload-container-1");
});

target.addEventListener("dragleave", () => {
    document.querySelector("label").classList.remove("upload-container-1");
});




target.addEventListener("change", ()=>{
    document.querySelector("label").classList.add("upload-container-2")
})





