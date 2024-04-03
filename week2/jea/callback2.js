// function sumofsquares(a, cb){
//     cb(a*a);
// }
// sumofsquares(2,function(result){
//     console.log(result*2);
// }) 
/// here cb(a*a) is function(result)
// -------------------------------------------------------

// function sum(a,b){
//     return new Promise(function(resolve){
//         resolve(a+b);
//     })
// }
// sum(1,2).then(function(ans){
//     console.log(ans)
// })

// -------------------------------------------------------


// function promisifiedTimeout(duration){


//     const p = new Promise(function(resolve) {
//         setTimeout(resolve, duration);  // it will wait 1 sec for console.log("first is done")
//         // console.log("tanishq");
//     })


//     return p;
// }



// promisifiedTimeout(1000).then(function(){


//     console.log("first is done");  //then is part of setTimeout , so when ".then" is called(becz .then indicates to reslove parameter it will wait for duration value passed in setTimeout which is present in promise function.


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

    console.log("3rd");   //3rd print  hua 
    return new Promise(function(resolve){
        console.log("4th") // 4h print hua 
        setTimeout(function(){   // ye setTimeout function 1sec rukega or jo isme console.log ho ra hai vo bhi obviously 1sec baad call hoga.....
            console.log("5th");  // 5th print hua
            resolve("done for today");   // yahan resolve aagya ,toh rosolve indicates to .then function to ye .then mein jayega
        },1000)
    })
}


console.log("2nd");
promisifiedTimeout().then(function(value){    // yahan function call hua or "console.log("3rd")"  function mein print hoga.
    console.log(value);  //yahan resolve call hoyega.......
})

// ------------------------------------------------------------