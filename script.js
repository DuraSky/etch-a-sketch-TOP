let size = 32;
let canvasSize = (size * 20) + (size * 2);
let sizeInPx = canvasSize + "px";
console.log(sizeInPx);
const canvas = document.querySelector("#canvas");
document.querySelector("#canvas").style.width = sizeInPx;
document.querySelector("#canvas").style.height = sizeInPx;



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



     