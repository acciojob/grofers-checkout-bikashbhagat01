const getSumBtn = document.createElement("button"); // Creating the button node
getSumBtn.append("Get Total Price"); // Adding some text to it
document.body.appendChild(getSumBtn); // Appending it to the endof your body

const testing = document.querySelector("h1"); // Heading Node

const getSum = () => {
  // Add your code here
  // Find the sum - All items having class = price || DONE
  // In a dynamic way that it works for prices, even if they change.

  const allPrices = document.querySelectorAll(".price"); // Array/ Collection/ NodeList

  let sumOfPrices = 0;
  for (let price of allPrices) {
    sumOfPrices += Number(price.textContent);
  }

  // Created a new Row with a single cell to Show the total price
  const newRow = document.createElement("tr"); // Create a new Element/Node Row
  newRow.id = "Result";

  const newColumnCell = document.createElement("td"); // Create a new Element/ Node Data
  newColumnCell.textContent = `${sumOfPrices}`;
  newRow.appendChild(newColumnCell);

  const existingResult = document.getElementById("Result");
  if (existingResult) {
    existingResult.remove();
  }

  const tableNode = document.querySelector("table"); // Access the Table
  // Attaching as the last row of table
  tableNode.appendChild(newRow); // Added the newRow Element/Node to the table as a new child

  // If the result row already exists; lets remove it and append the new row
};

// Adding EventListener when a button is 'click'ed
// When such an event occurs, we execute getSum function
getSumBtn.addEventListener("click", getSum);
