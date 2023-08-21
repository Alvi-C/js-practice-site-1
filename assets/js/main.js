
function getNameAndPrice(data) {
    const itemName = data.childNodes[3].children[1].innerText;
    const itemPrice = data.childNodes[3].childNodes[5].children[0].innerText;

    const cartItems = document.getElementById("cart-items");
    const li = document.createElement("li");
    li.classList.add("list-decimal");
    li.innerText = itemName;
    cartItems.appendChild(li);

    const purchaseBtn = document.getElementById("purchase-btn");
    purchaseBtn.disabled = false;
    const couponApplyBtn = document.getElementById("coupon-apply-btn");
    couponApplyBtn.disabled = false;

    const totalPriceField = document.getElementById("total-price");
    const totalPrice = parseInt(totalPriceField.innerText) + parseInt(itemPrice);
    totalPriceField.innerText = totalPrice.toFixed(2);

    const finalPriceField = document.getElementById("final-price");
    finalPriceField.innerText = totalPrice.toFixed(2);

}

function applyCoupon() {
    let couponInput = document.getElementById("coupon-input");
    const couponCode = 'SELL200';

    if (couponInput.value == couponCode) {
        const discountPriceField = document.getElementById("discount-price");
        const totalPriceField = document.getElementById("total-price");

        const discountPrice = (parseInt(totalPriceField.innerText) * 20) / 100;
        discountPriceField.innerText = discountPrice.toFixed(2);

        const finalPriceField = document.getElementById("final-price");
        const finalPrice = parseInt(totalPriceField.innerText) - discountPrice;
        finalPriceField.innerText = finalPrice.toFixed(2);
    } else {
        alert("Invalid Coupon Code, use 'SELL200' correctly");
        couponInput.value = '';
    }

}

function goHome() {
    window.location.href = "index.html";
}