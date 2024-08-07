// 1. Volume of a Cube
export const volumeOfCube = (side: number): number => {
    return Math.pow(side, 3);
};

// 2. Volume of a Rectangular Prism
export const volumeOfRectangularPrism = (length: number, width: number, height: number): number => {
    return length * width * height;
};

// 3. Volume of a Cylinder
export const volumeOfCylinder = (radius: number, height: number): number => {
    return Math.PI * Math.pow(radius, 2) * height;
};

// 4. Volume of a Sphere
export const volumeOfSphere = (radius: number): number => {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
};

// 5. Volume of a Cone
export const volumeOfCone = (radius: number, height: number): number => {
    return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
};

// 6. Volume of a Pyramid
export const volumeOfPyramid = (baseArea: number, height: number): number => {
    return (1 / 3) * baseArea * height;
};

// 7. Volume of a Torus
export const volumeOfTorus = (majorRadius: number, minorRadius: number): number => {
    return (Math.PI * Math.pow(minorRadius, 2)) * (2 * Math.PI * majorRadius);
};

// 8. Volume of an Ellipsoid
export const volumeOfEllipsoid = (radius1: number, radius2: number, radius3: number): number => {
    return (4 / 3) * Math.PI * radius1 * radius2 * radius3;
};

// 9. Volume of a Triangular Prism
export const volumeOfTriangularPrism = (base: number, height: number, length: number): number => {
    return (1 / 2) * base * height * length;
};

// 10. Volume of a Trapezoidal Prism
export const volumeOfTrapezoidalPrism = (a: number, b: number, height: number, length: number): number => {
    return ((a + b) / 2) * height * length;
};