// JavaScriptのES2015より古い構文にはクラスがない。
// 古い構文でオブジェクト志向構文を実現しているのはコンストラクタ
// 構文としては普通の関数オブジェクトを宣言する感じ。
var Member = function(firstName = "Hiroshi", lastName = "Hamada") { // Memberがコンストラクタ名になる。
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
        return this.firstName + " " + this.lastName;
    };
};

var mem = new Member();
var mem2 = new Member("HogeHoge");
console.log(mem.getName());
console.log(mem2.getName());

// 動的にプロパティやメソッドを追加できる
mem.age = 35;
mem.getAge = function() {
    return this.age;
};
console.log(`mem.getAge(): ${mem.getAge()}`);
// console.log(`mem2.getAge(): ${mem2.getAge()}`); // インスタンスに追加しているので、mem2ではgetAge()は呼び出せない。

// クラスに追加したい場合はprototypeプロパティに追加する。
Member.prototype.age = 0;
Member.prototype.getAgeKazoe = function() {
    return this.age + 1;
};
console.log(`mem.getAgeKazoe(): ${mem.getAgeKazoe()}`); // memの方は``35 + 1``で36が出力される。
console.log(`mem2.getAgeKazoe(): ${mem2.getAgeKazoe()}`);
// プロトタイプで定義されているプロパティは、インスタンスで定義したプロパティに上書きされる。
// 上書きというか、プロトタイプとインスタンスの両方に同名のプロパティがある場合、インスタンスの方が先に読み込まれる。

// 静的プロパティ、静的メソッドの定義
Member.static_prop = 1;
Member.static_method = function() {
    console.log("This is staic method.");
    console.log(`this.age: ${this.age}`); // ここで呼ばれるthisはグローバルスコープになる。
};
console.log(`Member.static_prop: ${Member.static_prop}`);
Member.static_method();

// プロトタイプの継承
var Animal = function() {};
var Dog = function() {};
Animal.prototype.walk = function() {
    console.log("トコトコ");
};

Dog.prototype = new Animal(); // prototypeにスーパークラスのインスタンスを設定することが"継承"となる。

var pochi = new Dog();
pochi.walk();

// **** 継承関係は動的に変更可能！！！ ****
var SuperDog = function() {};
SuperDog.prototype.walk = function() {
    console.log("ズダーーーーー！");
};
Dog.prototype = new SuperDog();
pochi.walk(); // Dogの継承関係は動的に変更されたが、すでにインスタンス化されているインスタンスに関しては変更されない。

var shiro = new Dog();
shiro.walk();

// **** クラスの判定 ****
var ani = new Animal();
console.log(`pochi.constructor === Dog: ${pochi.constructor === Dog}`); // constructorプロパティはスーパークラスをあらわす。
console.log(`ani.constructor === Animal: ${ani.constructor === Animal}`); // 継承していないクラスはそれ自身。
console.log(`pochi.constructor === Animal: ${pochi.constructor === Animal}`);
console.log(`shiro.constructor === Animal: ${shiro.constructor === Animal}`);
console.log(`shiro.constructor === SuperDog: ${shiro.constructor === SuperDog}`);

console.log(`pochi instanceof Dog: ${pochi instanceof Dog}`); // pochiをインスタンス化した時のDogとはすでに違っているのでfalseになる。
console.log(`pochi instanceof Animal: ${pochi instanceof Animal}`);
console.log(`shiro instanceof Dog: ${shiro instanceof Dog}`);
console.log(`shiro instanceof SuperDog: ${shiro instanceof SuperDog}`);
