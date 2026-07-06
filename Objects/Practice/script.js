const user = {
    userName: "Akash",
    hobbies: ["Coding","Cooking"],
    show(){
        this.hobbies.forEach((hobby)=>{
            console.log(`${this.userName} Likes ${hobby}`)
        })
    }
}


user.show()