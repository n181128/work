var submit = document.getElementById('submit');
var passwd= document.getElementById('pwd');
var email=document.getElementById('email');
var otp_submit = document.getElementById('otp_submit');

var rand_num = Math.floor(Math.random()*1000000)+1;

let params;
function sendMail(){
params={
name:document.getElementById('name').value,
email:document.getElementById('email').value,
message:rand_num
};
console.log(params);
const serviceID = "service_e5k6yhy";
const templateID = "template_f54g2yj";

emailjs.send(serviceID,templateID,params)
.then(
res =>{
console.log('success');
console.log(res);
localStorage.setItem("email",email.value);
localStorage.setItem("password",passwd.value);
localStorage.setItem("otp_val",rand_num);
window.location="otp.html";
}).catch((err)=>console.log(err));
}