$(document).on("turbo:load", function () {
  $(".selectize").not(".selectized").selectize({
    create:       true,
    hideSelected: true
  });
});
