// getting input value using function
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
// 
function setInnerTextById(textFieldId, area) {
    const textField = document.getElementById(textFieldId);
    textField.innerText = area;
    return textField;
}

// parallelogram Area
function parallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;

    setInnerTextById('parallelogram-area', area);
}


// Rhombus Area
function rhombusArea() {
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');
    const area = 0.5 * d1 * d2;

    setInnerTextById('rhombus-area', area);
}


// Pentagon Area
function pentagonArea() {
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;

    setInnerTextById('pentagon-area', area);
}


// Ellipse Area
function ellipseArea() {
    const majorAxis = getInputValueById('ellipse-major-axis');
    const minorAxis = getInputValueById('ellipse-minor-axis');
    const area = 3.1416 * majorAxis * minorAxis;

    setInnerTextById('ellipse-area', area);
}
