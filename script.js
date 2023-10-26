function createSquare(){
    const canvas = document.querySelector("#canvas");
    let square = document.createElement("div");
    square.classList.add("canvasSquare");
    // square.textContent = "testing";
    canvas.appendChild(square);
    
    square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
});
}


for (let i = 0; i < 256; i++){
    createSquare();
}

