// 1. Function to add two numbers
export const add = (a: number, b: number): number => {
    return a + b;
};

// 2. Function to subtract two numbers
export const subtract = (a: number, b: number): number => {
    return a - b;
};

// 3. Function to multiply two numbers
export const multiply = (a: number, b: number): number => {
    return a * b;
};

// 4. Function to divide two numbers with error handling for division by zero
export const divide = (a: number, b: number): number | string => {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
};

// 5. Function to calculate the power of a number
export const power = (base: number, exponent: number): number => {
    return Math.pow(base, exponent);
};