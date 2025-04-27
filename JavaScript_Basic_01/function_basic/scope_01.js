// let a=10
// const b=24
// var c=3
// d=9

if(true){
    let a=10
    const b=24
    var c=3
    d=9
    // console.log(a);
    // console.log(b);
    
    
    

}
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

function name ()
{
    const user="sanjish"
    function pass(){
        const url="google.com"
        console.log(`name is ${user}`);
        
    }
    pass()
    // console.log(url);  scaope ke bahar h ye 
    console.log(user); //usi ke scope ka h 
    
    
}
name()

// dclaration of fucntion 
function addone(...num1){
   
 return num1++
     
}
addone(5)
 const addtwo=function(num3){
    return num3++

 }
 addtwo(5)




    
