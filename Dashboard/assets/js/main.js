function expandSubMenu() {
  $(".menu_sub").on("click", function (e) {
    e.preventDefault();
    $(this).children(".down_menu").slideToggle();
  });
}

function intitalLibrary() {
  $('[data-toggle="datepicker"]').datepicker({
    autoPick: true,
  });
  $(".time-ref").timepicker({
    show2400: true,
    timeFormat: "H\\:i",
    disableTextInput: true,
  });
}

function toogleSidebar() {
  $(".menu-toggler").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("nav_small mobile_nav");
  });
}

$(document).ready(function () {
  intitalLibrary();
  toogleSidebar();
  expandSubMenu();
});
