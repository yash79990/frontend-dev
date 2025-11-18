"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    const line = rawData[i];
    try {
        const parsed = JSON.parse(line);
        if (!('user' in parsed) || !('age' in parsed)) throw new Error('MissingKeys');
        const ageNum = Number(parsed.age);
        if (Number.isNaN(ageNum)) throw new Error('AgeConversion');
        parsed.age = ageNum;
        clean.push(parsed);
    } catch (e) {
        errors.push({ line: i, raw: line, message: e.message });
        console.log(`Error on line ${i}: ${e.message}`);
    }
}

console.log("\nClean entries:");
for (let entry of clean) {
    console.log(`User: ${entry.user} | Age: ${entry.age}`);
}

console.log("\nErrors:");
for (let err of errors) {
    console.log(`Line ${err.line} | Raw: ${err.raw} | Message: ${err.message}`);
}

const under18 = clean.filter(u => u.age < 18);

console.log("\nUnder-18 users:");
if (under18.length === 0) {
    console.log("None");
} else {
    for (let u of under18) {
        console.log(`User: ${u.user} | Age: ${u.age}`);
    }
}
