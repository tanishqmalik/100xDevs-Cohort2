// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }
// function quad(n){
//     return n*n*n*n;
// }



// function sumofsomething(a,b,fun){
//     let a1 = fun(a)
//     let b1 = fun(b)

//     return a1+b1;
// }

// let ans = sumofsomething(1,2,cube);
// console.log(ans);

// const fs= require("fs");
// fs.readFile("a1.txt", "utf-8", function(err,data){
//     console.log(data);
// })


// const fs = require("fs");

// fs.readFile('a.txt', "utf-8", function(err, data) {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log(data);
// });




// try loupe website for this

// function hello(fn,duration){
//     setTimeout(fn,duration);
// }

// hello(function(){
//     console.log("hiiii");
//     hello(function(){
//         console.log("bye");
//     },5000)
// },2000)

// ---------------------------------

// one method
// function hello(fn,duration){
//     setTimeout(fn,duration);
// }

// hello(function(){
//     console.log("hii")
// },1000)

// another method
// function hello(){
//     let p= new Promise(function(resolve){
//         setTimeout(resolve,1000);
//     })
//     return p;
// }

// hello().then(function(){
//     console.log("hello")
// })


// ---------------------------------


// let p=new Promise(function(resolve,reject){
//     setTimeout(reject,1000)
// })

// p.then(function(){
//     console.log("hello");
// }).catch(function(){
//     console.log("byee")
// })
// -------------------------------

// i wanna promisify this ... see the next block

// function hellobhai(fun,duration){
//     setTimeout(fun, duration);
// }

// hellobhai(function(){
//     console.log("okay")
// },1000)

// -------------------------------  


// function promisifiedHelloBhai(duration){
//     let p = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve();
//         },duration);
//     });
//     return p;
// }
// //calling a async function 
// const ans = promisifiedHelloBhai(5000);
// ans.then(function(){
//     console.log("timeout is done");
// });

// --------------------


// function sometask1(){
//     console.log("hello");
// }
// function sometask2(){
//     console.log("bye");
// }
// setTimeout(function(){        //setTimeout skips the steps 
//     sometask2();     
// },4000)

// sometask1();

function promisifiedTimeout(duration){
    const p = new Promise(function(resolve) {
        setTimeout(resolve, duration);
    })
    return p;
}
promisifiedTimeout(1000).then(function(){
    console.log("first is done");
    // return promisifiedTimeout(2000);
})



