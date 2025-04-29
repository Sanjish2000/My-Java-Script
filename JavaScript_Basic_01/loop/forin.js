//for object p[ass in forin loop

const myObject={
    name:"sabjish",
    city:"bhilai",
    number:700667878,
    study:"mca"

}
for (const key in myObject) {

    // console.log(myObject[key]);
    
}

// forin use in array value and diffenerace is that only ki forof me ham array ke keys se value acess kr skte h or yaha hamko array ke sath [keys] pass krna hota 

const myarr=[1,2,3,4,5,6,8]
for (const key in myarr) {
    // if(key==0) continue
 
    // console.log(key);

    // for access the value of array use [keys]
    // console.log(myarr[key]);
    
    

    
}

// arrray ka use forof me 
for (const keys of myarr) {

    // console.log(keys);
    
    
}
//    use in string 
const name="sanjishchouhan"
for (const key in name) {
    // console.log(key);  acess index 

    // console.log(name[key]); access values 
    
    
    
    


}

// forof use in String
for (const element of name) {
    // console.log(element);   we can direct acess value through forof loop
    
    
}

// use map datatype object used both forin and forof loop

const m= new Map()
// console.log(typeof m);  object hota h iiska type 
m.set(1,"sanjish")
m.set(2,"sanjish")
m.set(3,"sanjish")
 
// used forof loop in map 
for (const [key,value] of m) {
    // console.log(m[key]); undefined ayega ese me 
    // console.log(key);   ese me key or data dono ayega
    // console.log(`key ${key} and the value is ${value}`);   //ese apn alag alag bhi print kr skte h for of ke sath 
    
}

//ab forin ke sath map 
for (const [key,value] in m) {
    console.log(key);  //kuch ni ayega 
    console.log(`key is ${key} and value is ${value}`); //ese me kam ni krta h
    
    
  
}
// map sirf for of me kam krta h 