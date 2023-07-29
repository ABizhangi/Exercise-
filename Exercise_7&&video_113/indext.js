// camera distance 5km
// time 10 minute
// speed ?

// speed limit night 60 km/h
// speed limit day 80 km/h

// violation

const cameraDistance = 5;
let time = 1; // calculated in minuts 
let speed; // km/h 

// calculation minuts to hour

time = time / 60;

// calculate the speed
speed = 5 / time;
console.log(speed);

let dayNight;
dayNight = "day";

let result;

dayNight == "day" && speed < 60
  ? (result = "not offense")
  : dayNight == "night" && speen < 80
  ? (result = "not offense")
  : (result = "violation ");

console.log("result is : ", result);
