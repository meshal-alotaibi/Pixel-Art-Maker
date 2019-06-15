// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {


    event.preventDefault();

    // variables need to creat row and cell
    var Height = document.getElementById("inputHeight").value;
    var Width = document.getElementById("inputWidth").value;
    var tableCanvas = document.getElementById("pixelCanvas");
  
    tableCanvas.innerHTML = "";

    for (var i = 0; i < Height; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < Width; j++) {
           var cell = document.createElement("td");
           row.appendChild(cell);
      }
  
       tableCanvas.appendChild(row);
    }

}

// to picked color from user
function colorCell(event) {
    if(event.target.nodeName == "TD"){
        var colorPicker = document.getElementById("colorPicker").value
        event.target.style.backgroundColor = colorPicker ;

    }

}