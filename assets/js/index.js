const faqs = document.querySelectorAll(".faq-item");

faqs.forEach( faq => {

    faq.addEventListener("click", () => {
        // $(".faq-item").removeClass("active")
        faq.classList.toggle("active");
    })

})

const burger = document.getElementById('burger');
const links = document.getElementById('links');

burger.addEventListener('click', () => {
    links.classList.toggle('active');
})

$("#links").click(() => {
    links.classList.remove('active');

})


$(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());





});

$( document ).ready(function() {
    setTimeout(() => {
        $(".banana1").css("transform", `translateY(-100vh)`)


        setTimeout(() => {
            $(".div1").css("transform", "translateY(-200%)")
            $(".banana2").css("transform", `translateY(-100vh) translateX(-50vw)`)
        }, 100);
        setTimeout(() => {
            $(".div2").css("transform", "translateY(-200%)")
            $(".banana3").css("transform", `translateY(-100vh) translateX(-80vw)`)
        }, 400);
        setTimeout(() => {
            $(".div3").css("transform", "translateY(-200%)")
            $(".banana4").css("transform", `translateY(-100vh) translateX(100vw)`)
        
        }, 500);
        setTimeout(() => {
            $(".div4").css("transform", "translateY(-200%)")
            $(".banana5").css("transform", `translateY(-100vh) translateX(70vw)`)
        
        }, 700);
        setTimeout(() => {
            $(".div5").css("transform", "translateY(-200%)")
        }, 800);
        setTimeout(() => {
            $(".loading").css("display", "none")
        }, 1000);
    }, 500);
    
});



// $(".banana").click(function(){
//     $(".banana1").css("transform", `translateY(-100vh)`)


//     setTimeout(() => {
//         $(".div1").css("transform", "translateY(-200%)")
//         $(".banana2").css("transform", `translateY(-100vh) translateX(-50vw)`)
//     }, 100);
//     setTimeout(() => {
//         $(".div2").css("transform", "translateY(-200%)")
//         $(".banana3").css("transform", `translateY(-100vh) translateX(-80vw)`)
//     }, 400);
//     setTimeout(() => {
//         $(".div3").css("transform", "translateY(-200%)")
//         $(".banana4").css("transform", `translateY(-100vh) translateX(100vw)`)

//     }, 500);
//     setTimeout(() => {
//         $(".div4").css("transform", "translateY(-200%)")
//         $(".banana5").css("transform", `translateY(-100vh) translateX(70vw)`)

//     }, 700);
//     setTimeout(() => {
//         $(".div5").css("transform", "translateY(-200%)")
//     }, 800);
//     setTimeout(() => {
//         $(".loading").css("display", "none")
//     }, 1000);
// })


