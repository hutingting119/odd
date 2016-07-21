'use strict'

const main=require('../main/main.js');

describe('selectOdd', () => {
    
    let numbers;
    
    beforeEach(() => {
        numbers=[1,2,3,4,5];
    })

    it('selectOdd', ()=> {

        let odds = main.selectOdd(numbers);
        let test = [1,3,5];
        expect(odds).toEqual(test);
    })

    let  odds;
    
    beforeEach(()=>{
        odds=[1,3,5];
    })

    it('buildOddSquare',()=>{
        
        let oddSquares=main.buildOddSquare(odds);
        let test=[1,9,25];
        expect(oddSquares).toEqual(test);
    })

    let oddSquares;
    
    beforeEach(()=>{
        oddSquares=[1,9,25];
    })
    
    it('buildOddSquareSum',()=>{
        
        let oddSquareSum=main.buildOddSquareSum(oddSquares);
        let test=35;
        expect(oddSquareSum).toEqual(test);
    })

    it('should print sum', () => {
        
        spyOn(console, 'log');

        main.printSum(numbers);
        const oddSuareSum = 35;

        expect(console.log).toHaveBeenCalledWith(oddSuareSum);
    });
})