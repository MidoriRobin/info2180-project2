// Author: Christopher Robinson

window.onload = function(){
	var pArea = document.querySelector("#puzzlearea").querySelectorAll("div");
	console.log(pArea);
	
	//pArea[0].classList.add("puzzlepiece");
	//pArea[1].classList.add("puzzlepiece");
	
	//Function to set up numbers as puzzlepieces
	
	
	var appFrame = () =>{
		
		for(var i = 0; i < pArea.length; i++){
			//Adds the puzzle piece class to all the pieces
			pArea[i].classList.add("puzzlepiece");
			//Sets pieces in their respective positions
			
			if (i < 4){
				xpos = parseInt((i*100));
				ypos = parseInt(0)
			}else if(i >= 4 && i <8){
				xpos = parseInt((i-4)*100);
				ypos = parseInt(100);
			}else if(i >= 8 && i < 12){
				xpos = parseInt((i-8)*100);
				ypos = parseInt(200);
			}else if(i >= 12 && i < 16){
				xpos = parseInt((i-12)*100);
				ypos = parseInt(300);
			}
			
			pArea[i].style.left = xpos + 'px';
			pArea[i].style.top = ypos + 'px';
			
		}
	}
	
	// function call
	appFrame();
	
	//CONTINUE ------ To set up the background image on each piece
	
	
	var bgSetup = () =>{
		
		for(var i = 0; i < pArea.length; i++){
			
			if (i < 4){
				xpos = parseInt((i*(-100)));
				ypos = parseInt(0)
			}else if(i >= 4 && i <8){
				xpos = parseInt((i-4)*(-100));
				ypos = parseInt((-100));
			}else if(i >= 8 && i < 12){
				xpos = parseInt((i-8)*(-100));
				ypos = parseInt(-200);
			}else if(i >= 12 && i < 16){
				xpos = parseInt((i-12)*(-100));
				ypos = parseInt(-300);
			}
			
			pArea[i].style.backgroundPosition = `${xpos}px ${ypos}px`
		}
		
	}
	
	bgSetup();
	
	
	

}

/*
var appFrame = () =>{
	for(var i = 0; i < pArea.length; i++){
		pArea[i].classList.add("puzzlepiece");
	}
}
*/