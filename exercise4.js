// Given the three sides of a triangle, determine the perimeter of the triangle.

function trianglePerimeter(a,b,c){
    const perimeter = a + b + c;
    if(a >= b+c){
        console.log("Invalid Input: make sure b+c>a");
    }
    else if(b >= a+c){
        console.log("Invalid Input: make sure a+c>b");
    }
    else if(a>b+c || b>a+c || c>a+b){
        console.log(`Triangle Perimeter: ${perimeter}`);
    }
}