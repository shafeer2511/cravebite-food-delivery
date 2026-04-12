export function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Please Login First");
        window.location.href = "../pages/login.html";
    }
}

export function registerUser(userData) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u => u.email === userData.email);

    if (exists) {
        return { success: false, message: "Email already registered" };
    }

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true };
}


//Register page handler 
export function handleRegisterPage() {
    const form = document.getElementById("register-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm").value;

        // Validation
        if (!name || !email || !phone || !password || !confirm) {
            alert("All fields are required");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Enter a valid email");
            return;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phone.match(phonePattern)) {
            alert("Phone must be exactly 10 digits");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }

        const result = registerUser({ name, email, phone, password });

        if (!result.success) {
            alert(result.message);
            return;
        }

        alert("Registration successful");
        window.location.href = "../pages/login.html";
    });
}

//login Logics
export function loginUser(email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return { success: false, message: "Invalid email or password" };
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    return { success: true };
}
//Login page handler 
export function handleLoginPage() {
    const form = document.getElementById("login-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("All fields are required");
            return;
        }

        const result = loginUser(email, password);

        if (!result.success) {
            alert(result.message);
            return;
        }

        alert("Login successful");
        window.location.href = "../pages/index.html";
    });
}