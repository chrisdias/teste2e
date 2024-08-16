
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
} from '../src/simpleStrings';

describe('removeWhitespace', () => {
    it('should remove all whitespace from a string', () => {
        expect(removeWhitespace('Hello World')).toBe('HelloWorld');
        expect(removeWhitespace('  a b c  ')).toBe('abc');
        expect(removeWhitespace('')).toBe('');
    });
});

describe('reverseString', () => {
    it('should reverse a string', () => {
        expect(reverseString('hello')).toBe('olleh');
        expect(reverseString('')).toBe('');
        expect(reverseString('a')).toBe('a');
    });
});

describe('toUpperCase', () => {
    it('should convert string to uppercase', () => {
        expect(toUpperCase('hello')).toBe('HELLO');
        expect(toUpperCase('')).toBe('');
        expect(toUpperCase('Hello World')).toBe('HELLO WORLD');
    });
});

describe('toLowerCase', () => {
    it('should convert string to lowercase', () => {
        expect(toLowerCase('HELLO')).toBe('hello');
        expect(toLowerCase('')).toBe('');
        expect(toLowerCase('Hello World')).toBe('hello world');
    });
});

describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('')).toBe('');
        expect(capitalize('hELLO')).toBe('Hello');
    });
});

describe('areAnagrams', () => {
    it('should check if two strings are anagrams', () => {
        expect(areAnagrams('listen', 'silent')).toBe(true);
        expect(areAnagrams('hello', 'world')).toBe(false);
        expect(areAnagrams('', '')).toBe(true);
    });
});

describe('repeatString', () => {
    it('should repeat a string n times', () => {
        expect(repeatString('a', 3)).toBe('aaa');
        expect(repeatString('abc', 2)).toBe('abcabc');
        expect(repeatString('a', 0)).toBe('');
    });
});

describe('replaceAll', () => {
    it('should replace all occurrences of a substring', () => {
        expect(replaceAll('hello world', 'l', 'x')).toBe('hexxo worxd');
        expect(replaceAll('aaaa', 'a', 'b')).toBe('bbbb');
        expect(replaceAll('hello', 'z', 'x')).toBe('hello');
    });
});

describe('truncateString', () => {
    it('should truncate a string to a given length', () => {
        expect(truncateString('hello world', 5)).toBe('hello');
        expect(truncateString('hello', 10)).toBe('hello');
        expect(truncateString('', 5)).toBe('');
    });
});

describe('getLastCharacter', () => {
    it('should get the last character of a string', () => {
        expect(getLastCharacter('hello')).toBe('o');
        expect(getLastCharacter('')).toBe('');
        expect(getLastCharacter('a')).toBe('a');
    });
});