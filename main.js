// $('input').on('click', function() {
//     alert("It works")
// })
// const hamburger = $(".hamburger").on("click", function(){
//     classList.toggle("active")
// })
// const navMenu = $(".navMenu").on("click", function(){
//     classList.toggle("active")
// })
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navMenu")
hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }))