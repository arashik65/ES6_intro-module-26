console.log(add(10,20));
//functiom declaration
function add (num1,num2){
    return num1 + num2;
}

// console.log(add2(30,10));const diye function dile age kaj korbe nah error dekhabe 
//function expression
const add2 = function(num1,num2){
    return num1 + num2;
}
console.log(add2(30,10));

//arrow function
const add3 = (num1,num2)=> num1+num2;
console.log(add3(70,10));


const add4=(num1,num2)=>num1+num2;
console.log(add4(40,20));


const multiple =(a,b) => a * b;
console.log(multiple(5,2));

const tenTimes = x => x*10;
console.log(tenTimes(10));

// const getpi =() => 3.1416;
// const addAll = (a,b,c,d,e,f)=> a+b+c+d+e+f;

// const isEven = num => num % 2 === 0;
const doMath=(x,y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
console.log('The result is = ',doMath(30,5));


const divider =(p,q) => p/q;
console.log('The divider result is',divider(25,5));

//arrow function using () =>{}
//document.getElementById('btn').addEventListener('click', () =>{})
//document.getElementById('btn').addEventListener('click', (event) =>{})


