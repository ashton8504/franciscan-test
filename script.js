const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const hiddenFields = document.getElementById("hidden-fields");

function toggleHiddenFields() {
  if (firstNameInput.value.trim() === "" && lastNameInput.value.trim() === "") {
    hiddenFields.classList.remove("visible");
  } else {
    hiddenFields.classList.add("visible");
  }
}

firstNameInput.addEventListener("input", toggleHiddenFields);
lastNameInput.addEventListener("input", toggleHiddenFields);
