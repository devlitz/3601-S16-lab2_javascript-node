//Testing for our serverJavascript.js file

//Testing for stringLength
describe('testing stringLength', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });
});

//Testing for gpaCalc

describe('testing gpaCalc', function(){
    it('We should get 4.000 for all A', function() {
        expect(gpaCalc(1, 1, 1, 4, 4, 4).toEqual(4.000));
    });
});