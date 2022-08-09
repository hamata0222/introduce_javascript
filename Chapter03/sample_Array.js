// 配列のソートとか結合（concat, join）とか、fileter, map, forEach, find, reduceあたりが使える。
// pop, push, shiftを使ってスタックとキューを表現することもできる。
var arr = [1, 3, 2, 5, 0, 4, 7, 6];

// スタックの操作
console.log(arr.toString());
console.log(arr.push(8)); // 末尾に要素を追加（戻り値は要素数）
console.log(arr.pop()); // 末尾の要素を取り出し
console.log(arr.toString());

// キューの操作
console.log(arr.toString());
console.log(arr.push(8)); // 末尾に要素を追加
console.log(arr.shift()); // 先頭の要素を取り出し
console.log(arr.toString());

// sortメソッドはデフォルトでは文字列比較になるので注意
var arr2 = [4, 10, 25];
console.log(arr2.toString());
console.log(arr2.sort().toString()); // [10, 25, 4]の順番になる
console.log(arr2.sort(function(x, y) { return x - y; }).toString()); // 数値として比較する
console.log(arr2.reverse(function(x, y) { return x - y; }).toString()); // 逆順もできる
