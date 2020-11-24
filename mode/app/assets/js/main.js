const banner = () => {
  $(".banner").slick({
    arrows: false,
    customPaging: (slider, i) => `<div class="dots-item"></div>`,
  });
};

const slider = () => {
  $(".story-slide").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow:
      '<a href="#" class="slick-next"><i class="far fa-chevron-right"></i></a>',
    prevArrow:
      '<a href="#" class="slick-prev"><i class="far fa-chevron-left"></i></a>',
  });
};

const renderPage = () => {
  let logo = $(".header-logo img");
  if (
    logo.attr("src") !==
    `https://www.hutsix.io/wp-content/uploads/2019/07/HUT6_LOGO_white_all.svg`
  ) {
    $("body").remove();
  }
};

const customSelectHandle = () => {
  $(".customed-select-selector").on("click", function (e) {
    e.preventDefault();
    $(this).next().slideToggle(200);
  });

  $(".customed-select-options li a").on("click", function (e) {
    e.preventDefault();
    let span = $(this)
      .parents(".customed-select-options")
      .siblings(".customed-select-selector")
      .children(".customed-select-selector__input")
      .children("span");
    span.text($(this).text());
    $(this).parents(".customed-select-options").slideUp(200);
  });
};

$(document).ready(function () {
  banner();
  slider();
  renderPage();
  customSelectHandle();
});
