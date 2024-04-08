function rectangleArea() {
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width').value;
    const width = parseFloat(rectangleWidthInput);

    // get rectangle length value
    const rectangleLengthInput = document.getElementById('rectangle-length').value;
    console.log(rectangleLengthInput);
    const length = parseFloat(rectangleLengthInput);

    // calculate rectangle area
    const area = width * length;
    console.log(area);

}