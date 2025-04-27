const useremail=" "
if(useremail){
    console.log("log in");
    
}
else{
    console.log("eorr");
    
}

// falsy  value 
// "",BigInt,false, 0,-0
// turthy values 
// []," ","false",1,{},function(){}

const numer=[]
if(numer.length===0){
    console.log(`array is empty`);
    
}
else{
    console.log(`not empty`);
    
}

const chai ={}
if( Object.keys(chai).length===0){
    console.log(`Object empty`);
    
}else{
    console.log(`not empty`);
    
} 

//null colescing operator ?? 

let val ;
// val=10 ?? 15 ?? 52
// val = null ?? 52 ?? 10
// val = null ?? undefined ?? 5
// val = null ?? undefined
val = undefined ?? null





console.log(val);
// ternary operator 

// condition ? ture : false 

const balance =500
balance>=50 ? console.log("greater than fifty") : console.log("less than fifty");

