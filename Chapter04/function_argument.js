// 関数の引数についてのサンプル
// **** 引数のデフォルト値 ****
function default_argument(a, b = 1) { // 呼び出し時に指定されていなければb = 1
    return a * b;
}
console.log(`${default_argument(2)}`);
console.log(`${default_argument(2, 2)}`);

// デフォルト値が適用されるのは、undefinedの時だけ。
console.log(`${default_argument(5, undefined)}`);
console.log(`${default_argument(5, null)}`); // nullはnullという値として扱われる。結果は5 + nullで0となる。

// **** 引数の数が合わないとき ****
const unmatch_argument = function(a, b, c) {
    console.log(`arg a: ${a}`);
    console.log(`arg b: ${b}`);
    console.log(`arg c: ${c}`);
};
unmatch_argument(1, 2); // 足りない引数はundefinedになる。
unmatch_argument(1, 2, 3, 4, 5, 6); // 仮引数より多い場合は無視（本当はargumentsオブジェクトに格納されている）される。

// **** 名前付き引数 ****
const named_args = function({arg1, arg2, arg3}) { // 名前付き引数を使って呼び出したい時には宣言時点でオブジェクトを受け入れるようにしておく。
    console.log(`arg arg1: ${arg1}`);
    console.log(`arg arg2: ${arg2}`);
    console.log(`arg arg3: ${arg3}`);
};
// named_args({"arg1", "arg2", "arg3"}); // 逆に名前付き（オブジェクト）でないと渡せなくなっている。
named_args({arg1: "arg1", arg3: "arg3"});
// この辺りはES2015以降からの仕様とのこと。

// **** 可変長引数 ****
const variable_args = function(a, ...vals) {
    for (let val of vals) {
        console.log(`${a * val}`);
    }
};
variable_args(2, 1, 2, 3, 4, 5);
variable_args(3, 1, 2, 4, 5);

// **** 戻り値を分割代入で受け取る ****
const split_return_value = function(...arr) { // これは可変長引数
    return [Math.max(...arr), Math.min(...arr)]; // これは配列の展開
};
var [max_val, min_val] = split_return_value(1, 2, 3, 4, 5, 0);
console.log(`max_val: ${max_val}`);
console.log(`min_val: ${min_val}`);
