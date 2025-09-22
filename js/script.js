// console.log("Hello world");
// var a=20;
// console.log("a="+a);

// function fun(){
//     return "Hey"
//     console.log("Hello!");
// }
// console.log(fun());


//FUNCTION AS AN EXPRESSION
// const data=function(a,b){
//     return a*b;
// }
// console.log(data(12,20));

//ARROW FUNCTION
// const data=(msg)=>{
//     console.log("heloo",+msg);
// }
// data(" in react");

// const data=msg=>msg;
// console.log(data("greeting of the day"));

//IIFE
// (function(){
//     console.log("Welcome to MERN")
// })();

// setTimeout(()=>{
//     console.log("Hii");
// },1000)

// function greet(msg="java"){
//     console.log(msg+ " is a good langauge");
// }
// greet("Python");

function selectLangauge(lang){
    let result;
    if(lang=="java"){
        function javaCompilier(){
            return "Using java";
        }
        result=javaCompilier();
    }
    else if(lang=='c'){
        function cCompilier(){
            return "using c "
        }
        result=cCompilier();

    }
    else {
        // Default language = Python
        function pythonCompilier() {
            return "Using Python";
        }
        result = pythonCompilier();
    }
    return result;
}
console.log(selectLangauge());