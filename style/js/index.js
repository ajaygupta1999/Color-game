var easybutton = document.querySelector("#easy");
var hardbutton = document.querySelector("#hard");
hardbutton.classList.add("defaulthard");
/*for default 6 boxes*/
 num = 6;
/*easy button click*/
easybutton.addEventListener("click" , function(){
  num = 3;
  for(var i = 3 ; i < 6 ; i++)
  {
    boxes[i].style.backgroundColor = "#282324";
  }
  restartbutton();
  hardbutton.classList.remove("defaulthard");
  easybutton.classList.add("selectedeasy");
 })
/*hard button click*/
hardbutton.addEventListener("click" ,function(){
  num = 6 ; 
  restartbutton();
  hardbutton.classList.add("defaulthard");
  easybutton.classList.remove("selectedeasy");
});

var colors = diffcolor(num);
var colorvalue = document.querySelector(".colorvalue");
var boxes = document.querySelectorAll(".square");
var colorpicked = colors[Math.floor(Math.random()*colors.length)];
var rgbcolor = document.getElementById("rgbcolor");
var answer = document.querySelector("#answer");
var colorresetbutton = document.querySelector("#colorresetbutton");

rgbcolor.textContent = colorpicked;

for(var i = 0 ; i < colors.length ; i++)
{
   boxes[i].style.backgroundColor = colors[i];
   boxes[i].addEventListener("click" , function(){
     if(this.style.backgroundColor === colorpicked)
     {
     	for(var j = 0 ; j < colors.length ; j++)
     	{
     	   boxes[j].style.backgroundColor = colorpicked;
     	   colorvalue.style.backgroundColor = colorpicked;
         answer.textContent = "Correct";
         colorresetbutton.textContent = "Play Again?";
     	}
     }else {
     	this.style.backgroundColor = "#282324";
      answer.textContent = "Try again";
     }
    });
 }           
       
 function pickcolor(){
    var pickingcolor = colors[Math.floor(Math.random()*colors.length)];
    return pickingcolor;
 }   

function diffcolor(num) {
  /*blank array*/
  var arr = [];
  /*generating 6 different color*/
  for(var i = 0 ; i < num ; i++)
  {
      arr[i] = generatecolor();
  }
  /*return array*/
  return arr;
}
       
function generatecolor() {
     /*for red color*/
     var r = Math.floor(Math.random()*256);
     /*for red color*/
     var g = Math.floor(Math.random()*256);
     /*for red color*/
     var b = Math.floor(Math.random()*256);
    /*  making rgb(r,g,b)*/
    var formedcolor =  "rgb"+"("+r+", "+g+", "+b+")";
    return formedcolor;
}     


 colorresetbutton.addEventListener("click" , restartbutton);

  function restartbutton(){
    colorresetbutton.textContent = "New Colors";
     //generate color
    colors =  diffcolor(num);
     /*default  background color*/
     colorvalue.style.backgroundColor = "#2495b6";
    /*display that new color in main heading*/
    colorpicked = colors[Math.floor(Math.random()*colors.length)];
    /*changing the color of rgb section */
    rgbcolor.textContent = colorpicked;
    /*reset the value of answer*/
    answer.textContent = "";
   /*to change button as play again*/ 
   for(var i = 0 ; i < colors.length ; i++)
   {
    boxes[i].style.backgroundColor = colors[i];
    boxes[i].addEventListener("click" , function(){
      if(this.style.backgroundColor === colorpicked)
      {
        colorresetbutton.textContent = "Play Again?";
      }
    });
   }   
  }