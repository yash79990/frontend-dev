
let age = 19;           
let isCitizen = true;    


if (age >= 18) {
  if (isCitizen) {
    if (age >= 21) {
      console.log("Eligible for all services."); // Vote, Drive, Passport
    } else {
      console.log("Eligible to vote only."); // Citizen but under 21
    }
  } else {
    console.log("Only age criteria met."); // Not a citizen but adult
  }
} else {
  console.log("Not eligible yet."); // Under 18
}
