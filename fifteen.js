// Author: Christopher Robinson

window.onload = function(){
	const pArea = document.querySelector("#puzzlearea").querySelectorAll("div");
	const fpArea = document.querySelector("#puzzlearea");
	console.log(pArea);
	
	var locList = ["square_1_1","square_1_2","square_1_3","square_1_4",
				"square_2_1","square_2_2","square_2_3","square_2_4",
				"square_3_1", "square_3_2", "square_3_3", "square_3_4",
				"square_4_1", "square_4_2", "square_4_3", "square_4_4"];
				
	//console.log(locList);
	
	//is moveable function?
	
	// Checks the adjacent squares via id 
	
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
	var reCal = () => {
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
	}
	
	reCal();
	
	//Function to move a puzzle pieces (EMPTY!)
	var movePiece = (piece, x,y) =>{
		piece.style.left = x + 'px';
		piece.style.top = y + 'px';
		
		piece.id = findEmpty();
		//reCal();
	}
	
	//function to find squares(EMPTY!)
	var findSquare = (x,y) => {
		
	}
	
	//writing an alt to the above function 
	//these get x and y values for a square and output them
	var getxCoords = (sqr) => {
		return((sqr[9] - 1) * 100);
	}
	
	var getyCoords = (sqr) => {
		return ((sqr[7] - 1) * 100);
	}
	
	//Function to check if pieces are moveable
	var isMoveable = (square) =>{
		
		/*if (square == "square_1_3"){
			if(isEmpty("square_1_2")){
				return true;
			} else if(isEmpty("square_1_4")){
				return true;
			} else if(isEmpty("square_2_3")){
				return true;
			}
		}*/
		var x  
		//Dead switch statement
		switch (square){
		
		case "square_1_1":
			if(isEmpty("square_1_2")){
				return true;
				break;
			} else if(isEmpty("square_2_1")){
				return true;
			} else {
				return false;
			}
			break;
			
		case "square_1_2":
			if(isEmpty("square_1_1")){
				return true;
			} else if(isEmpty("square_1_3")){
				return true;
			} else if(isEmpty("square_2_2")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_1_3":
			if(isEmpty("square_1_2")){
				return true;
			} else if(isEmpty("square_1_4")){
				return true;
			} else if(isEmpty("square_2_3")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_1_4":
			if(isEmpty("square_1_3")){
				return true;
			} else if(isEmpty("square_2_4")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_2_1_":
			if (isEmpty("square_1_1")){
				return true;
			} else if(isEmpty("square_2_2")){
				return true;
			} else if(isEmpty("square_3_1")){
				return true;
			} else {
				return false;
			}
			break;
	
		case "square_2_2":
			if(isEmpty("square_2_1")){
				return true;
			} else if(isEmpty("square_1_2")){
				return true;
			} else if(isEmpty("square_2_3")){
				return true;
			} else if(isEmpty("square_3_2")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_2_3":
			if(isEmpty("square_2_2")){
				return true;
			} else if(isEmpty("square_1_3")){
				return true;
			} else if(isEmpty("square_2_4")){
				return true;
			}else if(isEmpty("square_3_3")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_2_4":
			if(isEmpty("square_2_3")){
				return true;
			} else if(isEmpty("square_1_4")){
				return true;
			} else if(isEmpty("square_3_4")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_3_1":
			if(isEmpty("square_2_1")){
				return true;
			} else if(isEmpty("square_3_2")){
				return true;
			} else if(isEmpty("square_4_1")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_3_2":
			if(isEmpty("square_3_1")){
				return true;
			} else if(isEmpty("square_2_2")){
				return true;
			} else if(isEmpty("square_3_3")){
				return true;
			}else if(isEmpty("square_4_2")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_3_3":
			if(isEmpty("square_3_2")){
				return true;
			} else if(isEmpty("square_2_3")){
				return true;
			} else if(isEmpty("square_3_4")){
				return true;
			}else if(isEmpty("square_4_3")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_3_4":
			if(isEmpty("square_3_3")){
				return true;
			} else if(isEmpty("square_2_4")){
				return true;
			} else if(isEmpty("square_4_4")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_4_1":
			if(isEmpty("square_3_1")){
				return true;
			} else if(isEmpty("square_4_2")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_4_2":
			if(isEmpty("square_4_1")){
				return true;
			} else if(isEmpty("square_3_2")){
				return true;
			} else if(isEmpty("square_4_3")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_4_3":
			if(isEmpty("square_4_2")){
				return true;
			} else if(isEmpty("square_3_3")){
				return true;
			} else if(isEmpty("square_4_4")){
				return true;
			} else {
				return false;
			}
			break;
		
		case "square_4_4":
			if(isEmpty("square_4_3")){
				return true;
			} else if(isEmpty("square_3_4")){
				return true;
			} else {
				return false;
			}
			break;
			
		default:
			return false;
		}
		
		
	}
	
	//to check if a square is empty by checking if the id exists on any of the puzzlepieces
	// if true the id exists on one of the pieces and false if otherwise.
	var isEmpty = (sqr) =>{
		//for(var i = 0; i < locList.length; i++)
		/*
		var dList = [];
		//return pArea[1].id;
		//for loop to retrive the id for each piece
		for(var c = 0; c < pArea.length; c++){
			dList.push(pArea[c].id);
		}
		
		//return dList;
		var status;
		
		for(var x = 0; x < dList.length; x++){
			
			if(sqr == dList[x]){
				status = 0;
			} else{
				status = 1;
			}
			
		}
		
		if(status == 0){
			
			return true;
			
		} else if(status == 1){
			
			return false;
			
		}*/
		
		
		var x
		//while (x != 0)
		for (var a = 0; a < pArea.length; a++){
			
				//console.log(pArea[a].id);
			if (sqr == pArea[a].id){
				x = false;
					//console.log(x);
				break;
			} else {
				x = true;
					//console.log(x);
			}
		}
	
		return x;
	}
	
	console.log(pArea[1]);
	/*Adding event listners for each piece 
	pArea[0].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[1].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[2].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[3].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[4].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[5].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[6].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[7].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[8].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[9].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[10].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[11].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[12].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[13].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[14].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	pArea[14].addEventListener("mouseover", function(){
		if(isMoveable(this.id)){
			this.classList.add("movablepiece");
		}
	});
	*/
	
	//Adding mouseover event listners for each piece (Using for loop);
	for(var i = 0; i < pArea.length; i++){
		pArea[i].addEventListener("mouseover", function(){
			if(isMoveable(this.id)){
				this.classList.add("movablepiece");
			} else if(isMoveable(this.id) == false && this.classList.contains("movablepiece")){
				this.classList.remove("movablepiece");
			}
		})
	};
	
	//Adds on click eventlisteners for each piece 
	for(var i = 0; i < pArea.length; i++){
		pArea[i].addEventListener("click", function(){
			if(isMoveable(this.id)){
				//thi
				console.log(findEmpty());
				movePiece(this,getxCoords(findEmpty()),getyCoords(findEmpty()))
				console.log(findEmpty());
			}
		});
	};
	
	
	//Find the empty square
	
	var findEmpty = () =>{
		//list of occupied squares
		var occSq = [];
		//empty square variable
		var eSqre;
		
		for (var i = 0; i < pArea.length; i++){
			occSq.push(pArea[i].id);
		}
		
		for (var i = 0; i < locList.length; i++){
			if(occSq.includes(locList[i]) == false){
				eSqre = locList[i];
			}
		}
		return eSqre;
	};
	
	
	
	console.log(findEmpty());
	console.log(getxCoords(findEmpty()));
	console.log(getyCoords(findEmpty()));
	
	/*Test to move piece at 4x3
	pArea[14].addEventListener("click", function(){
		this.style.left = (parseInt(this.style.left) + 100) + 'px';
	});*/
}
	
	





