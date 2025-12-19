// const ebookHover = document.getElementById("ebook_hover");
// const arrowUp = document.getElementById("arrow_up");

// ebookHover.addEventListener("mouseenter", () => {
//   arrowUp.classList.add("rotate-180");
// });

// ebookHover.addEventListener("mouseleave", () => {
//   arrowUp.classList.remove("rotate-180");
// });
// jQuery version
const $ebookHover = $("#ebook_hover");
const $arrowUp = $("#arrow_up");
const $newbookSlider = $(".newbook_slider");
const $bookReadedMostSlider = $(".book_readed_most_slider");
const $suggestSlider = $(".suggest_slider");
const $serviceSlider = $(".service_slider");
const getYear = new Date().getFullYear();
$("#current_year").text(getYear);
$ebookHover.on("mouseenter", () => {
  $arrowUp.addClass("rotate-180");
});

$ebookHover.on("mouseleave", () => {
  $arrowUp.removeClass("rotate-180");
});

$newbookSlider.slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  dots: false,

  prevArrow: $(".prev-btn"),
  nextArrow: $(".next-btn"),
  infinite: true,

  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
$bookReadedMostSlider.slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  dots: false,
  prevArrow: $(".prev-btn_2"),
  nextArrow: $(".next-btn_2"),
  infinite: true,

  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
$suggestSlider.slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  dots: false,
  prevArrow: $(".prev-btn_3"),
  nextArrow: $(".next-btn_3"),
  infinite: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
$serviceSlider.slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  dots: false,
  prevArrow: $(".prev-btn_4"),
  nextArrow: $(".next-btn_4"),
  infinite: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
