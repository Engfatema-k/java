let userName ="nada";
let userAge = 20;
let userEmail = "nada @example.com";
let userCountry = "lebanon";
let userSkills = ["python"];

let user ={
    name: userName,
    age: userAge,
    email: userEmail,
    country: userCountry,
    skills: userSkills
};
let users = [
    { name:"sam", age: 25, email: "sam@example.com", country: "lebanon" , skills:["python"]},
    
     { name:"saad", age: 20, email: "saad@example.com", country: "syria" , skills:["Html"]},
   
      { name:"farh", age: 30, email: "farh@example.com", country: "Egypt" , skills:["css"]},
   
       { name:"fof", age: 49, email: "fof@example.com", country: "syria" , skills:["figma"]},
   
        { name:"mari", age: 19, email: "mari@example.com", country: "jordan" , skills:["php"]},
   
];
function displayAllNames(){
    console.log("أسماء جميع المستخدمين")
    users.forEach(user =>{
        console.log(user.name);
    });
}
function findUserByName(name){
    return users.find(user => user.name === name);
}
let userToFind = users.find(user => user.name === "sam");
console.log( " أسم المستخدم", userToFind);

function filterUserByCountry(country){
    return users.filter(user => user.country === country);
}
let syrianUsers = users.filter(user=> user.country === "syria")

console.log("المستخدمين السوريين", syrianUsers);

let sortedUsers = users.sort((a,b) => a.age - b.age);
console.log("المستخدمين مرتبين حسب العمر", sortedUsers);
console.log("أسماء جميع المستخدمين");

users.forEach(user => { 
console.log(`-${user.name}`);});
let totalAge = users.reduce((sum, user) => sum + user.age, 0);
let averageAge = totalAge / users.length;
console.log("متوسط عمر المستخدمين", averageAge);

let newUser ={
    name:"zen",
    age: 26,
    email: "zen@example.com",
    country: "UAE",
    skills:"UI"
};
users.push(newUser);
console.log("المستخدمين بعد إضافة مستخدم جديد", users);

let userToUpdate = users.find(user => user.name === "saad");
if(userToUpdate){
    userToUpdate.age = 21;
    userToUpdate.email = "saad123@example.com";
    console.log("المستخدم بعد التحديث", userToUpdate);
}
users= users.filter(user => user.name !== "farh");
console.log("المستخدمين بعد حذف مستخدم", users);