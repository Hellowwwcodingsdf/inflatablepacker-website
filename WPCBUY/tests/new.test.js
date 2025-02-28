require("@testing-library/jest-dom");
const { fireEvent, render } = require("@testing-library/dom");

// Import the JavaScript file that contains the code to be tested
require("../js/index.js"); // Update with the correct file path

//Use case for Navbar Toggle
describe("Navbar Toggle Functionality", () => {
  test("Navbar should toggle visibility on button click", () => {
    document.body.innerHTML = `
      <button id="navBtn" />
      <div id="navBar" style="display: none;" />
    `;

    const navBtn = document.getElementById("navBtn");
    const navBar = document.getElementById("navBar");

    fireEvent.click(navBtn);

    expect(navBar).toBeVisible();

    fireEvent.click(navBtn);

    expect(navBar).not.toBeVisible();
  });
});
