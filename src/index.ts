// Importing functions from math.ts
import { 
    reverseString, 
    toUpperCase, 
    toLowerCase, 
    capitalize, 
    removeWhitespace, 
    areAnagrams, 
    repeatString, 
    replaceAll, 
    truncateString, 
    getLastCharacter 
} from './simpleStrings';

// Importing functions from geometry.ts
import { 
    areaOfCircle, 
    circumferenceOfCircle, 
    areaOfRectangle, 
    perimeterOfRectangle, 
    areaOfTriangle, 
    hypotenuse, 
    surfaceAreaOfCube, 
    surfaceAreaOfCylinder 
} from './geometry';

import { 
    volumeOfCube, 
    volumeOfRectangularPrism, 
    volumeOfCylinder, 
    volumeOfSphere, 
    volumeOfCone, 
    volumeOfPyramid, 
    volumeOfTorus,
    volumeOfEllipsoid,
    volumeOfTriangularPrism,
    volumeOfTrapezoidalPrism
} from './volume';


import { 
    celsiusToFahrenheit, 
    fahrenheitToCelsius, 
    kilometersToMiles, 
    milesToKilometers, 
    kilogramsToPounds, 
    poundsToKilograms, 
    litersToGallons, 
    gallonsToLiters, 
    metersToYards, 
    yardsToMeters 
} from './conversions';


import { add, subtract, multiply, divide, power } from './math';

const sayHello = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(sayHello("World"));

console.log(`Add: ${add(5, 3)}`);
console.log(`Subtract: ${subtract(10, 6)}`);
console.log(`Multiply: ${multiply(4, 7)}`);
console.log(`Divide: ${divide(20, 4)}`);
console.log(`Divide by zero: ${divide(20, 0)}`);
console.log(`Power: ${power(2, 3)}`);

console.log(`Reversed string of 'hello': ${reverseString("hello")}`);
console.log(`Uppercase of 'hello': ${toUpperCase("hello")}`);
console.log(`Lowercase of 'HELLO': ${toLowerCase("HELLO")}`);
console.log(`Capitalized string 'hello world': ${capitalize("hello world")}`);
console.log(`String without whitespace 'h e l l o': ${removeWhitespace("h e l l o")}`);
console.log(`Are 'listen' and 'silent' anagrams?: ${areAnagrams("listen", "silent")}`);
console.log(`'hello' repeated 3 times: ${repeatString("hello", 3)}`);
console.log(`'hello world' with all 'o' replaced by 'a': ${replaceAll("hello world", "o", "a")}`);
console.log(`Truncated string 'this is a long string' to 10 chars: ${truncateString("this is a long string", 10)}`);
console.log(`Last character of 'hello': ${getLastCharacter("hello")}`);

console.log(`Area of Circle (radius 5): ${areaOfCircle(5)}`);
console.log(`Circumference of Circle (radius 5): ${circumferenceOfCircle(5)}`);
console.log(`Area of Rectangle (5x10): ${areaOfRectangle(5, 10)}`);
console.log(`Perimeter of Rectangle (5x10): ${perimeterOfRectangle(5, 10)}`);
console.log(`Area of Triangle (base 5, height 10): ${areaOfTriangle(5, 10)}`);
console.log(`Hypotenuse (3, 4): ${hypotenuse(3, 4)}`);
console.log(`Volume of Cube (side 3): ${volumeOfCube(3)}`);
console.log(`Surface Area of Cube (side 3): ${surfaceAreaOfCube(3)}`);
console.log(`Volume of Cylinder (radius 3, height 5): ${volumeOfCylinder(3, 5)}`);
console.log(`Surface Area of Cylinder (radius 3, height 5): ${surfaceAreaOfCylinder(3, 5)}`);

console.log(`Volume of a cube with side 3: ${volumeOfCube(3)}`);
console.log(`Volume of a rectangular prism with length 3, width 4, and height 5: ${volumeOfRectangularPrism(3, 4, 5)}`);
console.log(`Volume of a cylinder with radius 3 and height 5: ${volumeOfCylinder(3, 5)}`);
console.log(`Volume of a sphere with radius 3: ${volumeOfSphere(3)}`);
console.log(`Volume of a cone with radius 3 and height 5: ${volumeOfCone(3, 5)}`);
console.log(`Volume of a pyramid with base area 9 and height 7: ${volumeOfPyramid(9, 7)}`);
console.log(`Volume of a torus with major radius 4 and minor radius 1: ${volumeOfTorus(4, 1)}`);
console.log(`Volume of an ellipsoid with radii 2, 3, and 4: ${volumeOfEllipsoid(2, 3, 4)}`);
console.log(`Volume of a triangular prism with base 3, height 4, and length 5: ${volumeOfTriangularPrism(3, 4, 5)}`);
console.log(`Volume of a trapezoidal prism with bases 3 and 4, height 5, and length 6: ${volumeOfTrapezoidalPrism(3, 4, 5, 6)}`);


console.log(`25°C to Fahrenheit: ${celsiusToFahrenheit(25)}`);
console.log(`77°F to Celsius: ${fahrenheitToCelsius(77)}`);
console.log(`10 kilometers to miles: ${kilometersToMiles(10)}`);
console.log(`6.21 miles to kilometers: ${milesToKilometers(6.21)}`);
console.log(`70 kilograms to pounds: ${kilogramsToPounds(70)}`);
console.log(`154.32 pounds to kilograms: ${poundsToKilograms(154.32)}`);
console.log(`5 liters to gallons: ${litersToGallons(5)}`);
console.log(`1.32 gallons to liters: ${gallonsToLiters(1.32)}`);
console.log(`100 meters to yards: ${metersToYards(100)}`);
console.log(`109.36 yards to meters: ${yardsToMeters(109.36)}`);