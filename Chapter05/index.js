// importでファイルを取得するためにはネットワークにつながっていることを必要。
// ローカルで試すにはhttpサーバを立ち上げる必要がある。
import * as sample from "./myModule.js";

let sample_module = new sample.MyModule();
console.log(sample_module.getModuleName());

// let inner_module = new sample.InnerModule();
// console.log(inner_module.innerName);
