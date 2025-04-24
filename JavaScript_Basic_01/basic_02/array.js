// array declaration 
let array1=[1,2,3,4,5,6,7]

let array2=new Array(11,22,33,44,55)

const array3=['sanjish','chouhan']

console.log(array3[0]);

// arrray methods

array1.push(10)
array2.push(55)
array3.push("bhilai")

console.log(array1);
console.log(array2);
console.log(array3);

array1.pop()
array2.pop()
array3.pop()
console.log(array1);
console.log(array2);
console.log(array3);



array1.unshift(10)   //insert on fist index 
console.log(array1);

array1.shift()
console.log(array1);  //remove vlaue from the first index 

console.log(array1.includes(5));
console.log(array1.indexOf(5));

const myarray=array1.join()
console.log(array1);
console.log(typeof array1);
console.log(myarray);
console.log(typeof myarray);


//splice or slice

let newary=[1,2,3,4,5,6,7,8,9]
console.log(newary);
console.log(newary.slice(1,5)); 
console.log(newary);

let splicearray =newary.splice(1,5)
console.log(splicearray);
console.log(newary);





