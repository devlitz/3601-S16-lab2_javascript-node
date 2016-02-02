
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

});

//example test

describe('testing our Info Alert function', function(){

    it('should not return anything', function(){
        expect(sendInfoAlert()).not.toBe("kittens");
    });

});

//Testing our GPA calculator function
describe('testing gpaCalc', function(){
    it('should return 4.000 for all A', function() {
        expect(gpaCalc(1, 1, 1, 4, 4, 4)).toBe(4.000.toFixed(3));
    });

    it('should return 2.000 for all C', function() {
        expect(gpaCalc(1, 1, 1, 2, 2, 2)).not.toEqual(0.000.toFixed(3));
    });

    it('should return 0.000 for all F', function() {
        expect(gpaCalc(1, 1, 1, 0, 0, 0)).toEqual(0.000.toFixed(3));
    });

    it('should return 2.000 for A, C, F with 2 Credits each', function() {
        expect(gpaCalc(2, 2, 2, 4, 2, 0)).toEqual(2.000.toFixed(3));
    });

});



