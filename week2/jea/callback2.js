function sumofsquares(a, cb){
    cb(a*a);
}
sumofsquares(2,function(result){
    console.log(result*2);
}) 
/// here cb(a*a) is function(result)
// -------------------------------------------------------

function sum(a,b){
    return new Promise(function(resolve){
        resolve(a+b);
    })
}
sum(1,2).then(function(ans){
    console.log(ans)
})
// -------------------------------------------------------


// function promisifiedTimeout(duration){


//     const p = new Promise(function(resolve) {
//         setTimeout(resolve, duration);
//     })


//     return p;
// }



// promisifiedTimeout(1000).then(function(){


//     console.log("first is done");


//     // return promisifiedTimeout(2000);
// })

// -------------------------------------------------------


// function promisifiedTimeout(duration){


//     const p = new Promise(function(resolve,reject) {
//         setTimeout(resolve, duration);      //ye resolve ke liye hai,,,,, aagar reslove hoga to duration ki jo value hai vo paas hogi aur .then vaale function mein jo bhi hai vo execute hoga
//         setTimeout(reject,5000);            // ye reject ke liye hai,,,,,, aagar reject hoga 5000milsec wait hoga(agr "setTimeout(resolve, duration);"  comment out hai tabh hi) .catch vala execute hoga
//     })


//     return p;
// }



// promisifiedTimeout(1000).then(function(){


//     console.log("first is done");


//     // return promisifiedTimeout(2000);
// })
// .catch(function(){
//     console.log("second is done")
// })

// -------------------------------------------------------

console.log("1st");

function promisifiedTimeout(){

    console.log("3");
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("done for today");
        },1000)

    })
}

console.log("2nd");
promisifiedTimeout().then(function(value){
    console.log(value);
})