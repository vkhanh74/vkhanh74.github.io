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

$(document).ready(function () {
  banner();
  renderPage();
});
