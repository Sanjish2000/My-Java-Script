const score =200
if(score<100){
    let power="fly"
    console.log(`score is ${score} and go  ${power}`);
    
}
else{
    console.log(`score is ${score} and go`);  //power print ni kr skte h kuki vo if ke scope me 
    
}

const balance =2000
// if(balance>500) console.log(`your balance is ${balance}`),console.log(`you hav to pay bill`);

if(balance<500){
    console.log("less than 500");
    
}else if(balance<750){
    console.log("less than 750");
}else if (balance<1000){
    console.log("less than 1000");
}else{
    console.log("less than 2500");
}

const userloggedin=true
const loggedinfromGoogle=true
const loggedinfromemail=false

if(userloggedin&&(loggedinfromGoogle||loggedinfromemail)){
    console.log("logged in from google");
    
}
if (loggedinfromGoogle||loggedinfromemail) {
 
    console.log("logged in from google");
}