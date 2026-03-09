document.getElementById("contactForm")?.addEventListener("submit", function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const message=document.getElementById("message").value;

const msg=document.getElementById("formMessage");

if(name=="" || email=="" || message==""){
msg.textContent="Please fill all fields";
msg.style.color="red";
return;
}

msg.textContent="Message sent successfully!";
msg.style.color="green";

});