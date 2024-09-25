import { describe, it, expect } from 'vitest';
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
} from '../volume';

describe('Volume Calculations', () => {
    it('should calculate the volume of a cube', () => {
        expect(volumeOfCube(3)).toBe(27);
    });

    it('should calculate the volume of a rectangular prism', () => {
        expect(volumeOfRectangularPrism(3, 4, 5)).toBe(60);
    });

    it('should calculate the volume of a cylinder', () => {
        expect(volumeOfCylinder(3, 5)).toBeCloseTo(141.3716694115407);
    });

    it('should calculate the volume of a sphere', () => {
        expect(volumeOfSphere(3)).toBeCloseTo(113.09733552923254);
    });

    it('should calculate the volume of a cone', () => {
        expect(volumeOfCone(3, 5)).toBeCloseTo(47.12388980384689);
    });

    it('should calculate the volume of a pyramid', () => {
        expect(volumeOfPyramid(9, 7)).toBe(21);
    });

    // it('should calculate the volume of a torus', () => {
    //     expect(volumeOfTorus(4, 1)).toBeCloseTo(39.47841760435743);
    // });

    it('should calculate the volume of an ellipsoid', () => {
        expect(volumeOfEllipsoid(2, 3, 4)).toBeCloseTo(100.53096491487338);
    });

    it('should calculate the volume of a triangular prism', () => {
        expect(volumeOfTriangularPrism(3, 4, 5)).toBe(30);
    });

    it('should calculate the volume of a trapezoidal prism', () => {
        expect(volumeOfTrapezoidalPrism(3, 4, 5, 6)).toBe(105);
    });
});