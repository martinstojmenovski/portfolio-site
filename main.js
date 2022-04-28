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

// $(document).on('mousemove', function(event){
//     let sectionMain = $('.sectionMain');
//     let heart = document.createElement('span')
//     heart.className = "roses"
//     let x = event.offsetX;
//     let y = event.offsetY;
//     heart.style.left = x + 'px';
//     heart.style.top = y + 'px';

//     let size = Math.random() * 80;
//     heart.style.width = 20 + size + 'px';
//     heart.style.height = 20 + size + 'px';

//     let transformValue = Math.random() * 360;
//     heart.style.transform = 'rotate('+ transformValue + 'deg)';


//     sectionMain.appendChild(heart)

//     setTimeout(function(){
//         heart.remove()
//     }, 1000)
// })