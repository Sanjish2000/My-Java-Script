// const p = new Promise(function(resolve,reject){
//     //db conneect
//     //do any async work
//     setTimeout(() => {
//         // console.log('promise is send');
//         resolve()
//     }, 1000);
// })
// p.then(function(){
//     // console.log('accepted');
    
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // console.log("async two");
//         resolve()
        
//     },2000)
// }).then(function(){
//     // console.log('two catch');
    
// })


// //three

// const pthree=new Promise(function(resolve,reject){
//     setInterval(function(){
//         resolve({username:'sanjish',email:'chouhansanjish@gmail.com'})
//     },1000)
// })
// pthree.then(function(e){
//     // console.log(e);
//     // console.log(e.email);
    
    
// })

// //four

// const pfour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let conneect=false
//         if(!conneect){
//         resolve({email:'abc@gmail.com',password:'123'})
//         }else{
//             reject('erorr cant connect to the server')
//         }
//     },1000)
// })
// pfour.then(function(e){
//     return e.email
// })
// .then(function(email){
//     // console.log(email);
    
// }).catch(function(error){
//     // console.log(error);
    
// })
// // .finally(()=>{
// //     // console.log('finally bcalled');
    
// // })


//five

// const pfive= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let conneect=false
//         if(!conneect){
//         resolve({name:'JAVASCRIPT',password:'123'})
//         }else{
//             reject('ERORR:JS went wrong')
//         }
//     },1000)
// })
// async function Consume(){
//    try {
//      const data=await pfive
//     console.log(data.name);
//    } catch (error) {
//     console.log(error);
    
//    }
    
// }
// Consume()

fetch('https://api.github.com/users/Sanjish2000')
.then((e=>{return e.json()}))
.then((e)=>{console.log(e.name);
}).catch((e)=>{console.log(e);
})



