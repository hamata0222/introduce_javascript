var date = new Date(); // システム日付
console.log(date.toLocaleString()); // 日時を文字列化
console.log(date.toLocaleDateString()); // 日付部分だけを文字列化
console.log(date.toLocaleTimeString()); // 時刻部分だけを文字列化

// 日付計算をするときはgetDate()とかでとってきて、setDate()で書き戻す感じになる。
date.setDate(date.getDate() + 1);
console.log(date.toLocaleString());

// 当月の末日を計算したいときは、翌月のゼロ日を指定する。
date.setMonth(date.getMonth() + 1);
date.setDate(0);
console.log(date.toLocaleString());

// 末日が31日で翌月が30日までの場合はどうなるのか
date = new Date("2022/8/31");
date.setMonth(date.getMonth() + 1);
console.log(date.toLocaleString()); // 2022/10/1になる

// うるう年はどうなるの
date = new Date("2020/1/31");
date.setMonth(date.getMonth() + 1);
console.log(date.toLocaleString()); // 2020/3/2になる
date.setDate(0);
console.log(date.toLocaleString()); // 2020/2/29になる

// 100年に一度のうるう年じゃない年
date = new Date("2100/1/31");
date.setMonth(date.getMonth() + 1);
console.log(date.toLocaleString()); // 2020/3/3になる
date.setDate(0);
console.log(date.toLocaleString()); // 2100/2/28になる

// 400年に一度のうるう年
date = new Date("2000/1/31");
date.setMonth(date.getMonth() + 1);
console.log(date.toLocaleString()); // 2000/3/2になる
date.setDate(0);
console.log(date.toLocaleString()); // 2000/2/29になる
