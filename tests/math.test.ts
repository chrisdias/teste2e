
import { add, subtract, multiply, divide, power } from '../src/math';

describe('Math Functions', () => {
    describe('add', () => {
        it('should add two positive numbers', () => {
            expect(add(1, 2)).toBe(3);
        });

        it('should add two negative numbers', () => {
            expect(add(-1, -2)).toBe(-3);
        });

        it('should add a positive and a negative number', () => {
            expect(add(1, -2)).toBe(-1);
        });

        it('should add zero', () => {
            expect(add(1, 0)).toBe(1);
        });
    });

    describe('subtract', () => {
        it('should subtract two positive numbers', () => {
            expect(subtract(2, 1)).toBe(1);
        });

        it('should subtract two negative numbers', () => {
            expect(subtract(-2, -1)).toBe(-1);
        });

        it('should subtract a positive and a negative number', () => {
            expect(subtract(1, -2)).toBe(3);
        });

        it('should subtract zero', () => {
            expect(subtract(1, 0)).toBe(1);
        });
    });

    describe('multiply', () => {
        it('should multiply two positive numbers', () => {
            expect(multiply(2, 3)).toBe(6);
        });

        it('should multiply two negative numbers', () => {
            expect(multiply(-2, -3)).toBe(6);
        });

        it('should multiply a positive and a negative number', () => {
            expect(multiply(2, -3)).toBe(-6);
        });

        it('should multiply by zero', () => {
            expect(multiply(2, 0)).toBe(0);
        });
    });

    describe('divide', () => {
        it('should divide two positive numbers', () => {
            expect(divide(6, 3)).toBe(2);
        });

        it('should divide two negative numbers', () => {
            expect(divide(-6, -3)).toBe(2);
        });

        it('should divide a positive and a negative number', () => {
            expect(divide(6, -3)).toBe(-2);
        });

        it('should handle division by zero', () => {
            expect(divide(6, 0)).toBe('Error: Division by zero');
        });
    });

    describe('power', () => {
        it('should calculate the power of a positive base and exponent', () => {
            expect(power(2, 3)).toBe(8);
        });

        it('should calculate the power of a negative base and positive exponent', () => {
            expect(power(-2, 3)).toBe(-8);
        });

        it('should calculate the power of a positive base and negative exponent', () => {
            expect(power(2, -3)).toBe(0.125);
        });

        it('should calculate the power of a base with zero exponent', () => {
            expect(power(2, 0)).toBe(1);
        });
    });
});