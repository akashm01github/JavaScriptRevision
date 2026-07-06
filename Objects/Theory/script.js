// const user = {
//     name: "Akash",
//     age: 22,
//     city: "Kolkata",
//     state: "West Bengal"
// }

// const phone = {
//     name: "iPhone",
//     price:90000,
//     color:"Silver"
// }

// console.log(Object.entries(phone))



// const username = prompt('Enter the User Name: ');
// const email = prompt('Enter the Email: ');
// const password = prompt('Enter the password: ');


// const userDetails =  {username,email,password};

// console.log(userDetails);


// const user = {
//     name: "Akash",
//     age: 22,
//     city: "Kolkata",
//     state: "West Bengal",

//     greet: ()=>{
//         console.log('Hello Everyone....');
//     }
// }

// user.greet();


const math = {
    sum: function(a,b){
        return a+b;
    },
    cube:(a)=>{
        return a*a*a;
    },
    multiply:(a,b)=>{
        return a*b
    },
    squre:(a)=>{
        return a*a
    }
}

console.log(math.sum(20,40))
console.log(math.cube(2))
console.log(math.multiply(25,2))
console.log(math.squre(25))

