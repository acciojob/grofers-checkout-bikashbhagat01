function calculateTotal() {
    // Get all price elements from the table
    const priceElements = document.querySelectorAll('.prices');
    
    let total = 0;
    
    // Sum up the prices
    priceElements.forEach(priceElement => {
        total += parseFloat(priceElement.textContent);
    });

    // Create a new row for the total
    const table = document.getElementById('groceryTable');
    const totalRow = document.createElement('tr');
    
    // Create a single cell to display the total price
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // This spans across two columns
    totalCell.textContent = `Total Price: ₹${total}`;
    
    // Add the new cell to the row and append the row to the table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
}
