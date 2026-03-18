const king ={name:'Mufasa', age: 55, kingdom:'pride lands'};
// console.log(king); //{ name: 'Mufasa', age: 55, kingdom: 'pride lands' }
//obect ke jodi freeze korle property and value pore r update kora jave nah mane add delete kora jabe nah 

// Object.freeze(king);

//object ke seal korle seta object er property update new kore property add delete kora jabe nah kintu  property er value add kora jabe  
Object.seal(king);
//object er property remove
delete king.age;
// console.log(king); //{ name: 'Mufasa', kingdom: 'pride lands' }
delete king.kingdom;
// console.log(king); //{ name: 'Mufasa' }
//object er new property add 
king.queen ='Sarabi';
king.name='king simba';
console.log(king); //{ name: 'Mufasa', queen: 'Sarabi' } and { name: 'king simba', queen: 'Sarabi' }

//obect ke jodi freeze korle property and value pore r update kora jave nah mane add delte kora jabe nah 
// ekhane age theke ey business colse
// { name: 'Mufasa', age: 55, kingdom: 'pride lands' }
// { name: 'Mufasa', age: 55, kingdom: 'pride lands' }
// { name: 'Mufasa', age: 55, kingdom: 'pride lands' }