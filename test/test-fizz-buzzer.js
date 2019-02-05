// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

    // test the normal case
    it('should return "fizz", "buzz", and "fizz-buzz" on multiples of 3, 5, and 15, and the given number on all others', function() {
        const normalCases = [
            {input: 3, output: 'fizz'},
            {input: 5, output: 'buzz'},
            {input: 15, output: 'fizz-buzz'},
            {input: 11, output: 11}
        ];
        normalCases.forEach(function(num) {
            const returnedValue = fizzBuzzer(num.input);
            expect(returnedValue).to.equal(num.output);
        });
    });
    it('should throw an error on non-numeric values', function() {
        const badValues = ['a', '2', {}, false];
        badValues.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input)
            }).to.throw(Error);
        })
    })


});