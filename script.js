
document.addEventListener("DOMContentLoaded", function () {
    // Xử lý sự kiện khi người dùng bấm vào biểu tượng giỏ hàng
    document.querySelectorAll('.addToCartBtn').forEach(function (addToCartBtn) {
        addToCartBtn.addEventListener('click', function (event) {
            event.preventDefault();
            
            // Lấy thông tin sản phẩm từ phần tử cha
            const productContainer = event.target.closest('.pro');
            const productId = productContainer.dataset.productId;
            const productName = productContainer.querySelector('.des h5').innerText;
            const productPrice = productContainer.querySelector('.des h4').innerText;

            // Tạo đối tượng sản phẩm để thêm vào giỏ hàng
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1, // Mặc định số lượng là 1, bạn có thể thay đổi tùy ý
            };

            // Lấy danh sách sản phẩm đã có trong giỏ hàng từ localStorage (nếu có)
            let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

            // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
            const existingProduct = cartItems.find(item => item.id === productId);

            if (existingProduct) {
                // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng lên
                existingProduct.quantity++;
            } else {
                // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào danh sách
                cartItems.push(product);
            }

            // Cập nhật giỏ hàng trong localStorage
            localStorage.setItem('cart', JSON.stringify(cartItems));

            // Thông báo cho người dùng biết rằng sản phẩm đã được thêm vào giỏ hàng
            alert(`Đã thêm sản phẩm ${productName} vào giỏ hàng!`);
        });
    });
});



