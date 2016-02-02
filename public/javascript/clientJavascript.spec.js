
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

});

//part 2 test

describe('testing our Info Alert function', function(){

    it('should not return anything', function(){
        expect(sendInfoAlert()).not.toBe("kittens");
    });

});



