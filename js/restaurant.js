import { restaurants } from "./data.js";

// ===============================
// 🍽️ RESTAURANTS PAGE
// ===============================
export function renderRestaurants() {
    const container = document.getElementById("restaurantContainer");
    if (!container) return;

    container.innerHTML = "";

    restaurants.forEach((restaurant) => {
        const card = document.createElement("div");
        card.classList.add("restaurant-card");

        card.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}">
      <h3>${restaurant.name}</h3>
      <p>${restaurant.cuisine}</p>
      <p>⭐ ${restaurant.rating}</p>
      <div class="menu-items"></div>
      <button class="btn view-menu"
        data-id="${restaurant.id}"
        data-name="${restaurant.name}"
        data-cuisine="${restaurant.cuisine}"
        data-rating="${restaurant.rating}">
        View Menu
      </button>
    `;

        container.appendChild(card);
    });
}

export function attachRestaurantEvents() {
    const buttons = document.querySelectorAll(".view-menu");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const name = btn.dataset.name;
            const cuisine = btn.dataset.cuisine;
            const rating = btn.dataset.rating;

            localStorage.setItem(
                "selectedRestaurant",
                JSON.stringify({ id, name, cuisine, rating })
            );

            window.location.href = "../pages/menu.html";
        });
    });
}