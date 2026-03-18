const employee = {
    name:'jhon Doe',
    1:'desk one',
    'home-address':'123 Main St',
    salary:5000,
    family:{
        father:'Richard Doe',
        mother:{
            name:'jane Doe',
            age: 55

        }
    },
     position:'software Engineer'
};
const value = employee.name;
// console.log(value);jhon Doe
// console.log(employee.family) //{ father: 'Richard Doe', mother: { name: 'jane Doe', age: 55 } }
// console.log(employee.family.mother.age); //55
console.log(employee.family?.mother?.age); 