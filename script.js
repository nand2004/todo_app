function redirectToMainPage() {
    window.location.href = "index.html";
}

function validateLogin(callback) {
    const username = document.querySelector('input[placeholder="Username"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;
    
    if (username === "admin" && password === "12345"){
        callback();
    } else {
        alert("Invalid username or password.");
    }
}

document.querySelector("form.Login").addEventListener("submit",function (e) {
    e.preventDefault();
    validateLogin(redirectToMainPage);
    window.location.href="todo.html";
});

