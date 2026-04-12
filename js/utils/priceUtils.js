export function calculateTotals(cart) {
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    let delivery = cart.length > 0 ? 50 : 0;
    let tax = Math.floor(subtotal * 0.05);
    let total = subtotal + delivery + tax;

    return {
        subtotal,
        delivery,
        tax,
        total
    };
}