var arr = [0, 1, 2];
var [first, second, third] = arr; // 配列の内容が順番に代入される。
var [one, two] = arr; // 要素数に足りなくても大丈夫。

console.log("first: ", first);
console.log("second: ", second);
console.log("third: ", third);

console.log("one: ", one);
console.log("two: ", two);

var arr2 = [1, 2, 4, 8, 16, 32, 64, 128, 256];
var [a0, a1, a2, ...other] = arr2; // `...`演算子を使うと残りの要素を配列として代入できる。

console.log("a0: ", a0);
console.log("a1: ", a1);
console.log("a2: ", a2);
console.log("other: ", other);


var obj = {title: "JavaScript本格入門", publish: "技術評論社", price: 2680};
var {price, title, memo = "無し"} = obj; // オブジェクトの分割代入は順番関係ない。プロパティと別名の変数に代入するにはどうする？

console.log("price: ", price);
console.log("title: ", title);
console.log("memo: ", memo);

var ttl, company;
// {}がブロックとして認識されてしまうため、代入文にするために全体を()で囲む必要がある。
({title: ttl, publish: company} = obj); // 別名の変数に代入する。

console.log("ttl: ", ttl);
console.log("company: ", company);
