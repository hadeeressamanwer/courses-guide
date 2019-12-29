const student=[{
    email:"Hadeer@gmail.com",
password:"12345"
},
{
    email:"hajer@gmail.com",
    password:"54321"
}];

 function Login() {
     student.forEach((item,index) => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
       if(email === item.email && password === item.password){
        window.location.href = "courseshomepage.html";
       }
       }
       
       );
  }
  