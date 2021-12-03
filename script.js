const form = document.querySelector("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('Form Submitted!');
  const emailVal = email.value;
  if (!validateEmail(emailVal)) {
    form.classList.add("error");
    email.placeholder = "example@email/com";
  } else {
    form.classList.remove("error");
    email.placeholder = "Your email address...";
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
