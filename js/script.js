document.getElementById("contactForm")?.addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let message=document.getElementById("message").value

let error=document.getElementById("error")

let slides=document.querySelectorAll(".slide")
let index=0

function changeSlide(){

slides[index].classList.remove("active")

index=(index+1)%slides.length

slides[index].classList.add("active")

}

setInterval(changeSlide,3000)
if(name=="" || email=="" || message==""){
error.textContent="Please fill all fields"
error.style.color="red"
return
}

if(!email.includes("@")){
error.textContent="Enter a valid email"
error.style.color="red"
return
}

error.textContent="Message sent successfully!"
error.style.color="green"

})