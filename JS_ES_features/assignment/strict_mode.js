console.log("Non strict mode:");
function demo1(a, a) {
    total = 10;
    // delete total;
    return total;
}
try {
    console.log(demo1(5, 10));
} catch (e) {
    console.log("Error:", e.message);
}

console.log("Strict mode:");
"use strict";
try {
    function demo2(a, a) {
        let x = 5;
        x = 10;
        return x;
    }
    console.log(demo2(5, 10));
} catch (e) {
    console.log("Error:", e.message);
}

console.log("Correct ES6 version:");
function demo3(a, b) {
    let total = 10;
    return total;
}
console.log(demo3(5, 10));
