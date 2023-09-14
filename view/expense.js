const form = document.getElementById('form');
const amount = document.getElementById('amount');
const description = document.getElementById('description');
const catogary = document.getElementById('catogary');
const userTable = document.getElementById('userTable');
const userTableBody = document.getElementById('userTableBody');


form.addEventListener('submit', addexpense);


function addexpense(e) {
    //this prevent refreshing of the page
    e.preventDefault();
    //console.log('click');
    //by using tagname with target we can get values of the inputs
    const amount1 = e.target.amount.value;
    const description1 = e.target.discription.value;
    const catogary1 = e.target.catogary.value;
    //creating obj of values for localstorage and edit functionality
    const obj = {
        amount: amount1,
        description: description1,
        catogary: catogary1
    }

    axios.post('http://localhost:3000/postexpenses', obj)

        .then((response) => {
            buttons(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}




function buttons(responsedata) {
    const row = document.createElement('tr');

    // Create and append table cells for user data
    const amountCell = document.createElement('td');
    amountCell.textContent = responsedata.amount;
    row.appendChild(amountCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = responsedata.description;
    row.appendChild(descriptionCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = responsedata.category;
    row.appendChild(categoryCell);

    // Create and append buttons for actions
    const actionCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.className = 'btn btn-secondary';
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
        // Handle edit action here
        // You can access the data in responsedata for editing
    };
    actionCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-secondary';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        // Handle delete action here
        // You can access the data in responsedata for deleting
    };
    actionCell.appendChild(deleteButton);

    row.appendChild(actionCell);

    // Append the row to the table body
    userTableBody.appendChild(row);
}


