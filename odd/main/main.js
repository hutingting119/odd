'use strict'
function printSum(numbers) {
    const odds=selectOdd(numbers);
    const oddSquares=buildOddSquare(odds);
    const oddSquareSum=buildOddSquareSum(oddSquares);
    console.log(oddSquareSum);
}
function selectOdd(numbers) {
    return  numbers.filter(number=>number%2===1);
}

function buildOddSquare(odds) {
    const oddSquares=odds.map(odd=>odd*odd);
    return oddSquares;
}

function buildOddSquareSum(oddSquares) {
    let oddSquareSum=0;
    for(const oddSquare of oddSquares){
        oddSquareSum+=oddSquare;
    }
    return oddSquareSum;
}

module.exports={
    printSum:printSum,
    selectOdd:selectOdd,
    buildOddSquare:buildOddSquare,
    buildOddSquareSum:buildOddSquareSum

};