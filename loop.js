//array hole for of diya loop calte hoy
const numbers =[1,2,3,4,5];
// for(const number of numbers){
//     console.log(number);
// }
const employee = {
    name:'jhon Doe',
    //property 1 dile access kora jay nah 
    1:'desk one',
    'home-address':'123 Main St',
    position:'software Engineer',
    salary:5000
};
//obeject hole for in diyea loop calate hoy
// for(const key in employee){
//     console.log(key);
// }
for(const key in employee){
    //ekhane variable declear kore objecte property set
    const value= employee[key];
    console.log(key,value);
}