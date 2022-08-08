const passwordField = document.getElementById("password");
const btn = document.getElementById("show-or-hide");
const hide = document.getElementById("hide");
const show = document.getElementById("show");

let isShown = false;

btn.addEventListener("click", () => {
  console.log(1);
  if (isShown) {
    hide.style.display = "none";
    show.style.display = "block";
    passwordField.type = "text";
    isShown = false;
  } else {
    hide.style.display = "block";
    show.style.display = "none";
    passwordField.type = "password";
    isShown = true;
  }
});
