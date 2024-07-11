//difference on the basics of how data is stored and being accessed in the memory
/*
1. Primitive dt-(call by value)
if dt is being copied to another place then original reference is not given
copied data reference is given so original data does not changes.
   7 types: String,Number,Boolean,NULL,Undefined,Symbol(define uniqueness),bigint*/
//Number
const score = 100
const value = 100.3
//boolean
const isLoggedin=false
//null
const temp = null
//undefined
let email;
//symbols
const id = Symbol('123')
const a_id = Symbol('123')
console.log(id==a_id);//false because even if the value provided is same it prodived result different
//bigint
const bigNumber=3456n


/*2. Reference Type(non primitive)
direct reference can be allocated

    types: array, object, function*/
//1. Array
 /*const heros =["Shankiman","naagraj","doga"]
 //2. Object
 let myObj={
    name:"trishla",
    age:22,
 }

 //3. Function

const myFunction=function(){
    console.log("hello")

}*/

// to know the datatype of value

console.log(typeof bigNumber)
console.log(typeof temp)//ouput object but we define null


//Statically typed languages:

/*A language is statically typed if the type of a variable is known at compile time.
For some languages this means that you as the programmer must specify what type each 
variable is; other languages (e.g.: Java, C, C++).*/

//Dyanamically typed Languages:

/*A language is dynamically typed if the type is associated with run-time values, and not named variables/fields/etc. This means that you as a programmer can write a little quicker because you do not have to specify types every time (unless using a statically-typed language with type inference).
Examples: Perl, Ruby, Python, PHP, JavaScript.*/

//important
let returnValue={
    unDefine:"same",
    NuLL:"Object",
    Boolean:"same",
    Number:"same",
    Object:"same, but different in some cases",
    Function:"Object",
    Symbol:"Symbol",
    Array:"Function"
}
console.log(returnValue)
console.log()
