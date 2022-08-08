let str = "\u{20B9F}";

console.log(str);
console.log(`str.length: ${str.length}`); // 普通にlengthをとるとコードポイントの数を数えるので2になる。
console.log(`[...str].length: ${[...str].length}`); // スプレッド演算子を使うと1文字ずつ配列にしてくれる。for-of構文も同じことをしてくれるらしい。

let cnt = 0;

for (var c in str) {
    cnt++;
}
console.log(`for-in: ${cnt}`);

cnt = 0;
for (var c of str) {
    cnt++;
}
console.log(`for-of: ${cnt}`);
