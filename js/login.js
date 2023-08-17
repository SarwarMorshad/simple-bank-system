document.getElementById("btn-submit").addEventListener("click", function () {
  //   console.log("bt clicked");
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   console.log(email);

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "shovon@gmail.com" && password === "1234") {
    console.log("Valid User");
  } else {
    console.log("Invalid user");
  }
});
