// ===============================
// 🍽️ MENU DATA (DATABASE MOCK)
// ===============================
let menuData = {

  r1: [
    { id: "p1", name: "Margherita Pizza", desc: "Classic tomato sauce, mozzarella, basil", price: 199, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
    { id: "p2", name: "Pepperoni Pizza", desc: "Pepperoni with cheese and tomato sauce", price: 249, image: "imgs/pizza2.jpg" },
    { id: "p3", name: "Farmhouse Pizza", desc: "Loaded with veggies and cheese", price: 279, image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65" },
    { id: "p4", name: "Veggie Delight", desc: "Fresh vegetables with tangy sauce", price: 229, image: "imgs/veggie-delight.jpg" },
    { id: "p5", name: "White Sauce Pasta", desc: "Creamy pasta with herbs", price: 189, image: "imgs/white-sauce-pizza.jpg" },
    { id: "p6", name: "Garlic Bread", desc: "Crispy bread with garlic butter", price: 99, image: "imgs/garlic-bread.jpg" }
  ],

  r2: [
    { id: "b1", name: "Cheese Burger", desc: "Juicy patty with melted cheese", price: 149, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
    { id: "b2", name: "Chicken Burger", desc: "Grilled chicken with fresh lettuce", price: 179, image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
    { id: "b3", name: "Double Patty Burger", desc: "Two patties with extra cheese", price: 219, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b" },
    { id: "b4", name: "French Fries", desc: "Crispy golden potato fries", price: 99, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f" },
    { id: "b5", name: "Loaded Fries", desc: "Fries topped with cheese and sauces", price: 149, image: "imgs/loaded-fries.jpg" },
    { id: "b6", name: "Cold Coffee", desc: "Chilled coffee with cream", price: 129, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" }
  ],

  r3: [
    { id: "i1", name: "Butter Chicken", desc: "Creamy tomato-based chicken curry", price: 299, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" },
    { id: "i2", name: "Paneer Butter Masala", desc: "Paneer in rich buttery gravy", price: 249, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7" },
    { id: "i3", name: "Chicken Biryani", desc: "Spiced rice with tender chicken", price: 279, image: "imgs/chicken-biryani.jpg" },
    { id: "i4", name: "Veg Biryani", desc: "Aromatic rice with vegetables", price: 229, image: "imgs/veg-biryani.jpg" },
    { id: "i5", name: "Tandoori Roti", desc: "Traditional clay oven bread", price: 25, image: "imgs/tandoori-roti.jpg" },
    { id: "i6", name: "Gulab Jamun", desc: "Sweet milk-based dessert balls", price: 89, image: "imgs/gulab-jamun.jpg" }
  ],

  r4: [
    { id: "s1", name: "Sushi Platter", desc: "Assorted sushi rolls", price: 499, image: "imgs/sushi-platter.jpg" },
    { id: "s2", name: "Ramen Bowl", desc: "Noodles in savory broth", price: 349, image: "imgs/ramen-bowl.jpg" },
    { id: "s3", name: "Tempura Shrimp", desc: "Crispy fried shrimp", price: 299, image: "imgs/tempura-shrimp.jpg" },
    { id: "s4", name: "Edamame", desc: "Steamed soybeans", price: 149, image: "imgs/edamame.jpg" },
    { id: "s5", name: "Miso Soup", desc: "Traditional miso soup", price: 99, image: "imgs/miso-soup.jpg" },
    { id: "s6", name: "Green Tea Ice Cream", desc: "Matcha flavored ice cream", price: 129, image: "imgs/green-tea-ice-cream.jpg" }
  ],

  r5: [
    { id: "t1", name: "Chicken Taco", desc: "Spicy chicken with salsa", price: 199, image: "imgs/chicken-taco.jpg" },
    { id: "t2", name: "Beef Burrito", desc: "Beef with beans and rice", price: 249, image: "imgs/beef-burrito.jpg" },
    { id: "t3", name: "Veggie Quesadilla", desc: "Cheese and vegetable quesadilla", price: 179, image: "imgs/veggie-quesadilla.jpg" },
    { id: "t4", name: "Nachos Supreme", desc: "Tortilla chips with toppings", price: 229, image: "imgs/nachos-supreme.jpg" },
    { id: "t5", name: "Guacamole", desc: "Fresh avocado dip", price: 149, image: "imgs/guacamole.jpg" },
    { id: "t6", name: "Churros", desc: "Fried dough with cinnamon sugar", price: 129, image: "imgs/churros.jpg" }
  ],

  r6: [
    { id: "h1", name: "Quinoa Salad", desc: "Healthy quinoa salad", price: 249, image: "imgs/quinoa-salad.jpg" },
    { id: "h2", name: "Green Smoothie", desc: "Fresh fruit smoothie", price: 199, image: "imgs/green-smoothie.jpg" },
    { id: "h3", name: "Avocado Toast", desc: "Whole wheat toast with avocado", price: 179, image: "imgs/avocado-toast.jpg" },
    { id: "h4", name: "Fruit Bowl", desc: "Fresh seasonal fruits", price: 149, image: "imgs/fruit-bowl.jpg" },
    { id: "h5", name: "Chia Pudding", desc: "Chia seeds with almond milk", price: 129, image: "imgs/chia-pudding.jpg" },
    { id: "h6", name: "Almond Milk Latte", desc: "Coffee with almond milk", price: 149, image: "imgs/almond-milk-latte.jpg" }
  ]
};

// Restaurant data
const restaurants = [
  {
    id: "r1",
    name: "Pizza Palace",
    cuisine: "Italian • Pizza • Pasta",
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9"
  },
  {
    id: "r2",
    name: "Burger House",
    cuisine: "American • Burgers • Fast Food",
    rating: "4.2",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    id: "r3",
    name: "Spicy Kitchen",
    cuisine: "Indian • Curry • Rice",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
  },

  // 🔥 ADD MORE HERE (easy now)
  {
    id: "r4",
    name: "Sushi World",
    cuisine: "Japanese • Sushi • Ramen",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754"
  },
  {
    id: "r5",
    name: "Taco Fiesta",
    cuisine: "Mexican • Tacos • Burritos",
    rating: "4.3",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    id: "r6",
    name: "Healthy Bites",
    cuisine: "Salads • Vegan • Smoothies",
    rating: "4.4",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  }
];


// ===============================
// 📌 GLOBAL STATE
// ===============================
let selectedRestaurant = JSON.parse(localStorage.getItem("selectedRestaurant"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ===============================
// 📌 PAGE DETECTION
// ===============================
let path = window.location.pathname;

if (path.includes("restaurants.html")) {
  renderRestaurants();
  attachRestaurantEvents();
}

if (path.includes("menu.html")) {
  handleMenuPage();
}

if (path.includes("cart.html")) {
  handleCartPage();
}
if (path.includes("cart.html") || path.includes("menu.html")) {
  checkAuth();
}

function checkAuth() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    alert("Please Login First");
    window.location.href = "login.html";
  }
}

// ===============================
// 🍽️ RESTAURANTS PAGE
// ===============================
function renderRestaurants() {
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
function attachRestaurantEvents() {
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

      window.location.href = "menu.html";
    });
  });
}

// ===============================
// 📖 MENU PAGE
// ===============================
function handleMenuPage() {

  if (!selectedRestaurant) {
    alert("No restaurant selected");
    window.location.href = "restaurants.html";
    return;
  }

  // Show restaurant name
  let restaurantElement = document.getElementById("restaurant-name");
  if (restaurantElement) {
    restaurantElement.innerText = selectedRestaurant.name;
  }

  let restaurantCuisineRating = document.getElementById("restaurantcuisineRating");
  if (restaurantCuisineRating) {
    restaurantCuisineRating.innerText = selectedRestaurant.cuisine + " • ⭐" + selectedRestaurant.rating;
  }

  let menuContainer = document.getElementById("menu-items");
  if (!menuContainer) return;

  let items = menuData[selectedRestaurant.id];

  if (!items) {
    menuContainer.innerHTML = "<h2>No items available</h2>";
    return;
  }

  menuContainer.innerHTML = "";

  items.forEach(item => {

    let div = document.createElement("div");

    // ✅ IMPORTANT: match your CSS class
    div.className = "menu-item";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">

      <h3 class="item-name">${item.name}</h3>

      <p class="item-desc">${item.desc || "Delicious food item"}</p>

      <p class="price">₹${item.price}</p>

      <button 
        class="btn add-to-cart"
        data-id="${item.id}"
        data-name="${item.name}"
        data-price="${item.price}"
        data-image="${item.image}"
      >
        Add to Cart
      </button>
    `;

    menuContainer.appendChild(div);
  });

  attachAddToCartEvents();
}
function attachAddToCartEvents() {

  let buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", function () {

      let item = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: parseInt(button.dataset.price),
        image: button.dataset.image,
        quantity: 1,
        restaurant: selectedRestaurant.name
      };

      // Restrict multiple restaurants
      if (cart.length > 0 && cart[0].restaurant !== selectedRestaurant.name) {
        let confirmClear = confirm("Cart has items from another restaurant. Clear cart?");

        if (confirmClear) {
          cart = [];
        } else {
          return;
        }
      }

      let existingItem = cart.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push(item);
      }

      updateCartStorage();

      alert("Item added to cart");
    });
  });
}

// ===============================
// 🛒 CART PAGE
// ===============================
function handleCartPage() {

  let cartContainer = document.getElementById("cart-items");

  if (!cartContainer) return;

  renderCart();

  // Checkout button
  let checkoutBtn = document.getElementById("checkout-btn");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      if (cart.length === 0) {
        alert("Cart is empty");
        return;
      }

      window.location.href = "checkout.html";
    });
  }
}


// ===============================
// 🔁 RENDER CART
// ===============================
function renderCart() {

  let cartContainer = document.getElementById("cart-items");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  // 🔥 Empty Cart Handling
  if (cart.length === 0) {
    cartContainer.innerHTML = "<h2>Your cart is empty 🛒</h2>";
    updateTotal();
    return;
  }

  cart.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("cart-product");

    div.innerHTML = `
      <div class="product-info">
        <img src="${item.image}">
        <div class="product-details">
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
        </div>
      </div>

      <div class="quantity-control">
        <button class="quantity-btn" onclick="decreaseQty('${item.id}')">-</button>
        <span>${item.quantity}</span>
        <button class="quantity-btn" onclick="increaseQty('${item.id}')">+</button>
      </div>
    `;

    cartContainer.appendChild(div);
  });

  updateTotal();
}


// ===============================
// ➕➖ QUANTITY CONTROL
// ===============================
function increaseQty(id) {
  let item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity++;
  updateCartStorage();
  renderCart();
}

function decreaseQty(id) {
  let item = cart.find(i => i.id === id);
  if (!item) return;

  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cart = cart.filter(i => i.id !== id);
  }

  updateCartStorage();
  renderCart();
}


// ===============================
// 💾 STORAGE UPDATE
// ===============================
function updateCartStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


// ===============================
// 💰 TOTAL CALCULATION
// ===============================
function updateTotal() {

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  let delivery = cart.length > 0 ? 50 : 0;
  let tax = Math.floor(subtotal * 0.05);
  let total = subtotal + delivery + tax;

  let subEl = document.getElementById("subtotal");
  let taxEl = document.getElementById("tax");
  let totalEl = document.getElementById("total");

  if (subEl) subEl.innerText = "₹" + subtotal;
  if (taxEl) taxEl.innerText = "₹" + tax;
  if (totalEl) totalEl.innerText = "₹" + total;
}

// ===============================
// 🔐 REGISTER PAGE
// ===============================
const registerForm = document.getElementById("register-form");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault(); // STOP page reload

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    // ===============================
    // 🔴 VALIDATION
    // ===============================

    // 1. Empty check
    if (!name || !email || !phone || !password || !confirm) {
      alert("All fields are required");
      return;
    }

    // 2. Email validation (basic but acceptable)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Enter a valid email");
      return;
    }

    // 3. Phone validation (exactly 10 digits)
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
      alert("Phone must be exactly 10 digits");
      return;
    }

    // 4. Password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // 5. Confirm password
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    // ===============================
    // 🔴 STORE USER
    // ===============================

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate email
    let exists = users.find(user => user.email === email);

    if (exists) {
      alert("Email already registered");
      return;
    }

    let newUser = {
      name,
      email,
      phone,
      password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");

    // Redirect to login
    window.location.href = "login.html";
  });
}

const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    // ===============================
    // 🔴 VALIDATION
    // ===============================

    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    // ===============================
    // 🔴 GET USERS FROM STORAGE
    // ===============================

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // ===============================
    // 🔍 CHECK USER
    // ===============================

    let user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    // ===============================
    // ✅ STORE CURRENT USER (SESSION)
    // ===============================

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login successful");

    // Redirect
    window.location.href = "index.html";
  });
}

function updateNavbar() {
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
    navProfile.innerHTML = `<a href="login.html">Login</a>`;
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

updateNavbar();
