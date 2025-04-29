const mydta=[
  {
    language:"javascript",
    languageCode:"js"
  },
  {
    language:"C++",
    languageCode:"cpp"
  },
  {
    language:"Python",
    languageCode:"py"
  },


]
mydta.forEach((item)=>{
    // console.log(item.languageCode);
    // console.log(item.language);
    
    

})

// ager meko koi value return krani h to 
const value =mydta.forEach((item)=>{
    if(item.language==="javascript"){
        return item 
    }
    
})
// console.log(value);


// ese value return ni hogi
const value2 = mydta
  .filter((item) => item.language === "javascript")
  .map((item) => item.languageCode); 

// console.log(value2);

// ager logic ke sath return krna h to 
const my=[]
mydta.forEach((item)=>{
    if(item.language==="javascript"){
        my.push(item)
        
    }
    
})
console.log(my);
console.log(Object.entries(my));

// console.log(code);




// ab array me filter lgate h *********************

const num=[1,2,3,4,5,6,7,8,9,10]

//ese retrun ho jayega
const value4=num.filter((num)=>num>5)

 //ese retrun ni hoga
const value5=num.filter((num)=>{
    num>5
})

 //ese retrun krne ke liye reytun keyword lgana hoga 
const value6=num.filter((num)=>{
   return  num>5
})
// console.log(value6);


