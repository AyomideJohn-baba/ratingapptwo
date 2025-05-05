let bookrating=document.getElementById("book")
let button=document.querySelector(".btn-warning")
let message=document.querySelector(".h1")
let rating=document.querySelector(".rating")

button.addEventListener("click",function(e){
    e.preventDefault()
    if(bookrating.value==""){
        message.innerHTML="Please enter a book for rating"
    }
    else if(bookrating.value=="greenland"){
        rating.classList.add("starone")
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }
    else if(bookrating.value=="somayina"){
        rating.classList.add("startwo")
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }
    else if(bookrating.value=="addiction"){
        rating.classList.add("starfive")
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }
    else if(bookrating.value=="stigma"){
        rating.classList.add("starfive")
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }
    else if(bookrating.value=="the clock"){
        rating.classList.add("starthree")
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }
    else if(bookrating.value=="sacrilege"){
        rating.classList.add("startwo")
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }
    else if(bookrating.value=="locked"){
        rating.classList.add("starthree")
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }
    else if(bookrating.value=="poverty"){
        rating.classList.add("starone")
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }
    else{
        message.innerHTML="Book review unavailable. Please try another book."
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }


    bookrating.value=""
})

