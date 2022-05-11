/*Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained*/

const expressionMatters = (a, b, c) => {
    const aPB = a + b;
    const bPC = b + c;
    return Math.max( a + bPC, aPB + c, a * b * c, a * bPC, aPB * c, a + b * c, a * b + c)
}