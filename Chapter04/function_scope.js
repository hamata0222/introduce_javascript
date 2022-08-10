// 関数とスコープに関するサンプル
var scope = "Global Variable.";

function scope_sample() {
    var scope = "Local Variable.";
    return scope; // 戻り値はローカル変数
}
console.log(`${scope_sample()}`);
console.log(`${scope}`); // グローバル変数は無傷

function scope_sample_1() {
    scope = "Global Variables!!!"; // ローカル変数を宣言しない場合はグローバル変数
    return scope;
}
console.log(`${scope_sample_1()}`);
console.log(`${scope}`);
scope = "Global Variable."; // 元に戻す

function scope_sample_2() {
    console.log(scope); // undefinedになる
    // ローカル変数を宣言すると、その関数全体でスコープが有効になる。
    // 代入するよりも先に参照するとグローバル変数を参照するのではなく、ローカル変数を参照する。
    var scope = "Local Variable.";
    return scope;
}
console.log(`${scope_sample_2()}`);

// **** ブロックスコープの話 ****
if (true) {
    var val = 0;
    val += 1;
    console.log(val);
}
console.log(val); // 参照できる。

if (true) {
    let foo = 0; // letで宣言するとブロックスコープが有効になる。
    foo += 1;
    console.log(foo);
}
// console.log(foo); // 参照できない。
