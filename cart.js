// cart.js
document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalContainer = document.getElementById('subtotal');

    // Fetch cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Update the UI with cart items
    updateCartUI(cartItems);

    function updateCartUI(items) {
        // Clear previous content
        cartItemsContainer.innerHTML = '';

        // Iterate through each item and create HTML elements
        items.forEach(items => {
            const cartItemsRow = document.createElement('tr');
            cartItemsRow.innerHTML = `
                <td><button class="remove-btn" data-product-id="${items.id}">Xóa</button></td>
                <td><img src="product/${items.id}.jpg" alt=""></td>
                <td>${items.name}</td>
                <td>${items.price}</td>
                <td><input type="number" value="1"></td>
                <td>${items.price}</td>
            `;

            cartItemsContainer.appendChild(cartItemsRow);

            // Add event listener for remove button
            const removeBtn = cartItemsRow.querySelector('.remove-btn');
            removeBtn.addEventListener('click', removeCartItem);
        });

        // Update the subtotal
        updateSubtotal(items);
    }

    function removeCartItem(event) {
        const productId = event.target.getAttribute('data-product-id');

        // Remove the item from the cart (you may want to update localStorage or a server)
        const updatedCart = cartItems.filter(items => items.id !== productId);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));

        // Update the UI
        updateCartUI(updatedCart);
    }

    function updateSubtotal(items) {
        // Calculate and display the subtotal
        let total = 0;
        items.forEach(items => {
            total += parseFloat(items.price);
        });

        // Display the total in the subtotal container
        subtotalContainer.innerHTML = `
            <h3>Tổng Sản Phẩm</h3>
            <table>
                <tr>
                    <td>Tổng</td>
                    <td>₫${total.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Ship</td>
                    <td>Miễn Phí</td>
                </tr>
                <tr>
                    <td><strong>Tổng Chi Phí </strong></td>
                    <td><strong>₫${total.toFixed(2)}</strong></td>
                </tr>
            </table>
            <button class="normal">Đặt Hàng</button>
        `;
    }
});
 