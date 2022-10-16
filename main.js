$(function () {
  $(".hamburger").on("click", function () {
    $(".listContent").slideToggle(500)
    $(".line1").toggleClass("open")
    $(".line2").toggleClass("open")
    $(".line3").toggleClass("open")
  })
})


