document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.getElementById("navBtn");
  const contactUsForm = document.getElementById("contactUsForm");

  let navBar = document.getElementById("navBar");
  navBar.style.display = "none";

  navBtn.addEventListener(
    "click",
    () => {
      let navBar = document.getElementById("navBar");
      if (navBar.style.display === "none") {
        navBar.style.display = "block";
        navBtn.src = "images/xMark.png";
        navBtn.style.height = "25px";
      } else {
        navBar.style.display = "none";
        navBtn.src = "images/List.png";
        navBtn.style.height = "32px";
      }
    },
    { passive: true }
  );
  
});
