

let database = [{
    username:"uttam",
   password:"Uttam@123"
   },{
    username:"meet",
   password:"Meet@123"
   },{
    username:"smit",
   password:"Smit@123"
   }];

let newsfeed = [{
    username: "Bobby",
    timeline: "So tired from all that learning!"
},
{
    username: "Sally",
    timeline: "Javascript is sooooo cool!"
},
{
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!"
}]

let username = prompt("Enter your Username");
let password = prompt("Enter your password");

function isUservaild(username,password){
    for(var i=0;i< database.length;i++){
       if(database[i].username === username && database[i].password ===  password){ 
        return true
    } 
    }
    return false
}

function SignIn(username,password){
if(isUservaild(username,password)){
    console.log(newsfeed);
}
else{
    alert("Check Username & password")
}
}

SignIn(username,password);

