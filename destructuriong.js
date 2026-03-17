// const product ={
//     name:'iphone',
//     price: 799,
//     description: 'A smartphone by Apple'
// };
// const newPrice = product.price + 100;
// const phoneName = `this is ${product.name}`;

// const price = product.price;
// const name = product.name;


//destruturiong example in object
// const product ={name:'iphone', price: 799, Brand: 'Apple' };
const price =500;
const {name,price:phonePrice,camera='12mp'} ={name:'iphone', price: 799, Brand: 'Apple',camera:'48mp' };
// console.log(phonePrice);
console.log(camera);


//destruturiong example in array
const [first,second]=[10,20,30,50];
console.log(first,second);
//ekhane numbers ekta array e height r weight ekta array element .
const [height,weight]= numbers;
