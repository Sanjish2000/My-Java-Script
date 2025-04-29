const number =[2,2,3,4,5,6,7,8,99,10]
const newnum=number.map((n)=>n+10)
// console.log(newnum);


//channing of attributes
const n1=[10,25,41,45,12,42,922,846,856,1585,4267,45014,,144]
const n2=n1.map((num)=>num*1.25).map((num)=>num+52).map((num)=>num/10).filter((num)=>num>100).map((num)=>Math.round(num))
console.log(n2);

