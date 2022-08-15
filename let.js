const a = [];
for (let i = 0; i < 10; i++) {
    a[i] = () => { console.log(i); };
}
a[3]();

const b = [];
let j = 0;
for (; j < 10; j++) {
    b[j] = () => { console.log(j); };
}
b[3]();
