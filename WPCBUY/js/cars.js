let carInfoModal = document.getElementById("carInfoModal");
let carModalClose = document.getElementById("carModalClose");
let carInfoBtn = document.querySelectorAll(".seeCarInfo");
let carsBody = document.getElementById("carsBody");
let carsNav = document.getElementById("carsNav");

carModalClose.addEventListener("click", () => {
  carInfoModal.classList.add("d-none");
  carsBody.classList.remove("d-none");
  carsNav.classList.remove("d-none");
  window.scrollTo(0,0)
});

const openCarModal = () => {
  carInfoModal.classList.remove("d-none");
  carsBody.classList.add("d-none");
  carsNav.classList.add("d-none");
};

carInfoBtn.forEach((item) => {
  item.addEventListener("click", openCarModal);
});