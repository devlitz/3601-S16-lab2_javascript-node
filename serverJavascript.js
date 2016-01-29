// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

/**
 * Takes input for gpa
 *
 * @returns {int}  - returns yourGPA
 */

exports.gpaCalc = function(credit, credit2, credit3, grade, grade2, grade3){
    var c1 = parseInt(credit);
    var c2 = parseInt(credit2);
    var c3 = parseInt(credit3);
    return (((c1 * grade) + (c2 * grade2) + (c3 * grade3)) / (c1 + c2 + c3)).toFixed(3);
};


