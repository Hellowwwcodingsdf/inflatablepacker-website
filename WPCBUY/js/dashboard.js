const closeNavBtn = document.getElementById("close-nav-btn");
const sideBar = document.getElementById("sidebar");
const dashboard = document.getElementById("dashboard");
const sideBarElements = document.getElementsByClassName("sideBarElement");
const dashboardNavLinks = document.querySelectorAll(".nav-links-2");
const dashboardLink = document.getElementById("dashboardLink");
const salesHistoryLink = document.getElementById("salesHistoryLink");
const carInventoryLink = document.getElementById("carInventoryLink");
const navLogoBlack = document.getElementById("nav-logo-black");
const navBtnBlack = document.getElementById("navBtnBlack");
const xMark = document.getElementById("xMark");
const imgDropdown = document.getElementById("imgDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const listCarBtn = document.getElementById("listCarBtn");
const editCarsBtn = document.getElementById("editCarInventory");
const listNewCarModal = document.getElementById("listNewCarModal");
const editCarsModal = document.getElementById("editCarsModal");
const dashy = document.getElementById("dashy");
const editCar1 = document.getElementById("editCar1");
const listCarForm = document.getElementById("listCarForm");
const carAPI = "https://localhost:7116/api/Cars";

//Navbar should minimize when the button is clicked and maximize if it is clicked again
closeNavBtn.addEventListener("click", () => {
  if (sideBar.style.width === "6%") {
    sideBar.classList.add("col-3");
    sideBar.style.width = "auto";
    dashboard.classList.remove("col-11");
    dashboard.classList.add("col-9");
    dashboard.style.width = "75%";
    for (var i = 0; i < sideBarElements.length; i++) {
      sideBarElements[i].style.display = "inline-block";
    }
  } else {
    sideBar.classList.remove("col-3");
    sideBar.style.width = "6%";
    dashboard.classList.remove("col-9");
    dashboard.style.display = "inline-block";
    dashboard.style.width = "94%";
    for (var i = 0; i < sideBarElements.length; i++) {
      sideBarElements[i].style.display = "none";
    }
  }
});

//Open Navbar overlay when the nav button is clicked in mobile
navBtnBlack.addEventListener("click", () => {
  sideBar.classList.remove("d-none");
  navLogoBlack.classList.remove("sticky-top");
  sideBar.style.zIndex = "10000";
  sideBar.style.paddingBottom = "100px";
  sideBar.classList.remove("col-3");
  sideBar.classList.add("w-100", "shadow-lg", "sticky-top");
  sideBar.style.backgroundColor = "rgba(61, 74, 62, 0.8)";
  sideBar.style.backdropFilter = "blur(15px)";
  xMark.classList.remove("d-none");
  closeNavBtn.style.display = "none";
});
//Close Navbar overlay when the x mark is clicked in mobile
xMark.addEventListener("click", () => {
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
  sideBar.classList.add("col-3");
  sideBar.classList.remove("w-100", "shadow-lg", "sticky-top");
  sideBar.style.backgroundColor = "rgb(61, 74, 62)";
  sideBar.style.backdropFilter = "";
  xMark.classList.add("d-none");
  closeNavBtn.style.display = "inline-block";
});

// Change the active nav link when either is clicked
dashboardLink.addEventListener("click", () => {
  dashboardNavLinks.forEach((link) => {
    link.classList.remove("active-nav-link");
  });
  dashboardLink.classList.add("active-nav-link");
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
  dashy.classList.remove("d-none");
  listNewCarModal.classList.add("d-none");
  editCarsModal.classList.add("d-none");
});
salesHistoryLink.addEventListener("click", () => {
  dashboardNavLinks.forEach((link) => {
    link.classList.remove("active-nav-link");
  });
  salesHistoryLink.classList.add("active-nav-link");
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
  dashy.classList.remove("d-none");
  listNewCarModal.classList.add("d-none");
  editCarsModal.classList.add("d-none");
});
carInventoryLink.addEventListener("click", () => {
  dashboardNavLinks.forEach((link) => {
    link.classList.remove("active-nav-link");
  });
  carInventoryLink.classList.add("active-nav-link");
  sideBar.classList.add("d-none");
  navLogoBlack.classList.add("sticky-top");
  dashy.classList.remove("d-none");
  listNewCarModal.classList.add("d-none");
  editCarsModal.classList.add("d-none");
});

//On scrolling the page, the highlighted link should be the one for the section in view
window.addEventListener("scroll", () => {
  let mainDashboardHeight =
    document.getElementById("mainDashboard").clientHeight;
  let salesHistoryHeight = document.getElementById("salesHistory").clientHeight;
  let carInventoryHeight = mainDashboardHeight + salesHistoryHeight;
  let currentScrollHeight = window.scrollY;

  if (currentScrollHeight >= carInventoryHeight) {
    dashboardNavLinks.forEach((link) => {
      link.classList.remove("active-nav-link");
    });
    carInventoryLink.classList.add("active-nav-link");
  } else if (currentScrollHeight >= mainDashboardHeight) {
    dashboardNavLinks.forEach((link) => {
      link.classList.remove("active-nav-link");
    });
    salesHistoryLink.classList.add("active-nav-link");
  } else if (currentScrollHeight < mainDashboardHeight) {
    dashboardNavLinks.forEach((link) => {
      link.classList.remove("active-nav-link");
    });
    dashboardLink.classList.add("active-nav-link");
  }
});

listCarBtn.addEventListener("click", () => {
  listNewCarModal.classList.remove("d-none");
  dashy.classList.add("d-none");
  window.scrollTo(0, 0);
});

editCarsBtn.addEventListener("click", () => {
  editCarsModal.classList.remove("d-none");
  dashy.classList.add("d-none");
  window.scrollTo(0, 0);
});

function appendFormToRow() {
  // const row = document.getElementById(`carRow${rowId}`);
  document.querySelectorAll(".editCarModal").forEach((modal) => {
    modal.remove();
  });

  const formHTML = document.createElement("div");
  formHTML.className =
    "editCarModal mx-auto align-items-center justify-content-center";
  formHTML.tabIndex = "-1";
  formHTML.innerHTML = `
      <div class="modal-dialog modal-dialog-centered rounded-5 py-4">
        <div class="modal-content">
          <div class="modal-header px-5 pb-4 justify-content-between">
            <h5 class="modal-title poppins-semibold fs-4">Edit Car</h5>
            <i
              class="fa-solid fa-xmark fs-2"
              role="button"
              id="closeEditModal"
            ></i>
          </div>
          <div class="modal-body">
            <form class="editCarForm px-5" id="editCarForm">
              <div class="text-start">
                <div class="editCarFormInput d-inline-block me-3 mb-2">
                  <label for="carName">Name:</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Lexus LX570"
                    class="p-2"
                    id="carName"
                  />
                </div>
                <div class="editCarFormInput d-inline-block me-3 mb-2">
                  <label for="carPrice">Price:</label>
                  <br />
                  <input
                    type="number"
                    placeholder="Lexus-LX570"
                    class="p-2"
                    id="carPrice"
                  />
                </div>
                <div class="editCarFormInput d-inline-block me-3 mb-2">
                  <label for="carMileage">Mileage:</label>
                  <br />
                  <input
                    type="number"
                    placeholder="Lexus-LX570"
                    class="p-2"
                    id="carMileage"
                  />
                </div>
                <div class="editCarFormInput mx-1 my-2">
                  <label for="carDescription">Description:</label>
                  <br />
                  <textarea
                    name="carDescription"
                    id="carDescription"
                    rows="4"
                    class="w-100 p-2"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
              <input
                type="submit"
                value="Finish Editing"
                class="green-bg-theme text-white rounded-3"
              />
            </form>
          </div>
        </div>
      </div>`;
  editCarsModal.append(formHTML);

  console.log("inserted form modal");

  document.getElementById("closeEditModal").addEventListener("click", () => {
    document.querySelectorAll(".editCarModal").forEach((modal) => {
      modal.remove();
    });
    console.log("removed modal");
  });
  console.log("added event listener to modal");

}

document.querySelectorAll(".editButton").forEach((button) => {
  button.addEventListener("click", function () {
    appendFormToRow();
  });
});

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

listCarForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    let newName = document.getElementById("name").value;
    let newYear = document.getElementById("year").value;
    let newColour = document.getElementById("color").value;
    let newMileage = document.getElementById("mileage").value;
    let newPrice = document.getElementById("price").value;
    let newTransmission;
    if (document.getElementById("transmission").selectedIndex === 0) {
      newTransmission = "Automatic";
    } else if (document.getElementById("transmission").selectedIndex === 1) {
      newTransmission = "Manual";
    }
    let newDescription = document.getElementById("name").value;
    let carCreate = JSON.stringify({
      "name": newName,
      "year": newYear,
      "colour": newColour,
      "mileage": newMileage,
      "price": newPrice,
      "transmission": newTransmission,
      "features": newDescription,
      "imageUrl":
        "../images/carousel/car1.png, ../images/carousel/car2.png, ../images/carousel/car3.png",
      "isAvailable": true,
    })
    console.log(carCreate)
    const response = await fetch(carAPI, {
      method: "POST",
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "User-Agent": "Custom-User-Agent/1.0",
      },
      body: carCreate,
    });
    if(response.ok){
      alert("New Car " + newName + " has been added")
      listNewCarModal.classList.add("d-none");
      dashy.classList.remove("d-none");
      window.scrollTo(0, 0);
    }
    const data = response.json();
    console.log(data);
  } catch(error){
    console.error(error)
  }
});
