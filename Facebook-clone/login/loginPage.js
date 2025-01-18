// Optimized Login Script

// Static users for login validation
const users = [
    {
        firstName: "raju",
        lastName: "gupta",
        birth: "09-03-2011",
        gender: "male",
        contact: "6362038373",
        password: "raju@2341"
    },
    {
        firstName: "anuj",
        lastName: "gupta",
        birth: "09-03-2011",
        gender: "male",
        contact: "6362038373",
        password: "raju@2341"
    }
];

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const contactInf = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(user => user.contact === contactInf && user.password === password);

    if (user) {
        alert("Login successfully");
        window.location.href = "../index.html";
    } else {
        alert("User not found");
    }
});

// Redirect to create account page
document.getElementById("CreateBtn").addEventListener('click', function() {
    window.location.href = "./createUser.html";
});
