// Author: Christopher Robinson

window.onload = function(){
	var pArea = document.querySelector("#puzzlearea").querySelectorAll("div");
	
	console.log(pArea);
	
	var locList = ["square_1_1","square_1_2","square_1_3","square_1_4",
				"square_2_1","square_2_2","square_2_3","square_2_4",
				"square_3_1", "square_3_2", "square_3_3", "square_3_4",
				"square_4_1", "square_4_2", "square_4_3", "square_4_4"];
				
	console.log(locList);
	
	//Function to set up numbers as puzzlepieces
		
	var appFrame = () =>{
		//Adds the puzzle piece class to all the pieces
		for(var i = 0; i < pArea.length; i++){
			
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
	
	appFrame();
	
	//Sets up the background on each piece
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
			
			pArea[i].style.backgroundPosition = `${xpos}px ${ypos}px`;
		}
		
	}
	
	bgSetup();
	
	//setting square ids 
	for(var i = 0; i < pArea.length; i++){
		
		if (parseInt(pArea[i].style.top) === 0){
			
			//for (var i = 0; i < pArea.length; i++){
			realPos = parseInt(pArea[i].style.left[0]) + 1
			pArea[i].id = `square_1_${realPos}`;
				
			
			
		} else if (parseInt(pArea[i].style.top) === 100){
			
			//for (var i = 0; i < pArea.length; i++){
			realPos = parseInt(pArea[i].style.left[0]) + 1;
			pArea[i].id = `square_2_${realPos}`;
				
			
			
		} else if (parseInt(pArea[i].style.top) === 200){
			
			//for (var i = 0; i < pArea.length; i++){
			realPos = parseInt(pArea[i].style.left[0]) + 1;
			pArea[i].id = `square_3_${realPos}`;
			
			
		} else if (parseInt(pArea[i].style.top) === 300){
			
			//for (var i = 0; i < pArea.length; i++){
			realPos = parseInt(pArea[i].style.left[0]) + 1;
			pArea[i].id = `square_4_${realPos}`;
			
			
		}
	}
	
	
	//Function to move puzzle pieces
	var movePiece = () =>{
		
	}
	
	//function to find squares
	var findSquare = (x,y) => {
		
	}
	
	
	/*var isMoveable = () =>{
		this.id 
		if(){
			
		}
	}*/
	
	//to check if a square is empty
	var isEmpty = (sqr) =>{
		//for(var i = 0; i < locList.length; i++)
			
		for(var x = 0; x < pArea.length; x++){
			if(sqr == pArea.id){
				return true;
				break
			}
		}
		
	}
	
	
	
	
	
	
	
	
	var locale = [];
	//console.log(parseInt(pArea[9].style.top));
	//console.log(parseInt(pArea[9].style.top) === 200);
	//unuused code 
	
	//console.log(pArea[1].style.backgroundPosition);
	
	
	//console.log(parseInt(pArea[1].style.backgroundPosition));
	
	//list of positions
	//console.log(locale);
	
	//var lMod = locale.map(x => parseInt(x));
	
	//prints x values
	//console.log(lMod);
	
	/*test region
	
	var acPos = parseInt(pArea[14].style.left[0]) + 1;
	console.log(`The real position of this piece is: ${acPos}units from the left`);
	*/
	//pArea[14].style.top = "300px";
	

}




/*
var appFrame = () =>{
	for(var i = 0; i < pArea.length; i++){
		pArea[i].classList.add("puzzlepiece");
	}
}
*/