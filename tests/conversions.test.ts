
import {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    kilometersToMiles,
    milesToKilometers,
    kilogramsToPounds,
    poundsToKilograms,
    litersToGallons,
    gallonsToLiters,
    metersToYards,
    yardsToMeters
} from '../src/conversions';

describe('Conversion Functions', () => {
    test('celsiusToFahrenheit', () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
        expect(celsiusToFahrenheit(100)).toBe(212);
        expect(celsiusToFahrenheit(-40)).toBe(-40);
    });

    test('fahrenheitToCelsius', () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
        expect(fahrenheitToCelsius(212)).toBe(100);
        expect(fahrenheitToCelsius(-40)).toBe(-40);
    });

    test('kilometersToMiles', () => {
        expect(kilometersToMiles(1)).toBeCloseTo(0.621371);
        expect(kilometersToMiles(5)).toBeCloseTo(3.106855);
    });

    test('milesToKilometers', () => {
        expect(milesToKilometers(1)).toBeCloseTo(1.60934);
        expect(milesToKilometers(5)).toBeCloseTo(8.0467);
    });

    test('kilogramsToPounds', () => {
        expect(kilogramsToPounds(1)).toBeCloseTo(2.20462);
        expect(kilogramsToPounds(5)).toBeCloseTo(11.0231);
    });

    test('poundsToKilograms', () => {
        expect(poundsToKilograms(1)).toBeCloseTo(0.453592);
        expect(poundsToKilograms(5)).toBeCloseTo(2.26796);
    });

    test('litersToGallons', () => {
        expect(litersToGallons(1)).toBeCloseTo(0.264172);
        expect(litersToGallons(5)).toBeCloseTo(1.32086);
    });

    test('gallonsToLiters', () => {
        expect(gallonsToLiters(1)).toBeCloseTo(3.78541);
        expect(gallonsToLiters(5)).toBeCloseTo(18.9271);
    });

    test('metersToYards', () => {
        expect(metersToYards(1)).toBeCloseTo(1.09361);
        expect(metersToYards(5)).toBeCloseTo(5.46805);
    });

    test('yardsToMeters', () => {
        expect(yardsToMeters(1)).toBeCloseTo(0.9144);
        expect(yardsToMeters(5)).toBeCloseTo(4.572);
    });
});