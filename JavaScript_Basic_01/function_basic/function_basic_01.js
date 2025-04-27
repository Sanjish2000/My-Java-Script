function myName(num,num2){
    // console.log(num+num2);
    
}
myName(20,52);
function add(a,b){
    // let c= a+b
    // return c
    return a+b
}
const c=add(12,41)
// console.log(c);

function loggin (userid,password){
    if((userid=="admin")&&(password==123)){
        // console.log(`${userid} just login `);
    }
    

}
let userid="admin"
let password=123
loggin(userid,password);


function calculateCartPrice (...prices){  //take multiple value and give arrray 

    console.log(prices);
    // return calculateCartPrice
    
}
calculateCartPrice(200,355,45,15852,85151)


const myobject={   //object pass to the function
    name:"sanjishchouhan",
    price:155
}
function handleObject(anyobject){
    console.log(`my name is ${anyobject.name} and price is ${anyobject.price}`);
    
}
handleObject(myobject)
// handleObject({
//     name:"sanjish",
//     price:123
// })

//array ko function me kese pass kre 

const number=[100,250,450,655,800]
function getdata(array){
    return array[4]
}
let num1 =   getdata(number)
console.log(num1);

