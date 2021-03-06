const stars = ["Bob", "Mike", "David", "Eric"];
for (let i = 0; i < stars.length; i++) {
  console.log(`${i}:${stars[i]}`);
}
/* 
        0:Bob
        1:Mike
        2:David
        3:Eric 
        与前面一样保存键名*/
for (let i in stars) {
  console.log(`${i}:${stars[i]}`);
}
/* 
        Bob:undefined
        Mike:undefined
        David:undefined
        Eric:undefined
        直接获取value值
        */
for (let i of stars) {
  console.log(`${i}:${stars[i]}`);
}
let iterator = stars[Symbol.iterator]();
/* 
{ value: 'Bob', done: false }
{ value: 'Mike', done: false }
{ value: 'David', done: false }
{ value: 'Eric', done: false }
*/
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// { value: undefined, done: true }为真就表示遍历完成了
console.log(iterator.next());

let a = new Map();
a.set("username", "admin");
a.set("passwprd", "123456");
//  {"username" => "admin", "passwprd" => "123456"}
console.log(a);
for (let [key, value] of a) {
  /* 
            username:admin
            passwprd:123456
            */
  console.log(`${key}:${value}`);
}
