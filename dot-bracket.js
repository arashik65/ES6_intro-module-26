const employee = {
    name:'jhon Doe',
    //property 1 dile access kora jay nah 
    1:'desk one',
    'home-address':'123 Main St',
    position:'software Engineer',
    salary:5000
};
//key er value pawa jay dot notation diye 
// console.log(employee.name);
// console.log(employee.1);
// console.log(employee."home-address");
// console.log(employee.salary);

//bracket notaion dile e problem solve hobe onek time e dot notation diye number er object property access kora jay nah 
console.log(employee['name']);
console.log(employee[1]);
console.log(employee['home-address']);

//alada variable er modde property value assign kore
const money =employee['salary'];
console.log(money);

//onek time bracklet er moddde variable o bosay property access kora jay

const key ='position';
console.log(employee[key]);
