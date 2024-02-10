const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

const container = document.querySelector("#container"); //container holding rows of pixels
const row = document.createElement("div"); //container holding a single row of pixels
const pixel = document.createElement("div");
const resetBtn = document.querySelector("#reset"); 

//add classes for css styling
row.classList.add("row")
pixel.classList.add("pixel");

resetBtn.addEventListener("click", clearGrid);

//for the "click-and-drag" behavior of drawing
let mouseDown = false;
document.body.onmouseup = () => mouseDown = false;
document.body.onmousedown = () => mouseDown = true;

//default grid size of 16x16 pixels
let size = DEFAULT_SIZE;
let pixelColor = DEFAULT_COLOR;

function createGrid() {
    //fill a single row with pixels
    for (let i=0;i<size;i++) {
        //deep copy also copies attribues, in particular class
        const rowClone = row.cloneNode(true);
        for (let j=0;j<size;j++) {
            //cloneNode() does not copy event listeners such as addEventListener()
            //we obtain a pixel clone first, then individually add event listeners to each clone
            const pixelClone = pixel.cloneNode(true);

            pixelClone.addEventListener("mouseover", () => {
                if (mouseDown) {
                    pixelClone.setAttribute("style",`background: ${pixelColor};`);
                }
            })

            pixelClone.addEventListener("mousedown", () => {
                pixelClone.setAttribute("style",`background: ${pixelColor};`);
            })

            //to avoid conflicting browser drag and drop default
            //for example, an image or element "forks" and the "clone" is dragged
            pixelClone.ondragstart = () => {return false}; 

            rowClone.appendChild(pixelClone); //pixelClone appended with its own event listener
        }
        container.appendChild(rowClone);
    }
}

function clearGrid() {
    document.querySelector("#container").innerHTML = "";
    createGrid();
}

createGrid();