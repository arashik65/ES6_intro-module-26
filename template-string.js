const firstName = 'Ashik';
const lastName ="Rahman";

const aboutMe= `My name is ${firstName}`;
const giveMe= `give me money ${(10+20)*2+500}`;
// console.log(aboutMe);
console.log(giveMe);

const fullName= firstName+' '+lastName;
const fullName2 =`${firstName} ${lastName}`;


function getCardHTML(name,description,price){
    const div =`
    <div class ="card">
       <h2>${name.toUpperCase()} Borolox</h2>
       <p> $  ${price}</p>
       <p>${description} </p>
    </div>
    `;
    console.log(div);
}
getCardHTML('i phone 12','This is the latest iphone model',999);

