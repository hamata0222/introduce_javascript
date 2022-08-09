"use strict";

// すべてのオブジェクトの基底オブジェクトとなるObject
var obj = new Object();

console.log(obj.toString()); // 最初から定義されているメソッド
console.log(obj.valueOf()); // 最初から定義されているメソッド

// assignメソッドでオブジェクトを結合する。
let obj_1 = {
    first_name: "Hiroshi",
    type: "ヒト",
    description: {
        birth: "1987-02-22"
    }
};
let obj_2 = {
    first_name: "Hiroshi_Hiroshi", // 同名のプロパティは上書きされる。
    last_name: "Hamada", // 存在市内プロパティは追加される。
    description: { // description自体が上書きされるので、description.birthプロパティは消えてしまう。
        food: "お酒"
    }
};

Object.assign(obj_1, obj_2);
console.log(obj_1);

// オブジェクトにプロパティを追加する。
let obj_3 = new Object();
obj_3.x = "プロパティX";
obj_3.y = "プロパティY";
obj_3.z = "プロパティZ";
console.log(obj_3);

// デフォルトのプロパティを継承しない、空のオブジェクトを生成する。
let blank_obj = Object.create(null); // Object.create(Object.prototype);とかにするとObjectを継承したオブジェクトが生成される。
console.log(blank_obj);

// Objectを継承しない、完全にオリジナルのオブジェクト
let original_obj = Object.create(null, {
    // value: プロパティの値
    // writable: プロパティに書き込み可能か
    // configurable: 属性の変更、プロパティの削除が可能か
    // enumerable: 列挙を可能とするか
    x: { value: 1, writable: true, configurable: true, enumerable: true },
    y: { value: 2, writable: true, configurable: true, enumerable: true },
    z: { value: 3, writable: true, configurable: true, enumerable: false },
});
console.log("---- for in ----");
for (var val in original_obj) {
    console.log(val); // zプロパティはenumerableがfalseなので出力されない。
}

// 不変オブジェクトを作る
//                      | preventExtensions | seal    | freeze
// -------------------- | ---------------- | ------- | -------------
// プロパティの追加      | 不可              | 不可    | 不可
// プロパティの削除      | 可                | 不可    | 不可
// プロパティ値の変更    | 可                | 可      | 不可
console.log("---- preventExtensions ----");
Object.preventExtensions(original_obj);
original_obj.x = 0; // プロパティ値の変更はできる。
console.log(original_obj);
delete original_obj.x; // プロパティ値の削除はできる。
console.log(original_obj);
// original_obj.a = 1; // プロパティの追加はできない。
// 実行時例外が発生してこれ以降の操作ができない。しかしスクリプトの実行は止まらない。
console.log(original_obj);

console.log("---- seal ----");
Object.seal(original_obj);
original_obj.y = 0; // プロパティ値の変更はできる。
console.log(original_obj);
// delete original_obj.y; // プロパティ値の削除はできない。
// 実行時例外が発生してこれ以降の操作ができない。しかしスクリプトの実行は止まらない。
console.log(original_obj);
// original_obj.a = 1; // プロパティの追加はできない。
console.log(original_obj);

console.log("---- freeze ----");
Object.freeze(original_obj);
// original_obj.z = 0; // プロパティ値の変更はできない。
// 実行時例外が発生してこれ以降の操作ができない。しかしスクリプトの実行は止まらない。
console.log(original_obj);
// delete original_obj.z; // プロパティ値の削除はできない。
console.log(original_obj);
// original_obj.a = 1; // プロパティの追加はできない。
console.log(original_obj);
