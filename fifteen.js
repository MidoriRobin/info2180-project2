// Author: Christopher Robinson

window.onload = function(){
	var pArea = document.querySelector("#puzzlearea").querySelectorAll("div");
	console.log(pArea);
	
		var appFrame = () =>{
		
		for(var i = 0; i < pArea.length; i++){
			pArea[i].classList.add("puzzlepiece");
		}
	}

	appFrame();
	
}



var appFrame = () =>{
	for(var i = 0; i < pArea.length; i++){
		pArea[i].classList.add("puzzlepiece");
	}
}