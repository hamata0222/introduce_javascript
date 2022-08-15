// 列挙可能なオブジェクトを定義する
// イテレータを使った配列のループ
let arr = ['apple', 'orange', 'banana'];
let ite = arr[Symbol.iterator]();

// Symbol.iteratorメソッドを持つオブジェクトをJavaScriptではIterableであるという。
// for-of構文でやっていることは、イテレータの操作。
let e = ite.next();
while (!e.done) { // next()の戻り値として、doneとvalueをプロパティに持つオブジェクトが戻ってくる。
    console.log(e.value);
    console.log(e.done);
    e = ite.next();
}
// for-of構文で書くとこんな感じ。やってることは同じ。
console.log("---- for-of ----");
for (let ele of arr) {
    console.log(ele);
}

// 自作のiterableなオブジェクトを作る。
let iterable_obj = {};
iterable_obj[Symbol.iterator] = () => {
    let ite = {};
    let count = 0;

    ite.next = () => {
        let result = (count <= 10)
        ? {value: count++, done: false}
        : {value: undefined, done: true};
        return result;
    };

    return ite;
};
for (let cnt of iterable_obj) {
    console.log(`cnt: ${cnt}`);
}


// ジェネレータを使って列挙可能なオブジェクトを生成する。
console.log(`---- Generator ----`);
function* myGenerator() {
    yield 'apple';
    yield 'orange';
    yield 'banana';
}
for (let t of myGenerator()) {
    console.log(t);
}
