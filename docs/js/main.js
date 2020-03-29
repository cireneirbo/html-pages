const choiceArray = [ "All must heed the warning of the soothsayer, Promethius.", 
"He spoke of times when the denizens of the warm rock, Earth, would take to the high seas amid the chaos of the scurrying feet.",
"...Of when he ventured out to the beach from within the crass cityscape.",
"The solar accompaniment was visibly intense, and the partakers of sand-based ruminations were donning wide brims and colored glasses.",
"The wind swept up particulates that agitated the soothsayer's humble and vulnerable eyes.",
"So, there, on the arid cousin to the mighty expanse of soothing sustainance, he feel to his knees and cried out for aid.",
"But, aid was not offered, nor did it come.",
"So on that sandy spot, he ravaged his sight with incessant pawing and rubbing.",
"In time, the agitants fell free with his tortured tears, and glorious sight was restored.",
"Upon glimpsing the all-encompassing warble of the blue-green swill before him, he stood and became transfixed on the impossibly far horizon.",
"It was at this irrefutable time that you woke up.",
"The sun is shining, the traffic is flowing intermitantly outside your window, and you feel a pressing need to venture forth to the beach." ]; //array to push all site pages to

let storyPos = 0;
let decision = 2;
//reacts to choice clicks
function selectNo () {
	decision = 0;//if false
}
function selectYes () {
	decision = 1;//if true
}

let clickFunction = function() {
	//document.getElementById("shouting").innerhtml = "hi"; //doFunction();
	if (document.body.style.backgroundColor !== 'red') {
		document.body.style.backgroundColor = 'red'; 
		document.getElementById("shouting").innerHTML = "red";
	} else if (document.body.style.backgroundColor !== 'blue') {
		document.body.style.backgroundColor = 'blue'; 
		document.getElementById("shouting").innerHTML = "blue";
	}
}

let doFunction = function() {
	//story beginning, no input needed
	if (storyPos < 12) {
		//call data from array index, only when a string is there
		if (typeof choiceArray[storyPos] === 'string'){ 
			document.getElementById("p1").innerHTML = choiceArray[storyPos];
			storyPos += 1;//changes the text to next part of story
		}
	} else { //need input now
		 if (decision === 0 || decision === 1){ //player has chosen an input
			/*if (document.getElementsByTagName('b')) { //searches for existing <b> tag
				document.removeChild("Choose Yes or No");//deletes a choose yes or no statement if it exists
			}*/
			
			decision = 2;
		} else { 
			//player needs to choose input
			alert('pick yes or no to continue'); 
		}
	}
}
/*if (document.getElementsByTagName('b') > 1 ) { //searches for multiple existing <b> tag
				document.removeChild(newContentBold);//deletes a choose yes or no statement if it exists
			}*/



/*
	  // create a new img element 
	  let newImg = document.createElement('img src="images/hey-at-least-i-made-it.jfif"'); 
	  // and give it some content 
	  //let newImgContent = document.createAttribute(src="images/hey-at-least-i-made-it.jfif"); 
	  // add the text node to the newly created img
	  //newImg.appendChild(newImgContent);  

	  // add the newly created element and its content into the DOM 
	  let currentImg = document.getElementById("img1"); 
	  document.body.insertBefore(newImg, currentImg); 
*/
	  

    

	
	
	
	//alert('look at that function function!');
    //let urlEnd = "index.html";
    /*if (countDownTrue === false) {
        console.log("This is the sort of thing that starts boss fights in video games, you know?...");
    }*/
    //countDownTrue = true; //trying to interact with in-line vars in index.html
    


//does the if-ing
    //urlEnd = 
//sends to     "https://cireneirbo.github.io/html-pages/" += urlEnd;



