import { updateNavbar } from "./navbar.js";
import { renderRestaurants, attachRestaurantEvents } from "./restaurant.js";
import { handleMenuPage } from "./menu.js";
import { handleCartPage } from "./cart.js";
import { checkAuth } from "./auth.js";
import { handleRegisterPage } from "./auth.js";
import { handleLoginPage } from "./auth.js";
import { handleCheckoutPage } from "./checkout.js";


const path = window.location.pathname;

// Always run
updateNavbar();

// Page-specific logic
if (path.includes("pages/restaurants.html")) {
    renderRestaurants();
    attachRestaurantEvents();
}

if (path.includes("pages/menu.html")) {
    checkAuth();
    handleMenuPage();
}

if (path.includes("pages/cart.html")) {
    checkAuth();
    handleCartPage();
}

if (path.includes("pages/login.html")) {
    handleLoginPage();
}

if (path.includes("pages/register.html")) {
    handleRegisterPage();
}

if (path.includes("pages/checkout.html")) {
    checkAuth();
    handleCheckoutPage();
}
