//モジュールのサンプル
export class MyModule {
    getModuleName() {
        return "MyModule";
    }
}

class InnerModule {
    #innerName = "inner Class";

    get innerName() {
        return this.#innerName;
    }
}