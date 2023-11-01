let mobileView = document.querySelector(".mobileView")
let menu = document.querySelector("#menu")
let span4 = document.querySelector(".span4")
let span5 = document.querySelector(".span5")
let span6 = document.querySelector(".span6")



menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    document.querySelector("body").classList.toggle("overflow-hidden");
    span4.classList.toggle("span1");
    span5.classList.toggle("span2");
    span6.classList.toggle("span3");
})

$('.slider-1').slick({
    dots: false,
    autoplay: true,
    centermode: true,
    centerPadding: 100,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1.65,
                dots: true,
                speed: 1000,
                autoplay: true,
                infinite: true,
                slidesToScroll: 1
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.slider-2').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '400px',
    arrows: false,
    responsive: [

        {
            breakpoint: 1200,
            settings: {
                centerMode: true,
                centerPadding: '300px',
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                centerMode: true,
                centerPadding: '300px',
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerMode: true,
                centerPadding: '200px',
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }

        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
}
);
$('.slider3').slick({
    autoplay: false,
    centerMode: true,
    centerPadding: '270px',
    slidesToShow: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "200px",
            }
        },
        {
            breakpoint: 850,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
    ]
});
