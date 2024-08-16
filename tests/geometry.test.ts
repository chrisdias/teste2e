
import { 


    areaOfCircle, 
    circumferenceOfCircle, 
    areaOfRectangle, 
    perimeterOfRectangle, 
    areaOfTriangle, 
    hypotenuse, 
    surfaceAreaOfCube, 
    surfaceAreaOfCylinder 
} from '../src/geometry';

describe('Geometry Functions', () => {
    test('areaOfCircle', () => {
        expect(areaOfCircle(1)).toBeCloseTo(Math.PI);
        expect(areaOfCircle(0)).toBe(0);
        expect(areaOfCircle(2)).toBeCloseTo(4 * Math.PI);
    });

    test('circumferenceOfCircle', () => {
        expect(circumferenceOfCircle(1)).toBeCloseTo(2 * Math.PI);
        expect(circumferenceOfCircle(0)).toBe(0);
        expect(circumferenceOfCircle(2)).toBeCloseTo(4 * Math.PI);
    });

    test('perimeterOfRectangle', () => {
        expect(perimeterOfRectangle(2, 3)).toBe(10);
        expect(perimeterOfRectangle(0, 3)).toBe(6);
        expect(perimeterOfRectangle(4, 5)).toBe(18);
    });

    test('areaOfTriangle', () => {
        expect(areaOfTriangle(2, 3)).toBe(3);
        expect(areaOfTriangle(0, 3)).toBe(0);
        expect(areaOfTriangle(4, 5)).toBe(10);
    });

    test('hypotenuse', () => {
        expect(hypotenuse(3, 4)).toBe(5);
        expect(hypotenuse(0, 0)).toBe(0);
        expect(hypotenuse(5, 12)).toBe(13);
    });

    test('surfaceAreaOfCylinder', () => {
        expect(surfaceAreaOfCylinder(2, 3)).toBeCloseTo(2 * Math.PI * 2 * (2 + 3));
        expect(surfaceAreaOfCylinder(0, 3)).toBe(0);
        expect(surfaceAreaOfCylinder(3, 5)).toBeCloseTo(2 * Math.PI * 3 * (3 + 5));
    });
});
test('areaOfRectangle', () => {
    expect(areaOfRectangle(2, 3)).toBe(6);
    expect(areaOfRectangle(0, 3)).toBe(0);
    expect(areaOfRectangle(4, 5)).toBe(20);
});
test('surfaceAreaOfCube', () => {
    expect(surfaceAreaOfCube(2)).toBe(24);
    expect(surfaceAreaOfCube(0)).toBe(0);
    expect(surfaceAreaOfCube(3)).toBe(54);
});