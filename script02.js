// mobile menu
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

// BMI Calculator

function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
  const age = parseInt(document.getElementById("age").value);
  const sex = document.getElementById("sex").value;
  const activity = parseFloat(document.getElementById("activity").value);

  // Validate inputs
  if (!weight || !height || !age || !sex || !activity) {
    alert("Please fill in all fields.");
    return;
  }

  // Calculate BMI
  const bmi = (weight / (height * height)).toFixed(1); // BMI formula

  // Determine BMI Category
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  // Display Results
  document.getElementById("bmiValue").innerText = bmi;
  document.getElementById("bmiCategory").innerText = category;
  document.getElementById("activityFactor").innerText = activity.toFixed(1);

  // Reveal result section with animation
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  result.classList.add("opacity-100");
}



