
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
} from '../src/volume';

describe('Volume Calculations', () => {
    test('volumeOfCube', () => {
        expect(volumeOfCube(3)).toBe(27);
        expect(volumeOfCube(0)).toBe(0);
        expect(volumeOfCube(1)).toBe(1);
    });

    test('volumeOfRectangularPrism', () => {
        expect(volumeOfRectangularPrism(2, 3, 4)).toBe(24);
        expect(volumeOfRectangularPrism(1, 1, 1)).toBe(1);
        expect(volumeOfRectangularPrism(0, 5, 10)).toBe(0);
    });

    test('volumeOfCylinder', () => {
        expect(volumeOfCylinder(3, 5)).toBeCloseTo(141.3716694115407);
        expect(volumeOfCylinder(0, 10)).toBe(0);
        expect(volumeOfCylinder(2, 0)).toBe(0);
    });

    test('volumeOfSphere', () => {
        expect(volumeOfSphere(3)).toBeCloseTo(113.09733552923255);
        expect(volumeOfSphere(0)).toBe(0);
        expect(volumeOfSphere(1)).toBeCloseTo(4.1887902047863905);
    });

    test('volumeOfCone', () => {
        expect(volumeOfCone(3, 5)).toBeCloseTo(47.12388980384689);
        expect(volumeOfCone(0, 10)).toBe(0);
        expect(volumeOfCone(2, 0)).toBe(0);
    });

    test('volumeOfPyramid', () => {
        expect(volumeOfPyramid(10, 5)).toBeCloseTo(16.666666666666668);
        expect(volumeOfPyramid(0, 10)).toBe(0);
        expect(volumeOfPyramid(5, 0)).toBe(0);
    });

    test('volumeOfTorus', () => {
        expect(volumeOfTorus(3, 1)).toBeCloseTo(59.21762640653615);
        expect(volumeOfTorus(0, 1)).toBe(0);
        expect(volumeOfTorus(3, 0)).toBe(0);
    });

    test('volumeOfEllipsoid', () => {
        expect(volumeOfEllipsoid(2, 3, 4)).toBeCloseTo(100.53096491487338);
        expect(volumeOfEllipsoid(0, 3, 4)).toBe(0);
        expect(volumeOfEllipsoid(2, 0, 4)).toBe(0);
        expect(volumeOfEllipsoid(2, 3, 0)).toBe(0);
    });

    test('volumeOfTriangularPrism', () => {
        expect(volumeOfTriangularPrism(3, 4, 5)).toBe(30);
        expect(volumeOfTriangularPrism(0, 4, 5)).toBe(0);
        expect(volumeOfTriangularPrism(3, 0, 5)).toBe(0);
        expect(volumeOfTriangularPrism(3, 4, 0)).toBe(0);
    });

    test('volumeOfTrapezoidalPrism', () => {
        expect(volumeOfTrapezoidalPrism(3, 4, 5, 6)).toBe(105);
        expect(volumeOfTrapezoidalPrism(0, 4, 5, 6)).toBe(0);
        expect(volumeOfTrapezoidalPrism(3, 0, 5, 6)).toBe(0);
        expect(volumeOfTrapezoidalPrism(3, 4, 0, 6)).toBe(0);
        expect(volumeOfTrapezoidalPrism(3, 4, 5, 0)).toBe(0);
    });
});