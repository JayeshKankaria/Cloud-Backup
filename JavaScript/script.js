console.log("File Uploaded");
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the entered credentials match any of the predefined ones
    if (username === "admin" && password === "admin123") {
        // Redirect to the admin dashboard
        window.location.href = "admin-dashboard.html";
    } else if (username === "employee1" && password === "password1") {
        // Redirect to the first employee dashboard
        window.location.href = "employee.html";
    } else if (username === "employee2" && password === "password2") {
        // Redirect to the second employee dashboard
        window.location.href = "employee.html";
    } else if (username === "employee3" && password === "password3") {
        // Redirect to the third employee dashboard
        window.location.href = "employee.html";
    } else {
        // Display an error message for invalid credentials
        alert("Invalid username or password. Please try again.");
    }
});