// ===============================
// 🍽️ MENU DATA (DATABASE MOCK)
// ===============================
// 
export const menuData = {

    r1: [
        { id: "p1", name: "Margherita Pizza", desc: "Classic tomato sauce, mozzarella, basil", price: 199, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
        { id: "p2", name: "Pepperoni Pizza", desc: "Pepperoni with cheese and tomato sauce", price: 249, image: "../imgs/pizza2.jpg" },
        { id: "p3", name: "Farmhouse Pizza", desc: "Loaded with veggies and cheese", price: 279, image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65" },
        { id: "p4", name: "Veggie Delight", desc: "Fresh vegetables with tangy sauce", price: 229, image: "../imgs/veggie-delight.jpg" },
        { id: "p5", name: "White Sauce Pasta", desc: "Creamy pasta with herbs", price: 189, image: "../imgs/white-sauce-pizza.jpg" },
        { id: "p6", name: "Garlic Bread", desc: "Crispy bread with garlic butter", price: 99, image: "../imgs/garlic-bread.jpg" }
    ],

    r2: [
        { id: "b1", name: "Cheese Burger", desc: "Juicy patty with melted cheese", price: 149, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
        { id: "b2", name: "Chicken Burger", desc: "Grilled chicken with fresh lettuce", price: 179, image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
        { id: "b3", name: "Double Patty Burger", desc: "Two patties with extra cheese", price: 219, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b" },
        { id: "b4", name: "French Fries", desc: "Crispy golden potato fries", price: 99, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f" },
        { id: "b5", name: "Loaded Fries", desc: "Fries topped with cheese and sauces", price: 149, image: "../imgs/loaded-fries.jpg" },
        { id: "b6", name: "Cold Coffee", desc: "Chilled coffee with cream", price: 129, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" }
    ],

    r3: [
        { id: "i1", name: "Butter Chicken", desc: "Creamy tomato-based chicken curry", price: 299, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" },
        { id: "i2", name: "Paneer Butter Masala", desc: "Paneer in rich buttery gravy", price: 249, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7" },
        { id: "i3", name: "Chicken Biryani", desc: "Spiced rice with tender chicken", price: 279, image: "../imgs/chicken-biryani.jpg" },
        { id: "i4", name: "Veg Biryani", desc: "Aromatic rice with vegetables", price: 229, image: "../imgs/veg-biryani.jpg" },
        { id: "i5", name: "Tandoori Roti", desc: "Traditional clay oven bread", price: 25, image: "../imgs/tandoori-roti.jpg" },
        { id: "i6", name: "Gulab Jamun", desc: "Sweet milk-based dessert balls", price: 89, image: "../imgs/gulab-jamun.jpg" }
    ],

    r4: [
        { id: "s1", name: "Sushi Platter", desc: "Assorted sushi rolls", price: 499, image: "../imgs/sushi-platter.jpg" },
        { id: "s2", name: "Ramen Bowl", desc: "Noodles in savory broth", price: 349, image: "../imgs/ramen-bowl.jpg" },
        { id: "s3", name: "Tempura Shrimp", desc: "Crispy fried shrimp", price: 299, image: "../imgs/tempura-shrimp.jpg" },
        { id: "s4", name: "Edamame", desc: "Steamed soybeans", price: 149, image: "../imgs/edamame.jpg" },
        { id: "s5", name: "Miso Soup", desc: "Traditional miso soup", price: 99, image: "../imgs/miso-soup.jpg" },
        { id: "s6", name: "Green Tea Ice Cream", desc: "Matcha flavored ice cream", price: 129, image: "../imgs/green-tea-ice-cream.jpg" }
    ],

    r5: [
        { id: "t1", name: "Chicken Taco", desc: "Spicy chicken with salsa", price: 199, image: "../imgs/chicken-taco.jpg" },
        { id: "t2", name: "Beef Burrito", desc: "Beef with beans and rice", price: 249, image: "../imgs/beef-burrito.jpg" },
        { id: "t3", name: "Veggie Quesadilla", desc: "Cheese and vegetable quesadilla", price: 179, image: "../imgs/veggie-quesadilla.jpg" },
        { id: "t4", name: "Nachos Supreme", desc: "Tortilla chips with toppings", price: 229, image: "../imgs/nachos-supreme.jpg" },
        { id: "t5", name: "Guacamole", desc: "Fresh avocado dip", price: 149, image: "../imgs/guacamole.jpg" },
        { id: "t6", name: "Churros", desc: "Fried dough with cinnamon sugar", price: 129, image: "../imgs/churros.jpg" }
    ],

    r6: [
        { id: "h1", name: "Quinoa Salad", desc: "Healthy quinoa salad", price: 249, image: "../imgs/quinoa-salad.jpg" },
        { id: "h2", name: "Green Smoothie", desc: "Fresh fruit smoothie", price: 199, image: "../imgs/green-smoothie.jpg" },
        { id: "h3", name: "Avocado Toast", desc: "Whole wheat toast with avocado", price: 179, image: "../imgs/avocado-toast.jpg" },
        { id: "h4", name: "Fruit Bowl", desc: "Fresh seasonal fruits", price: 149, image: "../imgs/fruit-bowl.jpg" },
        { id: "h5", name: "Chia Pudding", desc: "Chia seeds with almond milk", price: 129, image: "../imgs/chia-pudding.jpg" },
        { id: "h6", name: "Almond Milk Latte", desc: "Coffee with almond milk", price: 149, image: "../imgs/almond-milk-latte.jpg" }
    ]
};

// Restaurant data
export const restaurants = [
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
