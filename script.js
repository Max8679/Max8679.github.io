function onSubmit(token) {
  document.getElementById("myForm").submit();
}

document.addEventListener("DOMContentLoaded", function () {
  var recaptchaScript = document.createElement("script");
  recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
  recaptchaScript.async = true;
  recaptchaScript.defer = true;
  document.head.appendChild(recaptchaScript);

  recaptchaScript.onload = function () {
    grecaptcha.render("recaptcha-container", {
      sitekey: "YOUR_SITE_KEY",
      callback: onSubmit,
      theme: "light",
      size: "normal",
      tabindex: "0",
      badge: "inline",
      callback: onSubmit,
      lang: "ru",
      hl: "ru",
    });
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let dropdown = document.querySelector(".dropdown");
  let filters = document.querySelector(".filters");
  let isExpanded = false;

  dropdown.addEventListener("click", function () {
    filters.classList.toggle("active");
    isExpanded = !isExpanded;

    if (isExpanded) {
      dropdown.textContent = "Less parameters";
    } else {
      dropdown.textContent = "More parameters";
    }
  });
});
