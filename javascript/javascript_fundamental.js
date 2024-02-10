//learning js fundamental , have added its defention and code for further reference

//***********************Namste javascript - season 1***************************//

/********************************************************************************************************************************/
//context in this file:
//1.how javascript works and execution context 
//2.how javascript executed and call stack 
//3.hosting in javascript and working of excution context in browser
//4. 
/********************************************************************************************************************************/
//1.how javascript works and execution context 

//execution context->everything happens inside an execution context
//excution context are two component

//1.varaiable and function are stored in memory component also known as variable environment, which stores it in key value pair
//2.code component where every code run line one by one , also known as thread of execution

//javascript is synchronous single threaded language , single threaded means run one command at a time
//after completing the line goes to next line in order

/********************************************************************************************************************************/
//2.how javascript executed and call stack 

//phase1->the variable environment is stored , as variable values are undefined ,whereas function is stored the whole code
//phase2->its code excution phase, where code run line by line , where the value in the variable is been stored replacing undefined 

//function is main in js , where every function is like seperate progam , so every function,when need to execute create seperate 
//excution context ,after compleing it deletes the execution context

//js manages this by call stack , it control addition ,deletion , it manages stack with eaach time having GEC below
//call stack maintains the order of execution of execution context
//have various name of call stack ie.program stack , runtime stack,machine stack ,etc

/********************************************************************************************************************************/
//3.hosting->it hosts only hosts declrations and not intilisation
//the variable will be undefined until line where intilized is reached
//hosting works with var , and does not same with let and const

//undefined-> when the variable is stored as ref in memory component , but code component does have the value been stored we get this error
//not defined-> when the variable is not declared and stored as refernce in the variable environment then this error of ndefined occur

//hosting practice and execution context practice   
var n=10;
console.log(add(n));
console.log(add);
function add(n){
return n*n;
}
console.log("hello world");
console.log(add(n+4));
console.log("hello all");

/********************************************************************************************************************************/
//4.how functions works in javascript
