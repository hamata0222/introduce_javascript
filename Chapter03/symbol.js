var symbol_1 = Symbol("test"); // 命令なのでnew演算子は不要
var symbol_2 = Symbol("test");

console.log(symbol_1.toString());
console.log(typeof symbol_1);
console.log(symbol_1 === symbol_2); // 同じ文字列を与えてもfalse
console.log(symbol_1 == symbol_2); // ==演算子でもfalseになる

// enumのように使うのが一般的
const MONDAY = Symbol();
const TUSEDAY = Symbol();
const WEDNESDAY = Symbol();
const THURSDAY = Symbol();
const FRIDAY = Symbol();
const SATURDAY = Symbol();
const SUNDAY = Symbol();

var today = FRIDAY;
switch (today) {
    case MONDAY:
        console.log("Today is Monday");
        break;
    case TUSEDAY:
        console.log("Today is Tuseday");
        break;
    case WEDNESDAY:
        console.log("Today is Wednesday");
        break;
    case THURSDAY:
        console.log("Today is Thursday");
        break;
    case FRIDAY:
        console.log("Today is Friday");
        break;
    case SATURDAY:
        console.log("Today is Saturday");
        break;
    case SUNDAY:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Undefined week day");
        break;

}