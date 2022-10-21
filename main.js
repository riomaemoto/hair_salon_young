emailjs.init("H-iXD6JCsR5Tqlncl");

$(function () {
  $(".hamburger").on("click", function () {
    $(".listContent").slideToggle(500)
    $(".line1").toggleClass("open")
    $(".line2").toggleClass("open")
    $(".line3").toggleClass("open")
  })

  $("#pushTheButton").on("click", function () {
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
      .then(() => console.log("success"));
  })
})


