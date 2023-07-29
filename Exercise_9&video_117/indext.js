// switch (value) {
//     case 'condition for value' :
//     code_block ;
//     break ;
//     case 'condition for value' :
//     code_block ;
//     break ;case 'condition for value' :
//     code_block ;
//     break ;case 'condition for value' :
//     code_block ;
//     break ;case 'condition for value' :
//     code_block ;
//     break ;
//     default :
//     code block or massage ;
// }

const month = 5;
switch (month) {
  case 1:
    console.log(month, "Farvardin");
    break;
  case 2:
    console.log(month, "Ordibehesht");
    break;
  case 3:
    console.log(seasion, "Khordad");
    break;
  case 4:
    console.log(month, "Tir");
    break;
  case 5:
    console.log(month, "Mordad");
    break;
  case 6:
    console.log(month, "Shahrivar");
    break;
  case 7:
    console.log(month, "Mehr");
    break;
  case 8:
    console.log(month, "Aban");
    break;
  case 9:
    console.log(month, "Azar");
    break;
  case 10:
    console.log(month, "Day");
    break;
  case 11:
    console.log(month, "Bahman");
    break;
  case 12:
    console.log(month, "Esfand");
    break;
  default:
    console.log("your numbe is not valid");
}

// this problem solve with if else
if (month == 1 || month == 2 || month == 3) console.log("season is spring");
else if (month == 4 || month == 5 || month == 6)
  console.log("season is summer");
else if (month == 7 || month == 8 || month == 9)
  console.log("season is autumn");
else if (month == 10 || month == 11 || month == 12)
  console.log("season is winter");
