/* Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

//My Solution
function towerBuilder(nFloors) {
    let result = []
    let bottomFloor = '*'.repeat(nFloors * 2 - 1)
    for (let i = 1; i < nFloors; i++){
      result.push(' '.repeat(nFloors - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(nFloors - i))
    }
    result.push(bottomFloor)
    return result
  }