var arr = [100, 110, 120, 130];
var map = {apple: 100, orange: 110, banana: 120, pineapple: 130};

for (var key in map) {
    // for in構文は連想配列にだけ使うべき
    console.log(`${key} is ${map[key]}`);
}

for (var index in arr) {
    // 配列に対して使うといろいろと不都合がある。
    // 例えば、for inでのループは順番が保証されない。（ES2020以降は順序が保証されるようになった）
    // また、配列クラスにプロパティが増えるとそのプロパティも拾ってきてしまう。
    // あと、仮変数（index）にはインデックス番号が入るだけなのであまり意味がない。
    console.log(`${index}`);
}

Array.prototype.hoge = function() {};
for (var index in arr) {
    // また、配列クラスにプロパティが増えるとそのプロパティも拾ってきてしまう。
    console.log(`${index}`);
}

// 配列のfor文でlengthをとってくるが、forの中でとるのは性能の劣化につながるので避ける。
// コンパイラの最適化がないので、書いたまま実行されている。
var len = arr.length;
for (var i = 0; i < len; i++) {
    console.log(`arr[${i}] = ${arr[i]}`);

}

// 配列の処理にはfor of文を使う。
for (var price of arr) {
    console.log(`${price}`);
}
// for of文は配列だけでなく、NodeListなどの"列挙可能なオブジェクト"に対して有効。
