const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const previousguess=document.querySelector('.guesses')
const remiang=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const satrtOver=document.querySelector('.resultParas')
let ranDom=parseInt(Math.random()*10+1);
const p= document.createElement('p')
let previ=[]
let numguess=1
let playgame=true
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const input=parseInt(userInput.value)
        validateGuess(input)
        

    })
    
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("it is noit a number ")
    }
    
    else if(guess<1){
        alert("please enter number that is greater than 1")
    }
    else if(guess>100){
        alert("please enter number that is less than 100")
    }
    else{
        previ.push(guess)
        if(numguess==11){
            displayGuess(guess)
            displayMessage(`Game over .Random number ${ranDom}`)
            EndGame()
        }else{
            displayGuess(guess)
            checkGuess(guess

            )
        }
    }
    //
}

function checkGuess(guess){
    if(guess==ranDom){
        displayMessage("your guess it right")
        EndGame()
    }
    else if(guess>ranDom){
        displayMessage("your number is too high")
    }
    else if(guess<ranDom){
        displayMessage("your number is too low")
    }

    //
}
function displayGuess(guess){
    userInput.value=''
    previousguess.innerHTML+=`${guess} `;
    numguess++;
    remiang.innerHTML=`${11 - numguess}`
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}
function EndGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    satrtOver.appendChild(p)
    playgame=false
    NewGame()

    

    
}
function NewGame(){
    const newGamebutton=document.querySelector('#newGame')
    newGamebutton.addEventListener('click',function(e){
    ranDom=parseInt(Math.random()*10+1);
    previ=[]
    numguess=1
    previousguess.innerHTML=''
    remiang.innerHTML=`${11 - numguess}`
    userInput.removeAttribute('disabled')
    satrtOver.removeChild(p)
    playgame=true
    })
    

}
