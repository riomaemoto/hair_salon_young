emailjs.init("H-iXD6JCsR5Tqlncl");

$(function () {
  const seeThrough = $('.seeThrough');
  const line1 = $('.line1');
  const line2 = $('.line2');
  const line3 = $('.line3');
  $(".storeName").css("cursor", "pointer");

  $(".storeName").on("click", function () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  })

  $(".hamburger").on("click", function () {
    $(".listContent").slideToggle(500)
    line1.addClass("open")
    line2.addClass("open")
    line3.addClass("open")

    if (line1.hasClass('open')) {
      seeThrough.on('click', function () {
        $('.open').removeClass('open');
        $('.listContent').slideUp();
      });
      $(".listContent").on('click', function () {
        $('.open').removeClass('open');
        $('.listContent').slideUp();
      });
      $(".illustration").on('click', function () {
        $('.open').removeClass('open');
        $('.listContent').slideUp();
      });
      $(".contact").on('click', function () {
        $('.open').removeClass('open');
        $('.listContent').slideUp();
      });
      $(".footerBox").on('click', function () {
        $('.open').removeClass('open');
        $('.listContent').slideUp();
      });
    }
  })

  $(".form").submit(function (e) {
    e.preventDefault();
    const inputName = $("#inputName").val();
    const inputEmail = $("#inputEmail").val();
    const inputContents = $("#inputContents").val();
    const templateVariables = {
      email: inputEmail,
      to_name: "leo",
      from_name: inputName,
      contents: inputContents,
    };
    emailjs
      .send("service_ni3z47a", "template_qt15ukd", templateVariables)
      .then(() => {
        alert("送信しました");
      }).catch(err => console.log(err.toString()));
    $("#inputName").val("");
    $("#inputEmail").val("");
    $("#inputContents").val("");
  })
})


