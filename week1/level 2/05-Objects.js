function objectMethods(obj){
    console.log("original Object",obj);


    let keys = Object.keys(obj);
    console.log("after object.keys():", keys);


    let values=Object.values(obj);
    console.log("after object.values():", values);

    let entries=Object.entries(obj);
    console.log("after object.entries():", entries);


    console.log("after object.hasownprop():",Object.hasOwnProperty())

}

const sampleObjects= {
    name: "value1",
    key2: "value2",
    key3: "value3",
};

objectMethods(sampleObjects);