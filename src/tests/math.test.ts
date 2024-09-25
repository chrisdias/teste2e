import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, power } from '../math';

describe('Math Functions', () => {
    describe('add', () => {
        it('should add two numbers correctly', () => {
            expect(add(2, 3)).toBe(5);
            expect(add(-2, 3)).toBe(1);
            expect(add(0, 0)).toBe(0);
        });
    });

    // describe('subtract', () => {
    //     it('should subtract two numbers correctly', () => {
    //         expect(subtract(5, 3)).toBe(2);
    //         expect(subtract(3, 5)).toBe(-2);
    //         expect(subtract(0, 0)).toBe(0);
    //     });
    // });

    describe('multiply', () => {
        it('should multiply two numbers correctly', () => {
            expect(multiply(2, 3)).toBe(6);
            expect(multiply(-2, 3)).toBe(-6);
            expect(multiply(0, 3)).toBe(0);
        });
    });

    describe('divide', () => {
        it('should divide two numbers correctly', () => {
            expect(divide(6, 3)).toBe(2);
            expect(divide(6, -3)).toBe(-2);
            expect(divide(0, 3)).toBe(0);
        });

        it('should handle division by zero', () => {
            expect(divide(6, 0)).toBe("Error: Division by zero");
        });
    });

    describe('power', () => {
        it('should calculate the power of a number correctly', () => {
            expect(power(2, 3)).toBe(8);
            expect(power(2, 0)).toBe(1);
            expect(power(2, -2)).toBe(0.25);
        });
    });
    describe('subtract', () => {
        it('should subtract two numbers correctly', () => {
            expect(subtract(5, 3)).toBe(2);
            expect(subtract(3, 5)).toBe(-2);
            expect(subtract(0, 0)).toBe(0);
        });
    });
});