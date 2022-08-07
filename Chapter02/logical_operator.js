var str_10 = "10", str_10_another = "10";
var num = 10;
var obj_1 = {p1: 10, p2: "10", p3: 11, p4: "11"};
var obj_2 = {p1: 10, p2: "10", p3: 11, p4: "11"};
var arr_1 = [1, 2, 3, 4, 5];
var arr_2 = [1, 2, 3, 4, 5];

console.log("==");
if (str_10 == str_10_another) {
    // 値が同じであれば同じ判定
    console.log("\tstr_10 equals str_10_another");
} else {
    console.log("\tstr_10 does not equal str_10_another");
}
if (str_10 == num) {
    // 型が違っても値は同じっぽいので同じ判定
    console.log("\tstr_10 equals num");
} else {
    console.log("\tstr_10 does not equal num");
}
if (obj_1 == obj_2) {
    console.log("\tobj_1 equals obj_2");
} else {
    // オブジェクトは参照を見るので違う判定
    console.log("\tobj_1 does not equal obj_2");
}
if (arr_1 == arr_2) {
    console.log("\tarr_1 equals arr_2");
} else {
    // 配列は参照を見るので違う判定
    console.log("\tarr_1 does not equal arr_2");
}

console.log("===");
if (str_10 === str_10_another) {
    // 型と値が同じなので同じ判定（Stringはプリミティブ型扱い）
    console.log("\tstr_10 equals str_10_another");
} else {
    console.log("\tstr_10 does not equal str_10_another");
}
if (str_10 === num) {
    console.log("\tstr_10 equals num");
} else {
    // 型が違うので違う判定
    console.log("\tstr_10 does not equal num");
}
if (obj_1 === obj_2) {
    console.log("\tobj_1 equals obj_2");
} else {
    // オブジェクトは参照を見るので違う判定
    console.log("\tobj_1 does not equal obj_2");
}
if (arr_1 === arr_2) {
    console.log("\tarr_1 equals arr_2");
} else {
    // 配列は参照を見るので違う判定
    console.log("\tarr_1 does not equal arr_2");
}
