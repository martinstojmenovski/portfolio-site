// $('input').on('click', function() {
//     alert("It works")
// })
// functions for hamburger menu
    $(".hamburger").on("click", function () {
        $(".navMenu").toggleClass("active")
        $(".hamburger").toggleClass("active")
        })
    $(".nav-link").on("click", function () {
        $(".navMenu").removeClass("active")
        $(".hamburger").removeClass("active")
    })



//animation effects
//test

$('.sectionMain').on('mousemove', function(event){
    let sectionMain = $('.sectionMain')[0];
    	
    // let clover = $( ".sectionMain" ).append("<span></span>")
    let clover = document.createElement('span')
    clover.className = "roses"
    let x = event.offsetX;
    let y = event.offsetY;
    clover.style.left = x + 'px';
    clover.style.top = y + 'px';

    let size = Math.random() * 80;
    clover.style.width = 20 + size + 'px';
    clover.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
   clover.style.transform = 'rotate('+ transformValue + 'deg)';


    sectionMain.appendChild(clover)

    setTimeout(function(){
        clover.remove()
    }, 1000)
})