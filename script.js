let menu = document.getElementById('menu');
let thumbnail = document.getElementsByClassName('project-image');
let playButton = document.getElementsByClassName('play-button');
let gif = false

const openMenu = () => {
	if (menu.style.display === "block") {
    	menu.style.display = "none";
  	} else {
   		menu.style.display = "block";
  	}
}	

const filterSelection = (c) => {
  let x, i;
  x = document.getElementsByClassName("card");
  if (c === "all") {
  	c = "";
  }	
  for (i = 0; i < x.length; i++) {
    removeShown(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
    	addShown(x[i], "show");
    }
  }
}

const addShown = (element, name) => {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
    	element.className += " " + arr2[i];
    }
  }
}

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
}

filterSelection('all')

//upon clicking the play button show the project preview gif
for (let i = 0; i < playButton.length; i++){
  playButton[i].addEventListener('click', function(){
    gif = !gif 
    if (gif === true){
      playButton[i].style.backgroundImage = 'url(images/pause.png)' //on click change icon from play to pause
      thumbnail[i].src = `images/P${i+1}gif.gif` //because looping starts from 0 and projects from 1
    } else {
      playButton[i].style.backgroundImage = 'url(images/play-button.png)'
      thumbnail[i].src = `images/P${i+1}small.png`
    }
  })
}
