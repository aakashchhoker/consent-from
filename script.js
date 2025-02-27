document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("consentForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "https://qmrs.gnx.care/";
    });
  });
  