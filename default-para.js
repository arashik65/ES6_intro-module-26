function add (num1,num2){
    const total = num1 + num2;
    console.log(num1,num2, total);
}
// add(10); ekhane output ashbe NaN means---[not a number]
add(10,20);

function add2 (num1,num2=0){
    const total = num1 + num2;
    console.log(num1,num2, total);
}
// add2(10)-----er output value= 10+0=10 hobee
add2(10,60);


function fullName(first, last=''){
 const name = first + ' ' + last;
 console.log(name);  
}
// fullName('kamuruzzaman', 'kamrul');
fullName('kamrul');




function multiply (num1, num2=1){
  const result= num1*num2
  console.log(result);
}

// multiply(5,10);
multiply(50);


// summery concept for default parameter

/**
 * string----> '' -->empty string
 * number----> 0 [for add]
 * number---->1[for multiply]
 *array---->[]--empty array
 object---->{}--- empty object
 *boolean---->false
 */