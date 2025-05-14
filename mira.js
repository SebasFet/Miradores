// mira.js

// Example JavaScript code for your app
document.addEventListener("DOMContentLoaded", () => {
  console.log("App initialized");

  // Example function to handle button click
  const button = document.getElementById("myButton");
  if (button) {
    button.addEventListener("click", () => {
      alert("Button clicked!");
    });
  }
});

// Example utility function
function calculateSum(a, b) {
  return a + b;
}

// Exporting the function for use in other modules
export { calculateSum };
