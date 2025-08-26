// ============================
// Part 1: Variables & Conditionals
// ============================
function checkAge() {
  let age = document.getElementById("ageInput").value; // variable
  let result = document.getElementById("ageResult");

  // conditional
  if (age >= 18) {
    result.textContent = "You are an adult.";
    console.log("User is an adult");
  } else if (age > 0) {
    result.textContent = "You are a minor.";
    console.log("User is a minor");
  } else {
    result.textContent = "Please enter a valid age.";
    console.log("Invalid age entered");
  }
}

// ============================
// Part 2: Functions
// ============================

// Function 1: Greet user
function showGreeting(name) {
  let message = `Hello, ${name}! Welcome to JavaScript.`;
  document.getElementById("greetingResult").textContent = message;
  console.log("Greeting message:", message);
}

// Function 2: Calculate total
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").textContent = "Total = " + total;
  console.log(`Calculated total of ${a} + ${b} =`, total);
  return total; // return for reusability
}

// ============================
// Part 3: Loops
// ============================

// Example 1: forEach loop
function listFruits() {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear old content

  console.log("Listing fruits using forEach:");
  fruits.forEach(fruit => {
    console.log(fruit); // console output
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// Example 2: while loop
function countdown() {
  let count = 5;
  let result = "";
  console.log("Starting countdown:");
  while (count > 0) {
    console.log(count);
    result += count + " ";
    count--;
  }
  document.getElementById("countdownResult").textContent = result + "Liftoff!";
  console.log("Liftoff!");
}

// ============================
// Part 4: Document Object Model Manipulation
// ============================

// Interaction 1: Toggle class
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleText").classList.toggle("highlight");
  console.log("Toggled highlight class on toggleText");
});

// Interaction 2: Add element dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.getElementById("dynamicList").childElementCount + 1);
  document.getElementById("dynamicList").appendChild(newItem);
  console.log("Added new list item:", newItem.textContent);
});

// Interaction 3: Modify styles directly
document.getElementById("toggleText").style.fontSize = "20px";
console.log("Set toggleText font size to 20px");
