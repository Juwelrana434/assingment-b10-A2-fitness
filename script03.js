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
  
    // Show result in modal
    showBMI(bmi, category, activity);
  }
  
  // Show BMI in Modal
  function showBMI(bmi, category, activityFactor) {
    const modal = document.getElementById("bmiModal");
    document.getElementById("bmiValue").textContent = bmi;
    document.getElementById("bmiCategory").textContent = category;
    document.getElementById("activityFactor").textContent = activityFactor;
  
    modal.classList.remove("hidden"); // Show modal
  }
  
  // Close Modal
  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("bmiModal").classList.add("hidden"); // Hide modal
  });
  
  // Optional: Close on clicking outside the modal
  document.getElementById("bmiModal").addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.add("hidden");
    }
  });
  