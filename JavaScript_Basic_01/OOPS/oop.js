const student={
    name:'sanjish chouhan',
    age:25,
    add:'bhilai',
    getdetails:function(){
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
        console.log(`add: ${this.add}`);
        
    }

}
student.getdetails()

function user(username , age,add,NUM){

    this.username=username
    this.add=add
    this.age=age
    this.NUM=NUM
    console.log(`name:${this.username} AGE:${this.age} ADD:${this.add} NUMBER:${this.NUM}`);
     
}
user('sanjish',25,'bhilai',7000667878)
