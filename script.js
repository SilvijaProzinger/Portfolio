let menu = document.getElementById('menu');

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

/*
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/
