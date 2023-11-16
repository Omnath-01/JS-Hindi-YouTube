// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

const month = "march";
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case "march":
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("default case match");
        break;
}