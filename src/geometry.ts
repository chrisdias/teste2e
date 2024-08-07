// src/testing/src/geometry.ts

// Function 1: Calculate the area of a circle
export function areaOfCircle(radius: number): number {
    return Math.PI * radius * radius;
}

// Function 2: Calculate the circumference of a circle
export function circumferenceOfCircle(radius: number): number {
    return 2 * Math.PI * radius;
}

// Function 3: Calculate the area of a rectangle
export function areaOfRectangle(length: number, width: number): number {
    return length * width;
}

// Function 4: Calculate the perimeter of a rectangle
export function perimeterOfRectangle(length: number, width: number): number {
    return 2 * (length + width);
}

// Function 5: Calculate the area of a triangle given its base and height
export function areaOfTriangle(base: number, height: number): number {
    return 0.5 * base * height;
}

// Function 6: Calculate the hypotenuse of a right-angled triangle given its sides
export function hypotenuse(a: number, b: number): number {
    return Math.sqrt(a * a + b * b);
}

// Function 8: Calculate the surface area of a cube
export function surfaceAreaOfCube(side: number): number {
    return 6 * side * side;
}

// Function 10: Calculate the surface area of a cylinder
export function surfaceAreaOfCylinder(radius: number, height: number): number {
    return 2 * Math.PI * radius * (radius + height);
}