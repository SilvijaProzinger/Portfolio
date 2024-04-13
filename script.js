const menu = document.getElementById("menu");
menuButton = document.getElementById("hamburgerMenu");
thumbnail = document.getElementsByClassName("project-image");
playButton = document.getElementsByClassName("play-button");
card = document.getElementsByClassName("card");
description = document.getElementsByClassName("project-description");
show = document.getElementsByClassName("show");
windowWidth = window.innerWidth;
showAllButton = document.getElementById("showAll");
let gif = false;
let webpChecker;

const openMenu = () => {
  if (windowWidth <= 674) {
    if (menu.classList.contains("open")) {
      menu.classList.add("closed");
      menu.classList.remove("open");
      menuButton.style.backgroundImage = "url(images/icons8-menu.svg)";
    } else {
      menu.classList.add("open");
      menu.classList.remove("closed");
      menuButton.style.backgroundImage = "url(images/icons8-cancel.svg)";
    }
  }
};

//check if webp is supported, if not gif image will be served instead
async function WebpIsSupported() {
  // If the browser doesn't has the method createImageBitmap, you can't display webp format
  if (!self.createImageBitmap) return false;

  // Base64 representation of a white point image
  const webpData =
    "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=";

  // Retrieve the Image in Blob Format
  const blob = await fetch(webpData).then((r) => r.blob());

  // If the createImageBitmap method succeeds, return true, otherwise false
  return createImageBitmap(blob).then(
    () => true,
    () => false
  );
}

(async () => {
  if (await WebpIsSupported()) {
    webpChecker = true;
    console.log(webpChecker);
  } else {
    webpChecker = false;
    console.log(webpChecker);
  }
})();

const filterSelection = (c) => {
  let x, i;
  x = document.getElementsByClassName("card");

  if (c === "all") {
    c = "";
    showAllButton.style.display = "none";
  } else {
    showAllButton.style.display = "block";
  }

  for (i = 0; i < x.length; i++) {
    removeShown(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      addShown(x[i], "show");
    }
  }
};

const addShown = (element, name) => {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
};

const removeShown = (element, name) => {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
};

filterSelection("all");

//upon clicking the play button show the project preview gif
for (let i = 0; i < playButton.length; i++) {
  playButton[i].addEventListener("click", function () {
    gif = !gif;
    if (gif === true && webpChecker === true) {
      playButton[i].style.backgroundImage =
        "url(images/icons8-pause-button-80.png)"; //on click change icon from play to pause
      thumbnail[i].src = `images/P${i + 1}webp.webp`; //because looping starts from 0 and projects from 1
      //if webp is not supported use gif format instead
    } else if (gif === true && webpChecker === false) {
      playButton[i].style.backgroundImage =
        "url(images/icons8-pause-button-80.png)";
      thumbnail[i].src = `images/P${i + 1}gif.gif`;
    } else {
      playButton[i].style.backgroundImage =
        "url(images/icons8-circled-play-80.png)";
      thumbnail[i].src = `images/P${i + 1}small.png`;
    }
  });
}

//on hover show project description
/*for(let i = 0; i < card.length; i++){
    card[i].onmouseover = function(){
        description[i].style.display = "block";
        show[i].style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)"
    }
    card[i].onmouseout = function (){
        description[i].style.display = "none";
        show[i].style.boxShadow = "none"
    }
}*/

//animate some elements when they get into viewport
(function () {
  let elements;
  let windowHeight;
  let windowWidth;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0 && windowWidth > 675) {
        element.classList.add("animation");
        element.classList.add("animation-two");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
