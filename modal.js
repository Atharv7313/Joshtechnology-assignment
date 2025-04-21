document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const modal = document.getElementById("contactModal");
  const closeButton = document.querySelector(".close-button");

  if (!form || !modal || !closeButton) {
    console.warn("One or more modal elements not found.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    modal.style.display = "block";
    form.reset();
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
