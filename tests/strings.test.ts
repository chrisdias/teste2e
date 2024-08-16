
import {

    isFalsyOrWhitespace,
    format,
    format2,
    htmlAttributeEncodeValue,
    escape,
    escapeRegExpCharacters,
    count,
    truncate,
    truncateMiddle,
    trim,
    ltrim,
    rtrim,
    convertSimple2RegExpPattern,
    stripWildcards,
    createRegExp,
    regExpLeadsToEndlessLoop,
    splitLines,
    splitLinesIncludeSeparators,
    firstNonWhitespaceIndex,
    getLeadingWhitespace,
    lastNonWhitespaceIndex,
    replaceAsync,
    compare,
    compareSubstring,
    compareIgnoreCase,
    compareSubstringIgnoreCase,
    isAsciiDigit,
    isLowerAsciiLetter,
    isUpperAsciiLetter,
    equalsIgnoreCase,
    startsWithIgnoreCase,
    commonPrefixLength,
    commonSuffixLength,
    isHighSurrogate,
    isLowSurrogate,
    computeCodePoint,
    getNextCodePoint,
    containsRTL,
    isBasicASCII,
    containsUnusualLineTerminators,
    isFullWidthCharacter,
    isEmojiImprecise,
    lcut,
    removeAnsiEscapeCodes,
    removeAnsiEscapeCodesFromPrompt
} from '../src/strings';

describe('String Utilities', () => {
    test('isFalsyOrWhitespace', () => {
        expect(isFalsyOrWhitespace(undefined)).toBe(true);
        expect(isFalsyOrWhitespace('')).toBe(true);
        expect(isFalsyOrWhitespace('   ')).toBe(true);
        expect(isFalsyOrWhitespace('test')).toBe(false);
    });

    test('format', () => {
        expect(format('Hello {0}', 'World')).toBe('Hello World');
        expect(format('{0} {1}', 'Hello', 'World')).toBe('Hello World');
    });

    test('format2', () => {
        expect(format2('Hello {name}', { name: 'World' })).toBe('Hello World');
    });

    test('htmlAttributeEncodeValue', () => {
        expect(htmlAttributeEncodeValue('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    });

    test('escape', () => {
        expect(escape('<div>Test</div>')).toBe('&lt;div&gt;Test&lt;/div&gt;');
    });

    test('escapeRegExpCharacters', () => {
        expect(escapeRegExpCharacters('Hello. How are you?')).toBe('Hello\\. How are you\\?');
    });

    test('count', () => {
        expect(count('Hello World', 'o')).toBe(2);
    });

    test('truncate', () => {
        expect(truncate('Hello World', 5)).toBe('Hello…');
    });

    test('truncateMiddle', () => {
        expect(truncateMiddle('Hello World', 5)).toBe('He…ld');
    });

    test('trim', () => {
        expect(trim('  Hello World  ')).toBe('Hello World');
    });

    test('ltrim', () => {
        expect(ltrim('  Hello World  ', ' ')).toBe('Hello World  ');
    });

    test('rtrim', () => {
        expect(rtrim('  Hello World  ', ' ')).toBe('  Hello World');
    });

    test('convertSimple2RegExpPattern', () => {
        expect(convertSimple2RegExpPattern('*.js')).toBe('.*\\.js');
    });

    test('stripWildcards', () => {
        expect(stripWildcards('*.js')).toBe('.js');
    });

    test('createRegExp', () => {
        expect(createRegExp('test', false).test('test')).toBe(true);
    });

    test('regExpLeadsToEndlessLoop', () => {
        expect(regExpLeadsToEndlessLoop(/(a+)+$/)).toBe(true);
    });

    test('splitLines', () => {
        expect(splitLines('Hello\nWorld')).toEqual(['Hello', 'World']);
    });

    test('splitLinesIncludeSeparators', () => {
        expect(splitLinesIncludeSeparators('Hello\nWorld')).toEqual(['Hello\n', 'World']);
    });

    test('firstNonWhitespaceIndex', () => {
        expect(firstNonWhitespaceIndex('   Hello')).toBe(3);
    });

    test('getLeadingWhitespace', () => {
        expect(getLeadingWhitespace('   Hello')).toBe('   ');
    });

    test('lastNonWhitespaceIndex', () => {
        expect(lastNonWhitespaceIndex('Hello   ')).toBe(4);
    });

    test('replaceAsync', async () => {
        const result = await replaceAsync('Hello World', /World/, async () => 'Universe');
        expect(result).toBe('Hello Universe');
    });

    test('compare', () => {
        expect(compare('a', 'b')).toBeLessThan(0);
    });

    test('compareIgnoreCase', () => {
        expect(compareIgnoreCase('a', 'A')).toBe(0);
    });

    test('isAsciiDigit', () => {
        expect(isAsciiDigit(48)).toBe(true); // '0'
    });

    test('isLowerAsciiLetter', () => {
        expect(isLowerAsciiLetter(97)).toBe(true); // 'a'
    });

    test('isUpperAsciiLetter', () => {
        expect(isUpperAsciiLetter(65)).toBe(true); // 'A'
    });

    test('equalsIgnoreCase', () => {
        expect(equalsIgnoreCase('hello', 'HELLO')).toBe(true);
    });

    test('startsWithIgnoreCase', () => {
        expect(startsWithIgnoreCase('Hello World', 'hello')).toBe(true);
    });

    test('commonPrefixLength', () => {
        expect(commonPrefixLength('Hello', 'Hell')).toBe(4);
    });

    test('commonSuffixLength', () => {
        expect(commonSuffixLength('Hello', 'llo')).toBe(3);
    });

    test('isHighSurrogate', () => {
        expect(isHighSurrogate(0xD800)).toBe(true);
    });

    test('isLowSurrogate', () => {
        expect(isLowSurrogate(0xDC00)).toBe(true);
    });

    test('computeCodePoint', () => {
        expect(computeCodePoint(0xD800, 0xDC00)).toBe(0x10000);
    });

    test('getNextCodePoint', () => {
        expect(getNextCodePoint('Hello', 5, 0)).toBe(72); // 'H'
    });

    test('containsRTL', () => {
        expect(containsRTL('مرحبا')).toBe(true);
    });

    test('isBasicASCII', () => {
        expect(isBasicASCII('Hello')).toBe(true);
    });

    test('containsUnusualLineTerminators', () => {
        expect(containsUnusualLineTerminators('Hello\u2028World')).toBe(true);
    });

    test('isFullWidthCharacter', () => {
        expect(isFullWidthCharacter(0xFF01)).toBe(true); // '！'
    });

    test('isEmojiImprecise', () => {
        expect(isEmojiImprecise(0x1F600)).toBe(true); // 😀
    });

    test('lcut', () => {
        expect(lcut('Hello World', 5)).toBe('World');
    });

    test('removeAnsiEscapeCodes', () => {
        expect(removeAnsiEscapeCodes('\u001b[31mHello\u001b[0m')).toBe('Hello');
    });

    test('removeAnsiEscapeCodesFromPrompt', () => {
        expect(removeAnsiEscapeCodesFromPrompt('\n\\[\u001b[01;34m\\]\\w\\[\u001b[00m\\]\n\\[\u001b[1;32m\\]> \\[\u001b[0m\\]')).toBe('\n\\w\n> ');
    });
});