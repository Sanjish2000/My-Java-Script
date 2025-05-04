const form =document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    if(height==""||height<0||isNaN(height)){
        result.innerHTML=`please enter valid number ${height}`

    
    }
    else if(weight==""||weight<0||isNaN(weight)){
        result.innerHTML=`please enter valid number ${weight}`

    }
    else{

    const bmi=(weight/((height*height)/10000)).toFixed(2)
    if(bmi<18.6){
        result.innerHTML=`Under Weight=${bmi}`
        result.style.color="yellow"
    }
    if((bmi>18.6)&&(bmi< 24.9)){
        result.innerHTML=`Normal Range =${bmi}`
        result.style.color="green"
        
    }
    if(bmi>24.9){
        result.innerHTML=`Overweight = =${bmi}`
        result.style.color="red"
 
    }
    
    }
    
})
