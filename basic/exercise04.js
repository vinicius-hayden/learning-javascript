// Given the three sides of a triangle, determine the perimeter of the triangle.

function trianglePerimeter(a,b,c){
    const perimeter = a + b + c;
    if(a >= b+c){
        console.log("Invalid Input: make sure b+c>a");
    }
    else if(b >= a+c){
        console.log("Invalid Input: make sure a+c>b");
    }
    else if(c >= a+b){
        console.log("Invalid Input: make sure a+b>c");
    }
    else{
        console.log(`Triangle Perimeter: ${perimeter}`);
    }
}

// a + b should be greater than c 
trianglePerimeter(4,2,6);

// a + c should be greater than b
trianglePerimeter(2,5,2);

// b + c should be greater than a
trianglePerimeter(7,5,2);

// when given sides are valid, the triangule perimeter is calculated
trianglePerimeter(4,5,2);