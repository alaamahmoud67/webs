// prouctt1
document.querySelectorAll(".featured-image-1").forEach(image1 => {
    image1.addEventListener("click", () => {
        var src = image1.getAttribute("src")
        document.querySelector(".big-image-1").src = src
    })
})

document.querySelectorAll(".featured-image-2").forEach(image2 => {
    image2.addEventListener("click", () => {
        var src = image2.getAttribute("src")
        document.querySelector(".big-image-2").src = src
    })
})

document.querySelectorAll(".featured-image-3").forEach(image3 => {
    image3.addEventListener("click", () => {
        var src = image3.getAttribute("src")
        document.querySelector(".big-image-3").src = src
    })
})
// 

// slider tow
var swiper = new Swiper(".featured-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});