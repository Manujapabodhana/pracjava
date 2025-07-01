function calculateTotal(){
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value);

    // Check if inputs are valid numbers
    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        document.getElementById("total").value = "Invalid input";
        return;
    }

    let total = price * quantity;
    document.getElementById("total").value = "$" + total.toFixed(2);
}

// Get the form and add event listener
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("priceForm");
    
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form from refreshing the page
        calculateTotal();
    });
    
    // Optional: Calculate in real-time when inputs change
    document.getElementById("price").addEventListener("input", calculateTotal);
    document.getElementById("quantity").addEventListener("input", calculateTotal);
});