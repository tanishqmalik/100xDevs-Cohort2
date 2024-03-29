// function square(n){
//     return n*n
// }

// function sumofsquares(a,b){
//     let a1 = square(a);
//     let b1 = square(b);

//     return a1+b1;
// }

// console.log(sumofsquares(2,3))


// async function

// function findsum(n){
//     let ans=0;
//     for(let i =0; i<=n; i++){
//         ans=ans+i;
//     }
//     return ans;
// }

// function findsumTill100(){
//     console.log(findsum(100));
// }

// setTimeout(findsumTill100,1000)
// console.log("hello")


// async function 
// const fs = require("fs")
// // file system module

// fs.readFile("a.txt", "utf-8", function(err,data){
//     console.log(data);
// })



// ------------------------

// const fs = require('fs');

// function malikReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt","utf-8", function(err,data){
//             resolve(data);
//         });
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// malikReadFile().then(onDone)


// var d = new Promise(function(resolve){
//     resolve("foo")
// })

// function callback(){
//     console.log(d);
// }

// d.then(callback);
// console.log("hello")\


function malikAsync(){
    let p = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hi there")
        },1000)
    })
    return p;
}
async function main(){

    let value = await malikAsync()
    console.log(value);
}

main();