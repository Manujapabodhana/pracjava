 const form = document.getElementById("priceForm");
    const priceInput = document.getElementById("price");
    const quantityInput = document.getElementById("quantity");
    const totalDisplay = document.getElementById("totalDisplay");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop page reload

      const price = parseFloat(priceInput.value);
      const quantity = parseInt(quantityInput.value);

      if (!isNaN(price) && !isNaN(quantity)) {
        const total = price * quantity;
        totalDisplay.innerHTML = `<h3>Total: Rs. ${total.toFixed(2)}</h3>`;
      } else {
        totalDisplay.innerHTML = `<p>Please enter valid numbers</p>`;
      }
    });