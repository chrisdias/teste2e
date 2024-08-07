// src/testing/src/random.ts

// Function 1: Reverse a string
export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Function 2: Convert string to uppercase
export function toUpperCase(str: string): string {
    return str.toUpperCase();
}

// Function 3: Convert string to lowercase
export function toLowerCase(str: string): string {
    return str.toLowerCase();
}

// Function 4: Capitalize the first letter of a string
export function capitalize(str: string): string {
    if (str.length === 0) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    
}

// Function 5: Remove all whitespace from a string
export function removeWhitespace(str: string): string {
    return str.replace(/\s+/g, '');
}

// Function 6: Check if two strings are anagrams
export function areAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

// Function 7: Repeat a string n times
export function repeatString(str: string, times: number): string {
    return str.repeat(times);
}

// Function 8: Replace all occurrences of a substring
export function replaceAll(str: string, search: string, replacement: string): string {
    return str.split(search).join(replacement);
}

// Function 9: Truncate a string to a given length
export function truncateString(str: string, length: number): string {
    return str.length <= length ? str : str.slice(0, length);
}

// Function 10: Get the last character of a string
export function getLastCharacter(str: string): string {
    return str.charAt(str.length - 1);
}