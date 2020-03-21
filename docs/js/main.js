const choiceArray = []; //array to push all site pages to
let page = 0;




document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}




function doFunction() {
    //go to next content selected from array with if statements var check

    //alert('look at that function function!');
    //let urlEnd = "index.html";
    /*if (countDownTrue === false) {
        console.log("This is the sort of thing that starts boss fights in video games, you know?...");
    }*/
    //countDownTrue = true; //trying to interact with in-line vars in index.html



//does the if-ing
    //urlEnd = 
//sends to     "https://cireneirbo.github.io/html-pages/" += urlEnd;



}