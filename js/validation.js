let regexName = /^[A-Z]{3,55}$/i,
  regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
  regexPhone = /^(01[0-9]{9})$/d,
  regexAge = /^([0-9]{1,2})$/d,
  regexPass = /^[A-Za-z]\w{7,14}$/,
  regexRePass,
  contactInput = [];
function validation() {
  for (let j = 0; j < 6; j++) {
    contactInput.push($("#Contact input").eq(j));
  }
  contactInput[0].change(function (e) {
    e.preventDefault();
    chickError(
      regexName,
      `Please enter a name between 3 and 9 characters`,
      e.target
    );
  });
  contactInput[1].change(function (e) {
    e.preventDefault();
    chickError(regexEmail, `Please enter a valid email`, e.target);
  });
  contactInput[2].change(function (e) {
    e.preventDefault();
    chickError(regexPhone, `Please enter a valid phone`, e.target);
  });
  contactInput[3].change(function (e) {
    e.preventDefault();
    chickError(regexAge, `Please enter a valid age`, e.target);
  });
  contactInput[4].change(function (e) {
    e.preventDefault();
    chickError(
      regexPass,
      `Please enter a pass between 8 and 9 characters`,
      e.target
    );
    regexRePass = e.value;
  });
  contactInput[5].change(function (e) {
    e.preventDefault();
    if (e.value != regexRePass) {
      e.target.style.border = "solid red 1px";
      e.target.after(error);
    } else {
      e.target.style.border = "solid green 1px";
    }
  });
}
function chickError(regex, error, element) {
  if (!regex.test(element.value)) {
    element.style.border = "solid red 1px";
    element.nextElementSibling.innerHTML = error;
    $(".btn").addClass("bg-danger")
      $(".btn.bg-danger").hover(
        function () {
          if ($(this).css("left") == "0px") {
            $(".btn").css({ left: "300px" }, 1000);
          } else {
            $(".btn").css({ left: "0px" }, 1000);
          }
        },
        function () {}
      )
    
  } else {

    $(".btn").removeClass("bg-danger");
    $(".btn").hover(
      function () {
          $(".btn").css({ left: "0px" }, 1000); 
      },
      function () {}
    )
    element.style.border = "solid green 1px";
    element.nextElementSibling.innerHTML = "";
  }
}
validation();
