// Khi nhấn nút submit, thực hiện validate email, nếu đúng sẽ hiện thông tin cá nhân
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const clickSubmit = function () {
  let input = document.querySelector(".email").value;
  if (input.match(regex)) {
    document.querySelector(".email-form").classList.add("hidden");
    document.querySelector(".shown-info").classList.remove("hidden");
  }
};

// Khi click vào nút X, thông tin sẽ được ẩn đi và form email sẽ hiện ra lại, reset đặt focus vào input email
const closeButton = function () {
  document.querySelector(".shown-info").classList.add("hidden");
  document.querySelector(".email-form").classList.remove("hidden");
  document.querySelector(".email").value = "";
  document.querySelector(".email").focus();
};

// Khi nhập vào Email, sẽ hiển thị thông báo chưa nhập/nhập sai định dạng
const displayMessage = function () {
  let input = document.querySelector(".email").value;
  let emailText = document.querySelector(".email-text");
  if (input.length === 0) {
    emailText.textContent = "Vui lòng nhập Email";
    emailText.style.color = "#ff0000";
  } else if (input.match(regex)) {
    emailText.textContent = "";
  } else {
    emailText.textContent = "Vui lòng nhập đúng định dạng Email";
    emailText.style.color = "#ff0000";
  }
};
document.querySelector(".email").addEventListener("input", displayMessage);

const moreLess = function (node) {
  let selectorNode = node.parentNode.parentNode.querySelector(".third-item");
  if (selectorNode.classList.contains("hidden")) {
    selectorNode.classList.remove("hidden");
    node.textContent = "View less";
  } else {
    selectorNode.classList.add("hidden");
    node.textContent = "View more";
  }
};
