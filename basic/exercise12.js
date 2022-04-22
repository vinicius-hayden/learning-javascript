// On a sunny day, you want to measure the height of a building, but the measuring tape is not long enough. 
//Assuming you can measure your shadow and that of the building on the ground, and that you remember your height, 
// write a program to read the necessary data and calculate the height of the building.

function calculateBuildingHeight(buildingShadow, selfShadow, selfHeightMeasure){
    var buildingHeight = (buildingShadow * selfShadow/ selfHeightMeasure);
    return buildingHeight;
}

console.log(calculateBuildingHeight(72, 2.5, 3));
