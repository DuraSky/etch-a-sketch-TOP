let size = 64;
let numberOfSquares = size * size;
const canvas = document.querySelector("#canvas");




  for (let i = 0; i < size; i++){     
   const row = document.createElement("div");
   row.classList.add("row");

    for (let y = 0; y < size; y++){ 
      const square = document.createElement("div"); 
      square.classList.add("canvasSquare");     
      row.appendChild(square);      
   } 
   canvas.appendChild(row);   
};


     