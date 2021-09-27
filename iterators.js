/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/

const logger = (array) => {
    array.forEach((element) => console.log(element))
};

let temps = [5, 8, 9]
logger(temps)

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
function toCelsius(temperatures) {
return temperatures.map((temp) => (temp - 32) * (5/9))
};

console.log(toCelsius([100, 101, 130]))
/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
function hottestDays(temperatures, threshhold) {
return temperatures.filter((temp) => (temp > threshhold))
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
function logHottestDays(temperatures, threshhold) {
const filteredTemperatures = hottestDays(temperatures, threshhold);
const filteredTempsInCelsius = toCelsius(filteredTemperatures);
logger(filteredTempsInCelsius);
};

/* Uncomment the following lines to test your code... */

// logger([1, 2, 3, 4, 5, 6, 7]);
// console.log(toCelsius([212, 122])); // should be: [100, 50];
// console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
