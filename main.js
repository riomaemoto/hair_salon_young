emailjs.init("H-iXD6JCsR5Tqlncl");

$(function () {
  const seeThrough = $('.seeThrough');
  const line1 = $('.line1');
  const line2 = $('.line2');
  const line3 = $('.line3');

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

  $("#pushTheButton").on("click", function (e) {
    const inputName = $("#inputName").val();
    const inputEmail = $("#inputEmail").val();
    const inputContents = $("#inputContents").val();
    if ($("#inputName").val() === '') {
      alert("名前を入力してください");
      return false;
    } else if ($("#inputEmail").val() === '') {
      alert("メールアドレスを入力してください");
      return false;
    } else if ($("#inputContents").val() === '') {
      alert("テキストを入力してください");
      return false;
    } else {
      const templateVariables = {
        email: inputEmail,
        to_name: "leo",
        from_name: inputName,
        contents: inputContents,
      };
      emailjs
        .send("service_ni3z47a", "template_qt15ukd", templateVariables)
        .then(() => console.log("success"));
      $("#inputName").val("");
      $("#inputEmail").val("");
      $("#inputContents").val("");
      alert("送信しました");
    };
  })
})


