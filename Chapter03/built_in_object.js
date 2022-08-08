// 組み込みオブジェクトとラッパーオブジェクト
let str_1 = new String("Test String");
let str_2 = new String("Test String");
let str_3 = "Test String";
let str_4 = "Test String";
let bool = new Boolean(false);

if (bool) {
    // nullでないオブジェクトなのでtrueと判定される
    // Booleanは真偽値判定には使えない
    console.log("bool is true.");
} else {
    console.log("bool is false");
}


if (str_1 === str_2) {
    console.log("str_1 equals str_2.");
} else {
    // ラッパーオブジェクトは参照で比較される
    console.log("str_1 does not equal str_2.");
}

if (str_3 === str_4) {
    // 基本データ型は値で比較される
    console.log("str_3 equals str_4.");
} else {
    console.log("str_3 does not equal str_4.");
}
