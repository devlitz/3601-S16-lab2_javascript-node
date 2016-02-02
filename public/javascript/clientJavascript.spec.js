
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

});

//random test experiment

describe('testing our Info Alert function', function(){

    it('should not return anything', function(){
        expect(sendInfoAlert()).not.toBe("kittens");
    });

});


//lab tasks part 2, testing of a function

describe('testing our fahrenheit temperature function', function(){
    it('should return the correct new temperature string', function(){
        expect(convertToFahrenheit(30)).toBe("30 degrees Celsius converted into Fahrenheit is: 86 degrees F.");

        expect(convertToFahrenheit(5)).toBe("5 degrees Celsius converted into Fahrenheit is: 41 degrees F.");
    });

    it('should return the correct string even if decimals are involved', function(){
        expect(convertToFahrenheit(3)).toBe("3 degrees Celsius converted into Fahrenheit is: 37.4 degrees F.");
    });


    it('should return the correct string even if negatives are involved', function(){
        expect(convertToFahrenheit(-30)).toBe("-30 degrees Celsius converted into Fahrenheit is: -22 degrees F.");
    });
});