const clock =document.querySelector('#clock')


setInterval(function(){
    let date =new Date();
    clock.innerHTML=date.toLocaleTimeString();  //()ye lgana ni bhulna h 
},1000)
