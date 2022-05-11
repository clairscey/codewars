/*You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

const twoSort = s => s.slice().sort().slice(0, 1)[0].split('').map( (value, index, array) => index == array.length - 1 ? value : `${value}***` ).join('')

//refactored:
const twoSorts = s => s.sort()[0].split('').join('***')