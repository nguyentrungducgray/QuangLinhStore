
    document.addEventListener("DOMContentLoaded", function () {
        // Get all cart icons
        var cartIcons = document.querySelectorAll('.cart');

        // Add click event listener to each cart icon
        cartIcons.forEach(function (icon) {
            icon.addEventListener('click', function () {
                // Get the parent product element
                var product = icon.closest('.pro');

                // Retrieve product details
                var productId = product.getAttribute('data-product-id');
                var productName = product.querySelector('h5').innerText;
                var productPrice = parseFloat(product.querySelector('h4').innerText.replace('₫', '').replace(',', ''));

                // Add the product to the cart (you need to implement this part)
                addToCart(productId, productName, productPrice);
            });
        });

        // Function to add the product to the cart (you need to implement this part)
        function addToCart(productId, productName, productPrice) {
            // You can use localStorage, sessionStorage, or any other method to store the cart data
            // In this example, I'll use localStorage
            var cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product is already in the cart
            var existingProduct = cart.find(function (item) {
                return item.productId === productId;
            });

            if (existingProduct) {
                // If the product is already in the cart, update the quantity
                existingProduct.quantity++;
            } else {
                // If the product is not in the cart, add it
                cart.push({
                    productId: productId,
                    productName: productName,
                    productPrice: productPrice,
                    quantity: 1
                });
            }

            // Save the updated cart back to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // You can redirect to the cart page or update the UI as needed
            alert('Product added to the cart!');
        } });