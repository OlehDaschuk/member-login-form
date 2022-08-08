const usename = document.getElementById("username");
const password = document.getElementById("password");
const needRemember = document.getElementById("need-remember");
const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");

usename.value = localStorage.getItem("username");
password.value = localStorage.getItem("password");

usename.addEventListener("change", () => {
  if (usename.value.trim() && password.value.trim()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
password.addEventListener("change", () => {
  if (usename.value.trim() && password.value.trim()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

form.addEventListener("submit", () => {
  if (needRemember.checked) {
    localStorage.setItem("username", usename.value.trim());
    localStorage.setItem("password", password.value.trim());
  }
});
