document.addEventListener("DOMContentLoaded", function () {
    // Get the cart container element
    var cartContainer = document.querySelector('#cartTable tbody');

    // Retrieve the cart data from localStorage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to generate HTML for a cart item
    function generateCartItemHTML(product) {
        return `
            <tr>
                <td><a href="#" class="remove-from-cart" data-product-id="${product.productId}">Xóa</a></td>
                <td>${product.productName}</td>
                <td>₫${product.productPrice}</td>
                <td>${product.quantity}</td>
                <td>₫${(product.productPrice * product.quantity).toFixed(2)}</td>
            </tr>
        `;
    }

    // Function to render the cart items
    function renderCart() {
        // Clear the existing content in the cart container
        cartContainer.innerHTML = '';

        // Check if the cart is not empty
        if (cart.length > 0) {
            // Loop through each product in the cart and generate HTML
            cart.forEach(function (product) {
                var cartItemHTML = generateCartItemHTML(product);
                cartContainer.innerHTML += cartItemHTML;
            });

            // Calculate and display the total
            var total = cart.reduce(function (acc, product) {
                return acc + product.productPrice * product.quantity;
            }, 0);

            document.querySelector('#subtotal td:nth-child(2)').innerText = `₫${total.toFixed(2)}`;
            document.querySelector('#subtotal td:nth-child(4)').innerText = `₫${total.toFixed(2)}`;
        } else {
            // Display a message if the cart is empty
            cartContainer.innerHTML = '<tr><td colspan="5">Giỏ hàng của bạn trống</td></tr>';
        }
    }
   

    // Initial render of the cart
    renderCart();
    // Event listener for removing a product from the cart
    window.removeFromCart = function (index) {
        // Xóa sản phẩm tại chỉ số đã chỉ định
        cart.splice(index, 1);

        // Lưu giỏ hàng đã cập nhật vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart)); 
    };
});