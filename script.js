function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "aimen" && pass === "aimen") {
        // Go to second page
        window.location.href = "page2.html";
    } else {
        alert("Incorrect username or password");
    }
}
