// $('input').on('click', function() {
//     alert("It works")
// })

    $(".hamburger").on("click", function () {
        $(".navMenu").toggleClass("active")
        $(".hamburger").toggleClass("active")
        })
    $(".nav-link").on("click", function () {
        $(".navMenu").removeClass("active")
        $(".hamburger").removeClass("active")
    })