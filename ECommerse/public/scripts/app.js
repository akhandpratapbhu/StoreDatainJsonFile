var c=56;
c++;
//consol.log(c);//
//alert(c);
var obj={
    name:"Akhand",
    age:25,
    company:"softobiz"
}
var x=JSON.stringify(obj);
//alert(x);
var fun=function(){
   // alert("i miss you a lot of");
}
var validate=function(){
    console.log("login button clicked....");
     alert("login button clicked");
    //get value of element whose id=email
    let elementemail=document.getElementById("email");
    let email=elementemail.value;
    let elementpassword=document.getElementById("password");
    let password=elementpassword.value;
    let result=email+" "+password;

    let elementparagraph=document.getElementById("status");
    elementparagraph.innerHTML=result;
}
var submit=function(){
    alert("registration successfull");
    let first=document.getElementById("first");
    
    let last=document.getElementById("last");
   
    let elementemail=document.getElementById("email");
    let gendermale=document.getElementById("male");
    let genderfemale=document.getElementById("female");
    let genderother=document.getElementById("other");
    let contactnum=document.getElementById("number");
    let date=document.getElementById("date");
    let nationality=document.getElementById("national");
    let location=document.getElementById("location");
    let membership=document.getElementById("membership");
    let interest=document.getElementById("one");
    let elementpassword=document.getElementById("password");
     
    let gender="male";
    if(genderfemale.checked==true){
        gender="female";
    }
    else if(gendermale.checked==true){
        gender="male";
    }else{
        gender="other";
    }
   let data={
     first:first.value,
     lastname:last.value,
     email:elementemail.value,
     contact:contactnum.value,
     birthdate:date.value,
     gender:gender,
     national:nationality.value,
     location:location.value,
     interest:interest.value,
     membership:membership.value,
     password:elementpassword.value
   };
    var object=JSON.stringify(data);
    alert(object);
    }
   
