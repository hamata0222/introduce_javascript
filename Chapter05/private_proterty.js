// クラスでプライベートなプロパティを定義するための方法
// 伝統的には、コンストラクタにクロージャを用意してプライベートなプロパティを実現してきた。
class Member {
    constructor(firstName, lastName) {
        let _firstName;
        let _lastName;

        this.getFirstName = () => {
            return _firstName; // この辺にthisをつけると勝手にプロパティが定義されるのでだめ。
        }
        this.setFirstName = (firstName) => {
            _firstName = firstName;
        }
        this.getLastName = () => {
            return _lastName;
        }
        this.setLastName = (lastName) => {
            _lastName = lastName;
        }

        this.setFirstName(firstName);
        this.setLastName(lastName);
    }

    getName() {
        return this.getFirstName() + " " + this.getLastName();
    }
}

let mem = new Member("Hiroshi", "Hamada");
console.log(mem.getName());
console.log(mem._firstName + " " + mem._lastName); // undefinedになってアクセスできない。
mem._firstName = "Taro";
mem._lastName = "Yamada";
console.log(mem.getName());

// Object.defineProperty()を使うとgetter, setterみたいに定義できる。
class PrivateMember {
    constructor(firstName, lastName) {
        let _firstName;
        let _lastName;

        Object.defineProperties(this, {
            firstName: {
                get: function() {
                    return _firstName;
                },
                set: function(firstName) {
                    _firstName = firstName;
                }
            },
            lastName: {
                get: function() {
                    return _lastName;
                },
                set: function(lastName) {
                    _lastName = lastName;
                }
            }
        });

        // getter, setterの呼び出しは直接プロパティの操作みたいになる。
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.firstName + " " + this.lastName;
    }
}
console.log("---- Private Member ----");
let mem2 = new PrivateMember("Hiroshi", "Hamada");
console.log(mem2.getName());
console.log(mem2._firstName + " " + mem2._lastName); // undefinedになってアクセスできない。
mem2._firstName = "Taro";
mem2._lastName = "Yamada";
console.log(mem2.getName());

// ES2022からは#でプライベートプロパティを表現できるようになった。
class PrivateMember2022 {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        console.log("get firstName");
        return this.#firstName;
    }
    set firstName(firstName) {
        this.#firstName = firstName;
    }
    get lastName() {
        return this.#lastName;
    }
    set lastName(lastName) {
        this.#lastName = lastName;
    }

    getName() {
        return this.firstName + " " + this.lastName;
    }
}
console.log("---- Private Member 2022 ----");
let mem2022 = new PrivateMember2022("Hiroshi", "Hamada");
console.log(mem2022.getName());
// console.log(mem2022.#firstName + " " + mem2022.#lastName); // 構文エラーになってアクセスできない。
// mem2022.#firstName = "Taro"; // 構文エラーになってアクセスできない。
// mem2022.#lastName = "Yamada"; // 構文エラーになってアクセスできない。
mem2022.firstName = "Taro"
mem2022.lastName = "Yamada"
console.log(mem2022.getName());
