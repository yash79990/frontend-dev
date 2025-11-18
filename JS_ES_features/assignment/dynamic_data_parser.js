"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    const asString = String(value);
    const asBoolean = Boolean(value);
    const asNumber = Number(value);

    if (
        value === "NaN" ||
        value === " " ||
        value === "100px"
    ) {
        invalidNumbers.push({ value, reason: "invalid_number" });
        console.log(`Invalid number: '${value}'`);
        continue;
    }

    validNumbers.push({
        original: value,
        number: asNumber,
        boolean: asBoolean,
        string: asString
    });
}

console.log("\nValid Numeric Data:");
for (let item of validNumbers) {
    console.log(`Original: ${item.original} | Number: ${item.number} | Boolean: ${item.boolean} | String: '${item.string}'`);
}

console.log("\nInvalid Numeric Data:");
for (let bad of invalidNumbers) {
    console.log(`Value: ${bad.value} | Reason: ${bad.reason}`);
}

console.log(`\nSummary → Valid: ${validNumbers.length}, Invalid: ${invalidNumbers.length}`);
