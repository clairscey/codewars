/* Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//My Solution
function solution(string) {
    let regex = /[A-Z]/g
    let splitString = string.split('')
    let stringWithSpaces = splitString.map( value =>{
      if (regex.test(value)){
        return ' ' + value
      }else return value
    })
    return stringWithSpaces.join('')
  }

//Regex replace method
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  }