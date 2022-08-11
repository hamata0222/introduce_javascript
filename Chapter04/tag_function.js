// タグ関数のサンプル
// テンプレート文字列のフォーマットをするための独自の関数を定義できる。
console.log(`0x${Number(10).toString(16)}`); // toString()に進数を渡せる。

/**
 * 
 * @param {Array} templates ${}区切りでテンプレート文字列が格納されている。
 * @param  {...any} values ${}の中身が可変長引数として格納されている。
 * @returns 
 */
const e = (templates, ...values) => {
    console.log(templates);
    return templates.reduce((result, str, i) => {
        console.log([result, i, values[i - 1], str]);
        return result + values[i - 1] + str;
    });
};
// 呼び出すときは普通の関数ではなく、タグ関数として()をつけずにテンプレート文字列と結合して呼び出す。
console.log(e`hogehoge ${"fugafuga"} foo bar ${1234}`);
console.log(e`${"hogehoge"} ${"fugafuga"} foo bar ${1234}`); // 1個目が${}だとどうなるの
// --> 1個目が${}の場合はtemplatesの0個目として空文字が入る。
// --> ちなみに末尾（最後の${}の後ろ）にも空文字が入っている。
// console.log(e(`hogehoge ${"fugafuga"} foo bar ${1234}`)); // 普通に()付きで呼び出すと文字列としてテンプレート文字列の全体が渡ってしまう。この構文自体はエラーにならない。
