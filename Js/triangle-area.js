function triangleArea() {
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);
    // console.log(base);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);

    // calculate area of triangle
    const area = 0.5 * base * height;
    console.log(area);

    // display triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}