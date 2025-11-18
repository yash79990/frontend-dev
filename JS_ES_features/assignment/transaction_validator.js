"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const t = transactions[i];

        if (t === null) {
            throw "NullEntryError";
        }

        if (!t.id || t.amount === undefined) {
            throw "MissingFieldError";
        }

        if (t.amount < 0) {
            throw "NegativeAmountError";
        }

        valid.push(t);
    } catch (err) {
        invalid.push({ index: i, error: err });
    }
}

console.log("Valid Transactions:");
for (let v of valid) {
    console.log(`ID: ${v.id} | Amount: ${v.amount}`);
}

console.log("\nInvalid Transactions:");
for (let x of invalid) {
    console.log(`Index: ${x.index} | Error: ${x.error}`);
}

console.log(`\nSummary → Success: ${valid.length}, Failed: ${invalid.length}`);
