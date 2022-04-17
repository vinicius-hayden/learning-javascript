// Given the size of the radius of a circle, calculate the area and perimeter of the circle.

function circlePerimeterAndArea(radius){
    const perimeter = (2*Math.PI * radius);    
    const area = Math.PI * radius**2;
    console.log(`Circle Perimeter: ${Math.round(perimeter)}`);
    console.log(`Circle Area: ${Math.round(area)}`);
}

circlePerimeterAndArea(7);