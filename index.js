const wrapper = document.getElementById('tiles')

let columns = Math.floor(document.body.clientWidth/16);
let rows = Math.floor(document.body.clientHeight/16);
function wiz(something) {
  console.log(something);  
}
const str = "Neofl";
wiz(...str)

const createTile = index => {
  const tile = document.createElement("div");
    if(index%1==0 &&index<columns*8){
        tile.classList.add("tile-w")
    }
    if(index%2==0 &&index<columns*16){
        tile.classList.add("tile-w")
    }
    if(index%3==0 &&index<columns*24){
        tile.classList.add("tile-w")
    }
    if(index%4==0 &&index<columns*32){
        tile.classList.add("tile-w")
    }
    if(index%7==0 &&index<columns*40){
        tile.classList.add("tile-w")
    }
    if(index%19==0 &&index<columns*56){
        tile.classList.add("tile-w")
    }
    else{tile.classList.add("tile");}


  return tile;
}

const createTiles = quantity =>{
  Array.from(Array(quantity)).map((tile, index)=>{
    wrapper.appendChild(createTile(index));
  })
}
const createGrid = () =>{
  wrapper.innerHTML = "";
  columns = Math.floor(document.body.clientWidth/16);
  rows = Math.floor(document.body.clientHeight/16);
  wrapper.style.setProperty("--columns", columns)
  wrapper.style.setProperty("--rows", rows)
  createTiles(columns*rows)
}
window.onresize = () => createGrid();