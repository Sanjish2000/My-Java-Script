const num=[1,2,3]
const num2=num.reduce((acc,curr)=>{
    console.log(`accumelator is ${acc} and current avlue is ${curr}`);
    
    return acc+curr},0)
console.log(num2);
