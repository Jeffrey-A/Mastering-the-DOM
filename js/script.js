
// SELECTING ELEMENTS
let rowBtn = document.getElementById("row-btn");
let colBtn = document.getElementById("col-btn");
let gridContainer = document.querySelector('.grid-container');
let row = document.querySelector(".row");

let numberOfColumns =5;
let delRowBtn = document.getElementById("d-row");
let delColBtn = document.getElementById("d-col");

let colors = document.getElementById("colors");

let squares = document.querySelectorAll(".square");

let colorAll = document.getElementById("colorAll");
let colorUn = document.getElementById("colorUn");
let resetC = document.getElementById("resetC");

// HELPER FUNCTIONS

// click on a single cell, changing its color to the currently selected color
const colorIt = (e) =>{
    let options = document.getElementsByTagName("option");

    for(let i=0; i< options.length; i++){

        if(options[i].selected){
            e.target.style.backgroundColor = options[i].value;
            break;
        }
    }

}

// SIMULATING THE CLICK AND HOLD EVENT --> onMouseDonm and mouseup
let onMouseDonm = (e) =>{
    let options = document.getElementsByTagName("option");

    for(let i=0; i< options.length; i++){
        if(options[i].selected){
            e.target.style.backgroundColor = options[i].value;
         break;  
        }
    }

    for(let i = 0; i<squares.length; i++){
        squares[i].addEventListener('mouseover', colorIt);
    }
}

let mouseup = () =>{
    for(let i = 0; i<squares.length; i++){
        squares[i].removeEventListener('mouseover', colorIt);
    }


}

// CREATING COLUMNS AND ROWS
const createRow = () =>{
    let rowContainer = document.createElement("div");
    rowContainer.className = "row";
    
    for(let i=0; i< numberOfColumns; i++){
        let item = document.createElement("div");
        item.className ="square";
        item.addEventListener('click', colorIt);
        item.addEventListener("mousedown", onMouseDonm);
        item.addEventListener("mouseup", mouseup);
        rowContainer.appendChild(item);
    }
    squares = document.querySelectorAll(".square");
    return rowContainer;

}

const createCol = () =>{
    let rows = Array.from(gridContainer.children);
    
    for(let i=0; i< rows.length; i++){
        let item = document.createElement("div");
        item.className ="square";
        item.addEventListener('click', colorIt);
        item.addEventListener("mousedown", onMouseDonm);
        item.addEventListener("mouseup", mouseup);
        rows[i].appendChild(item);
    }
    
    numberOfColumns++;
}

// add rows to the grid
const addRow = (e)=>{
    gridContainer.appendChild(createRow());
    squares = document.querySelectorAll(".square");
    
}

// add columns to the grid
const addCol = (e)=>{
    createCol();
    squares = document.querySelectorAll(".square");
}

// REMOVING COLUMNS AND ROWS
// remove rows from the grid
const delRow = (e) => {
    let rows = gridContainer.children;
    for(let i = rows.length-1; i>=0; i--){
        rows[i].remove();
        break;
    }
}

// remove columns from the grid
const delCol = (e) => {
    let rows = gridContainer.children;
    console.log(rows);
    let row;
    for(let i=0; i< rows.length; i++){
        //rows[i].removeChild(rows[i].childNodes[rows[i].length -1]);
        row = rows[i].children;
        console.log(row);

        for(let j=row.length -1; j>=0; i--){
            if(j ==row.length -1){
                row[i].remove();
                break;  
            }
            
        }  
        
    }
    
    numberOfColumns--;  
}

// ADDING EVENTS

for(let i = 0; i<squares.length; i++){
    squares[i].addEventListener('click', colorIt);
    squares[i].addEventListener("mousedown", onMouseDonm);
    squares[i].addEventListener("mouseup", mouseup);
    
}


rowBtn.addEventListener('click', addRow);
colBtn.addEventListener('click', addCol);

delRowBtn.addEventListener('click', delRow);
delColBtn.addEventListener('click', delCol);

// fill all cells with the currently selected color
colorAll.addEventListener('click', () =>{
    let options = document.getElementsByTagName("option");
    let squares = document.querySelectorAll(".square");

    for(let i=0; i< options.length; i++){

        if(options[i].selected){

            for(let j =0; j<squares.length; j++){
                squares[j].style.backgroundColor = options[i].value;
            }
            
            
        }
    }
});

// fill all uncolored cells with the currently selected color
colorUn.addEventListener('click', () =>{

        let options = document.getElementsByTagName("option");
        let squares = document.querySelectorAll(".square");
    
        for(let i=0; i< options.length; i++){
    
            if(options[i].selected){
    
                for(let j =0; j<squares.length; j++){
                    if( squares[j].style.backgroundColor != "blue" && squares[j].style.backgroundColor !="yellow" && squares[j].style.backgroundColor !="red" ){
                         squares[j].style.backgroundColor = options[i].value;
                    }
                   
                    
                }
                break;
                
            }
        }
    

});

// clear all cells/restore all cells to their original/initial color
resetC.addEventListener('click', () =>{
    let squares = document.querySelectorAll(".square");

    for(let j =0; j<squares.length; j++){
        squares[j].style.backgroundColor = 'white';
    }
});