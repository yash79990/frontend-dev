"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "divide":
            if (b === 0) throw new Error("DivideByZeroError");
            return a / b;
        case "power":
            return Math.pow(a, b);
        case "root":
            if (a < 0) throw new Error("NegativeRootError");
            return Math.sqrt(a);
        default:
            throw new Error("InvalidOperationError");
    }
}

let results = [];

for (let op of operations) {
    try {
        const result = calculate(op, num1, num2);
        results.push({ operation: op, status: "success", value: result });
    } catch (err) {
        results.push({ operation: op, status: "error", message: err.message });
    }
}

console.log("Summary:");
for (let r of results) {
    if (r.status === "success") {
        console.log(`${r.operation}: ${r.value}`);
    } else {
        console.log(`${r.operation}: ERROR -> ${r.message}`);
    }
}
