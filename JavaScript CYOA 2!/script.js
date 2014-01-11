var user = prompt("How are you doing ?").toLowerCase();
switch(user){
case 'good':
var care = prompt("Do you like answering these questions? Do you think we are mean? Yes or no?").toLowerCase();
var so = prompt("Are you a nice person? Yes or no?").toLowerCase();
break;
case 'bad':
console.log("why");
break;
case 'not so good':
console.log("okkk");
break;
default:
console.log("did you remember you answer");
}

if(care === "yes" && so === "yes"){
console.log("oh look at you now ?");
}
if(care === "no" || so === "no"){
console.log("not sure if serious ?");
}
else{
console.log("Well whatever buddy!");
}