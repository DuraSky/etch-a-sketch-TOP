let size = 16;
let squareSize = (760 / size) - 2;
let squareSizeInPx = squareSize + "px";


const canvas = document.querySelector("#canvas");

function createCanvas (){
for (let i = 0; i < size; i++){ 
      const row = document.createElement("div");
      row.classList.add("row");
   for (let y = 0; y < size; y++){ 
      const square = document.createElement("div"); 
      square.classList.add("canvasSquare"); 
      square.style.width = squareSizeInPx;
      square.style.height = squareSizeInPx;
      row.appendChild(square); 

      square.addEventListener("mouseover", () => {     
      function randomColour(){
         let x = Math.floor(Math.random() * 256);
         let y = Math.floor(Math.random() * 256);
         let z = Math.floor(Math.random() * 256);
         let color = "rgb(" + x + "," + y + "," + z + ")";
         return color;        
         }
        square.style.backgroundColor = randomColour();
      }); 
   } 
   canvas.appendChild(row); 
};
};
createCanvas();

const button = document.querySelector("#resizeMe");
button.addEventListener("click", () => {
   let userInputSize = prompt("Pick a grid size!");
   let userInputSizeFormula = (760 / userInputSize) - 2;
   let userInputSizeInPx = userInputSizeFormula + "px";
   
   

   if (userInputSize > 100){
      alert("This is too much! You have to choose a number bellow 100!");
      return;
   } else {
      canvas.querySelectorAll("div").forEach(div => {
      div.remove();
      });

      for (let i = 0; i < userInputSize; i++){ 
         const row = document.createElement("div");
         row.classList.add("row");
      for (let y = 0; y < userInputSize; y++){ 
         const square = document.createElement("div"); 
         square.classList.add("canvasSquare"); 
         square.style.width = userInputSizeInPx;
         square.style.height = userInputSizeInPx;
         row.appendChild(square); 
   
         square.addEventListener("mouseover", () => {
            function randomColour(){
               let x = Math.floor(Math.random() * 256);
               let y = Math.floor(Math.random() * 256);
               let z = Math.floor(Math.random() * 256);
               let color = "rgb(" + x + "," + y + "," + z + ")";
               return color;        
               }
              square.style.backgroundColor = randomColour();
         }); 
      } 
      canvas.appendChild(row); 
      };      
   }
});
