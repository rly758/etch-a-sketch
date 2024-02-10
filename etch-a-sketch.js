const container = document.querySelector("#container"); //container holding rows of pixels
const row = document.createElement("div"); //container holding a single row of pixels
const pixel = document.createElement("div");

//add classes for css styling
row.classList.add("row")
pixel.classList.add("pixel");

//default grid size of 16x16 pixels
let size = 16;

//fill a single row with pixels
for (let i=0;i<size;i++) {
    row.appendChild(pixel.cloneNode(true)); //deep copy also copies attribues, in particular class
}

//deep copy also copies a node's entire subtree, in particular all descendants
//create deep copies of a single filled row
//append each copy of a filled row to the container
for (let i=0;i<size;i++) {
    container.appendChild(row.cloneNode(true));
}