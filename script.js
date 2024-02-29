// JavaScript code for restaurant web application

// Function to load menu items for a specific category
function loadMenuItems(categoryShortName) {
    // Placeholder for actual code to load menu items
    console.log("Loading menu items for category: " + categoryShortName);
  }
  
  // Function to generate a random category short_name
  function generateRandomCategory() {
    // Array of possible category short_names
    var categories = ["Lunch", "Dinner", "Sushi", "Appetizers", "Desserts"];
  
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * categories.length);
  
    // Get the category short_name at the random index
    var randomCategory = categories[randomIndex];
  
    return randomCategory;
  }
  
  // Event listener for clicking on the Specials tile
  document.getElementById("specialsTile").addEventListener("click", function() {
    // Generate a random category short_name
    var randomCategoryShortName = generateRandomCategory();
  
    // Load menu items for the random category
    loadMenuItems(randomCategoryShortName);
  });
  