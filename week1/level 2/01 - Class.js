// const dog ={
//     name: "doggie",
//     legCount:2,
//     speaks:"bhow bhow"
// }

// const cat ={
//     name:"cat",
//     legcount:4,
//     speaks:"meow meow",
// }     but making classes by this method is a bad idea

// function printAnimal(animal){
//     console.log("animal " + animal["name"] + " " + animal["speaks"])
// }

// printAnimal(dog)
// printAnimal(cat)


class Animal{
    constructor(name,legCount,speaks){
        this.name=name
        this.legCount=legCount
        this.speaks=speaks
    }

    speak(){   //simple function
        console.log("hi there "+ this.speaks)
    }

    static myType(){ //static function 
        console.log("Animal")
    }
}

let dog = new Animal("dog", 4,"bhow bhow")//create object
console.log(dog)

let cat = new Animal("cat", 4, "meow meow")
console.log(cat)

cat.speak()   //call function on object


Animal.myType() // static function call on class itself