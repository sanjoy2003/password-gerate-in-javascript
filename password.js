class password{
    constructor(){
        console.log("welcome to password generator");
        this.pass="";
    }
generatePassword(len){
    let chars="abcdefghijklmnopqrstuvwxyz";
    let numbers="1234567890";
    let special="@!#$%^&*"
if(len<3){
    console.log("your passwordshould atleast3 character long")
}
    else{
let i=0;
while(i<len){
this.pass+=chars[Math.floor(Math.random() * chars.length)];
this.pass+=numbers[Math.floor(Math.random() *numbers.length)];
this.pass+=special[Math.floor(Math.random() * special.length)];
i+=3;
}
return this.pass.slice(0,len);
    }
}
}

let p= new password();
let n=prompt("enter the password len");
document.write("the password is :"+p.generatePassword(n))