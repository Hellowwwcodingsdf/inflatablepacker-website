document.addEventListener("DOMContentLoaded", () => {
  const forgotPassOpen = document.getElementById("forgotPassword");
  const forgotPassModal = document.getElementById("forgotPassModal");
  const forgotPassClose = document.getElementById("forgotPassClose");

  forgotPassOpen.addEventListener(
    "click",
    () => {
      forgotPassModal.classList.remove("d-none");
    },
    { passive: true }
  );

  forgotPassClose.addEventListener(
    "click",
    () => {
      forgotPassModal.classList.add("d-none");
    },
    { passive: true }
  );
});
