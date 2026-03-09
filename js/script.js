document.getElementById("contactForm")?.addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let message=document.getElementById("message").value

let error=document.getElementById("error")

if(name=="" || email=="" || message==""){
error.textContent="All fields are required"
return
}

if(!email.includes("@")){
error.textContent="Enter valid email"
return
}

error.style.color="green"
error.textContent="Message sent successfully"

})