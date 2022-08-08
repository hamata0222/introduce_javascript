var num = 10;

console.log(`num.toString(10): ${num.toString(10)}`);
console.log(`~num.toString(10): ${(~num).toString(10)}`);
console.log(`num.toString(16): ${num.toString(16)}`);
console.log(`~num.toString(16): ${(~num).toString(16)}`);
console.log(`num.toString(2): ${num.toString(2)}`);
console.log(`~num.toString(2): ${(~num).toString(2)}`);

console.log(`0b0101.toString(10): ${0b0101.toString(10)}`);
console.log(`-0b0101.toString(10): ${-0b0101.toString(10)}`);
console.log(`0b11110101.toString(10): ${0b11110101.toString(10)}`);


// 算術演算子と文字列と数値型
console.log(`"123" + 1 = ${"123" + 1}`); // +演算子は文字列結合として働く
console.log(`"123" - 1 = ${"123" - 1}`); // -演算子は算術演算として働く