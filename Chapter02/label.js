kuku:
for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
        if (j > 5) break kuku;
    }
}
// kuku: こっちじゃないので注意
