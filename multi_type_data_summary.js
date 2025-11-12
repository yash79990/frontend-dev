
let userName = "Jai";                 // String
let userAge = 21;                     // Number
let isVerified = true;                // Boolean
let hobbies = ["coding", "music", "travel"]; // Array
let userProfile = { city: "Mathura", country: "India" }; // Object
let lastLogin = null;                 // Null
let accountStatus;                    // Undefined (not assigned)


let dataSummary = [
  { Label: "userName", Value: userName, Type: typeof userName },
  { Label: "userAge", Value: userAge, Type: typeof userAge },
  { Label: "isVerified", Value: isVerified, Type: typeof isVerified },
  { Label: "hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "userProfile", Value: userProfile, Type: typeof userProfile },
  { Label: "lastLogin", Value: lastLogin, Type: typeof lastLogin }, // typeof null = "object"
  { Label: "accountStatus", Value: accountStatus, Type: typeof accountStatus }
];


console.table(dataSummary);
