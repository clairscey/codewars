/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function splitString (str) {
    let evenString = str.length % 2 ? str + "_" : str
    let results = []
    for (let i = 0; i < evenString.length; i += 2){
        results.push(evenString[i] + evenString[i+1])
    }
    return results
}
