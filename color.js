const colors=["green","red","#ffc9c9",
"yellow"];
const btn=document.getElementById('btn');
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
const randNum=getRandNum();
console.log(randNum);



document.body.style.backgroundColor=colors[randNum]
color.textContent=colors[randNum]

});

function getRandNum(){
    return Math.floor( Math.random() * colors.length);

}


//  A Color Flipper is a fun mini javascript project where you 
//  create a simple button, that on click, runs a function that 
//  generates a random color and then sets the background/color of
//   an element you preselected to that random color.