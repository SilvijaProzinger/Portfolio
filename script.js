let menu = document.getElementById('menu');

const openMenu = () => {
	console.log('clicked')
	if (menu.style.display === "block") {
    	menu.style.display = "none";
  	} else {
   		menu.style.display = "block";
  	}
}	

