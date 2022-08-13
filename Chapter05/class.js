// ES2015以降のクラスの書き方
class Member {
    // コンストラクタ
    constructor(firstName, lastName) {
        this.firstName = firstName; // getter, setterの呼び出しは単純にプロパティへの代入時や取得時に呼び出されるので、ここでも使われる。
        this.lastName = lastName;
        // 以下の書き方もできる。オブジェクトリテラルの書き方が改善されて、変数と同名のプロパティに勝手に代入されるようになった。
        // Object.assign(this, {firstName, lastName});
    }

    // プロパティの定義
    get firstName() {
        console.log("Getting firstName.");
        return this._firstName; // 自動で追加されるプロパティは頭に"_"がついている。
    }
    set firstName(value) {
        console.log("Setting firstName.");
        this._firstName = value;
    }
    get lastName() {
        console.log("Getting lastName.");
        return this._lastName;
    }
    set lastName(value) {
        console.log("Setting lastName.");
        this._lastName = value;
    }

    // メソッド
    getName() {
        return this.firstName + " " + this.lastName;
    }

    // staticメソッド
    static whoami() {
        console.log("I am Member class.");
    }
}

let mem = new Member("Hiroshi", "Hamada");
// new演算子を使わないコンストラクタの呼び出し（ただの関数としての呼び出し）はできなくなった。
// let hoge = Member("Hiroshi", "Hamada");
console.log(mem.getName());
// 命名規則を知っていれば直接呼び出せる。別にプライベートになっているわけではない。
console.log(`mem._firstName: ${mem._firstName}`);
console.log(`mem._lastName: ${mem._lastName}`);

Member.whoami();

// メソッドやプロパティの動的な追加
mem.age = 35;
console.log(`mem.age: ${mem.age}`);
let mem2 = new Member("Taro", "Yamada");
console.log(`mem2.age: ${mem2.age}`); // memのインスタンスに追加しただけなのでundefinedになる。

Member.prototype.age = 1;
console.log(`mem2.age: ${mem2.age}`);

console.log(`mem instanceof Member: ${mem instanceof Member}`);

class Animal {
    // constructorを省略するとデフォルトコンストラクタが提供される。引数なしのコンストラクタ
    walk() {
        console.log("トコトコ");
    }
}
class Dog extends Animal { // extendsが継承をあらわす。
    bow() {
        console.log("わんわん！");
    }
}
let pochi = new Dog();
pochi.walk();
