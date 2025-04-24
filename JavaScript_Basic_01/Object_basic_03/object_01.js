// object literals
const MyId=Symbol("key1")

const MyDetails={
    name: "sanjish chouhan",
    age:25,
    adddress:"Bhilai",
    isLoggedIn:false,
    Lastlogin:["mon","tue","wed"],
    [MyId]:"1"

}
// console.log(MyDetails.name);
// console.log(MyDetails["name"]);
// console.log(MyDetails["age"]);
// console.log(MyDetails["adddress"]);
// console.log(MyDetails["isLoggedIn"]);
// console.log(MyDetails["Lastlogin"]);
// console.log(MyDetails[MyId]);


MyDetails.name="raju yadav"
// Object.freeze(MyDetails);  //freaze the object can not change any value 
// console.log(MyDetails);
MyDetails.name="Sahruk khan" //name doses not change 

MyDetails.greeting=function(){
  console.log("hello guys");
  
}

MyDetails.greeting2=function(){
    console.log(`my name is ${this.name} and age is ${this.age}`);
    
  }

  console.log(MyDetails.greeting());
  console.log(MyDetails.greeting2());