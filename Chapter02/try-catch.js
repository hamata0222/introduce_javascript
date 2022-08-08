let i = 0;
try {
    i = i * j; // 変数jが定義されていないので例外が発生する。
} catch (e) {
    console.log(e.message);
} finally {
    console.log("Process complete.");
}

let input_num = 0;

try {
    if (input_num === 0) {
        // 自分で定義した例外を投げることもできる。
        throw new Error("input_num is zero.");

        // 例外の種類
        // EvalError: 不正なeval関数
        // RangeError: 指定された値が許容範囲を超えている
        // ReferenceError: 宣言されていない変数にアクセスした
        // SyntaxError: 文法エラー
        // TypeError: 指定された値が期待されたデータ型でない
        // URIError: 不正なURI
    }
    let ret = 100 / input_num;
} catch(e) {
    console.log(e.message);
} finally {
    console.log("Process complete.");
}