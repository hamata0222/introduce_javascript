// クロージャとは、関数の中で定義される内部関数のこと。
// JavaScriptでは、ローカル変数の生存期間を延ばすために使われている。

// **** 普通にローカル変数を使ってみる ****
function local_variable() {
    let local_val = 0;
    local_val++;
    console.log(local_val);
}
local_variable(); // 呼び出される度に新しいスコープが生成されるので、``local_val``はインクリメントされない。
local_variable();
local_variable();
local_variable();
local_variable();
local_variable();

console.log("----");
let local_func = local_variable; // 一回変数で受けてみる。
local_func(); // やっぱりだめ
local_func();
local_func();
local_func();

// **** クロージャを使ってみる ****
function closure_function() {
    let local_val = 0;

    return () => { // この関数がclosure_function()の``local_val``を参照しているので、処理が終わってもローカル変数が破棄されない。
        ++local_val;
        console.log(local_val);
    }
}
console.log("----");
let my_closure = closure_function(); // 最初の関数呼び出しでスコープが生成される。Callオブジェクトが生成されるともいえる。
my_closure();
my_closure();
my_closure();
my_closure();

console.log("---- another ----");
let another_closure = closure_function(); // この時点で別スコープ（Callオブジェクト）が生成されるので、``local_val``も別物になる。
another_closure();
another_closure();
another_closure();
another_closure();
