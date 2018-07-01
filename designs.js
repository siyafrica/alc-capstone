
$(document).ready(function(){
// Select color input
var colorInput = $('#colorPicker');
//console.log(colorInput);

//select height input
var heightInput = $('#inputHeight');
//console.log(heightInput);

//select width input
var widthInput = $('#inputWidth');
//console.log(widthInput);

//select the pixel canvas
var pixelCanvas = $("#pixelCanvas");
//console.log(pixelCanvas);


$("#button").click(function(event){
    event.preventDefault() 
    //set the height, width and color based on inputs
    var height = heightInput.val();
    var width = widthInput.val();
    var color = colorInput.val();

    //create the grid
    for (var w = 0; w < height; w++) {
        pixelCanvas.append('<tr id="row' + w + '"></tr>');
        for(var j = 0; j < width; j++) {
            $('#row' + w).append('<td class="square"></td>');
        }
    }


pixelCanvas.click(function(e) {
    $("#pixelCanvas td").removeClass("highlight");
    var clickedCell= $(e.target).closest("td");
    clickedCell.css("background-color", color);
    });
});

    

});