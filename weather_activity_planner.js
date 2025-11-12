
let temperature = 28;    
let isRaining = false;   
let windSpeed = 12;     

let activityMessage = "";


if (isRaining) {
 
  activityMessage = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
 
  activityMessage = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  
  activityMessage = "Too cold and windy — stay home.";
} else if ((temperature >= 15 && temperature <= 35) && (windSpeed <= 20 || !isRaining)) {
  
  activityMessage = "Perfect day for a walk.";
} else {

  activityMessage = "Check the weather again before planning!";
}


console.log("----- Weather Activity Planner -----");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Suggestion: ${activityMessage}`);
