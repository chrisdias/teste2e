// 1. Convert Celsius to Fahrenheit
export const celsiusToFahrenheit = (celsius: number): number => {
    return (celsius * 9/5) + 32;
};

// 2. Convert Fahrenheit to Celsius
export const fahrenheitToCelsius = (fahrenheit: number): number => {
    return (fahrenheit - 32) * 5/9;
};

// 3. Convert Kilometers to Miles
export const kilometersToMiles = (kilometers: number): number => {
    return kilometers * 0.621371;
};

// 4. Convert Miles to Kilometers
export const milesToKilometers = (miles: number): number => {
    return miles / 0.621371;
};

// 5. Convert Kilograms to Pounds
export const kilogramsToPounds = (kilograms: number): number => {
    return kilograms * 2.20462;
};

// 6. Convert Pounds to Kilograms
export const poundsToKilograms = (pounds: number): number => {
    return pounds / 2.20462;
};

// 7. Convert Liters to Gallons
export const litersToGallons = (liters: number): number => {
    return liters * 0.264172;
};

// 8. Convert Gallons to Liters
export const gallonsToLiters = (gallons: number): number => {
    return gallons / 0.264172;
};

// 9. Convert Meters to Yards
export const metersToYards = (meters: number): number => {
    return meters * 1.09361;
};

// 10. Convert Yards to Meters
export const yardsToMeters = (yards: number): number => {
    return yards / 1.09361;
};