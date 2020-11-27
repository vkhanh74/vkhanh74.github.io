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

const cartModalHandle = () => {
  $(".cart-modal").slideUp();
  $("#cart-controller").on("click", function (e) {
    e.preventDefault();
    $(".cart-modal").slideDown(300);
  });
  $(document).mouseup(function (e) {
    var container = $(".cart-modal");
    if ($(e.target) === $("#cart-controller")) {
      return;
    } else {
      if (
        !container.is(e.target) &&
        !$("#cart-controller").hasClass("fa-shopping-cart") &&
        container.has(e.target).length === 0
      ) {
        container.slideUp();
      }
    }
  });
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
  cartModalHandle();
});
