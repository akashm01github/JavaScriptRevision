function greet(city,country){
    console.log(`Hi my Name is ${this.userName} and I am  ${this.age} and I am from ${city} ,${country}`)
}

const person = {
    userName: "Akash",
    age:25
}

//! CALL 
// greet.call(person,"Bardhaman", "India");


//! APPLY 
// greet.apply(person,["Bardhaman", "India"])



//! BIND 
const greetPerson = greet.bind(person, "Bardhaman", "India");


greetPerson()