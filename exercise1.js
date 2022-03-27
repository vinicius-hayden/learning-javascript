// Given the size of the base and the height of a rectangle, calculate its area and perimeter.

function rectangulePerimeterAndArea(length, width){
    const perimeter = (length*2 + width*2);    
    const area = (length*width);
    console.log(`Rectangle Perimeter: ${perimeter}`)
    console.log(`Rectangle area: ${area}`)
}