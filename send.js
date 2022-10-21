const element = document.getElementById("#pushTheButton");
emailjs.init("iXD6JCsR5Tqlncl");

// send mail
element.addEventListener("click", () => {
  const inputName = document.querySelector("#inputName").value;
  const inputEmail = document.querySelector("#inputEmail").value;
  const inputContents = document.querySelector("#inputContents").value;

  const templateVariables = {
    email: inputEmail,
    to_name: "leo",
    from_name: inputName,
    contents: inputContents,
  };
  emailjs
    .send("service_ni3z47a", "template_qt15ukd", templateVariables)
    .then(() => console.log("success"));
});


