var binary_ex = 0b0101;
var decimal_ex = 10;
var hex_ex = 0xAA;
var hex_ex_ff = 0xFF;

console.log(`0b0101: ${binary_ex}`);
console.log(`10: ${decimal_ex}`);
console.log(`0xAA: ${hex_ex}`);
console.log(`0xFF: ${hex_ex_ff}`);

console.log(`~0b0101: ${~binary_ex}`);
console.log(`~10: ${~decimal_ex}`);
console.log(`~0xAA: ${~hex_ex}`);
console.log(`~0xFF: ${~hex_ex_ff}`);

console.log(`~0xFF >> 1: ${~hex_ex_ff >> 1}`);
console.log(`~0xFF >>> 1: ${~hex_ex_ff >>> 1}`);
console.log(`~0xFF << 1: ${~hex_ex_ff << 1}`);
