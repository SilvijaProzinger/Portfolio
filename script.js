let menu = document.getElementById('menu');
let thumbnail = document.getElementsByClassName('project-image');
let gif = false

const openMenu = () => {
	console.log('clicked')
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

//upon clicking the thumbnail play the project preview gif
for (let i = 0; i < thumbnail.length; i++){
  thumbnail[i].addEventListener('click', function(){
    gif = !gif 
    if (gif === true){
      thumbnail[i].src = `images/P${i+1}gif.gif` //because looping start from 0 and projects from 1
    } else {
      thumbnail[i].src = `images/P${i+1}small.png`
    }
  })
}
