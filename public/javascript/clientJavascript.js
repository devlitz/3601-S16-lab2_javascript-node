// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

var sendInfoAlert = function() {
    alert("You are now on the GPA calculator page. Made by Zach and Sam.");
};

var gpaCalc = function(credit, credit2, credit3, grade, grade2, grade3){
    var c1 = parseInt(credit);
    var c2 = parseInt(credit2);
    var c3 = parseInt(credit3);
    return (((c1 * grade) + (c2 * grade2) + (c3 * grade3)) / (c1 + c2 + c3)).toFixed(3);
};