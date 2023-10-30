let size = 16;
let canvasSize = (size * 20) + (size * 2);
let sizeInPx = canvasSize + "px";
console.log(size);

const canvas = document.querySelector("#canvas");
canvas.style.width = sizeInPx;
canvas.style.height = sizeInPx;

function createCanvas (){
for (let i = 0; i < size; i++){ 
      const row = document.createElement("div");
      row.classList.add("row");
   for (let y = 0; y < size; y++){ 
      const square = document.createElement("div"); 
      square.classList.add("canvasSquare"); 
      row.appendChild(square); 

      square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
      }); 
   } 
   canvas.appendChild(row); 
};
};

createCanvas();

const button = document.querySelector("#resizeMe");
button.addEventListener("click", () => {
   canvas.querySelectorAll("div").forEach(div => {
      div.remove();
   });

   let userInputSize = prompt("Pick a grid size!");
   let userInputSizeFormula = (userInputSize * 20) + (userInputSize * 2);
   let userInputSizeInPx = userInputSizeFormula + "px";
   console.log(userInputSizeInPx);
   canvas.style.width = userInputSizeInPx;
   canvas.style.height = userInputSizeInPx;

   if (userInputSize > 100){
      alert("This is too much! You have to choose a number bellow 100!");
      canvas.style.width = sizeInPx;
      canvas.style.height = sizeInPx;
      createCanvas();
      return;
   };


   for (let i = 0; i < userInputSize; i++){ 
      const row = document.createElement("div");
      row.classList.add("row");
   for (let y = 0; y < userInputSize; y++){ 
      const square = document.createElement("div"); 
      square.classList.add("canvasSquare"); 
      row.appendChild(square); 

      square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
      }); 
   } 
   canvas.appendChild(row); 
};   

});
