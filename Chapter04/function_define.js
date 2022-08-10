// 関数定義の種類
// **** function命令 ****
function add(a, b) {
    return a + b;
}
console.log(`add(1,2) = ${add(1,2)}`);

console.log(`sub(3, 1) = ${sub(3, 1)}`); // function命令なら実行前に解釈されるので定義までも呼び出せる。
function sub(a, b) {
    return a - b;
}

// **** Functionコンストラクター ****
// 関数定義を文字列でできるところが特徴だが、入力を基に作ってしまうと任意のコードが実行できてしまうことから
// 現在ではほとんど使われていない。
let mul = new Function("a, b", "return a * b;");
// new Function("a", "b", "return a * b;"); // 仮引数部分を複数の引数に分割する書き方もあり
console.log(`mul(2, 4) = ${mul(2, 4)}`);

// **** 関数リテラル ****
// JavaScriptでは関数をリテラルとして扱うことができる。
// つまり、関数を値として変数に代入できる、ということ。
let div = function(a, b) { return a / b; };
console.log(`div(6, 3) = ${div(6, 3)}`);

// **** アロー関数 ****
// ラムダ関数みたいなやつ
let mod = (a, b) => {
    return a % b;
};
console.log(`mod(5, 3) = ${mod(5, 3)}`);
// いろんな省略記法がある。
let double = x => { // 引数が一つの場合は()は省略できる。
    return x * 2;
};
let half = x => x / 2; // return文だけの関数なら{}は省略できる。
console.log(`double(3) = ${double(3)}`);
console.log(`half(12) = ${half(12)}`);
