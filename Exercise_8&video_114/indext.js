const location0 = "Dubai";
const location1 = "Vancouver";
const location3 = "California";

let phoneCharge = 50;

let locationResult;
locationResult = location0;
console.log("location is : ", locationResult);
let resultPhonecharge;
console.log("Phonecharge=", phoneCharge);

if (phoneCharge >= 15 && phoneCharge <= 80) {
  resultPhonecharge = 1;
} else {
  resultPhonecharge = 0;
}

switch (locationResult) {
  case "Dubai":
    locationResult = 1;
    break;
  case "Vancouver":
    locationResult = 1;
    break;
  case "California":
    locationResult = 1;
    break;
  default:
    locationResult = 0;
}
console.log("result locatio = ", Boolean(resultPhonecharge));
console.log("result location = ", Boolean(locationResult));

if (locationResult && resultPhonecharge) {
  console.log("Great you can get the uptodate");
}
