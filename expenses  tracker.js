document.addEventListener("DOMContentLoaded", function () {
    const expensesform = document.getElementById('expensesform');
    const itemlist = document.getElementById('itemlist');
  
    let storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
    const updateLocalStorage = () => {
        localStorage.setItem('expenses', JSON.stringify(storedExpenses));
    };
  
    const displayExpenses = () => {
        itemlist.innerHTML = '';
  
        storedExpenses.forEach((expense, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${expense.date} - ${expense.itemsValue} - ${expense.price} - ${expense.description}`;
  
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function () {
                // Remove the expense from storedExpenses array
                storedExpenses.splice(index, 1);
                // Update local storage and display the updated list
                updateLocalStorage();
                displayExpenses();
            });
            listItem.appendChild(deleteBtn);
  
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', function () {
                // You can implement edit functionality here
                // For simplicity, let's alert the user
                alert('Implement edit functionality here!');
            });
            listItem.appendChild(editBtn);
  
            itemlist.appendChild(listItem);
        });
    };
  
    displayExpenses();
  
    expensesform.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const date = document.getElementById('date').value;
        const itemsValue = document.getElementById('items').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
  
        const newExpense = {
            date,
            itemsValue,
            price,
            description
        };
  
        storedExpenses.push(newExpense);
  
        updateLocalStorage();
        displayExpenses();
  
        expensesform.reset();
    });
  
    window.addEventListener('load', function () {
        storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        displayExpenses();
    });
  });
  