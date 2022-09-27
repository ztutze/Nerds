const modalButton = document.querySelector(".button-contacts");
const letterPopup = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalUserName = document.querySelector(".modal-input-username");
const modalLogin = document.querySelector(".modal-input-login")
const modalForm = document.querySelector(".modal-form");

let isStorageSupport = true;
let storage = ""

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.add("modal-show");
  modalUserName.focus();

  if (storage) {
    modalLogin.value = storage;
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show");
  letterPopup.classList.remove("modal-error");

});

modalForm.addEventListener("submit", function (evt) {
  if (!modalUserName.value || !modalLogin.value) {
    evt.preventDefault();
    letterPopup.classList.remove("modal-error");
    letterPopup.offsetWidth = letterPopup.offsetWidth;
    letterPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", modalLogin.value)
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("modal-show");
      letterPopup.classList.add("modal-error");
    }
  }
});
