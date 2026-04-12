//Navbar


export function updateNavbar() {
    let navProfile = document.getElementById("nav-profile");

    if (!navProfile) return;

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        navProfile.innerHTML = `
  <div class="profile-container">
    <div class="profile-icon" id="profileIcon">
      <span class="material-icons">account_circle</span>
    </div>

    <div class="profile-dropdown hidden" id="profileDropdown">
      <p class="profile-name">${currentUser.name}</p>
      <p class="profile-phone">${currentUser.phone}</p>
      <hr>
      <button id="settings-btn">Settings</button>
      <button id="logout-btn" class="logout-btn">Logout</button>
    </div>
  </div>
`;

        attachProfileEvents();

    } else {
        navProfile.innerHTML = `<a href="../pages/login.html">Login</a>`;
    }
}

function attachProfileEvents() {
    const icon = document.getElementById("profileIcon");
    const dropdown = document.getElementById("profileDropdown");
    const logoutBtn = document.getElementById("logout-btn");
    const settingsBtn = document.getElementById("settings-btn");

    // 🛑 Stop if elements don't exist (VERY important)
    if (!icon || !dropdown) return;

    // ✅ Toggle dropdown
    icon.addEventListener("click", (e) => {
        console.log("Icon clicked");
        e.stopPropagation(); // prevents document click from firing
        dropdown.classList.toggle("hidden");
    });

    // ✅ Logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            window.location.href = "login.html";
        });
    }

    // ✅ Settings
    if (settingsBtn) {
        settingsBtn.addEventListener("click", () => {
            alert("Settings page coming soon");
        });
    }

    // ✅ Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdown.classList.contains("hidden")) {
            if (!icon.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add("hidden");
            }
        }
    });
}

