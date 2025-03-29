const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const localStorageKey = "feedback-form-state";

window.addEventListener("load", () => {
  const savedData = JSON.parse(localStorage.getItem(localStorageKey));

  if (savedData) {
    email.value = savedData.email || "";
    message.value = savedData.message || "";
  }
});

form.addEventListener("input", (e) => {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "" || message.value === "") {
    alert("Lütfen tüm alanları doldurun!");
    return;
  }
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
