"use strict";

const arg = process && process.argv && process.argv[2];
const limit = Number.isFinite(Number(arg)) && Number(arg) > 0 ? Number(arg) : 5;

function buildPyramidLet(n) {
    console.log("Pyramid using let:");
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "* ";
        }
        console.log(row.trim());
    }
}

function buildPyramidVar(n) {
    console.log("\nPyramid using var:");
    for (var i = 1; i <= n; i++) {
        var row = "";
        for (var j = 0; j < i; j++) {
            row += "* ";
        }
        console.log(row.trim());
    }
}

function debugVariableReuse(n) {
    console.log("\nDebugging variable reuse (showing loop indices):");
    for (var i = 1; i <= n; i++) {
        var row = "";
        for (var j = 0; j < i; j++) {
            row += "* ";
            console.log(`inside inner loop -> i: ${i}, j: ${j}`);
        }
        console.log(`constructed row for i=${i}: ${row.trim()}`);
    }
    console.log(`after loops -> i: ${i}, j: ${j}`);
}

function strictUndeclaredDemo() {
    console.log("\nStrict mode undeclared-variable demo:");
    try {
        for (k = 0; k < 3; k++) {
            console.log("k is", k);
        }
    } catch (e) {
        console.log("Caught error:", e.message);
    }
}

buildPyramidLet(limit);
buildPyramidVar(limit);
debugVariableReuse(limit);
strictUndeclaredDemo();
