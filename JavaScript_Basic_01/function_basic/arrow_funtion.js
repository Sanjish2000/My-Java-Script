const details={
    username:"sanjish chohan",
    passwords:1235,
    wellcomeMessage:function(){
        console.log(`hey ${this.username},wellcome to your site`);
        console.log(this);
        
        
    }
}
// details.wellcomeMessage()
// details.passwords=5252
// details.wellcomeMessage()
// console.log(this);          //enviorment ke bahar h      {} ayega


//arrow declaration

const sanjish=()=>{
    const id="admin"
    const pass=123
    const myprofile={
        name:"sanjish chouhan",
        add:"bhilai",
        account:10000,
        wellcomeMessage2:function(){
            console.log(this);
           console.log(`hello ${this.name} wellcome to ${this.add} you have earn ${this.account}`);
           console.log(this);
           this.name="raja yadav"
           console.log(`hello ${this.name} wellcome to ${this.add} you have earn ${this.account}`);
           
            
            
        }
    } 
    // console.log(this);
    // console.log(this.id);
    // myprofile.wellcomeMessage2()

    
    
    
    
}
sanjish()


// implicit arraow function 

const f1=(n1,n2)=>(n1+n2)
console.log(f1(10,20))
 
// object ko return krna h 

const obj=()=>({user:"sanjish,",pas:123})
console.log(obj());

