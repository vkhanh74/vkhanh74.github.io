const banner = () => {
  $(".banner").slick({
    arrows: false,
    dots: true,
    customPaging: (slider, i) => `<div class="dots-item"></div>`,
  });
};

const renderPage = () => {
  let logo = $(".header-logo img");
  if (
    logo.attr("src") !==
    `https://i1.wp.com/www.writefromscratch.com/wp-content/uploads/2018/12/demo-logo.png?ssl=1`
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
  renderPage();
  customSelectHandle();
});
