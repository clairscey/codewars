/* Task

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21]. */

//My Solution
function deleteNth(arr,n){
    let uniques = new Set(arr)
    let uniquesArr = [...uniques]
    let result = arr.slice()
    for (let i = 0; i < uniquesArr.length; i++){
      let count = 0
      for (let j = 0; j < result.length; j++){
        if (result[j] === uniquesArr[i]){
          count++
          if (count > n){
            result.splice(j, 1)
            j--
          }
        }
      }
    }
    return result
  }

  //Interesting Solution

  function deleteNth(arr,x) {
    //create an object to hold the count of each value
    var cache = {};
    return arr.filter(function(n) {//filter based on a function that will run on each element
      cache[n] = (cache[n]||0) + 1; //for each element, checks if the key exists in the obj, if it does, add 1 to current value, if not, initiate at 0 and add 1
      return cache[n] <= x; //filter the array so that only elements that have less than target number when function is called on them are allowed in the final array
    });
  }
  