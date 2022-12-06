$(document).ready(function () {
  addEyeFunc = (function () {
    let formAuth = $("#auth form");
    let inputPassword = formAuth.find('input[name="password"]');
    inputPassword.addClass("password");
    const content = '<i class="fa-regular fa-eye"></i>';
    inputPassword.after(content);
    inputPassword.parent().addClass("position-relative");
    let eye = inputPassword.next();
    eye.on("click", function () {
      if (inputPassword.attr("type") === "password") {
        inputPassword.attr("type", "text");
        eye.addClass("fa-eye-slash");
        eye.removeClass("fa-eye");
      } else {
        inputPassword.attr("type", "password");
        eye.removeClass("fa-eye-slash");
        eye.addClass("fa-eye");
      }
    });
  })();
});
