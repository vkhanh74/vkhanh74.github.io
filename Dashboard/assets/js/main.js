function countBtnHandle() {
  let btnContent = "stop";
  $("#count-btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("stop").html(btnContent);
    if (btnContent === "stop") {
      btnContent = "start";
    } else {
      btnContent = "stop";
    }
  });
}

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
    $(".menu_sub").children(".down_menu").hide();
  });
}

$(document).ready(function () {
  intitalLibrary();
  toogleSidebar();
  expandSubMenu();
  countBtnHandle();
});
